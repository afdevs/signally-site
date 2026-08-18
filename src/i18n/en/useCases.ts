import type { UseCases } from '../fr/useCases';

export const useCases = {
  meta: {
    title: 'Use cases — IT, marketing and HR around the email signature',
    description:
      'Three teams, three problems, one interface: zero tickets for IT, a channel marketing can steer, and immediate onboarding for HR.',
  },

  hero: {
    eyebrow: 'Use cases',
    title: 'Three teams, three problems, one interface.',
    lede:
      'The email signature is the only communication asset that IT, marketing and HR all use every day — and that nobody really steers.',
  },

  roles: [
    {
      tag: 'IT',
      title: 'Stop being the signature department',
      text:
        'Every arrival, every departure, every change of job title opens a ticket. Multiplied by your turnover, that adds up to whole days.',
      columns: [
        {
          label: 'WHAT YOU GAIN',
          items: [
            'Zero signature tickets',
            'Automatic directory synchronisation',
            'Deployment with no transport rule and no connector',
            'Audit logging and administrator roles',
          ],
        },
        {
          label: 'WHAT YOU SECURE',
          items: [
            'Data hosted in the European Union',
            'No email read, none passing through us',
            'Always sent from your own tenant',
            'Legal notices locked down',
          ],
        },
      ],
    },
    {
      tag: 'MARKETING / COMMUNICATIONS',
      title: 'Take back a channel you already pay for',
      text:
        'Your employees send hundreds of thousands of emails a year. Without a tool, not one of them carries your message of the moment.',
      columns: [
        {
          label: 'WHAT YOU STEER',
          items: [
            'Brand consistency on 100% of what goes out',
            'Scheduled banner campaigns',
            'Targeting by team, brand or country',
            'Click statistics per campaign',
          ],
        },
        {
          label: 'WITHOUT DEPENDING ON IT',
          items: [
            'You create the banner',
            'You choose the audience',
            'You schedule the dates',
            'You measure the result',
          ],
        },
      ],
    },
    {
      tag: 'HR / OFFICE MANAGEMENT',
      title: 'A new joiner ready from their very first email',
      text:
        'The signature is part of the onboarding kit, just like the badge and the laptop. It should require nothing of them.',
      columns: [
        {
          label: 'ONBOARDING',
          items: [
            'Signature ready as soon as the account exists',
            'No tutorial to send out',
            'Automatic update when someone moves internally',
          ],
        },
        {
          label: 'EMPLOYER BRAND',
          items: [
            'Hiring banners across the whole headcount',
            'Internal news relayed outward',
            'Immediate removal when someone leaves',
          ],
        },
      ],
    },
  ],

  cta: {
    title: 'See Signally on your own organisation',
    text: 'A twenty-minute demo: your directory, your template, your first campaign.',
    secondaryLabel: 'Book a demo',
  },
} satisfies UseCases;
