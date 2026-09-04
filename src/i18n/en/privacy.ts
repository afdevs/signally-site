/** Privacy policy — English. */

import type { Privacy } from '../fr/privacy';

export const privacy = {
  meta: {
    title: 'Privacy Policy — Signally',
    description:
      'What data Signally collects, why, where it is hosted, who it is entrusted to and how to exercise your rights. No analytics cookies, no third-party trackers.',
  },

  hero: {
    eyebrow: 'Privacy Policy',
    title: 'What we collect, and what we do not',
    lede:
      'This policy describes how personal data is processed on this website and within the Signally service. It complements our Terms of Service and our Security & GDPR page.',
  },

  updated: {
    label: 'Last updated',
    value: '4 September 2026',
  },

  sections: [
    {
      title: '1. Data controller',
      paragraphs: [
        'Signally publishes this website and the service of the same name. For any question about your data, the contact address is given at the end of this document.',
      ],
    },
    {
      title: '2. Two distinct roles',
      paragraphs: [
        'Signally acts in two different capacities, and that distinction governs the rest of this document.',
        'On this website, Signally is the data controller: we decide what data is collected from visitors and for what purpose.',
        'Within the service, Signally is a processor within the meaning of Article 28 of the General Data Protection Regulation. The customer organisation decides what data about its employees is processed; we process it on its instructions, in order to provide the service.',
      ],
    },
    {
      title: '3. Data collected on this website',
      paragraphs: [
        'Contact form: name, email address, organisation and message content. This information reaches us by email and is not recorded in a website database.',
        'Support assistant: the content of your questions and the corresponding answers, in order to handle the conversation and improve answer quality. A conversation identifier is kept in your browser’s local storage, solely so the thread can be found again if you reopen the window.',
        'Technical logs: IP address and request information, held in server memory for as long as needed to apply our anti-abuse limits.',
      ],
    },
    {
      title: '4. Data processed within the service',
      paragraphs: [
        'Account: professional identity, email address, role and the organisation the user belongs to.',
        'Signature attributes: name, job title, phone number, department and any other field the customer chooses to display in its employees’ signatures.',
        'Content: signature templates, campaign images and related settings.',
        'Signally does not read the content of its customers’ emails, and those emails do not pass through our servers.',
      ],
    },
    {
      title: '5. Purposes and legal bases',
      paragraphs: [
        'Responding to contact and demo requests: legitimate interest in handling a request addressed to us.',
        'Providing and administering the service, managing subscriptions and billing: performance of the contract.',
        'Keeping the website and the service secure and preventing abuse: legitimate interest.',
        'Meeting our accounting and legal obligations: legal obligation.',
      ],
    },
    {
      title: '6. Recipients and processors',
      paragraphs: [
        'Data is never sold, rented or transferred to third parties for advertising purposes.',
        'We use technical providers that are strictly necessary to operate: hosting of the application and database in France; storage of files and images on Amazon S3, Paris region; anti-bot protection of the form and assistant through Cloudflare Turnstile; generation of assistant answers through the Anthropic API; subscription payment processing through Stripe.',
        'When a customer connects a third-party platform — Microsoft 365, Google Workspace or Canva — exchanges with that platform are additionally governed by its own privacy policy.',
      ],
    },
    {
      title: '7. Location and transfers',
      paragraphs: [
        'The application, the database and the files are hosted in the European Union, in France.',
        'Some of the providers listed above are established outside the European Union. Any such transfers are framed by the European Commission’s standard contractual clauses or an equivalent mechanism.',
      ],
    },
    {
      title: '8. Retention periods',
      paragraphs: [
        'Contact requests: three years from the last exchange.',
        'Assistant conversations: as long as needed to follow up the request and improve the service, and no longer than twelve months.',
        'Account data and content: for the duration of the subscription, then deleted from production systems within a reasonable time after the contract ends.',
        'Accounting records: for the applicable statutory retention period.',
      ],
    },
    {
      title: '9. Cookies and local storage',
      paragraphs: [
        'This website sets no analytics cookies, no advertising cookies and no third-party trackers. There is therefore no consent banner to display.',
        'Two technical exceptions, with no tracking purpose: your browser’s local storage keeps the support assistant’s conversation identifier, and Cloudflare Turnstile may set what it needs for anti-bot verification.',
      ],
    },
    {
      title: '10. Security',
      paragraphs: [
        'Exchanges with the website and the service are encrypted in transit. Access to production data is restricted and logged.',
        'The technical and organisational measures are detailed on our Security & GDPR page.',
      ],
    },
    {
      title: '11. Your rights',
      paragraphs: [
        'You have the right to access, rectify, erase, restrict, object to and port your data, as well as the right to give instructions about what happens to it after your death.',
        'These rights are exercised by contacting us at the address below. If your data is processed within the service on behalf of your employer, we will pass your request on to them, as they are the controller.',
        'You may also lodge a complaint with the French data protection authority, the Commission nationale de l’informatique et des libertés.',
      ],
    },
    {
      title: '12. Changes to this policy',
      paragraphs: [
        'This policy may change, in particular when a provider or a feature changes. The date of the last update appears at the top of the page, and any substantial change is brought to customers’ attention.',
      ],
    },
  ],

  todo:
    'To be completed before publication: identity and address of the data controller, contact details of the data protection officer if one has been appointed, a dedicated address for rights requests, and validation of the list of processors and of the retention periods. This text is a working basis and must be reviewed by legal counsel before publication.',

  contact: {
    title: 'Exercise your rights or ask a question',
    text: 'Write to us and we will reply within two business days.',
    label: 'Contact us',
  },
} satisfies Privacy;
