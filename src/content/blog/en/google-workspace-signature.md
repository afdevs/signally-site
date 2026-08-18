---
slug: "google-workspace-email-signature"
title: "Google Workspace footers: what the admin console cannot do"
description: "The Google console's append-footer function renders one precise service, and only that one. What it covers, what it will never cover, and when it stops being enough."
keyword: "google workspace email signature"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-05
summary:
  - "The console footer is appended server-side, after sending: the sender never sees it."
  - "Formatting is limited and per-employee custom fields are not supported."
  - "The block repeats on every reply in a threaded conversation."
  - "It is a legal compliance tool, effective at that, and unsuited to a brand signature."
related:
  - "signature-gmail-entreprise"
  - "gestion-signature-gmail"
  - "unite-organisationnelle-signature"
faq:
  - q: "Where is the append-footer function in the Google console?"
    a: "In Gmail's settings, compliance section: you define a rule that appends content to the bottom of messages, scoped by organisational unit. The exact wording changes across console versions."
  - q: "Can it insert each employee's name and job title?"
    a: "No. The footer is a single piece of content applied to a scope. It has no dynamic fields fed by the directory, unlike an add-on."
  - q: "Does the footer appear in sent messages?"
    a: "No. The append happens at transport, after the message has left the sender's mailbox: the copy kept in \"Sent\" does not contain it."
  - q: "Should the footer be disabled if an add-on is installed?"
    a: "Not necessarily. Many organisations keep a minimal plain-text footer to cover application sends, and hand the brand signature to the add-on. Just check the two do not duplicate."
---

The Google admin console offers a function to append content to the bottom of outgoing messages. It
is often used as a company signature solution, until people discover it is not one. It does one
thing well: force a piece of text onto the whole flow. Everything else escapes it, by design.

## What the function genuinely does well

The footer applies in the transport service, on messages leaving the domain. Its scope can be
restricted to an organisational unit, which allows different text per legal entity.

Its decisive advantage is exhaustiveness: **everything** leaving the domain gets the block, including
what is not sent from Gmail. Notifications from your billing tool, alerts from your line-of-business
application, automated sends from a script — nothing escapes. For a mandatory legal notice, it is
the only mechanism that guarantees total coverage.

If your need stops there — one line of legal disclaimer, in text, on one hundred per cent of traffic
— the console is enough and there is no reason to add a tool.

## Limit 1 — The sender never sees the result

The append happens after sending. The employee does not see the block while writing, and the copy
kept in "Sent" does not contain it either.

So nobody can check anything. A broken link, an outdated notice, a typo in the head-office address:
the error circulates until a recipient reports it, which a recipient never does. You lose the most
effective control loop you had: several dozen colleagues looking at their own message.

## Limit 2 — No custom fields

The footer is a single piece of content applied to a scope. It does not know who is sending the
message and therefore cannot display their name, job title, direct phone number or site.

That is not an implementation flaw, it is the nature of the mechanism: it acts on a flow, not on a
person. As soon as the signature has to be personal — and that is what a signature is — you need a
system that knows the user. That is the job of directory synchronisation, described on our
[Google Workspace add-on](/en/integrations/google-workspace-gmail) page.

## Limit 3 — Formatting

The field accepts marked-up content, but results are irregular from one client to the next and image
handling is a matter of improvisation. A correctly sized logo, aligned social icons, a coloured
separator: that is not this tool's territory.

The general constraints of email HTML — which apply whatever the insertion mechanism — are detailed
in [HTML email signatures](/en/blog/html-email-signature).

## Limit 4 — Stacking in threads

The mechanism does not distinguish a first message from a reply. On a six-exchange conversation, the
final message ends with six identical footers.

That is bearable for a discreet line of text. It becomes ridiculous as soon as the block contains a
full postal address and a four-line disclaimer.

> **Worth knowing:** this is exactly why we recommend keeping the console footer **short**. One
> sentence, not a paragraph. The rich signature should come from the add-on, which inserts only one
> block per message.

## Limit 5 — No scheduling, no campaigns

A communication banner has a start date and an end date. The console offers no calendar: changing
the footer means a manual intervention by the administrator at every change, and someone has to
remember to remove it after the event.

In practice, nobody removes it. You still find, in October, footers announcing a trade show from
March. That is precisely the problem [scheduled campaigns](/en/campaigns) solve.

## The right way to combine the two

There is no real opposition: the two mechanisms address different needs.

**The console** covers the legal floor, in short text, on one hundred per cent of the flow —
applications included. That is its ground, and nothing else does it.

**The add-on** carries the brand signature: personalised from the directory, locked on its sensitive
parts, visible to the sender, with dated banners and targeting by organisational unit.

The only thing to watch in that combination is redundancy. If your legal notice already appears in
the add-on's template, remove it from the console footer so it does not show up twice. The
transition from purely console-based management is described in
[moving to centralised management](/en/blog/centralised-gmail-signature-management).
