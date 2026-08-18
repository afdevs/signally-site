---
slug: "html-email-signature"
title: "HTML email signatures: the compatibility rules to respect"
description: "Signature HTML is not website HTML. Tables, inline styles, dimensions as attributes: the rules that make a signature render the same on Outlook, Gmail and mobile."
keyword: "html email signature"
cluster: "Créer sa signature"
pubDate: 2026-02-26
summary:
  - "Outlook for Windows renders HTML with the Microsoft Word engine: much of modern CSS is ignored there."
  - "Layout has to rely on tables, not on flexbox or grid."
  - "Styles must be inline: stylesheets and <style> tags are often stripped."
  - "Image dimensions must appear as HTML attributes, not only in CSS."
related:
  - "logo-signature-outlook"
  - "creer-une-signature-mail"
  - "taille-logo-signature-mail"
faq:
  - q: "Why can't flexbox be used in an email signature?"
    a: "The Outlook for Windows rendering engine, inherited from Microsoft Word, supports neither flexbox nor grid. Elements then stack vertically, which destroys any column layout. Tables remain the only reliable positioning mechanism."
  - q: "Do <style> tags work in a signature?"
    a: "Not reliably. Many clients strip the <style> block while sanitising HTML, and a signature pasted into a configuration field generally loses everything that is not inline. Styles have to be carried by style attributes on each element."
  - q: "Can a custom font be used?"
    a: "No, not reliably: web fonts do not load in most email clients. Use a system font and declare a fallback stack."
  - q: "Does this HTML have to be written by hand?"
    a: "It does not need to be, and it is inadvisable: the classic mistakes (unclosed tables, forgotten styles, missing dimensions) are hard to spot. A visual editor that generates already-compliant HTML avoids that work."
---

Email HTML does not obey the same rules as website HTML. What works in a modern browser can fall
apart in Outlook, and code that is perfectly valid by W3C standards can produce an unusable result.
Here are the real constraints, and their reasons.

## Why these constraints exist

Email clients do not all use a web rendering engine. Outlook for Windows — in its classic version,
still very present in companies — renders HTML with the **Microsoft Word** engine. Word was never
designed for this, and its CSS support stops at a limited subset.

Webmail clients, for their part, sanitise incoming HTML for security reasons: they strip scripts,
often `<style>` tags, sometimes entire attributes.

A signature therefore has to render correctly on the lowest common denominator. The new Outlook
improves the situation — see [what changes in 2026](/en/blog/new-outlook-signature) — but as long as
the old client circulates in company estates, the constraint remains.

## Rule 1 — Tables for layout

`flexbox` and `grid` are not supported by the Word engine. Elements then stack vertically and any
column layout disappears.

Positioning therefore has to rely on tables:

```
<table cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding-right:16px;vertical-align:top">
      <img src="..." width="120" height="40" alt="Company" />
    </td>
    <td style="vertical-align:top">
      <div style="font-weight:700">First name Surname</div>
    </td>
  </tr>
</table>
```

Three details matter. `cellpadding="0" cellspacing="0" border="0"` neutralises default spacing, which
varies from client to client. `role="presentation"` tells screen readers the table is for layout and
not for data. And `vertical-align` has to be explicit: defaults differ.

## Rule 2 — All styles inline

An external stylesheet is unreachable. A `<style>` tag is frequently stripped. And when a signature
is pasted into a client's configuration field, everything not carried by a `style` attribute
disappears.

Each property therefore has to be declared on the element concerned. It is verbose, redundant, and
there is no alternative.

## Rule 3 — Image dimensions as attributes

Outlook frequently ignores `width` and `height` declared in CSS. The image then displays at its
native size: a 1,200 px file takes up the whole width of the message.

Carry the dimensions on the **HTML attributes**, duplicating in CSS for modern clients:

```
<img src="https://cdn.example.com/logo.png"
     width="180" height="48" alt="Company"
     style="display:block;border:0;width:180px;height:48px" />
```

`display:block` removes the stray space under the image; `border:0` takes away the blue outline when
it is clickable. The detail is in
[adding a logo without breaking it](/en/blog/outlook-signature-logo).

## Rule 4 — System fonts, with a fallback stack

Web fonts do not load reliably. Declare a realistic stack:

```
font-family: Arial, Helvetica, sans-serif;
```

Choosing the substitute yourself beats letting the client choose it.

## Rule 5 — Absolute units

Relative units — `rem`, `em`, percentages on text sizes — behave irregularly. Use pixels for font
sizes, inner padding and image dimensions. Percentages remain acceptable on table widths.

## Rule 6 — Explicit links

A link has to carry its full protocol, including for the phone:

```
<a href="tel:+447700900123" style="color:#1A1A1A;text-decoration:none">+44 7700 900123</a>
```

Without an explicit `style`, some clients apply their own underlined blue, which will clash with your
brand.

## Rule 7 — Content that works without images

Remote images are blocked by default for unknown senders. If your signature relies on an image, the
recipient sees an empty rectangle where your contact details should be.

The name, job title, phone and legal notices have to stay as text. And every image carries a useful
`alt` — the company name for the logo, the network name for an icon.

> **Worth knowing:** always test with images disabled. It is the fastest test for whether your
> signature remains usable in the worst case.

## Should this HTML be written by hand?

It can be, and it is a poor use of time. The classic mistakes — an unclosed table, a forgotten
`cellspacing`, a missing dimension, a style lost in a copy-paste — are hard to spot by reading and
only show up on certain clients.

A visual editor that directly generates HTML compliant with these rules, and previews the rendering
on Outlook for Windows, Outlook Web, Gmail, Apple Mail and mobile, avoids most of the problem. That
is what [the Signally editor](/en/features) does, and access is free.

The gain is not only time: it is reliability. A centralised template guarantees the rules above are
respected **by every signature in the organisation**, including those of people who have never heard
of `cellpadding`.
