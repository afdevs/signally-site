---
slug: "deploy-email-signature-microsoft-365"
title: "Deploying a signature from the Microsoft 365 admin center"
description: "The exact path through the Microsoft 365 admin center: admin consent, deploying the add-in from Integrated apps, a pilot group, then rolling out to the whole organisation."
keyword: "deploy email signature microsoft 365"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-24
summary:
  - "Deployment happens from \"Integrated apps\" in the Microsoft 365 admin center."
  - "Read-only admin consent on the directory is enough: no access to message content is requested."
  - "Deployment can be limited to a pilot group, then extended to the whole organisation."
  - "The add-in takes from a few minutes to a few hours to reach machines, depending on the client."
related:
  - "signature-mail-outlook-entreprise"
  - "signature-entra-id-azure-ad"
  - "add-in-ou-regle-de-transport-exchange"
faq:
  - q: "What role is needed to deploy the add-in?"
    a: "Global administrator, or a role holding integrated-apps management permissions. Consent on behalf of the organisation requires a global administrator."
  - q: "How long does the add-in take to appear for users?"
    a: "Count a few minutes on Outlook Web and up to a few hours on desktop clients, while the manifest is fetched. Restarting Outlook speeds things up."
  - q: "Can the add-in be removed after deployment?"
    a: "Yes. Removal happens from the same \"Integrated apps\" section. Signatures then stop being inserted, with no effect on messages already sent."
  - q: "Does deployment change my outbound routing configuration?"
    a: "No. An add-in plays no part in transport: no connector, no mail flow rule, no rerouting. Your messages keep leaving exactly as before."
---

Deploying a company signature on Microsoft 365 plays out across a handful of admin center screens.
The technical part is short — about fifteen minutes — but it assumes you have settled a few
questions beforehand. Here is the full path, in order.

## Step 1 — Connect the tenant

Before deploying anything, the application has to be authorised on your tenant. The connection is
made from Signally, which redirects to the Microsoft Entra ID consent screen.

A global administrator grants consent **on behalf of the organisation**. The permissions requested
cover only reading the directory attributes the signature needs: first name, last name, job title,
department, work phone number, reporting line. No mail-reading permission is required, and none is
requested.

This is the point your security officer will examine first. The consent screen lists the
authorisations explicitly: it is the most direct evidence of the real scope. Our approach is set out
on the [security and GDPR](/en/security-gdpr) page.

## Step 2 — Deploy the add-in

In the Microsoft 365 admin center, go to **Settings → Integrated apps**, then "Get apps". Search for
the add-in, select it and start the deployment.

The next screen asks for the scope. Three options:

1. **Specific users or groups** — the recommended choice for a first deployment.
2. **Entire organisation** — once you are satisfied.
3. **Just me** — useful for an individual test even before the pilot.

Pick an existing Microsoft 365 group, or create one for the occasion with about ten representative
people: someone on Outlook for Windows, someone on Mac, someone who writes mostly from their phone.

> **Worth knowing:** propagation is not instant. On Outlook Web, the add-in appears within minutes.
> On desktop clients, the manifest can take several hours to be fetched; restarting Outlook speeds
> things along. Warn your pilot group to avoid a wave of premature reports.

## Step 3 — Map templates to groups

Deploying the add-in makes the mechanism available; it does not yet say which signature each person
should get. That association happens on the Signally side, by mapping each Microsoft 365 group — or
each unit of your directory — to its template.

This is where the split matters. A simple organisation gets by with a single template. As soon as
there are several brands, several countries, or sales teams carrying different banners from support,
plan a variant per group. The principle is described on the
[signature editor](/en/features) page.

Someone who belongs to several groups receives the template of the most specific group: check your
priority order if your groups overlap.

## Step 4 — Validate with the pilot group

Let it run for a week. Ask the pilot to check three specific things, rather than a vague "does it
work":

- the signature does appear when composing a **new** message and a **reply**;
- the personal fields are correct — this is where badly filled directory data comes to light;
- the rendering is clean for an external recipient, particularly on Gmail.

That last point is the most useful: send a message to a personal address and look at what actually
arrives.

## Step 5 — Go wide

Return to "Integrated apps", change the deployment scope and switch to the entire organisation. No
new confirmation is asked of users.

From then on, the system maintains itself. A new joiner who appears in the directory and belongs to
a mapped group receives their signature with no intervention — neither theirs nor IT's. That is the
mechanism described in the article on
[synchronising with Entra ID](/en/blog/entra-id-email-signature-sync).

## The comparison to keep in mind

At no point does this path touch your transport configuration. No connector, no mail flow rule, no
change to outbound routing. That is the fundamental difference with the Exchange transport rule
approach, whose implications are analysed in
[add-in or transport rule](/en/blog/outlook-add-in-vs-exchange-transport-rule).
