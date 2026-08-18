---
slug: "animated-gif-email-signature"
title: "Animated banners in a signature: what each email client displays"
description: "An animated GIF does not animate everywhere. What each email client really displays, and the design rule that makes animation risk-free."
keyword: "animated gif email signature"
cluster: "Campagnes & bannières"
pubDate: 2026-04-10
summary:
  - "Some versions of Outlook display only the first frame of an animated GIF."
  - "The essential message therefore has to be on that first frame, with animation only enriching it."
  - "An animated GIF has to stay under 150 KB, which in practice limits it to a few frames."
  - "Modern video formats are not supported in email clients."
related:
  - "banniere-signature-mail"
  - "signature-mail-html"
  - "idees-campagne-signature-mail"
faq:
  - q: "Do animated GIFs work in Outlook?"
    a: "It depends on the version. Several versions of Outlook for Windows display only the first frame of the GIF, without playing the animation. Outlook Web, Gmail and Apple Mail play the animation normally."
  - q: "What is the maximum weight for an animated signature GIF?"
    a: "Stay under 150 KB. That is demanding: in practice it limits you to four or five frames at signature banner size. Beyond that, display lags and the message looks broken."
  - q: "Can a video be put in an email signature?"
    a: "No. Video tags are not supported by email clients. Common practice is to use a still image evoking a video, linked to the page where it is hosted."
  - q: "Does animation improve click-through?"
    a: "It draws the eye more, but the effect depends on the message. An animation that delays reading the essential information can reduce effectiveness. Test rather than assume."
---

Animation draws the eye, and that is precisely what you want from a banner. But in an email it does
not behave as it does on the web: depending on the recipient's client, your GIF animates, or stays
frozen on a single frame.

## What each client displays

| Client | Behaviour |
| --- | --- |
| Outlook Web | Animation played |
| Outlook for Windows (some versions) | First frame only |
| New Outlook for Windows | Animation played |
| Outlook for Mac | Animation played |
| Outlook mobile | Animation played |
| Gmail (web and mobile) | Animation played |
| Apple Mail | Animation played |

The special case is therefore Outlook for Windows in its historical versions, which displays the
first frame without playing the rest. That client is still very present in company estates, which is
enough to impose a design rule — the underlying shift is described in
[what changes with the new Outlook](/en/blog/new-outlook-signature).

## The rule that makes animation risk-free

It fits in one sentence: **the essential message has to be on the first frame**.

Animation then becomes an enrichment for those who see it, and its absence deprives nobody of the
information. Concretely, the first frame has to contain, on its own, the headline, the identifying
element and the call to action.

What not to do: build a sequence where the message reveals itself progressively — a word per frame,
or a hook that only makes sense after three seconds. For a portion of your recipients, the banner will
show only an incomprehensible fragment.

> **Worth knowing:** the simplest test is to export the first frame alone and look at it. If it stands
> on its own, your animation is safe. If not, revisit the edit.

## The weight constraint

An animated GIF weighs the sum of its frames. With a ceiling of **150 KB** for a 600 px wide banner,
you fit four to five frames in practice — no more.

Three levers help stay within budget. Reduce the number of frames by preferring hard cuts over
fades, which multiply intermediate steps. Limit the colour palette, since GIF is capped at 256 shades
anyway. And animate only **part** of the surface, keeping the background fixed: successive frames then
store only the area that changes.

The overall weight budget of a signature is covered in
[email signature banners: formats and weight](/en/blog/email-signature-banner).

## How many loops

Three options, with different effects.

**A single play.** The animation plays then stops on the last frame. It is the safest choice:
attention is caught once, and the banner then stays stable. Take care that the **last** frame also
carries the message, since that is what will remain displayed.

**Two to three loops.** A common compromise, which gives a second chance to a recipient who was
looking elsewhere.

**Infinite loop.** To be avoided. A banner blinking permanently under every message in a conversation
quickly becomes irritating, and gives an advertising tone that jars in a professional exchange.

## What does not work at all

**Video.** Video tags are not supported by email clients. Common practice is a still image evoking a
video — with a drawn play button — linked to the page where it is hosted.

**CSS animations.** They do not survive webmail HTML sanitising, nor the Outlook rendering engine. See
[HTML email signatures](/en/blog/html-email-signature).

**Animated SVG.** Not displayed, and sometimes blocked for security reasons.

GIF therefore remains the only usable animation format, with its limits.

## Should you animate?

The question deserves asking rather than settling on principle. Animation draws the eye, but it adds
weight, complicates production, and imposes the first-frame constraint.

It is justified for a message that genuinely gains from sequence: a countdown before an event, a
succession of three partner logos, a figure reveal. It is not justified for a message that fits in one
sentence — that is, most of the campaigns described in
[12 campaign ideas](/en/blog/email-signature-campaign-ideas).

When in doubt, a well-designed static banner, with clear contrast and a clear call to action,
generally does as well for a tenth of the effort. And you can compare: the per-campaign tracking
described in [measuring ROI](/en/blog/email-signature-roi) lets you test an animated version against a
static one over two comparable periods.
