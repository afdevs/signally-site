---
slug: "gmail-mobile-signature"
title: "Gmail signatures on mobile: what actually shows up"
description: "The Gmail app manages a mobile signature separate from the web one, often reduced to \"Sent from my iPhone\". What really displays on mobile and how to get consistent rendering."
keyword: "gmail mobile signature"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-07
summary:
  - "The Gmail app has a mobile signature setting independent of the webmail one."
  - "By default, it applies generic text along the lines of \"Sent from my iPhone\"."
  - "The mobile field does not accept rich HTML: logos and layout do not transfer."
  - "A signature applied by an add-on stays identical on web and mobile, with no user setup."
related:
  - "signature-gmail-entreprise"
  - "gestion-signature-gmail"
  - "signature-outlook-mobile"
faq:
  - q: "Why does my web Gmail signature not appear on my phone?"
    a: "The Gmail app manages a signature setting specific to the device, separate from the webmail one. The two do not synchronise: configuring one does not configure the other."
  - q: "Can a logo be put in the Gmail mobile signature?"
    a: "The mobile app's signature field is designed for plain text. Pasting an HTML block with an image gives unpredictable results. For a reliable logo on mobile, the signature has to be inserted by an add-on rather than typed into the app."
  - q: "How do I remove \"Sent from my iPhone\"?"
    a: "In the Gmail app: Menu → Settings → select the account → Mobile signature. On a managed estate, it is better to enforce the signature centrally than to ask everyone to do this."
  - q: "Does the campaign banner display on Gmail mobile?"
    a: "Yes, as soon as the signature is inserted while writing by the add-on: the banner is part of the block, whatever device is used."
---

On Google Workspace, the carefully configured webmail signature does not follow onto the phone. In
its place, a "Sent from my iPhone" nobody chose, or nothing at all. Since messages sent from mobile
are rarely reread, the gap can last months without anyone noticing.

## Two settings that ignore each other

Gmail web stores the signature in the account settings, under **Settings → General → Signature**.
The mobile app exposes a separate setting — "Mobile signature" — specific to the device, and
pre-filled with generic text.

The two do not talk to each other. Someone who spent ten minutes formatting their signature in the
browser therefore walks away with a default mobile signature, which they have not seen and often do
not know exists.

The result is a split: the same person has two signatures, one of which they did not write. It is
exactly the same mechanism as on the Microsoft side, described in
[Outlook mobile signatures](/en/blog/outlook-mobile-signature).

## What the mobile field really accepts

The mobile setting is designed for plain text. You can put several lines in it, but there is no rich
editor, no reliable image handling, and no control over layout.

Pasting a complete HTML template into it — which some people attempt — produces, depending on the
case, raw code shown as is, partial formatting, or a block stripped of its logo. The result varies
with the app version and the operating system.

Put another way: your company's brand signature cannot be reproduced in that field. It is not a
matter of effort, it is a limit of the setting.

## Why it matters more than it seems

It is tempting to treat mobile as a secondary case. In practice, a substantial share of business
replies leave from a phone: while travelling, between meetings, at the end of the day. Those are
frequently the most responsive exchanges, and therefore the ones that count commercially.

So the signature is missing precisely where it would help most: on quick replies to people just
discovering your company.

## The workarounds and their limits

**Asking everyone to configure their mobile signature.** The usual answer. It fails for three
cumulative reasons: the field cannot reproduce the template, the instruction is followed by only a
fraction of the estate, and new joiners never receive it.

**Using the console footer.** It covers mobile well, since it acts server-side. But it brings its
own limits — no custom fields, stacking in threads, invisible to the sender — detailed in
[Google Workspace footers](/en/blog/google-workspace-email-signature).

**Settling for short text on mobile.** An honest fallback: name, job title, phone, in three lines.
It beats "Sent from my iPhone", but brand consistency is not there.

## The approach that gives the same result everywhere

For the signature to be identical on web and mobile, it must not depend on any local setting. The
add-on runs inside Gmail as the message is written — including in the mobile app — and inserts the
complete block, with directory data and the current banner.

The employee has nothing to configure, on any of their devices. The mechanism is described on the
[Google Workspace add-on](/en/integrations/google-workspace-gmail) page.

> **Worth knowing:** remember to clear the app's "Mobile signature" field at deployment. Otherwise
> the two stack up, and the message ends with your company signature followed by the generic text.

## Designing a template that reads on a phone screen

Three precautions cover most cases.

**Constrain the width.** A block of 500 to 600 px maximum. Beyond that, the mobile client forces
horizontal scrolling or shrinks everything until it is unreadable.

**Avoid multiple columns.** Logo on the left, contact details on the right: that works. Three
columns: no.

**Size the tap targets.** A phone number or a social icon has to stay tappable with a finger, which
means enough height and real spacing between elements.

The multi-client preview in [the editor](/en/features) covers mobile rendering, but always send a
test message to your own phone before going wide.
