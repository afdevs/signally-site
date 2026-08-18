---
slug: "new-outlook-signature"
title: "Email signatures in the new Outlook for Windows: what changes in 2026"
description: "The new Outlook for Windows runs on the Outlook Web engine, not the Word one. What that changes for your signatures, the migration traps, and what to check before switching."
keyword: "new outlook signature"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-22
summary:
  - "The new Outlook shares the Outlook Web rendering engine: signature HTML displays better than under classic Outlook."
  - "Signatures created locally in the old Outlook do not always migrate: they are stored differently."
  - "Add-ins compatible with Outlook Web work in the new Outlook, unlike legacy COM add-ins."
  - "While both clients coexist, a centralised template saves you maintaining two sets of signatures."
related:
  - "signature-mail-outlook-entreprise"
  - "signature-outlook-mobile"
  - "signature-mail-html"
faq:
  - q: "Are my existing signatures kept after moving to the new Outlook?"
    a: "Not systematically. The old Outlook stores signatures as local files in the Windows profile; the new one synchronises them with the account. Migration works in many cases but notably fails when the signature contains locally embedded images."
  - q: "Do COM signature add-ins work in the new Outlook?"
    a: "No. The new Outlook only runs web-format add-ins. A tool built on a classic COM add-in stops working at the switch."
  - q: "Is HTML rendering better in the new Outlook?"
    a: "Yes, noticeably. The new client shares the Outlook Web engine, which handles CSS far better than the Word engine used by classic Outlook. A signature built for classic Outlook will display correctly in the new one; the reverse is not guaranteed."
  - q: "Should we wait before migrating?"
    a: "That is a question for your IT schedule, not for the signature. That said, if you are planning the switch, it is the right moment to centralise signatures: you will avoid rebuilding them machine by machine."
---

Microsoft is progressively converging its Outlook for Windows clients onto a common base with
Outlook Web. For teams managing company signatures, that change of engine has concrete consequences
— rather good ones on rendering, trickier ones on migrating what already exists.

## A rendering engine finally consistent with the web

Classic Outlook for Windows renders message HTML with the Microsoft Word engine. That is the origin
of most of the historical contortions of email HTML: nested tables, hard-coded dimension attributes,
proprietary `mso-` properties, no reliable `float`.

The new Outlook builds on the same base as Outlook Web. CSS is far better supported, margins behave
normally, images size as expected. A signature designed to survive the Word engine will display
without trouble in the new client: backward compatibility is a given. The reverse is not — a
signature written freely for the new Outlook will degrade in the old one.

So as long as both clients coexist in your estate, the rule remains to produce conservative HTML,
compatible with classic Outlook. The corresponding constraints are detailed in our article on
[the HTML of an email signature](/en/blog/html-email-signature).

## The real friction point: migrating existing signatures

The old Outlook keeps signatures in the user's Windows profile, as `.htm`, `.rtf` and `.txt` files,
alongside a resources folder holding the images. The new Outlook attaches signatures to the account
and synchronises them service-side.

Automatic carry-over works in many cases, but it regularly fails on signatures containing locally
embedded images — precisely the most widespread case when everyone has pasted their logo by hand.
The user switches, and finds a signature stripped of its logo, or empty.

Across a handful of machines, you repair by hand. Across two hundred mailboxes, the switch generates
a wave of tickets that all arrives at once.

> **Worth knowing:** if your signatures are managed by a centralised template rather than by local
> files, the question does not arise. The signature is reapplied from the server, whatever client is
> in use.

## COM add-ins versus web add-ins

This is the sharpest break for third-party tools. The new Outlook does not run COM add-ins — those
extensions installed on the Windows machine, long used by the previous generation of signature
solutions. Only web-format add-ins, the ones that already work in Outlook Web, are supported.

In practice, if your current tool relies on a COM add-in, it will stop working at the switch. That
is a question to put explicitly to your vendor before scheduling the migration.

The Signally add-in is a web add-in: it works in Outlook Web, the new Outlook for Windows, classic
Outlook for Windows, Outlook for Mac and Outlook mobile. The environments covered are listed on the
[Microsoft 365 add-in](/en/integrations/microsoft-365-outlook) page.

## What to check before switching

Four points, in order.

**An inventory of existing signatures.** How many are local, how many are centrally managed? The
former are the ones that will cause trouble.

**Your tool's compatibility.** Web add-in or COM add-in. It is binary.

**Rendering on both clients.** During the coexistence period, every template has to be previewed in
the old and the new Outlook. A rendering discrepancy that goes unnoticed internally will be seen by
your customers.

**Mobile.** The Windows switch does not affect Outlook mobile, but it is a chance to check an
often-neglected environment — see
[Outlook mobile signatures](/en/blog/outlook-mobile-signature).

## Making the migration an opportunity rather than a chore

A mail client migration is the moment when you touch every machine's configuration anyway. It is
therefore the best moment to stop managing signatures machine by machine.

By centralising the template before the switch, the signature becomes independent of the client: it
is reapplied as the message is written, with directory data, whether the employee uses the old
Outlook, the new one, the web or their phone. The migration then produces no signature tickets at
all — and you recover control over brand styling, legal notices and
[banner campaigns](/en/campaigns) along the way.
