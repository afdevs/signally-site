---
slug: "eu-data-residency-saas"
title: "Data sovereignty: why choose a European vendor"
description: "What data sovereignty really covers for a SaaS tool: location, applicable law, extraterritorial legislation and the questions to put to a supplier."
keyword: "eu data residency saas"
cluster: "RGPD & sécurité"
pubDate: 2026-04-20
summary:
  - "Server location and applicable law are two distinct questions that are often conflated."
  - "Hosting in Europe is not enough if the vendor falls under an extraterritorial jurisdiction."
  - "Synchronised directory data is your employees' data: its location is a compliance subject."
  - "Five written questions are enough to qualify any supplier on this point."
related:
  - "signature-mail-rgpd"
  - "securite-outil-signature-mail"
  - "comparatif-outil-signature-mail"
faq:
  - q: "Is hosting in Europe enough to guarantee sovereignty?"
    a: "Not necessarily. The physical location of the servers and the jurisdiction the vendor falls under are two distinct questions. A vendor subject to extraterritorial legislation may be required to hand over data whatever its location."
  - q: "Which data is concerned in a signature tool?"
    a: "The synchronised directory attributes — your employees' names, job titles and work phone numbers — plus the templates and campaign artwork. Email content is not, provided the tool never accesses it."
  - q: "How do we verify a supplier's claims?"
    a: "By asking in writing for the hosting provider's name, the datacentre locations, the vendor company's jurisdiction and the list of sub-processors. Those elements normally appear in the data processing agreement."
  - q: "Is sovereignty a legal obligation?"
    a: "No, the GDPR does not require hosting in any particular country. It regulates transfers outside the European Union. Sovereignty is therefore a risk-reduction choice, often demanded by IT departments and public buyers."
---

"Data hosted in the EU" appears on most European vendors' websites, without it always being clear what
the phrase covers. For an IT department building a case, two distinct questions arise — and they are
regularly conflated.

## Two different questions

**Where is the data physically?** That is location. It can be verified: hosting provider name,
datacentre regions, any replication.

**Which law applies to the entity holding it?** That is jurisdiction. It depends on the vendor
company's nationality and ownership structure, not on where its servers sit.

The confusion comes from the first question being easy to ask and the second rarely being asked. A
service whose servers are in Europe but whose vendor falls under extraterritorial legislation could,
in theory, be ordered to produce data regardless of where it is stored.

That is precisely the reasoning that led IT departments and public buyers to formulate sovereignty
requirements rather than mere location ones.

## What the GDPR requires, and what it does not

An important point for framing the discussion: **the GDPR does not require hosting in any particular
country**. It regulates transfers of data outside the European Union, subjecting them to appropriate
safeguards.

Hosting inside the EU is therefore not a legal obligation but a **risk reduction**: with no transfer
outside the EU, the question of safeguards no longer arises, and the service falls under European law
alone. That is simpler to document and more solid to defend.

The general GDPR framework applying to signatures is covered in
[email signatures and the GDPR](/en/blog/email-signature-gdpr).

## Which data is genuinely at stake

For a signature management tool, the scope is bounded and worth setting out explicitly.

**The synchronised directory attributes**: first name, surname, job title, department, work address,
phone. That is personal data belonging to your employees, which is enough to make it a subject.

**Templates and artwork**: logos, banners, models. Low sensitivity, but they are brand assets.

**Click statistics**: aggregated by campaign and by team in a well-designed setup, they should not be
named.

**What should not be there**: the content of your emails. A properly designed tool never accesses it —
see [can a signature tool read your email](/en/blog/email-signature-tool-security).

That restricted scope is itself an argument: there is little to protect, provided the little in
question is handled well.

## The five questions to ask in writing

They are enough to qualify any supplier, and the answers have to be in writing.

1. **What is the hosting provider's name and where are the datacentres?** A precise answer, not "in
   Europe".
2. **What is the vendor company's jurisdiction?** Nationality, head office, and ownership structure if
   it could pull the company under another legal system.
3. **Which sub-processors are involved?** The list has to appear in the processing agreement. That is
   often where a non-EU third-party service shows up.
4. **Is there replication or backup outside the EU?** A rarely asked question, where the answers
   sometimes surprise.
5. **What happens to the data at the end of the contract, and within what timeframe?** Reversibility is
   part of sovereignty: data you cannot retrieve or have deleted remains captive.

> **Worth knowing:** ask for these elements before the sales demo, not after. A supplier who takes
> three weeks to answer question 3 has already told you something.

## What it changes in practice

For many organisations, these questions are not theoretical: they determine whether the case is
approved.

**In the public and semi-public sector**, location requirements are frequently written into tender
specifications.

**In regulated sectors** — healthcare, banking, insurance, defence — security reviews systematically
include this dimension.

**In large groups**, procurement and IT apply scorecards that include these criteria, even with no
regulatory obligation.

That is also why this point appears in the
[tool comparison grid](/en/blog/email-signature-software-comparison): it is a discriminating criterion,
easy to check, and one where vendors' answers genuinely differ.

## Signally's position

Our data — synchronised directory, templates, campaign artwork — is hosted on infrastructure located
in France, and we do not transfer data outside the European Union as part of the service. Signally
acts as a processor within the meaning of Article 28, with the corresponding processing agreement.

The detail, including what we do not do, is on our [security and GDPR](/en/security-gdpr) page. The
precise contractual elements — hosting provider name, exact location, certifications, downloadable DPA
— are provided on request as part of a security review.
