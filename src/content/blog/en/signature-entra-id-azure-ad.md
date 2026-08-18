---
slug: "entra-id-email-signature-sync"
title: "Synchronising email signatures with the Entra ID directory"
description: "How signature fields fill themselves from Microsoft Entra ID: which attributes are used, data quality, handling empty fields, and how a change of job title propagates."
keyword: "entra id email signature"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-29
summary:
  - "Dynamic signature fields fill from Entra ID attributes: displayName, jobTitle, department, mobilePhone, officeLocation."
  - "Synchronisation is read-only: the tool never modifies your directory."
  - "An empty attribute should remove its whole line, not leave an orphaned label in the signature."
  - "Directory quality becomes visible: rolling out signatures systematically exposes missing data."
related:
  - "deployer-signature-microsoft-365"
  - "signature-nouveau-collaborateur"
  - "signature-mail-outlook-entreprise"
faq:
  - q: "Which Entra ID attributes are used in a signature?"
    a: "The most common are displayName, jobTitle, department, mail, mobilePhone and businessPhones, officeLocation and companyName. Which fields are actually displayed is your choice: only those are synchronised."
  - q: "Does synchronisation modify my directory?"
    a: "No. Access is read-only. Nothing is written to Entra ID, and the consent requested carries no write permission."
  - q: "What happens if an attribute is empty?"
    a: "The corresponding line should disappear entirely from the signature, label included. A well-built signature never shows \"Mobile:\" followed by nothing."
  - q: "How long does a change of job title take to show up?"
    a: "The signature is rebuilt from the synchronised data: once the directory is up to date and synchronisation has run, the change appears on subsequent messages, with no action from the user."
---

A company signature is only worth having at scale if it fills itself in. That is the job of dynamic
fields: the template contains slots — name, job title, phone — that the system replaces with
directory values at insertion time. On a Microsoft tenant, that directory is Entra ID.

## Which attributes are used

A typical signature draws on a handful of standard attributes:

| Signature field | Entra ID attribute |
| --- | --- |
| Display name | `displayName` |
| Job title | `jobTitle` |
| Department | `department` |
| Email address | `mail` |
| Mobile phone | `mobilePhone` |
| Landline | `businessPhones` |
| Office / site | `officeLocation` |
| Legal entity | `companyName` |

Only the attributes you decide to display are synchronised. That is the minimisation principle
applied directly: nothing justifies pulling fields that will never appear in a signature. The exact
scope is described on our [security and GDPR](/en/security-gdpr) page.

Access is **read-only**. The Microsoft consent screen shows this explicitly when the tenant is
connected, as described in the
[deployment guide](/en/blog/deploy-email-signature-microsoft-365).

## What a rollout reveals about your directory

Here is what nobody anticipates: putting directory data into a signature makes it public. It travels
to your customers, on every message. And the real state of the directory appears all at once.

The classic cases look the same from one organisation to the next. Empty `jobTitle` values for half
a department. Inconsistent titles — "Sales Mgr", "Sales Manager", "Head of Sales" — for the same
role. Phone numbers in mixed formats: `07700900123`, `07700 900123`, `+447700900123`. `department`
filled with an internal code rather than a readable label.

It is good news in disguise: rolling out a signature is the best free directory audit there is. Just
plan a cleanup pass before going wide, not after.

> **Worth knowing:** normalise phone numbers to the international format (`+44 7700 900123`) before
> deployment. It is the only format that stays reliably tappable from a foreign mobile.

## Handling empty fields properly

The most common beginner-template trap is the orphaned label. The template contains
"Mobile: {mobilePhone}", the attribute is empty, and the signature shows "Mobile:" followed by
nothing. Multiplied across everyone without a work mobile, the effect is dismal.

A correct template treats the **whole line** as conditional: if the attribute is empty, the label,
the value and the separator disappear together, and the block closes up. This is behaviour to check
explicitly during acceptance testing, by previewing a deliberately incomplete profile.

The same reasoning applies to entire blocks: an "Office" line has no reason to exist for a fully
remote team.

## How a change propagates

The real benefit of synchronisation shows up during an internal move. Someone changes job title: HR
updates `jobTitle` in the directory — something they do anyway — and the signature follows on
subsequent messages. No ticket, no instructions, no chasing.

Without synchronisation, by contrast, the update depends on the employee themselves. In practice, it
does not happen: you routinely find signatures announcing a role abandoned two years ago.

The same mechanism covers a new joiner, covered in
[the onboarding article](/en/blog/new-employee-email-signature).

## Directory fields and template fields

Not everything comes from the directory, and that is deliberate. Three families coexist in a
template:

**Dynamic fields**, filled from Entra ID, specific to each employee.

**Fixed template elements** — logo, legal notices, disclaimer, brand styling — common to the whole
organisation or to a team, and locked by the administrator.

**Campaign banners**, driven by a calendar and able to target particular teams, as described on the
[campaigns](/en/campaigns) page.

This separation is what lets you allow an employee to adjust their direct number without being able
to touch the logo or the legal notices. It is configured field by field in
[the editor](/en/features).
