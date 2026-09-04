/**
 * Shared chrome copy — English.
 *
 * Adapted rather than translated where the French original leans on a
 * France-specific selling point: « Données en France » becomes EU
 * hosting, which is the argument that actually carries outside France.
 */

import type { Common } from '../fr/common';

export const common = {
  site: {
    tagline: 'Customized Email Signature',
    description:
      'Email signature and banner campaign management for companies. Data hosted in the European Union.',
  },

  actions: {
    signup: 'Create my signature',
    login: 'Log in',
    demo: 'See a demo',
    requestDemo: 'Request a demo',
  },

  layout: {
    skipToContent: 'Skip to main content',
    homeAria: 'Signally — home',
    mainNavAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageAria: 'Choose language',
  },

  pages: {
    home: { label: 'Home', desc: '' },
    features: {
      label: 'Signature editor',
      desc: 'Templates, dynamic fields, teams',
    },
    campaigns: {
      label: 'Campaigns & banners',
      desc: 'Scheduling and per-team targeting',
    },
    useCases: {
      label: 'Use cases',
      desc: 'IT, marketing, human resources',
    },
    pricing: { label: 'Pricing', desc: 'Volume pricing and calculator' },
    compare: {
      label: 'Comparisons',
      desc: 'Selection criteria and alternatives',
    },
    security: {
      label: 'Security & GDPR',
      desc: 'EU hosting, we never read your email',
    },
    contact: {
      label: 'Contact & demo',
      desc: 'Twenty minutes with an expert',
    },
    blog: { label: 'Blog', desc: 'Guides, tutorials and best practices' },
    microsoft: {
      label: 'Microsoft 365 & Outlook',
      desc: 'Add-in deployed from your tenant',
    },
    google: {
      label: 'Google Workspace & Gmail',
      desc: 'Domain-wide installation',
    },
    terms: {
      label: 'Terms of Service',
      desc: 'The rules for accessing and using the service',
    },
    privacy: {
      label: 'Privacy Policy',
      desc: 'Data collected, retention and your rights',
    },
  },

  nav: {
    product: 'Product',
    integrations: 'Integrations',
    resources: 'Resources',
  },

  footer: {
    columns: {
      product: 'PRODUCT',
      integrations: 'INTEGRATIONS',
      resources: 'RESOURCES',
      company: 'COMPANY',
    },
    teams: 'Team management',
    pricingFull: 'Pricing & calculator',
    badges: 'EU HOSTING · GDPR · NO EMAIL EVER READ',
  },

  sections: {
    marqueeAria: 'Companies using Signally',
    satellites: 'Go further',
  },

  cta: {
    title: 'Get started with Signally',
    text:
      'Create your signature online, free and without a credit card. Rolling it out to the whole company takes only a few minutes more.',
  },

  supportChat: {
    launcher: 'Open the Signally assistant',
    title: 'Signally assistant',
    placeholder: 'Ask your question…',
    send: 'Send',
    starters: [
      'How does pricing work?',
      'Is my data hosted in the EU?',
      'How do I roll out signatures to the whole team?',
    ],
    footer: 'Answers are generated automatically — verify anything critical.',
    unanswered:
      "I don't have a reliable answer to that. Contact us from the dedicated page for personalized help.",
    feedback: {
      up: 'Helpful',
      down: 'Not helpful',
      thanks: 'Thanks for your feedback.',
    },
    errors: {
      rateLimit: 'Too many messages sent. Try again in a few minutes.',
      dailyLimit:
        "You've reached your message quota for today. Come back tomorrow.",
      tooLong:
        'Your message is too long (2000 characters max). Shorten it and try again.',
      unavailable: 'The assistant is temporarily unavailable. Try again later.',
      generic: 'Something went wrong. Try again in a moment.',
    },
    actions: {
      retry: 'Try again',
    },
  },
} satisfies Common;
