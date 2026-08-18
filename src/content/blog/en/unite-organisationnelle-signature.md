---
slug: "gmail-signature-organisational-unit"
title: "Managing signatures by Google organisational unit"
description: "Google Workspace organisational units let you assign a different signature template per subsidiary, country or department. How to structure OUs so signatures follow the organisation."
keyword: "google organisational unit signature"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-10
summary:
  - "A Google organisational unit can carry its own signature template."
  - "A user belongs to exactly one OU: assignment is therefore unambiguous, unlike with groups."
  - "Google groups remain useful for cross-cutting targeting, notably campaign banners."
  - "An OU tree modelled on the real organisation avoids most special cases."
related:
  - "signature-gmail-entreprise"
  - "signature-mail-groupe-filiales"
  - "gestion-signature-gmail"
faq:
  - q: "Can a user belong to several organisational units?"
    a: "No. In Google Workspace, each user belongs to exactly one OU. That is what makes template assignment unambiguous, unlike groups, which allow simultaneous membership."
  - q: "What is the difference between an organisational unit and a Google group?"
    a: "An OU is a hierarchical single-membership structure, used to apply settings. A group is a multiple-membership list, used more for distribution and permissions. For a base template, the OU fits; to target a cross-cutting campaign, the group is more flexible."
  - q: "Are an OU's settings inherited by its sub-units?"
    a: "Yes, by default a sub-OU inherits its parent's settings, and can override them. That is what allows a group template overridden per subsidiary."
  - q: "Do I need to restructure my OUs to deploy signatures?"
    a: "Rarely. If your tree already reflects the real organisation, it works as is. A restructure is only justified if the OUs were built on a technical criterion unrelated to the entities."
---

In Google Workspace, the organisational unit is the brick that carries settings. So it is naturally
at that level that a signature template is assigned. Used well, it settles the question of
subsidiaries, brands and countries in one go. Structured badly, it multiplies exceptions.

## Why the OU is the right level of assignment

A Google Workspace user belongs to **exactly one** organisational unit. That uniqueness is valuable:
when you attach a template to an OU, there is no ambiguity about which signature an employee should
receive.

Groups, by contrast, allow multiple memberships. A salesperson can belong to the "Sales" group, the
"France" group and the "Product committee" group: if each carried a template, you would have to
arbitrate. That is why the base template attaches to the OU, and groups serve cross-cutting
targeting — typically campaign banners.

Inheritance completes the picture: a sub-OU takes its parent's settings by default, and can override
them. So you define a group template at the top, and only override where necessary.

## A tree that reflects the real organisation

The guiding principle is simple: **the OU tree should look like the org chart, not the
infrastructure**. A typical multi-subsidiary group structure looks like this:

```
/ (root — group template)
├── /Subsidiary A     (template A, own logo and notices)
│   ├── /Sales
│   └── /Support
├── /Subsidiary B     (template B)
└── /Spain            (template A, local legal notices)
```

At each level, you only override what differs. The Sales and Support sub-OUs of subsidiary A do not
need their own template if their signature is identical: they inherit. They can, however, carry
different banners.

Foreign entities deserve attention: same logo, same colours, but different legal notices and company
registration number. That is exactly what overriding allows — see also
[multi-brand signatures](/en/blog/multi-brand-email-signatures).

## What to check before attaching templates

**The real state of the tree.** In many organisations, OUs were created as things went along,
sometimes on technical criteria — "/Users", "/Service accounts", "/Migration 2021". If that is your
case, attaching templates will expose the inconsistency. Clean up before, not after.

**Accounts out of scope.** Service accounts, shared mailboxes, meeting rooms, technical aliases:
they must not receive an employee signature. Isolate them in a dedicated OU, with no template
attached.

**Deliberate special cases.** Executive team, company officers, spokespeople: some organisations want
a variant. Create an explicit sub-OU rather than an exception handled by hand.

> **Worth knowing:** a user moved from one OU to another changes template automatically. That is the
> mechanism that makes internal moves painless — the move in the console is carried out by HR or IT
> anyway.

## Where OUs stop and groups begin

The OU answers the question "which signature" well. It answers "who carries which banner" badly,
because a campaign rarely follows the boundaries of the org chart.

A hiring campaign addresses everyone. A product campaign targets the sales teams of two subsidiaries
out of three. A webinar concerns the technical teams, wherever they sit. Those perimeters are
naturally described with groups, not with OUs.

The combination that works: **template per OU, banner per group**. Targeting is described on the
[campaigns and banners](/en/campaigns) page.

## Synchronising individual data

The template comes from the OU; the values that fill it come from the directory. Name, job title,
department, phone: those attributes are read from Google Directory, read-only, and injected into the
dynamic fields.

As on the Microsoft side, a rollout brings the real state of the directory to light: missing job
titles, inconsistent phone formats, departments filled with internal codes. Plan a cleanup pass into
the schedule — it is systematically the underestimated task, as our guide to
[moving to centralised management](/en/blog/centralised-gmail-signature-management) points out.

The full installation path is on the
[Google Workspace add-on](/en/integrations/google-workspace-gmail) page.
