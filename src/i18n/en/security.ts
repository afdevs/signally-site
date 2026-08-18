import type { Security } from '../fr/security';

export const security = {
  meta: {
    title: 'Security, GDPR & data sovereignty — Signally does not read your email',
    description:
      'What Signally does and does not do: no email read, nothing passing through our servers, data hosted in the European Union, GDPR processor under Article 28.',
  },

  hero: {
    eyebrow: 'Security, GDPR & sovereignty',
    title: 'Your email never passes through us. Your data stays in the EU.',
    lede:
      'The page to forward to your IT department, your DPO and your security officer. It sets out precisely what Signally does, what it does not do, and where the data lives.',
  },

  scope: {
    doesTag: 'WHAT SIGNALLY DOES',
    does: [
      'Store your signature templates and campaign artwork',
      'Read, with restricted access, the directory attributes the signature needs (name, job title, phone, department, reporting line)',
      'Insert an HTML signature block as the employee writes their message',
      'Count clicks on the banner links you created',
    ],
    doesNotTag: 'WHAT SIGNALLY DOES NOT DO',
    doesNot: [
      'Read, analyse or index the content of your emails',
      'Store your messages, your attachments or your address books',
      'Route your emails through its servers',
      'Send email on your behalf or change your SMTP routing',
      'Transfer data outside the European Union',
    ],
  },

  guarantees: [
    {
      title: 'Hosting in the European Union',
      text:
        'Infrastructure located in France, operated under European law. No transfer to a third country as part of the service.',
    },
    {
      title: 'GDPR compliance',
      text:
        'Signally acts as a processor within the meaning of Article 28. Data processing agreement, register, retention periods and deletion procedure are documented.',
    },
    {
      title: 'Data minimisation',
      text:
        'Only the directory fields actually shown in the signature are synchronised. Nothing more.',
    },
    {
      title: 'Authentication & access',
      text:
        'Sign-in through your Microsoft or Google identity provider, granular administrator roles, action logging.',
    },
    {
      title: 'Encryption',
      text: 'Traffic encrypted in transit and data encrypted at rest, across the whole platform.',
    },
    {
      title: 'Reversibility',
      text:
        'Export of your templates and complete deletion of your workspace on request, with no hidden retention.',
    },
  ],

  todo:
    'Section to complete with your actual contractual details: hosting provider name, exact datacentre locations, certifications held or in progress, downloadable DPA, DPO contact.',

  faq: {
    title: 'Frequently asked questions — security and compliance',
    items: [
      {
        q: 'Does Signally read the content of my emails?',
        a: 'No. The add-in inserts a signature block as the message is written. The content of the message is neither read, nor analysed, nor stored, and it does not pass through our servers.',
      },
      {
        q: 'Where is the data hosted?',
        a: 'In the European Union. Templates, campaign artwork and synchronised directory attributes are hosted on infrastructure located in France, subject to the GDPR.',
      },
      {
        q: 'What personal data is processed?',
        a: 'Only the directory fields displayed in the signature: first name, last name, job title, department, email address, work phone number and reporting line. That is the minimisation principle applied strictly.',
      },
      {
        q: 'Is Signally a processor under the GDPR?',
        a: 'Yes. Signally acts as a processor for your company, which is the controller. A data processing agreement sets out the purposes, the retention periods and the security measures.',
      },
      {
        q: 'What happens to access if we terminate?',
        a: 'You retrieve your templates and artwork, then your workspace is deleted. Nothing is retained beyond the periods set out in the contract.',
      },
      {
        q: 'Are your servers subject to extraterritorial legislation?',
        a: 'Hosting in France and the absence of any transfer outside the European Union place the service under European law alone, which is precisely what many IT and legal departments are looking for.',
      },
    ],
  },

  cta: {
    title: 'A compliance question? Let us talk.',
    text:
      'We are happy to answer the security questionnaires from your IT and legal departments.',
    secondaryLabel: 'Contact the team',
  },
} satisfies Security;
