---
slug: "email-signature-logo-size"
title: "Weight, size and format of the logo in an email signature"
description: "The dimensions, weight and file format to respect for an email signature logo: exporting at 2x for high-density screens, PNG or JPEG, and a realistic weight budget."
keyword: "email signature logo size"
cluster: "Créer sa signature"
pubDate: 2026-03-02
summary:
  - "A display width of 140 to 200 px suits the majority of logos."
  - "The file has to be exported at twice the display size to stay sharp on high-density screens."
  - "Aim for under 30 KB for the logo and under 100 KB for all the signature's images."
  - "PNG-24 for a flat-colour logo with transparency, JPEG for a photo, never SVG."
related:
  - "logo-signature-outlook"
  - "signature-mail-html"
  - "banniere-signature-mail"
faq:
  - q: "How big should an email signature logo be?"
    a: "Between 140 and 200 px wide on display for a horizontal logo, 40 to 60 px high for a square logo or a monogram. The file itself has to be exported at twice those dimensions."
  - q: "Does SVG work in an email signature?"
    a: "No, not reliably. Most email clients do not display it, and some block it for security reasons. Convert your vector logo to PNG before using it."
  - q: "What is the maximum weight for signature images?"
    a: "Stay under 30 KB for the logo and under 100 KB for all the images, banner included. It is not a bandwidth constraint but a perception one: a slow-loading signature looks broken."
  - q: "Is a different logo needed for dark mode?"
    a: "It is desirable if your logo is black on a transparent background: it becomes invisible on a dark background. The simplest and most reliable workaround remains a logo on a slightly rounded white plate, rather than transparency."
---

The logo is the only mandatory graphic element of a company signature, and the one whose technical
characteristics are most often left to chance. Three parameters decide the outcome: dimensions,
density, and file format.

## Display dimensions

The starting constraint is the total width of the signature, which has to stay between 500 and
600 px to travel on mobile. The logo therefore cannot exceed a third of that width without
overwhelming the rest.

In practice:

| Logo type | Display width | Display height |
| --- | --- | --- |
| Horizontal logo (word + symbol) | 140 – 200 px | 32 – 56 px |
| Square logo or monogram | 48 – 64 px | 48 – 64 px |
| Group signature (two logos) | 120 px each | 32 – 40 px |

A bigger logo does not strengthen the brand: it unbalances the block and pushes the contact details
out of the first glance.

## Density: export at 2x

This is the technical point most often missed. Nearly every recent screen — laptops, tablets, phones
— displays two or more physical pixels for one logical pixel. An image exported at its display size
looks blurry there.

The rule is therefore: **export at 2x, display at half**.

For a logo shown at 180 × 48 px, produce a 360 × 96 px file, then constrain the dimensions in the
HTML:

```
<img src="logo@2x.png" width="180" height="48" alt="Company"
     style="display:block;border:0;width:180px;height:48px" />
```

The HTML attributes are essential: Outlook frequently ignores dimensions declared only in CSS, and
would then display the image at its native 360 px. The mechanism is detailed in
[HTML email signatures](/en/blog/html-email-signature), and the other causes of a broken logo in
[adding a logo to an Outlook signature](/en/blog/outlook-signature-logo).

## File format

**PNG-24** for a flat-colour logo, with transparency. It is the default choice: sharp edges, clean
transparency, and universal support.

**PNG-8** if your logo has few colours. The file is markedly lighter, but gradients and antialiased
edges degrade.

**JPEG** only for a photograph — a portrait, for instance. Never for a flat-colour logo: compression
produces visible artefacts around sharp edges.

**No SVG.** Vector would be ideal in theory — sharp at any density, very light — but most email
clients do not display it, and some block it for security reasons. Convert your vector source to
PNG.

**GIF** only for an animated banner, never for a logo. Its 256-colour palette degrades gradients.

## The weight budget

Stay under **30 KB for the logo** and under **100 KB for all the signature's images**, banner
included.

It is not a bandwidth question: nobody worries about 200 KB today. It is a perception question. A
signature's images load after the message body; if they lag, the recipient first sees a dislocated
block, with empty frames filling in gradually. The impression is of a broken message.

A lossless compression pass is generally enough to halve the weight of a PNG, with no visible
difference.

> **Worth knowing:** check the weight of the file actually served, not of your export. It happens
> that an 8 KB logo gets replaced by a 1,200 px, 400 KB version during a brand refresh, without
> anyone noticing.

## The dark mode case

More and more email clients offer a dark theme, which inverts the message background. A black logo
on a transparent background becomes invisible there.

Three approaches, in order of reliability:

**The logo on a white plate.** The file includes a slightly rounded white background. Ugly in theory,
robust in practice, and it works everywhere.

**A two-tone logo that holds on both backgrounds.** If your brand allows it — a logo with an accent
colour contrasting enough on light and dark — it is the best solution.

**Switching by media query.** `prefers-color-scheme` works in some clients only, and not in Outlook
for Windows. Treat it as a progressive enhancement, never as the main solution.

## The real issue: making sure the right file is used everywhere

All these rules are easy to respect once. The problem arises when forty people each paste their own
version of the logo: one takes the file from the printed brochure, another a screenshot of the
website, a third the old brand.

A centralised template settles that: the logo is uploaded once, hosted on a stable URL, sized
correctly, and locked. When the brand changes, you replace the file and every signature follows.
That is the job of [the Signally editor](/en/features).
