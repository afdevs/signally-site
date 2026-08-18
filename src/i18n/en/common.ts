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
} satisfies Common;
