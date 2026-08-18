---
slug: "outlook-mobile-signature"
title: "Outlook mobile signatures: why they vanish and how to get them back"
description: "\"Sent from my iPhone\" instead of your company signature: why Outlook mobile ignores the local signatures on your desktop, and how to get a consistent signature on the phone."
keyword: "outlook mobile signature"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-27
summary:
  - "Signatures created in Outlook for Windows or Mac are local to that machine: they do not sync to the phone."
  - "Outlook mobile applies its own signature by default, usually the generic \"Sent from Outlook\" text."
  - "A significant share of business email leaves from a mobile: the signature is just as exposed there as anywhere."
  - "Only a signature applied service-side, through an add-in, stays identical on desktop and mobile."
related:
  - "nouveau-outlook-signature"
  - "signature-mail-outlook-entreprise"
  - "signature-gmail-mobile"
faq:
  - q: "Why does my company signature not appear on Outlook mobile?"
    a: "Because it was created locally in desktop Outlook. Those signatures are stored in the computer's profile and are not synchronised to the mobile app, which manages its own independent signature."
  - q: "Can a full HTML signature be put into Outlook mobile?"
    a: "The mobile app only offers a very limited rich-text signature field, with no real HTML editor. Pasting a complete HTML block gives unpredictable results. That is why the signature has to come from the service, not from the app."
  - q: "How do I remove \"Sent from Outlook for iOS\"?"
    a: "In the app: Settings → Signature, then replace the default text. On a managed estate, it is better to enforce the signature centrally rather than asking every employee to do it."
  - q: "Do campaign banners display on mobile?"
    a: "Yes, as soon as the signature is inserted by the add-in: the banner is part of the block inserted while writing, whatever client is used."
---

It is one of the most visible and least addressed gaps: the carefully deployed desktop signature
disappears the moment the employee replies from their phone. In its place, a "Sent from Outlook for
iOS", or nothing at all. On sales conversations, the effect is immediate.

## Why the desktop signature does not follow

The cause is structural. A signature created in Outlook for Windows or Mac is a **local** artefact:
it lives in the user's profile on that computer, as HTML and RTF files alongside an images folder.
Nothing in that mechanism is designed to travel back up to the service.

The Outlook mobile app, for its part, manages a signature field of its own, stored in the app's
settings and pre-filled with generic text. The two systems ignore each other.

The result is that one person effectively has two different signatures, one of which they never
chose. And because nobody rereads their own messages sent from the phone, the gap goes unnoticed for
months.

## The real scale of the problem

It is tempting to treat mobile as marginal. That has not been true for a long time: a substantial
share of business replies — while travelling, between meetings, in the evening — leave from a phone.
Those are often the most responsive exchanges, and therefore the most commercially sensitive.

Put another way, the signature is missing precisely where it would be most useful: on quick replies
to people who do not know you yet.

## The patches, and why they hold badly

**Asking everyone to configure their mobile signature.** The most widespread and least durable
solution. The mobile field does not accept rich HTML: pasting a template produces a degraded result,
without the logo, with random line breaks. And every employee produces their own variant.

**Sending instructions with text to copy.** Same problem, plus the usual attrition: three months
later, half the estate has not done it, and new joiners never received the instructions.

**Going through an Exchange transport rule.** It covers mobile well, since it acts server-side — but
it brings its own limits: the sender never sees their signature, threads stack blocks, and encrypted
messages escape it. The detail is in
[add-in or transport rule](/en/blog/outlook-add-in-vs-exchange-transport-rule).

## The only approach that gives the same result everywhere

For the signature to be identical on desktop and mobile, it must depend neither on the machine nor
on the app, but on the service. That is the principle of the add-in: it runs inside Outlook —
including Outlook mobile on iOS and Android — and inserts the block while the message is written,
with directory data and the current campaign banner.

It is the same mechanism that settles desktop deployment, described in
[how to deploy an Outlook signature](/en/blog/outlook-email-signature-company-wide): mobile then
stops being a special case and becomes one more client.

The employee has nothing to configure, on any of their devices. If they change phone, the signature
follows. If their job title changes in the directory, it updates everywhere at once. The
environments covered are listed on the
[Microsoft 365 add-in](/en/integrations/microsoft-365-outlook) page.

> **Worth knowing:** remember to remove the old local signature from the mobile app at deployment.
> Otherwise the two stack up, and the message ends with the company signature followed by "Sent from
> Outlook for iOS".

## Designing a template that survives a phone screen

A signature designed for a 1,400 px wide screen fares badly at 390 px. Three precautions cover the
majority of cases.

**Limit the width.** A block of 500 to 600 px maximum, that shrinks cleanly. Beyond that, the mobile
client forces horizontal scrolling or shrinks everything until it is unreadable.

**Avoid tight multi-column layouts.** A logo on the left and a block of contact details on the right
works; three columns do not.

**Test for real.** The multi-client preview in [the Signally editor](/en/features) includes mobile
rendering, but nothing replaces a real send to your own phone before going wide.
