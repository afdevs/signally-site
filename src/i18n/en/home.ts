import type { Home } from '../fr/home';

export const home = {
  meta: {
    title: 'Signally — Email signatures and banner campaigns for companies',
    description:
      'Create, deploy and schedule email signatures across your whole company from a single interface. Microsoft 365 and Google Workspace add-ins, data hosted in the European Union.',
  },

  hero: {
    badge: 'Email signatures & campaigns',
    title: 'One signature.',
    /** Fourth entry repeats the first: the sgWord keyframe loops back to it. */
    rotating: [
      'Your whole company.',
      'All your subsidiaries.',
      'All your campaigns.',
      'Your whole company.',
    ],
    lede:
      'Create, deploy and schedule signatures across your whole company from a single interface.',
    badges: ['EU DATA HOSTING', 'NO EMAIL EVER READ', 'NO CREDIT CARD'],
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Changing the signature of 200 employees takes weeks. Or five minutes.',
    withoutTag: 'WITHOUT SIGNALLY',
    withTag: 'WITH SIGNALLY',
    without: [
      'A template pasted in crooked',
      'Squashed logos, dead links',
      'Legal notices nobody kept up to date',
      'Three weeks of chasing IT',
    ],
    with: [
      'One template for the entire organisation',
      'Fields filled straight from your directory',
      'Legal notices locked down',
      'An update pushed out in minutes',
    ],
    stats: [
      { value: '5 min', label: 'to roll out to the whole company' },
      { value: '100%', label: 'of signatures on brand' },
      { value: '€0', label: 'to create your signature' },
      { value: '€0.50', label: 'per user beyond 500' },
    ],
  },

  why: {
    eyebrow: 'Why Signally',
    title: 'Create, deploy, schedule.',
    deploy: {
      tag: 'DEPLOY',
      title: 'One change. Everyone up to date.',
      text:
        'The Microsoft and Google add-ins apply the signature to every employee, without them touching a thing.',
      rowStatus: 'UP TO DATE',
      metrics: [
        { value: '5 min', label: 'for the whole company' },
        { value: '0', label: 'action from employees' },
      ],
    },
    create: {
      tag: 'CREATE',
      title: 'A visual editor and locked templates',
      text:
        'Identical rendering on Outlook, Gmail and mobile. The administrator decides what stays untouchable.',
      link: 'The editor →',
    },
    schedule: {
      tag: 'SCHEDULE',
      title: 'Scheduled banners, targeted by team',
      text: 'The campaign starts and stops on its own. Clicks are attributed by team.',
      link: 'Campaigns →',
    },
  },

  campaigns: {
    eyebrow: 'Campaigns',
    title: 'Your outgoing email, your first media channel.',
    lede:
      'A company of 100 people sends 300,000 emails a year. That many free advertising impressions.',
    points: [
      'Animated, clickable, tracked banners',
      'Targeting by team, department or subsidiary',
      'Automatic start and stop',
      'Click statistics per campaign',
    ],
    cta: 'Explore campaigns',
  },

  integrations: {
    eyebrow: 'Integrations',
    title: 'Integration, without the project plan.',
    note:
      'The add-ins install from your admin console. No rerouting, no interruption.',
    microsoft: {
      tag: 'MICROSOFT 365 · OUTLOOK · EXCHANGE',
      title: 'Microsoft add-in',
      text:
        'Central deployment from the Microsoft 365 admin center. The signature is inserted as the message is written, in Outlook Web, Windows, Mac and mobile.',
      link: 'How the Microsoft add-in works →',
    },
    google: {
      tag: 'GOOGLE WORKSPACE · GMAIL',
      title: 'Google add-on',
      text:
        'Domain-wide installation from the Google admin console. Organisational units and directories stay in sync.',
      link: 'How the Google add-on works →',
    },
  },

  privacy: {
    eyebrow: 'Privacy & compliance',
    title: 'Signally adds a signature. Nothing else.',
    lede: 'Your IT department’s first question, answered in one sentence.',
    cards: [
      {
        title: 'EU data residency',
        text: 'Directory and templates hosted on servers inside the European Union.',
      },
      {
        title: 'No email ever read',
        text: 'The add-in inserts a signature. It reads nothing else.',
      },
      {
        title: 'Nothing passes through us',
        text: 'No SMTP relay, no outbound connector.',
      },
      {
        title: 'Sent from your own account',
        text: 'Your messages leave from your Microsoft or Google tenant.',
      },
    ],
    cta: 'Read our security & GDPR approach',
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Every feature, from the very first user.',
    lede:
      'A single volume-based price, from €1.50 down to €0.50 excl. VAT per user per month. Drag the slider.',
    cta: 'Detailed calculator',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'The questions we get asked before signing',
    items: [
      {
        q: 'How do I set up the same email signature for every employee?',
        a: 'You build a single template in the Signally editor, drop in dynamic fields (name, job title, phone, department) and assign it to a team or to the whole company. The Microsoft 365 or Google Workspace add-in then applies the signature to every employee, with nothing for them to do.',
      },
      {
        q: 'Does Signally read the content of my emails?',
        a: 'No. The add-in inserts a signature block as the message is being written. It does not access the body of your emails, does not analyse them and does not store them. No email content passes through our servers.',
      },
      {
        q: 'Are my emails sent by Signally?',
        a: 'No, never. Your messages leave from your own Microsoft 365 or Google Workspace account, with your domain, your deliverability and your security rules. Signally is not a sending relay: we only add the signature.',
      },
      {
        q: 'Where is Signally data hosted?',
        a: 'In the European Union. Directory data, templates and campaign artwork are stored on servers located in France, subject to the GDPR and European law.',
      },
      {
        q: 'Can I create an email signature for free?',
        a: 'Yes. The signature generator is freely available at app.signally.io: you create your signature, test it and install it in your email client without a credit card. A subscription only becomes necessary for automatic deployment and campaigns.',
      },
      {
        q: 'How much does Signally cost for 100 employees?',
        a: 'Pricing decreases with volume: €1.50 excl. VAT per user per month up to 10 users, €1.25 from 11 to 50, €1.00 from 51 to 100, €0.75 from 101 to 500 and €0.50 beyond 500. For 100 employees, that is €100 excl. VAT per month. The calculator on the Pricing page works out your exact figure.',
      },
      {
        q: 'How long does deployment take in a company?',
        a: 'Installing the add-in from your admin console takes about ten minutes. Building the template and mapping teams usually takes half a day. You are up and running the same day.',
      },
      {
        q: 'What is a banner campaign in an email signature?',
        a: 'It is a banner — animated or static, clickable — added below the signature of some or all of your employees, over a period you schedule in advance. It turns every outgoing email into a communication channel: events, hiring, product launches, satisfaction surveys.',
      },
      {
        q: 'Does the signature display correctly on Outlook, Gmail and mobile?',
        a: 'Yes. Signally templates are built in HTML compatible with Outlook Windows and Mac, Outlook Web, Gmail, Apple Mail and mobile clients on iOS and Android. Every template can be previewed before deployment.',
      },
      {
        q: 'Can we have different signatures per subsidiary or per brand?',
        a: 'Yes. You create as many templates as you need and assign them by team, department, subsidiary or organisational unit. Each entity keeps its own visual identity, inside a single administration account.',
      },
    ],
  },
} satisfies Home;
