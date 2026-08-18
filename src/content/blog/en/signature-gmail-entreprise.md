---
slug: "gmail-signature-for-business"
title: "Setting the same Gmail signature for every user in the domain"
description: "Three ways to enforce a Gmail signature across a Google Workspace domain: individual setup, the admin console footer, and a domain-wide add-on."
keyword: "gmail signature for business"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-03
summary:
  - "Gmail natively provides one signature per user, configured by the user themselves."
  - "The admin console footer applies server-side, with very limited formatting."
  - "A domain-wide add-on inserts a complete HTML signature as the message is written."
  - "Only that last method allows templates per organisational unit and dated banners."
related:
  - "google-workspace-signature"
  - "unite-organisationnelle-signature"
  - "gestion-signature-gmail"
faq:
  - q: "Can a Gmail signature be enforced from the Google admin console?"
    a: "The console can append a server-side footer through the compliance settings, but it cannot enforce a rich signature inside the user's Gmail interface. For a full brand signature, you need a domain-wide add-on."
  - q: "Can users still edit their signature?"
    a: "With an add-on and locked templates, the administrator decides field by field what stays editable. The logo and legal notices can be made untouchable while leaving one free field, the direct phone number for instance."
  - q: "Does the signature also apply to send-as aliases?"
    a: "A user sending from an alias keeps the signature of the template mapped to their account. If your aliases correspond to distinct brands, plan a template per entity and check the behaviour you want during acceptance testing."
  - q: "Do MX records or routing need changing?"
    a: "No. An add-on runs inside Gmail as the message is written: it plays no part in routing or delivery. Your messages leave from your domain exactly as before."
---

On Google Workspace, the question "how do I set the same signature for everyone" has no obvious
answer in the console. Gmail was designed so that each user defines their own, and the admin tooling
remains, on this point, behind what Microsoft offers. Three approaches coexist, with very different
results.

## Approach 1 — Let everyone configure their own signature

This is the default behaviour. Each user opens **Settings → General → Signature**, types their
block, and Gmail adds it to new messages.

That works for a small outfit where everyone talks to each other. Beyond that, the same symptoms
appear everywhere: different fonts depending on who copied from which document, logos resized by
hand, legal notices missing for the most recent joiners, and signatures announcing job titles that
expired long ago.

The real cost is not the initial setup, it is the maintenance: at every brand change, you have to
explain the procedure again to the whole domain and hope for a decent adoption rate. That cost is
quantified in our
[article on manual management](/en/blog/cost-of-managing-email-signatures).

## Approach 2 — The admin console footer

Google offers, in Gmail's compliance settings, a function to append text at the bottom of messages.
It applies server-side to all traffic leaving the domain.

It renders a real service: forcing a legal notice onto 100% of sends, including those emitted by
applications. But its limits are significant. Formatting is minimal, insertion happens after sending
— so the user never sees the result — and there is no per-employee custom field, no per-team
template, and no banner.

It is a compliance tool, not a brand tool. The detailed comparison is in
[the article on the Google Workspace footer](/en/blog/google-workspace-email-signature).

## Approach 3 — A domain-wide add-on

The add-on installs from the Google admin console, in one operation, for the whole domain. It runs
inside Gmail as the message is written and inserts a complete HTML signature, filled with the user's
details pulled from Google Directory.

The installation path is four steps, detailed on our
[Google Workspace add-on](/en/integrations/google-workspace-gmail) page:

1. Domain-wide installation of the add-on from the console.
2. Directory synchronisation, read-only.
3. Assigning a template per organisational unit or group.
4. Automatic application in Gmail, web and mobile.

> **Worth knowing:** domain-wide installation requires no action from users. They neither have to
> accept an individual authorisation nor install anything.

## What the third approach actually brings

**Custom fields.** Name, job title, department and phone come from the directory. A change of role
propagates without anyone thinking about it.

**Templates per entity.** Each organisational unit can get its own template, which covers
multi-brand and multi-country organisations. The mechanism is described in
[managing signatures by organisational unit](/en/blog/gmail-signature-organisational-unit).

**Locked legal notices.** The administrator freezes what has to be frozen. An employee cannot delete
the disclaimer by accident while rewriting their signature.

**Dated banners.** A campaign starts and stops on the dates you set, on the teams you choose — see
the [campaigns and banners](/en/campaigns) page.

## How to choose

| Your situation | Suitable approach |
| --- | --- |
| Fewer than ten people, no brand stakes | Individual setup |
| Mandatory legal notice on all traffic, applications included | Console footer |
| Consistent brand signature across the domain | Domain-wide add-on |
| Several brands, subsidiaries or countries | Add-on with a template per unit |

The last two rows often combine with the second: a minimal console footer for the legal floor, and
the add-on for the visible signature. The essential thing is to check that the two blocks do not
repeat each other in the final message.

If you are starting from a situation where everyone manages their own, the transition is described
step by step in
[moving to centralised management](/en/blog/centralised-gmail-signature-management).
