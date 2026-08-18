import type { Campaigns } from '../fr/campaigns';

export const campaigns = {
  meta: {
    title: 'Email signature banner campaigns — marketing through outgoing email',
    description:
      'Turn every outgoing email into a communication channel: clickable banners, per-team targeting, automatic scheduling and click tracking.',
  },

  hero: {
    eyebrow: 'Campaigns & banners',
    title: 'Email signature marketing: the channel you already own.',
    lede:
      'A Signally campaign is a banner placed below your employees’ signatures, targeted at the teams you choose and scheduled over time. No media spend, no friction, and an audience already in touch with you.',
  },

  uses: {
    title: 'What you can broadcast without writing a newsletter',
    lede:
      'More than nine business emails out of ten get opened. A signature banner is seen by your customers, your prospects, your suppliers and your candidates.',
    items: [
      {
        tag: 'EVENTS',
        title: 'Trade shows and webinars',
        text:
          'Announce your stand three weeks ahead and stop the campaign the evening it closes, without giving it another thought.',
      },
      {
        tag: 'EMPLOYER BRAND',
        title: 'Hiring',
        text:
          'Push your openings from the whole company’s signature: your employees become your first sourcing channel.',
      },
      {
        tag: 'PRODUCT',
        title: 'Launches & releases',
        text:
          'Target the banner at the sales teams while support keeps its own.',
      },
      {
        tag: 'REPUTATION',
        title: 'Customer reviews',
        text:
          'A Google review button in support’s signature: the request lands at the right moment, just after a good exchange.',
      },
      {
        tag: 'CSR & INTERNAL',
        title: 'Commitments and news',
        text:
          'A certification earned, the annual report, a charity drive: the proof travels with every exchange.',
      },
      {
        tag: 'SALES',
        title: 'Booking a meeting',
        text:
          'A calendar booking link under every sales email, with no extra follow-up.',
      },
    ],
  },

  pillars: {
    title: 'Schedule, target, measure',
    items: [
      {
        title: 'A start date and an end date',
        text:
          'The banner appears and disappears on its own. No more ghost campaign still running three months after the event.',
      },
      {
        title: 'Targeting by team',
        text: 'The whole company, one subsidiary, one country, one department, or a handful of people.',
      },
      {
        title: 'Campaigns that follow one another',
        text:
          'Build your calendar a quarter at a time: each campaign takes over from the last.',
      },
      {
        title: 'Attributed clicks',
        text:
          'You know which banner drove traffic, over which period and from which team.',
      },
    ],
  },

  preview: {
    tag: 'BANNER PREVIEW',
    items: [
      { title: 'Webinar — Signatures & compliance', sub: 'Thursday 12 March, 11am', cta: 'Sign up' },
      { title: 'We are hiring for 12 roles', sub: 'Tech, product, sales', cta: 'See openings' },
      { title: 'Your feedback matters', sub: '30 seconds, one star', cta: 'Leave a review' },
    ],
  },

  faq: {
    title: 'Frequently asked questions about banner campaigns',
    items: [
      {
        q: 'What is a banner campaign in an email signature?',
        a: 'It is a clickable banner, static or animated, added below the signature of a group of employees for a set period. It turns every outgoing email into a targeted communication channel.',
      },
      {
        q: 'How many impressions can I expect?',
        a: 'Count on around thirty outgoing emails per employee per day. A company of 100 people therefore generates in the order of 300,000 impressions a year, in front of an audience already in touch with it.',
      },
      {
        q: 'Can a banner target a single team?',
        a: 'Yes. Targeting works by team, department, subsidiary, country or a manual selection of employees. Sales can carry a product banner while support carries another.',
      },
      {
        q: 'Do campaigns start automatically?',
        a: 'Yes. You set a start date and an end date; the banner appears and disappears on its own. You can chain several campaigns across a quarter.',
      },
      {
        q: 'Can I track clicks on a banner?',
        a: 'Yes. Every campaign has its own click tracking, by period and by team, which lets you compare messages against each other and plan the next calendar.',
      },
      {
        q: 'Does an animated banner display everywhere?',
        a: 'An animated GIF displays in most modern email clients; some versions of Outlook show only the first frame. That is why we recommend putting the essential message on that first frame.',
      },
    ],
  },

  cta: {
    title: 'Launch your first campaign with Signally',
    text: 'Create the banner, choose the teams, set the dates. The rest happens on its own.',
    secondaryLabel: 'Talk to an expert',
  },
} satisfies Campaigns;
