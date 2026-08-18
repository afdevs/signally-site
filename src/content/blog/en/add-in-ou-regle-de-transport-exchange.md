---
slug: "outlook-add-in-vs-exchange-transport-rule"
title: "Add-in or Exchange transport rule: which signature method to choose"
description: "Inserted while writing or appended server-side: the two Exchange signature methods have different limits and different effects on threads, encryption and what the sender can see."
keyword: "exchange transport rule signature"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-16
summary:
  - "A transport rule applies after sending: the sender never sees their signature and cannot check it."
  - "In a threaded conversation, the rule stacks a block on every reply; the add-in inserts only one."
  - "The rule fails on encrypted messages, which cannot be modified in transit."
  - "The rule remains relevant for a plain-text legal disclaimer forced onto 100% of outbound traffic, including automated applications."
related:
  - "signature-mail-outlook-entreprise"
  - "deployer-signature-microsoft-365"
  - "nouveau-outlook-signature"
faq:
  - q: "Can a transport rule and an add-in be combined?"
    a: "Yes, and it is sometimes sensible: the add-in carries the brand signature as the message is written, while the transport rule appends a minimal legal disclaimer that also covers automated sends which never go through Outlook. You just have to make sure the two blocks do not duplicate each other."
  - q: "Does a transport rule slow message delivery down?"
    a: "The impact is negligible for a simple footer. It becomes noticeable if the rule applies many conditions or heavy HTML templates at volume."
  - q: "Why does my transport rule apply nothing to some messages?"
    a: "Encrypted messages cannot be modified in transit: Exchange leaves them intact. Internal sends may also be excluded, depending on the scope you set in the rule."
  - q: "Does the add-in work if the user writes from a client other than Outlook?"
    a: "No. An add-in runs inside Outlook (web, Windows, Mac, mobile). For a third-party client or an application send, only a server-side transport rule can step in."
---

On a Microsoft 365 tenant, two distinct mechanisms can add a signature to outgoing messages: the
add-in, which writes into the message while it is being composed, and the Exchange transport rule,
which appends it in passing on the server. Choosing between them is not a matter of preference: it
follows from what you want the signature to carry, and from who needs to be able to see it.

## How an Exchange transport rule works

A mail flow rule applies in the transport service, after the user has clicked "Send". You define a
condition — "all messages leaving the domain", for example — and an action: "append a disclaimer to
the bottom of the message". Exchange applies the HTML block you entered, then routes the message.

The advantage is real: nothing to install, total reach, and the mechanism also covers sends that do
not come from Outlook — a line-of-business application, a billing tool, a script. It is in fact the
only way to force a legal notice onto 100% of outbound traffic, without exception.

## Why the sender never sees their signature

This is the heaviest consequence of server-side insertion, and it often surprises people at
deployment. The signature does not exist while the message is being written, nor in the copy kept in
sent items. The employee can therefore neither proofread it, nor notice a broken link, nor report
that their job title is wrong.

In practice, your quality-control loop disappears. On a brand signature with logo, contact details
and banner, that is several hundred pairs of eyes you lose. With the add-in described on our
[Microsoft 365 add-in](/en/integrations/microsoft-365-outlook) page, the signature is visible in the
compose window: any mistake surfaces within hours.

## Threads and stacked blocks

A transport rule does not know whether the message is a first send or the sixth reply in a
conversation. It applies its block every time. After a few round trips, the message ends in a stack
of identical footers, often longer than the exchange itself.

Workarounds exist — conditioning the rule on the absence of a previously inserted marker, for
instance — but they are fragile: the marker disappears if the recipient replies from a client that
reformats the HTML. The add-in, by contrast, natively distinguishes between a first-message
signature and a reply signature.

## The case of encrypted messages

An encrypted message cannot be modified in transit: that is the whole point of encryption. The
transport rule therefore lets it through intact, without a signature and without a visible error. If
your organisation encrypts part of its correspondence — law firms, healthcare, finance — a portion
of your traffic will silently escape the rule.

> **Worth knowing:** the add-in writes into the message body before encryption, on the client side.
> The signature is therefore present, including on protected messages.

## Decision table

| Requirement | Transport rule | Add-in |
| --- | --- | --- |
| Legal disclaimer on 100% of traffic, applications included | Yes | No |
| Brand signature with logo and social links | Poorly suited | Yes |
| Visible to the sender and in sent items | No | Yes |
| No stacking in threads | No | Yes |
| Works on encrypted messages | No | Yes |
| Custom fields from the directory | Limited | Yes |
| Dated campaign banners | No | Yes |

## What we recommend in practice

For the large majority of organisations, the add-in covers the real need: a brand signature,
personalised, checkable, updated from the directory. The full method is described in our guide to
[deploying an Outlook signature](/en/blog/outlook-email-signature-company-wide).

Combining the two remains defensible in one specific case: when a legal notice absolutely must
appear on everything leaving the domain, including automatic notifications emitted by your
applications. You then keep a minimal plain-text transport rule for that legal floor, and the add-in
for the visible signature. You simply have to make sure the two do not repeat each other.

This is also the moment to check compatibility across your client estate: the add-in has to work on
the new Outlook as well as the old one, a subject covered in
[what changes in 2026](/en/blog/new-outlook-signature).

One last criterion, often decisive for IT: a transport rule modifies your outbound flow, an add-in
does not. No connector, no rerouting, no change to your routing configuration. That argument carries
weight in security reviews — the subject is covered in detail on our
[security and GDPR](/en/security-gdpr) page.
