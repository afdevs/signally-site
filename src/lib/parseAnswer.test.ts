import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isInternalPath, parseInline, splitBlocks, stripMarker } from './parseAnswer.ts';

describe('isInternalPath', () => {
  it('accepts app paths', () => {
    assert.equal(isInternalPath('/deployment'), true);
    assert.equal(isInternalPath('/users/collaborators'), true);
  });

  it('rejects protocol-relative targets that would leave the origin', () => {
    // The interesting case: starts with "/" and looks path-like, but a browser
    // resolves it off-origin. Treated as external so it gets rel="noreferrer".
    assert.equal(isInternalPath('//evil.example/phish'), false);
  });

  it('rejects absolute URLs and non-http schemes', () => {
    assert.equal(isInternalPath('https://signally.io'), false);
    assert.equal(isInternalPath('mailto:support@signally.io'), false);
    assert.equal(isInternalPath('javascript:alert(1)'), false);
  });

  it('rejects relative paths without a leading slash', () => {
    assert.equal(isInternalPath('deployment'), false);
  });
});

describe('parseInline', () => {
  it('returns a single text token when there is no markup', () => {
    assert.deepEqual(parseInline('just words'), [{ type: 'text', text: 'just words' }]);
  });

  it('extracts a link and keeps the surrounding text', () => {
    assert.deepEqual(parseInline('Open [Deployment](/deployment) then retry.'), [
      { type: 'text', text: 'Open ' },
      { type: 'link', label: 'Deployment', target: '/deployment', internal: true },
      { type: 'text', text: ' then retry.' },
    ]);
  });

  it('marks an off-origin link as external', () => {
    const [token] = parseInline('[docs](https://example.com)');
    assert.deepEqual(token, {
      type: 'link',
      label: 'docs',
      target: 'https://example.com',
      internal: false,
    });
  });

  it('extracts bold runs', () => {
    assert.deepEqual(parseInline('use **Keep source formatting** here'), [
      { type: 'text', text: 'use ' },
      { type: 'bold', text: 'Keep source formatting' },
      { type: 'text', text: ' here' },
    ]);
  });

  it('handles several tokens in one line', () => {
    const tokens = parseInline('**Note**: see [here](/signatures) or [there](/campaigns).');
    assert.deepEqual(
      tokens.map((t) => t.type),
      ['bold', 'text', 'link', 'text', 'link', 'text'],
    );
  });

  it('is not affected by the previous call', () => {
    // The inline regex is module-level and stateful with /g; lastIndex must be
    // reset per call or the second parse silently starts mid-string.
    parseInline('[a](/a) [b](/b)');
    assert.deepEqual(parseInline('[c](/c)'), [
      { type: 'link', label: 'c', target: '/c', internal: true },
    ]);
  });

  it('leaves malformed markup as literal text', () => {
    assert.deepEqual(parseInline('[unclosed](/x'), [{ type: 'text', text: '[unclosed](/x' }]);
  });
});

describe('splitBlocks', () => {
  it('splits paragraphs on blank lines', () => {
    const blocks = splitBlocks('first para\nsame para\n\nsecond para');
    assert.deepEqual(blocks, [
      { type: 'paragraph', lines: ['first para', 'same para'] },
      { type: 'paragraph', lines: ['second para'] },
    ]);
  });

  it('groups a numbered run into one ordered list', () => {
    const blocks = splitBlocks('1. open Outlook\n2. paste\n3. save');
    assert.equal(blocks.length, 1);
    assert.equal(blocks[0].type, 'list');
    assert.equal((blocks[0] as { ordered: boolean }).ordered, true);
    assert.equal((blocks[0] as { lines: string[] }).lines.length, 3);
  });

  it('treats bullets as an unordered list', () => {
    const [block] = splitBlocks('- one\n- two');
    assert.equal(block.type, 'list');
    assert.equal((block as { ordered: boolean }).ordered, false);
  });

  it('starts a new list when the marker kind changes', () => {
    const blocks = splitBlocks('1. numbered\n- bulleted');
    assert.deepEqual(
      blocks.map((b) => (b.type === 'list' ? b.ordered : 'para')),
      [true, false],
    );
  });

  it('separates a paragraph that follows a list without a blank line', () => {
    const blocks = splitBlocks('- one\nthen prose');
    assert.deepEqual(
      blocks.map((b) => b.type),
      ['list', 'paragraph'],
    );
  });

  it('returns nothing for empty or whitespace-only input', () => {
    assert.deepEqual(splitBlocks(''), []);
    assert.deepEqual(splitBlocks('   \n\n  '), []);
  });

  it('normalises CRLF so Windows-style output does not leave stray characters', () => {
    assert.deepEqual(splitBlocks('a\r\n\r\nb'), [
      { type: 'paragraph', lines: ['a'] },
      { type: 'paragraph', lines: ['b'] },
    ]);
  });
});

describe('stripMarker', () => {
  it('removes ordered and bulleted markers', () => {
    assert.equal(stripMarker('1. open Outlook'), 'open Outlook');
    assert.equal(stripMarker('2) paste'), 'paste');
    assert.equal(stripMarker('- one'), 'one');
    assert.equal(stripMarker('• one'), 'one');
  });

  it('leaves a line that is not a list item alone', () => {
    assert.equal(stripMarker('plain text'), 'plain text');
  });
});
