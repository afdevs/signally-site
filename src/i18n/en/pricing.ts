import type { Pricing } from '../fr/pricing';

export const pricing = {
  meta: {
    title: 'Pricing — one volume-based price, from €1.50 down to €0.50 per user',
    description:
      'Every feature included from the very first user. Volume pricing from €1.50 down to €0.50 excl. VAT per user per month. Online cost calculator.',
  },

  hero: {
    eyebrow: 'Pricing',
    title: 'One price, falling as your headcount grows.',
    lede:
      'Every feature is included from the first user: editor, deployment, teams, campaigns, statistics and support. The price per user drops as your organisation grows.',
  },

  tiers: [
    '1 – 10 USERS',
    '11 – 50 USERS',
    '51 – 100 USERS',
    '101 – 500 USERS',
    '500 + USERS',
  ],
  tierUnit: 'excl. VAT / user / month',

  simulator: {
    title: 'Cost calculator',
    intro:
      'Adjust your headcount and your own assumptions: the calculator compares the cost of Signally with the time spent managing signatures by hand.',
    assumptions: 'MANUAL MANAGEMENT ASSUMPTIONS',
    sliders: {
      users: 'Number of employees',
      updates: 'Signature changes per year',
      minutes: 'Minutes spent per signature',
      hourly: 'Loaded hourly cost',
    },
    units: { minutes: 'min', hours: 'h' },
    resultTag: 'YOUR PRICE',
    perMonth: 'excl. VAT per month',
    perUser: 'per user',
    amountNoteJoin: '—',
    metrics: {
      yearly: 'annual Signally cost',
      manualHours: 'annual hours of manual management',
      manualCost: 'annual cost of manual management',
      saved: 'estimated saving in the first year',
    },
    cta: 'Start for free',
    disclaimer:
      'Indicative estimate, excluding tax. Manual management time depends on your organisation; adjust the assumptions to match your reality.',
  },

  compact: {
    label: 'Your employees',
    perMonth: 'excl. VAT per month',
    perUser: 'per user',
  },

  faq: {
    title: 'Frequently asked questions about pricing',
    items: [
      {
        q: 'How much does Signally cost for 50, 100 or 500 employees?',
        a: 'Pricing decreases with volume: €1.25 excl. VAT per user per month up to 50 users, €1.00 up to 100, €0.75 up to 500 and €0.50 beyond. That is €62.50 per month for 50 employees, €100 for 100 and €375 for 500. The calculator above works out your exact figure.',
      },
      {
        q: 'Are all features included?',
        a: 'Yes. Editor, unlimited templates, team management, Microsoft and Google add-ins, banner campaigns, statistics and support are included whatever your headcount. There is no higher edition.',
      },
      {
        q: 'Is the signature generator really free?',
        a: 'Yes. Creating a signature in the editor and installing it manually in your email client costs nothing and requires no credit card. The subscription covers automatic company-wide deployment and campaigns.',
      },
      {
        q: 'How is a user counted?',
        a: 'A user is a mailbox that receives a signature managed by Signally. Shared mailboxes and aliases are not billed separately.',
      },
      {
        q: 'What happens if my headcount changes during the year?',
        a: 'The number of active users is adjusted; crossing a threshold moves you onto the corresponding lower rate.',
      },
      {
        // Deliberately left open: the prototype flags this as pending
        // confirmation by Signally. Nothing is invented in its place.
        q: 'Is there a minimum commitment?',
        a: 'To be confirmed on your side: commitment period, monthly or annual billing, cancellation terms.',
      },
    ],
  },

  cta: {
    title: 'Try Signally with no commitment',
    text:
      'The editor is free and asks for no credit card. The subscription only starts with automatic deployment.',
    secondaryLabel: 'Request a quote',
  },
} satisfies Pricing;
