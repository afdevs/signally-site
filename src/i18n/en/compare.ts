import type { Compare } from '../fr/compare';

/**
 * Comparative advertising is regulated in France (art. L122-1 of the
 * consumer code) and across the EU. The same rule applies to this
 * translation: objective, verifiable, non-disparaging. Legal review
 * before publishing — see the French source for the full note.
 */
export const compare = {
  meta: {
    title: 'Which email signature management software should you choose in 2026?',
    description:
      'The eight-criteria grid for an honest comparison of email signature tools: deployment, data location, access to email, campaigns, price and reversibility.',
  },

  hero: {
    eyebrow: 'Comparisons',
    title: 'Which email signature management software should you choose in 2026?',
    lede:
      'The criteria that actually matter when choosing: how it deploys, where the data lives, how campaigns are handled and what it really costs at your headcount.',
  },

  criteria: {
    title: 'The eight criteria of an honest comparison grid',
    lede:
      'Use this grid with any vendor on the market. We give our own answers here; ask for theirs in writing.',
    items: [
      {
        n: 'CRITERION 01',
        title: 'Deployment method',
        text:
          'Client-side add-in or server-side transport rule? The first lets the employee see their signature, the second does not.',
        answer: 'Signally: Microsoft 365 and Google Workspace add-ins, no rerouting',
      },
      {
        n: 'CRITERION 02',
        title: 'Data location',
        text:
          'Where are the synchronised directory and the templates hosted? A vendor outside the EU exposes you to extraterritorial regimes.',
        answer: 'Signally: hosted in the European Union',
      },
      {
        n: 'CRITERION 03',
        title: 'Access to email content',
        text:
          'Does the provider see your messages go by? That is the question to put in writing to your security officer.',
        answer: 'Signally: no email content read, none passing through',
      },
      {
        n: 'CRITERION 04',
        title: 'Scheduled campaigns',
        text:
          'Dated banners, per-team targeting, automatic succession: included, or reserved for a higher edition?',
        answer: 'Signally: included in the single price',
      },
      {
        n: 'CRITERION 05',
        title: 'Public price list',
        text:
          'A published price or a quote every time? Pricing transparency changes the negotiation.',
        answer: 'Signally: public grid from €1.50 down to €0.50 excl. VAT / user / month',
      },
      {
        n: 'CRITERION 06',
        title: 'A real trial with no commitment',
        text: 'Can you create a signature and test it before talking to a salesperson?',
        answer: 'Signally: editor freely available, no credit card',
      },
      {
        n: 'CRITERION 07',
        title: 'Support and language',
        text:
          'A team reachable in your time zone and your language, or an English-only help centre?',
        answer: 'Signally: European team, support included',
      },
      {
        n: 'CRITERION 08',
        title: 'Reversibility',
        text:
          'Do you get your templates and data back if you leave, and how quickly are they deleted?',
        answer: 'Signally: export and deletion on request',
      },
    ],
  },

  alternatives: {
    title: 'Detailed comparisons',
    lede:
      'Each alternative gets its own page, built on the same grid. These pages capture "alternative to" and "comparison" searches, which are highly qualified at the end of a buying journey.',
    readMore: 'Read the comparison →',
    soon: 'Coming soon',
    note:
      'Comparison pages are written only from public, verifiable information, sourced and dated, with no unverifiable claim about competing products.',
    items: [
      {
        title: 'Signally versus Letsignit',
        keyword: 'letsignit alternative',
        desc: 'Comparison grid on deployment, data location and pricing.',
        article: null,
      },
      {
        title: 'Signally versus Exclaimer',
        keyword: 'exclaimer alternative',
        desc: 'Client-side add-in against server-side processing: what it changes for your users.',
        article: null,
      },
      {
        title: 'Signally versus Signitic',
        keyword: 'signitic alternative',
        desc: 'Two European solutions compared on campaigns, governance and price.',
        article: null,
      },
      {
        title: 'Signally versus MySignature',
        keyword: 'mysignature alternative',
        desc: 'Individual generator or fleet management: when the need tips over.',
        article: null,
      },
      {
        title: 'Signally versus native Microsoft 365 signatures',
        keyword: 'native microsoft 365 signature',
        desc: 'What an Exchange transport rule cannot do for a brand signature.',
        article: 'add-in-ou-regle-de-transport-exchange',
      },
      {
        title: 'Signally versus native Google Workspace signatures',
        keyword: 'native google workspace signature',
        desc: 'The limits of the footer in the Google admin console.',
        article: 'google-workspace-signature',
      },
    ] as { title: string; keyword: string; desc: string; article: string | null }[],
  },

  crosslinks: {
    pricing: {
      label: 'Our public price list',
      desc: 'From €1.50 down to €0.50 excl. VAT per user, with a calculator',
    },
    security: {
      label: 'Our security & GDPR approach',
      desc: 'EU hosting, no email ever read, full reversibility',
    },
  },

  cta: {
    title: 'Try Signally before comparing on paper',
    text:
      'The editor is open: build a complete signature in a few minutes, without a credit card.',
    secondaryLabel: 'Ask a question',
  },
} satisfies Compare;
