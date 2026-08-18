---
slug: "email-signature-banner"
title: "Email signature banners: formats, weight and best practice"
description: "The dimensions, weight and design rules for an email signature banner: usable width, screen density, readability at small size and the clickable area."
keyword: "email signature banner"
cluster: "Campagnes & bannières"
pubDate: 2026-04-01
summary:
  - "The usable width of a banner is 500 to 600 px, constrained by mobile screens."
  - "The file has to be exported at twice its display size to stay sharp."
  - "Aim for under 60 KB for a static banner, under 150 KB for an animated GIF."
  - "One message, one action: a banner that says two things delivers neither."
related:
  - "gif-anime-signature-mail"
  - "taille-logo-signature-mail"
  - "idees-campagne-signature-mail"
faq:
  - q: "What size should an email signature banner be?"
    a: "Between 500 and 600 px wide on display, with a height of 80 to 120 px. The file has to be exported at twice those dimensions to stay sharp on high-density screens."
  - q: "What is the maximum weight for a banner?"
    a: "Under 60 KB for a static banner and under 150 KB for an animated GIF. Beyond that, display lags and the message looks broken at the moment the recipient opens the email."
  - q: "Should the banner include a button?"
    a: "A visual element that looks like a button helps signal the banner is clickable, but it is not a real button: it is an image. The whole banner has to be clickable, not just the fake button area."
  - q: "How much text can a banner carry?"
    a: "A headline of five to eight words, one line of detail, and an action label. Beyond that, the text becomes unreadable at the real display size in an email."
---

The banner is the part of a signature that carries a temporary message: an event, a hiring drive, a
release. Its technical constraints resemble the logo's, but its design constraints are those of an
advertising asset seen for one second.

## Dimensions

The banner's width is bounded by the signature's, which is itself bounded by mobile screens.

| Parameter | Recommended value |
| --- | --- |
| Display width | 500 – 600 px |
| Display height | 80 – 120 px |
| Ratio | about 5:1 |
| Exported file | twice the display dimensions |

A taller banner encroaches on the message and gives the impression of an advertising insert. A banner
narrower than the signature creates an ungainly visual offset: align its width with the block's.

As with the logo, the export is at 2x — 1,200 × 200 px for a 600 × 100 display — with the dimensions
carried by the **HTML attributes** `width` and `height`, failing which Outlook shows the image at its
native size. The detail is in [HTML email signatures](/en/blog/html-email-signature).

## Weight

Stay under **60 KB** for a static banner, under **150 KB** for an animated GIF.

The issue is not bandwidth but perceived rendering. An email's images load after the text: a heavy
banner appears late, and the recipient first sees an empty frame under the signature. The impression
is of a badly built message.

Lossless PNG compression generally halves the weight with no visible difference. For a photographic
visual, JPEG at quality 80 is a good compromise.

## Design rules

**One message.** This is the most broken rule. A banner announcing a trade show *and* a white paper
*and* a hiring drive delivers none of them. If you have three messages, run three successive
campaigns.

**A short headline.** Five to eight words. At the real display size — often reduced by the email
client — a long headline becomes unreadable.

**An explicit action.** "Sign up", "See openings", "Download the report". The label has to say what
happens on click.

**Sufficient contrast.** The banner is seen in a second, sometimes on a phone screen outdoors. Dark
text on a light background, or the reverse, but no grey on grey.

**Space around the text.** Inner padding of at least 16 px. Text stuck to the edge looks accidental.

## The clickable area

The whole banner has to be clickable, not only the area that looks like a button. It is an image
wrapped in a link:

```
<a href="https://example.com/tradeshow" style="display:block;text-decoration:none">
  <img src="https://cdn.example.com/banner@2x.png"
       width="600" height="100"
       alt="Vivatech — Hall 2, stand B34. Book a meeting."
       style="display:block;border:0;width:600px;height:100px" />
</a>
```

Two details matter. The `alt` attribute has to describe the message **and** the action: it is what a
recipient whose client blocks images will see, and what a screen reader will read. And `border:0`
removes the blue outline some clients add around a linked image.

> **Worth knowing:** use a trackable destination URL, distinct per campaign. Without one, you will not
> be able to attribute traffic to the right banner — see
> [measuring ROI](/en/blog/email-signature-roi).

## The animation case

An animated GIF draws the eye more, but some versions of Outlook display only its first frame. The
resulting rule is absolute: **the essential message has to be on the first frame**, with the
animation only enriching it.

The subject, including weight and loop-count questions, is covered in
[animated banners in a signature](/en/blog/animated-gif-email-signature).

## What separates a good banner from a good advert

A difference of register deserves emphasis. The banner appears under a person's signature, in a
professional message addressed to someone who knows them. A heavy advertising tone jars there and
reflects back on the sender.

The banners that work best look less like advertising than like useful information: a trade show
date, an open role, an available report. The catalogue of seasonal formats is in
[12 campaign ideas](/en/blog/email-signature-campaign-ideas), and the general framing of the channel
in [email signature marketing](/en/blog/email-signature-marketing).

Finally, check the rendering before broadcasting. A banner that is perfect in a design tool can appear
cropped or resized in an email client: the multi-client preview in [the editor](/en/features) avoids
the nasty surprise after sending to three hundred people.
