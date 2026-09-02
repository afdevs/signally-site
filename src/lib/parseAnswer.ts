// Copié depuis v2-app/src/features/support/lib/parseAnswer.ts.
// Copie volontaire : toute modification doit être portée dans les deux dépôts.

/**
 * A tiny markdown subset for assistant answers: paragraphs, lists, bold, links.
 *
 * Separate from the component that renders it because `vitest.config.ts` only
 * collects `src/**\/*.test.ts`, so logic in a `.tsx` cannot be unit-tested here —
 * and link classification is a security decision worth asserting.
 *
 * No HTML is produced anywhere: the renderer builds React elements from these
 * tokens, so there is no injection sink for model output to reach.
 */

export type Block =
  | { type: 'paragraph'; lines: string[] }
  | { type: 'list'; ordered: boolean; lines: string[] };

export type InlineToken =
  | { type: 'text'; text: string }
  | { type: 'bold'; text: string }
  | { type: 'link'; label: string; target: string; internal: boolean };

const ORDERED_ITEM = /^\s*\d+[.)]\s+/;
const BULLET_ITEM = /^\s*[-*•]\s+/;

export const isListItem = (line: string): boolean =>
  ORDERED_ITEM.test(line) || BULLET_ITEM.test(line);

export const stripMarker = (line: string): string =>
  line.replace(ORDERED_ITEM, '').replace(BULLET_ITEM, '');

/**
 * Rejects protocol-relative `//host`, which starts with `/` and would otherwise
 * look like an app path while pointing off-origin, along with anything carrying a
 * scheme. Everything else is external.
 */
export const isInternalPath = (target: string): boolean =>
  target.startsWith('/') && !target.startsWith('//') && !target.includes(':');

export function splitBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  let current: Block | null = null;

  for (const rawLine of text.replace(/\r\n/g, '\n').split('\n')) {
    const line = rawLine.trimEnd();

    if (line.trim() === '') {
      current = null;
      continue;
    }

    if (isListItem(line)) {
      const ordered = ORDERED_ITEM.test(line);

      // A bulleted run after a numbered one starts a new list rather than folding in.
      if (current?.type === 'list' && current.ordered === ordered) {
        current.lines.push(line);
      } else {
        current = { type: 'list', ordered, lines: [line] };
        blocks.push(current);
      }

      continue;
    }

    if (current?.type === 'paragraph') {
      current.lines.push(line);
    } else {
      current = { type: 'paragraph', lines: [line] };
      blocks.push(current);
    }
  }

  return blocks;
}

// Both forms in one pass, so a bolded link label survives intact.
const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export function parseInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  // INLINE is module-level and stateful with /g.
  INLINE.lastIndex = 0;

  while ((match = INLINE.exec(text)) !== null) {
    if (match.index > cursor) {
      tokens.push({ type: 'text', text: text.slice(cursor, match.index) });
    }

    const [, linkLabel, linkTarget, boldText] = match;

    if (linkLabel !== undefined && linkTarget !== undefined) {
      tokens.push({
        type: 'link',
        label: linkLabel,
        target: linkTarget,
        internal: isInternalPath(linkTarget),
      });
    } else if (boldText !== undefined) {
      tokens.push({ type: 'bold', text: boldText });
    }

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    tokens.push({ type: 'text', text: text.slice(cursor) });
  }

  return tokens;
}
