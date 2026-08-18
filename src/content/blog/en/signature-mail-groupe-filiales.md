---
slug: "multi-brand-email-signatures"
title: "Multi-subsidiary and multi-brand signatures: how to organise them"
description: "A group with several legal entities cannot make do with a single template. How to structure templates by subsidiary, brand and country without multiplying the maintenance load."
keyword: "multi brand email signatures"
cluster: "Gestion & gouvernance"
pubDate: 2026-03-18
summary:
  - "Legal notices follow the legal entity sending the message, not the group's head office."
  - "One template per entity, inherited from a common structure, limits the maintenance load."
  - "The brand endorsement question — subsidiary alone or subsidiary plus group — has to be settled before design."
  - "Steering stays centralised in a single administration account, with roles per entity."
related:
  - "unite-organisationnelle-signature"
  - "signature-mail-bilingue"
  - "gouvernance-de-marque-email"
faq:
  - q: "Do we need one template per subsidiary?"
    a: "Yes as soon as there are several legal entities, because the legal notices differ. Those templates can, however, share the same structure and differ only in the logo, the notices and possibly the accent colour."
  - q: "Should the group logo appear alongside the subsidiary's?"
    a: "That depends on your brand strategy. A visible endorsement — \"a company of the X group\" — strengthens the group; no endorsement preserves the subsidiary's perceived autonomy. It is a management decision, not a technical one."
  - q: "Can all subsidiaries be managed from a single account?"
    a: "Yes. A single administration account can carry as many templates as needed, with roles delegated per entity if you want each subsidiary to manage its own banners."
  - q: "How do we handle someone attached to two entities?"
    a: "You have to settle on a primary entity, whose legal notices they carry. Genuine dual attachment is rare and is handled case by case with an explicit variant."
---

A group of several companies cannot treat its signatures as a single business would. It is not a
matter of aesthetics but of law: mandatory notices follow the entity sending the message. What
remains is organising that without creating an unmanageable maintenance load.

## The starting point: the map of entities

Before any design, draw up the real list. It is often longer than the communications department
imagines, and it does not always match the operational org chart.

Three axes overlap, and they have to be distinguished:

**Legal entities.** Each has its company name, its registration, its head office address. That axis
governs the legal notices.

**Commercial brands.** One entity can operate several, or several entities can share a brand. That
axis governs the logo and the colours.

**Countries.** They govern the language and local obligations — see
[bilingual email signatures](/en/blog/bilingual-email-signature).

A three-column table is enough to map the whole thing, and it generally reveals a few historical
inconsistencies better dealt with before than after.

## The endorsement decision

This is the question technology does not settle and management must: does a subsidiary's signature
mention the group?

**Visible endorsement.** The subsidiary's logo, with a "a company of the X group" line or the group
logo in second position. Strengthens group awareness, useful when the subsidiary is little known and
the group is.

**No endorsement.** The subsidiary appears alone. Preserves its perceived autonomy, relevant when the
brands address different, even competing, markets.

**Asymmetric endorsement.** Some subsidiaries endorse, others do not. It is frequent after an
acquisition, and perfectly defensible — provided it is a decision and not an oversight.

That decision shapes the template structure: better to take it beforehand.

## Structuring templates without multiplying them

The trap would be to create an independent template per entity, then have to replicate every change
twelve times.

The right approach is to define a **common structure** — the layout, the typographic hierarchy, the
order of information, the width — and to vary only three elements:

| Element | Varies by |
| --- | --- |
| Logo | Brand |
| Legal notices | Legal entity |
| Accent colour | Brand |
| Language | Country |
| Structure, hierarchy, width | Never — common to the whole group |

A structural change then propagates everywhere; only a brand-specific styling change touches an
isolated template.

On the Google Workspace side, inheritance between organisational units embodies exactly that
principle — see
[managing signatures by organisational unit](/en/blog/gmail-signature-organisational-unit).

## Attaching employees

Each employee has to be attached to one entity, and one only. That attachment determines their
template, and therefore their legal notices.

In most directories, the attribute already exists — `companyName` on the Microsoft side, the
organisational unit on the Google side. It is simply badly filled, because nobody was using it.
Making it reliable is part of the directory cleanup described in
[standardising signatures](/en/blog/standardise-email-signatures).

Genuine dual attachment — someone shared between two entities — is rare. Settle on a primary entity
rather than inventing a mechanism for a handful of people.

> **Worth knowing:** check the behaviour of send-as aliases. Should an employee who sometimes writes
> from another brand's address carry the corresponding signature? The answer is often yes, and it
> requires explicit configuration.

## Centralise steering, delegate campaigns

The symmetrical error to the single template would be letting each subsidiary buy its own tool. You
would lose structural consistency, group visibility and the pricing benefit.

The model that works: **a single administration account**, carrying every template, with roles
delegated per entity. Group management keeps control of the structure and the templates; each
subsidiary steers its own banners over its own scope — see the [campaigns](/en/campaigns) page.

It is also what lets a group IT department answer a simple but usually unanswerable question: how
many different signatures are actually circulating under our colours, and which are current? That
point falls under brand governance, covered in
[why the signature is your weak point](/en/blog/email-brand-governance).
