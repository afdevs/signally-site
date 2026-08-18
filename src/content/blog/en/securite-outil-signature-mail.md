---
slug: "email-signature-tool-security"
title: "Can a signature tool read your email? The technical answer"
description: "Depending on its architecture, a signature tool either does or does not access your message content. The difference between a client-side add-in, a transport rule and an SMTP relay, explained for a security review."
keyword: "email signature tool security"
cluster: "RGPD & sécurité"
pubDate: 2026-04-22
summary:
  - "Three architectures exist, and they do not have the same access scope."
  - "A client-side add-in writes into the message being composed, without reading or storing it."
  - "A transport rule keeps the message inside your own mail server, with no transit through the vendor."
  - "An SMTP relay routes your email through a third party: that is the case to examine closely."
related:
  - "signature-mail-rgpd"
  - "hebergement-donnees-france-saas"
  - "add-in-ou-regle-de-transport-exchange"
faq:
  - q: "Can an add-in read the content of my emails?"
    a: "The permissions an add-in requests are declared in its manifest and shown at admin consent. A signature add-in requests write access to the message being composed and read access to directory attributes, not read access to the mailbox."
  - q: "How do I check what an add-in actually requests?"
    a: "Your identity provider's consent screen lists the requested permissions before approval. It is the most direct evidence of the scope: it comes from Microsoft or Google, not from the vendor."
  - q: "Does my email travel through the vendor's servers?"
    a: "With an add-in, no: the message leaves your tenant for its recipient without passing through a third party. With an SMTP relay, yes, and that is the point to examine first in a security review."
  - q: "What happens if the tool is compromised?"
    a: "The scope of the risk is the data held. For an add-in, that covers the synchronised directory and the templates, not message content, which was never accessible."
---

It is the first question in a security review, and it is legitimate: does a tool that acts on your
email have access to its content? The answer depends entirely on the architecture chosen, and the
three architectures on the market do not have the same scope.

## Architecture 1 — The client-side add-in

The add-in runs inside the email client, at the moment the user writes their message. It inserts an
HTML block into the body of the current message.

The access scope matches the permissions declared in the add-in's manifest: writing into the item
being composed, and reading the directory attributes needed to fill the fields.

Two properties follow, and they are the ones that count in a security review:

**The message does not travel through the vendor.** Insertion happens on the machine, in the compose
window. The message then leaves your Microsoft or Google tenant for its recipient, through your usual
routing, with no detour.

**The mailbox is not read.** The add-in acts on a message being composed, not on the inbox, the
history or the archives.

That is Signally's architecture, described on the
[Microsoft 365 add-in](/en/integrations/microsoft-365-outlook) page.

## Architecture 2 — The transport rule

The signature is appended by your own mail server — Exchange Online, or Google Workspace's compliance
service — during delivery.

Here the vendor plays no part at all in processing the message: it supplies the footer content, your
server applies it. No access, no transit.

In exchange, this architecture has significant functional limits — the sender never sees their
signature, threads stack blocks, encrypted messages escape it — detailed in
[add-in or transport rule](/en/blog/outlook-add-in-vs-exchange-transport-rule).

## Architecture 3 — The SMTP relay

This is the one that calls for close examination. The message leaves your server, travels through the
vendor's infrastructure which adds the signature, then continues to its recipient.

This architecture implies by construction that **the complete content of your messages passes through
a third party** — body, attachments, recipients. It also implies a change to your outbound routing,
with the associated consequences for deliverability and for your SPF and DKIM configuration.

It is not illegitimate in itself, and some providers implement it seriously. But it changes the nature
of the question put to your security officer: it is no longer about authorising a component, it is
about inserting a third party into your delivery chain.

## How to verify, rather than believe

Three concrete checks that do not rest on the vendor's word.

**The consent screen.** When connecting the tenant, your identity provider — Microsoft Entra ID or
Google — displays the exact list of permissions requested. That list comes from Microsoft or Google,
not from the vendor. It is the most direct evidence of the scope.

**The API documentation.** The permissions requested correspond to scopes publicly documented by
Microsoft and Google. You can check what each one covers.

**The routing configuration.** If installation requires changing your connectors, your MX records or
your SPF, you are on a relay architecture. If it touches nothing in the routing, you are not.

> **Worth knowing:** have the consent screen captured during installation and attach it to the security
> file. It is dated, probative evidence, worth more than a commercial commitment.

## The scope of residual risk

No tool carries zero risk, and it is more honest to delimit the risk than to deny it.

With an add-in, what an attacker would obtain if the vendor were compromised is the **data held**: the
synchronised directory — names, job titles, work phone numbers — and the templates. Not message
content, which was never accessible.

That is a difference in nature, not in degree. A leaked professional directory is a serious incident;
an organisation's email history is another matter entirely.

The location and jurisdiction applying to that held data is the other half of the file, covered in
[data sovereignty](/en/blog/eu-data-residency-saas).

## The summary to pass to your security officer

Four lines are enough for the add-in architecture:

- The signature is inserted while writing, client-side, into the current message.
- No email content is read, analysed, stored, or routed through the vendor.
- The only data synchronised are the directory attributes displayed in the signature.
- No change to outbound routing: no connector, no relay, no SPF change.

Those elements and the detail of what Signally does not do are on our
[security and GDPR](/en/security-gdpr) page, designed to be forwarded as is to an IT department.
