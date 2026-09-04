/** Terms of service — English. */

import type { Terms } from '../fr/terms';

export const terms = {
  meta: {
    title: 'Terms of Service — Signally',
    description:
      'The terms governing access to and use of the Signally service: account, subscription, data, third-party integrations, liability and termination.',
  },

  hero: {
    eyebrow: 'Terms of Service',
    title: 'The rules that govern the service',
    lede:
      'This document governs access to and use of Signally. It complements our Security & GDPR page, which describes how personal data is processed.',
  },

  updated: {
    label: 'Last updated',
    value: '4 September 2026',
  },

  sections: [
    {
      title: '1. Purpose',
      paragraphs: [
        'These terms of service define how the Signally service may be accessed and used. They form a contract between Signally and the customer, whether a legal entity or an individual acting in a professional capacity.',
        'Opening an account constitutes unreserved acceptance of these terms. A customer who does not accept them must refrain from using the service.',
      ],
    },
    {
      title: '2. Definitions',
      paragraphs: [
        '"Service" means the Signally platform, its web interfaces, its integration modules and its programming interfaces. "Customer" means the organisation holding the subscription. "User" means any person to whom the customer grants access to the service, in particular its employees. "Content" means the templates, images, text and data that the customer or its users upload to the service.',
      ],
    },
    {
      title: '3. Account and access',
      paragraphs: [
        'Access to the service requires an account. The customer warrants that the information provided is accurate and keeps it up to date.',
        'Credentials are personal and confidential. The customer is responsible for keeping them safe and for all activity carried out from its account. It must notify Signally without delay of any unauthorised access it becomes aware of.',
        'The customer is responsible for the acts of its users and ensures that they comply with these terms.',
      ],
    },
    {
      title: '4. Description of the service',
      paragraphs: [
        'Signally lets an organisation design email signatures, deploy them to its employees and run campaign banners within them.',
        'The service evolves continuously. Signally may add, change or withdraw features, provided it does not substantially degrade the essential functions subscribed to during the current subscription period.',
      ],
    },
    {
      title: '5. Subscription, pricing and payment',
      paragraphs: [
        'The service is offered on a subscription basis, priced according to the number of users and the options selected. The applicable prices are those published on the Pricing page on the day of subscription.',
        'Subscriptions are payable in advance for the chosen billing period and renew automatically for an identical period unless terminated before the renewal date.',
        'Failure to pay entitles Signally to suspend access to the service after a formal notice has remained without effect.',
      ],
    },
    {
      title: '6. Acceptable use',
      paragraphs: [
        'The customer undertakes to use the service in accordance with applicable law and with these terms.',
        'The following are prohibited in particular: distributing unlawful or misleading content, or content infringing the rights of third parties; sending unsolicited communications in breach of applicable regulations; any attempt at unauthorised access, circumvention of security measures, reverse engineering or deliberate overloading of the infrastructure; reselling the service without prior written agreement.',
        'Signally may suspend an account whose use threatens the security, stability or reputation of the service, and will inform the customer as soon as reasonably possible.',
      ],
    },
    {
      title: '7. Customer content',
      paragraphs: [
        'The customer retains full ownership of its content. It grants Signally a non-exclusive licence, limited to the duration of the subscription and to what is strictly necessary to operate the service: to host, reproduce and display that content on the customer’s behalf.',
        'The customer warrants that it holds the rights required for the content it uploads, in particular for trademarks, logos and campaign images.',
      ],
    },
    {
      title: '8. Personal data',
      paragraphs: [
        'In providing the service, Signally acts as a processor within the meaning of Article 28 of the General Data Protection Regulation, the customer remaining the controller.',
        'Processing conditions, data location and security measures are described on the Security & GDPR page, which forms an integral part of these terms.',
      ],
    },
    {
      title: '9. Third-party integrations',
      paragraphs: [
        'The service can connect to third-party platforms, in particular Microsoft 365, Google Workspace and Canva. These connections are optional and initiated by the customer, who explicitly authorises the requested access.',
        'Signally requests only the permissions necessary for the relevant feature to work and makes no other use of them. The customer may revoke an authorisation at any time from the third-party platform or from its Signally workspace.',
        'Use of those platforms remains governed by their own terms. Signally is not responsible for their availability or for changes they make.',
      ],
    },
    {
      title: '10. Intellectual property',
      paragraphs: [
        'The service, its software components, its interface and its documentation remain the exclusive property of Signally. The subscription grants a personal, non-exclusive and non-transferable right of use for the duration of the subscription.',
        'Nothing in these terms may be construed as a transfer of intellectual property rights.',
      ],
    },
    {
      title: '11. Availability and support',
      paragraphs: [
        'Signally uses reasonable means to keep the service available. Interruptions may occur, in particular for maintenance, updates or in the event of a third-party provider failure.',
        'Support is available from the Contact page. Any service level commitments are those set out in the specific agreement signed with the customer.',
      ],
    },
    {
      title: '12. Liability',
      paragraphs: [
        'Signally is bound by an obligation of means in providing the service.',
        'Signally may not be held liable for indirect damages, in particular loss of revenue, reputation or data resulting from an act attributable to the customer or to a third party.',
        'In any event, and except in cases of gross negligence or wilful misconduct, Signally’s liability is capped at the amounts actually paid by the customer over the twelve months preceding the triggering event.',
      ],
    },
    {
      title: '13. Term, termination and data',
      paragraphs: [
        'The contract takes effect when the account is opened and runs for the duration of the subscription taken out.',
        'Either party may terminate before the end of the current period. Signally may terminate as of right in the event of a serious breach by the customer that remains uncorrected after formal notice.',
        'At the end of the contract, the customer may retrieve its templates and images. Data is then deleted from production systems within a reasonable time, subject to statutory retention obligations.',
      ],
    },
    {
      title: '14. Changes to these terms',
      paragraphs: [
        'Signally may amend these terms, in particular to reflect legal or functional developments. The customer is informed of any substantial change before it takes effect.',
        'Continuing to use the service after that date constitutes acceptance of the amended version.',
      ],
    },
    {
      title: '15. Governing law and jurisdiction',
      paragraphs: [
        'These terms are governed by French law.',
        'Failing an amicable settlement, any dispute relating to their validity, interpretation or performance falls within the exclusive jurisdiction of the courts of the place where Signally has its registered office, including where there are multiple defendants or third-party proceedings.',
      ],
    },
  ],

  todo:
    'To be completed before publication: corporate name, legal form and share capital, trade register and company number, registered office address, publication director, hosting provider, and the legal contact address. This text is a working basis and must be reviewed by legal counsel before publication.',

  contact: {
    title: 'A question about these terms?',
    text: 'Write to us and we will reply within two business days.',
    label: 'Contact us',
  },
} satisfies Terms;
