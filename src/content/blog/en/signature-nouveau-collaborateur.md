---
slug: "new-employee-email-signature"
title: "Onboarding: preparing a new employee's email signature"
description: "The signature is part of the joining kit, just like the badge and the laptop. How to make sure a new joiner has it from their first message, with no tutorial and no ticket."
keyword: "new employee email signature"
cluster: "Gestion & gouvernance"
pubDate: 2026-03-13
summary:
  - "Under manual management, a new joiner takes several days on average to get a correct signature."
  - "Yet their first messages are the ones that go to people who do not know them."
  - "With directory synchronisation, the signature exists as soon as the account is created."
  - "The condition is that directory attributes are filled at creation, not afterwards."
related:
  - "depart-collaborateur-signature-mail"
  - "gestion-des-signatures-mail-en-entreprise"
  - "signature-entra-id-azure-ad"
faq:
  - q: "When should a new joiner have their signature?"
    a: "From their first message, so from the moment their mailbox opens. That is achievable if the signature is applied by the service from directory attributes, since those are filled when the account is created."
  - q: "What if their job title is not filled in the directory yet?"
    a: "The corresponding line should disappear from the signature rather than showing an empty label. The employee then has a reduced but correct signature, which completes itself as soon as the attribute is filled."
  - q: "Should the signature be included in the onboarding kit given to the employee?"
    a: "No, that is precisely what to avoid: anything resting on the employee's handling produces drift. The signature has to be present without them configuring it, or even knowing it exists."
  - q: "How do we handle someone on probation, or a contractor?"
    a: "By attaching them to a dedicated organisational unit, with a template reflecting their status if your organisation wants that — for instance without a job title for an external contractor."
---

An employee's arrival is the moment when the organisation shows how prepared it is. The badge is
ready, the laptop is configured, the accesses are open — and the signature arrives three weeks later,
after two reminders.

## The real cost of those first messages

A new joiner writes from their first day, and their first messages are precisely the ones going to
people who do not know them: an introduction to a customer, first contact with a supplier, a reply to
a candidate.

Those are therefore the messages where the signature matters most, and where it is most often absent
or improvised. When it finally appears, it has generally been copied from a colleague's — with its
mistakes, its outdated logo, and sometimes that colleague's phone number.

## Why manual management systematically fails here

The usual path has too many steps to survive the reality of an induction week.

Somebody has to remember to send the template. The new joiner has to find that message among the
forty others of their first week. They have to open their email client's settings, paste the HTML,
replace the personal information, adjust the logo. Then do it again on their phone, which nobody
does.

Each of those steps has an attrition rate. Multiplied together, they explain why a significant share
of an organisation's signatures is permanently incorrect.

## What a service-applied signature changes

With an add-in and directory synchronisation, the path disappears. The account is created, the
attributes are filled, the employee is attached to a unit or a group: the signature exists.

They open Outlook or Gmail, write their first message, and the signature is there — with their name,
job title, department, the company logo and the current campaign banner. They configured nothing,
and they probably do not know a system took care of it. That is the intended result.

The mechanism is described in
[synchronising signatures with the directory](/en/blog/entra-id-email-signature-sync) and, on the
deployment side, on the [Microsoft 365 add-in](/en/integrations/microsoft-365-outlook) page.

## The real condition: attributes filled at creation

The automation is only worth what the directory is worth. If the account is created with only a name
and an address, the signature will be reduced to that.

The useful control point therefore sits in the HR account-creation process. Four attributes have to be
filled at opening, not "later":

- the job title, drawn from the internal reference list rather than improvised;
- the department;
- the work phone number, in international format;
- the site or legal entity.

It is a light change to the creation form, and it settles the subject for good. If your HR tool
already feeds the directory automatically, simply check those four fields are part of the mapping.

> **Worth knowing:** explicitly plan the behaviour for a missing attribute. An empty line has to
> disappear **entirely**, label included. A signature showing "Job title:" followed by nothing is
> worse than no line at all.

## The special cases to settle once

**Contractors and temporary staff.** Should they carry the company signature? Many organisations
prefer a variant without a job title, or with an explicit mention of status. To settle with legal,
then embody in a dedicated organisational unit.

**Apprentices and interns.** Same question, generally a simpler answer: the standard signature, with
the real job title.

**Probation periods.** No reason to treat them differently: the employee represents the company from
day one.

**Shared and functional mailboxes.** They must not receive a named signature. Isolate them in a unit
with no template attached, or give them a departmental template.

## The departure counterpart

What holds at arrival holds at departure, in reverse: the signature has to disappear with the access,
and the mailbox has to be handled cleanly. That is the subject of
[an employee's departure](/en/blog/employee-offboarding-email-signature).

Both moments rely on the same mechanism — the directory link — and are therefore settled together. It
is one of the strongest arguments to put to an IT department currently handling those transitions by
hand, as detailed in
[the guide to company management](/en/blog/email-signature-management).
