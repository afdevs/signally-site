---
slug: "email-signature-gdpr"
title: "Email signatures and the GDPR: what the regulation actually says"
description: "The data in a signature is personal data. What that means in practice: legal basis, minimisation, processing arrangements and data subject rights."
keyword: "email signature gdpr"
cluster: "RGPD & sécurité"
pubDate: 2026-04-14
summary:
  - "An employee's name, job title and work phone number are personal data under the GDPR."
  - "Processing generally rests on the employer's legitimate interest, not on the employee's consent."
  - "The minimisation principle requires synchronising only the fields actually displayed."
  - "A signature vendor acts as a processor: a data processing agreement is required."
related:
  - "securite-outil-signature-mail"
  - "hebergement-donnees-france-saas"
  - "mentions-legales-email-professionnel"
faq:
  - q: "Is the data in a signature personal data?"
    a: "Yes. The name, job title, work email address and work phone number of an identifiable person fall under the GDPR, even though they are professional data."
  - q: "Is employee consent required to display their contact details?"
    a: "Consent is rarely the legal basis chosen in an employer-employee relationship, because the relationship of subordination undermines how freely it is given. Processing generally rests on legitimate interest or on performance of the employment contract. Have the legal basis qualified by your DPO."
  - q: "Is a signature vendor a controller or a processor?"
    a: "A processor, within the meaning of Article 28: it processes data on behalf of your company, which remains the controller. That requires a data processing agreement setting out purposes, retention periods and security measures."
  - q: "Should signatures be entered in the record of processing activities?"
    a: "The corresponding processing — managing signatures and the associated directory — belongs in the record, generally attached to the wider HR management processing. Check with your DPO how it is already covered."
---

An email signature displays the name, job title and professional contact details of an identifiable
person. That is personal data, and processing it falls within the scope of the GDPR. That does not
make the subject complicated, but it does require a few checks many organisations have never made.

> This article sets out the general framework. It does not replace the analysis of your DPO or your
> counsel, who alone can qualify your situation.

## What falls under the GDPR in a signature

The regulation applies to data allowing a natural person to be identified, directly or indirectly.
The professional nature of the data does not take it out of scope.

In a signature, that covers: first name and surname, job title, work email address, work phone number,
department and site, and possibly a photograph.

The fact that this information is meant to be distributed changes nothing about its nature: it remains
personal data, processed by your organisation.

## The legal basis for processing

This is the question that comes up most: do employees have to be asked for their agreement?

In an employer-employee relationship, consent is a fragile legal basis. The relationship of
subordination makes it hard to demonstrate that it is freely given, and consent that can be withdrawn
at any time sits badly with a company-wide arrangement.

The bases generally chosen are **performance of the employment contract** — the employee has to be
identifiable in their professional correspondence — or the employer's **legitimate interest** in
maintaining consistent communication. The precise qualification is your DPO's call.

The photograph is a different case: displaying it is rarely necessary to perform the contract, and
consent is more often relevant there. That is one more argument for leaving the photo optional rather
than imposing it through the template.

## The minimisation principle, applied concretely

Article 5 requires limiting the data processed to what is necessary for the purpose. For a signature,
that translates very simply: **synchronise only the fields that actually appear in the signature**.

If your template displays name, job title, department and mobile, there is no reason to pull the hire
date, the payroll number or the line manager — even if the directory holds them and even if the API
offers them.

It is a verifiable point, and one that does get verified during compliance reviews. The exact scope we
synchronise is on our [security and GDPR](/en/security-gdpr) page.

## The relationship with the vendor: processing

A signature management tool processes personal data on behalf of your company. It is therefore a
**processor** within the meaning of Article 28, with your company remaining the controller.

That qualification carries concrete obligations. A data processing agreement has to be concluded,
setting out the purposes, the categories of data, the retention periods, the security measures and
what happens to the data at the end of the contract. The list of any sub-processors — the hosting
provider in particular — has to be disclosed. And the vendor has to assist you if rights are exercised
or an incident occurs.

Ask for those elements in writing before contracting, whoever the supplier is.

## Data subject rights

An employee can exercise their rights over data concerning them. In practice, for a signature, two
rights genuinely come up.

**The right to rectification.** A wrong job title, an outdated number. The operational answer is to
correct the directory: the signature follows. That is a direct benefit of synchronisation — see
[synchronising signatures with the directory](/en/blog/entra-id-email-signature-sync).

**The right to object.** It can bear on a particular element, typically the photograph or a personal
mobile number. Hence the value of planning optional fields rather than an entirely rigid template.

Complete erasure is more theoretical: an employee cannot object to their name appearing in their
professional communications, since that identification is part of performing their contract.

## The questions to put to a supplier

Five questions, which cover the essentials of a compliance review:

1. Exactly which data is synchronised, and can the scope be restricted?
2. Is email content accessed, at any point? — see
   [can a signature tool read your email](/en/blog/email-signature-tool-security).
3. Where is the data hosted, and under which jurisdiction? — see
   [data sovereignty](/en/blog/eu-data-residency-saas).
4. Is a data processing agreement provided, and which sub-processors does it name?
5. What happens to the data at the end of the contract, and within what timeframe?

The answers have to be in writing. A supplier who answers these questions verbally does not protect
you.

## What is not a GDPR subject

To end with a useful clarification: the **campaign banner** inserted in a signature does not constitute
processing of the recipient's data. You are not adding them to a list, you are not profiling them; you
are displaying an image in a message your employee is sending them anyway.

The nuance nonetheless deserves an opinion from your DPO if your banners become purely promotional and
if you set up named click tracking — see the [campaigns](/en/campaigns) page.
