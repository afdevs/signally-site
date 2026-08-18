---
slug: "outlook-signature-logo"
title: "Adding a logo to an Outlook signature without breaking it"
description: "Blurry logo, image replaced by a red cross, wild resizing: the four real causes of a broken logo in an Outlook signature, and the method that makes it display everywhere."
keyword: "outlook signature logo"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-20
summary:
  - "A logo pasted from Word or Paint is embedded as a local attachment: it disappears for the recipient."
  - "Outlook ignores CSS sizing: dimensions must be carried by the HTML width and height attributes."
  - "A logo has to be exported at twice its display size to stay sharp on high-density screens."
  - "The image must be hosted on a public, stable URL, over HTTPS."
related:
  - "taille-logo-signature-mail"
  - "signature-mail-html"
  - "signature-mail-outlook-entreprise"
faq:
  - q: "Why does my logo show up as a red cross for the recipient?"
    a: "The image points at an unreachable resource: a local file path, an internal network drive, or a URL behind authentication. The recipient, outside your network, cannot load it. Host the logo on a public HTTPS URL."
  - q: "Should the logo be embedded as an attachment or linked?"
    a: "Linking to a public URL is preferable in a company signature: the message stays light, the logo updates everywhere at once, and it does not show up as a stray attachment in the recipient's inbox."
  - q: "Why is my logo blurry on a Retina screen?"
    a: "It is being displayed at its native size. Export the image at twice the display dimensions — 360 px wide for a logo shown at 180 px — then constrain the size with the width and height attributes."
  - q: "Are images blocked by default in Outlook?"
    a: "Outlook can block remote image loading for an unknown sender. That is why a signature must never rely on an image alone: the name, job title and contact details have to stay as text."
---

The logo is the part of a signature that breaks most often, and for almost always identical reasons.
On Outlook in particular, the differences between the Windows, Mac, Web and mobile versions amplify
every approximation in the file or the code. Here are the four real causes, and what to do instead.

## Cause 1: an image pasted from a local file

This is the most frequent. Someone opens their logo in Word or in the file explorer, copies it, and
pastes it into the signature window. Outlook then embeds it as a local attachment, with a `cid:`
reference or a `file://` path.

On the sender's side everything looks normal. On the recipient's side the image is missing —
replaced by an empty frame or a red cross — because the referenced resource only exists on the
original machine. The same problem occurs with a logo hosted on an internal network drive or an
intranet behind authentication.

The rule is simple: **the logo must live on a public URL, over HTTPS, reachable without signing in**.
A CDN, a storage bucket, or the hosting provided by your signature tool.

## Cause 2: size set in CSS rather than in HTML attributes

Outlook for Windows uses the Microsoft Word rendering engine, which ignores a good deal of CSS —
including, very often, `width` and `height` declared in a `style` attribute. The image then displays
at its native size: a 1200 px wide file takes up the full width of the message.

The fix is to carry the dimensions on the **HTML attributes** of the tag, not only in CSS:

```
<img src="https://cdn.example.com/logo.png"
     width="180" height="48"
     alt="Company name"
     style="display:block;border:0;width:180px;height:48px" />
```

Both are useful: the attributes for Outlook, the CSS for modern clients. The `display:block` avoids
the stray space under the image in some clients, and `border:0` removes the blue outline when the
logo is clickable.

## Cause 3: a file exported at display size

On a high-density screen — nearly every recent laptop and every mobile — an image displayed at its
native size looks blurry. The logo has to be exported at **twice** its display size, then constrained
by the attributes.

For a logo shown at 180 × 48 px, export a 360 × 96 px file. The weight stays modest if the format is
well chosen: PNG-24 with transparency for a flat-colour logo, or SVG converted to PNG if your tool
does not handle vectors. Weight and format are covered in the article on
[logo size in a signature](/en/blog/email-signature-logo-size).

## Cause 4: a signature that is entirely an image

Some organisations export the whole signature — name, job title, contact details, logo — as a single
image. That is a bad idea for three cumulative reasons.

First, Outlook blocks remote image loading by default for unknown senders: the recipient sees an
empty rectangle where your contact details should be. Second, no text is selectable or copyable:
there is no way to grab a phone number. Third, screen readers have nothing to read beyond the `alt`
attribute.

The name, job title, phone and address must stay HTML text. Only the logo, the social icons and the
campaign banner are images. The general constraints of email HTML, which drive this behaviour, are
detailed in [HTML email signatures](/en/blog/html-email-signature).

> **Worth knowing:** always fill in an `alt` attribute on the logo, with the company name. It shows
> when the image is blocked and it is read out by assistive technology.

## The method that holds up at scale

On a single machine, applying the rules above is enough. Across dozens of mailboxes, the problem is
no longer technical but organisational: every employee who re-pastes their logo by hand reintroduces
the four mistakes.

That is precisely what a centralised template settles. The logo is uploaded once, hosted on a stable
URL, sized correctly in the template, and locked: the employee can neither replace it nor resize it.
When the brand changes, you swap the file and every signature follows. That is the job of the
[Signally signature editor](/en/features), which generates HTML already compliant with Outlook's
constraints.

Before any rollout, test the rendering on at least Outlook for Windows, Outlook Web and Outlook
mobile: those are the three environments where discrepancies show up first.
