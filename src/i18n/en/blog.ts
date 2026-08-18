import type { Blog } from '../fr/blog';

export const blog = {
  index: {
    meta: {
      title: 'Blog — everything about company email signatures',
      description:
        'Practical guides, Microsoft 365 and Google Workspace tutorials, GDPR framing and banner campaign ideas. The Signally blog.',
    },
    eyebrow: 'The Signally blog',
    title: 'Everything about email signatures: management, rollout, compliance and communication.',
    lede:
      'Practical guides, Microsoft 365 and Google Workspace tutorials, GDPR framing and campaign ideas. Forty articles organised into seven pillars.',
    filterAria: 'Filter by topic',
    all: 'All',
    countOne: 'article',
    countMany: 'articles',
    empty: 'The first articles are on their way.',
    emptyFiltered: 'No article in this topic yet.',
  },

  article: {
    breadcrumbAria: 'Breadcrumb',
    home: 'Home',
    blog: 'Blog',
    kind: 'GUIDE',
    updatedOn: 'UPDATED',
    readingTime: 'MIN READ',
    brief: 'IN BRIEF',
    faqTitle: 'Frequently asked questions',
    tocAria: 'Table of contents',
    toc: 'CONTENTS',
    internalLinks: 'RELATED PAGES',
    pillarPrefix: 'Pillar page:',
    securityLink: 'Security, GDPR and EU data hosting →',
    pricingLink: 'Cost calculator →',
    campaignsLink: 'Banner campaigns →',
    sameCluster: 'MORE ON THIS TOPIC',
    convert: {
      title: 'Roll out your signature with Signally',
      text:
        'Build your template for free, then deploy it across the organisation from your admin console.',
    },
    side: {
      title: 'Try the editor',
      text: 'Build a complete signature in five minutes, without a credit card.',
      cta: 'Open the editor',
    },
  },

  clusters: {
    'Microsoft 365 & Outlook': 'Microsoft 365 & Outlook',
    'Google Workspace & Gmail': 'Google Workspace & Gmail',
    'Créer sa signature': 'Designing a signature',
    'Gestion & gouvernance': 'Management & governance',
    'Campagnes & bannières': 'Campaigns & banners',
    'RGPD & sécurité': 'GDPR & security',
    'Comparatifs & alternatives': 'Comparisons & alternatives',
  },

  clusterDesc: {
    'Microsoft 365 & Outlook': 'Deployment, add-in, Exchange and the Entra ID directory.',
    'Google Workspace & Gmail': 'Admin console, organisational units and Gmail.',
    'Créer sa signature': 'Editor, templates, HTML and design best practice.',
    'Gestion & gouvernance': 'Onboarding, subsidiaries, policy and the cost of doing it by hand.',
    'Campagnes & bannières': 'Scheduling, targeting and measuring your banners.',
    'RGPD & sécurité': 'Compliance, sovereignty and the scope of data access.',
    'Comparatifs & alternatives': 'Selection criteria and a view of the market.',
  },

  pillarAnchor: {
    'Microsoft 365 & Outlook': 'the Microsoft 365 add-in',
    'Google Workspace & Gmail': 'the Google Workspace add-on',
    'Créer sa signature': 'the Signally signature editor',
    'Gestion & gouvernance': 'managing signatures by team',
    'Campagnes & bannières': 'signature banner campaigns',
    'RGPD & sécurité': "Signally's security and GDPR approach",
    'Comparatifs & alternatives': 'the email signature software comparison',
  },
} satisfies Blog;
