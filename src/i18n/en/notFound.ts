import type { NotFound } from '../fr/notFound';

export const notFound = {
  meta: {
    title: 'Page not found',
    description: 'This page does not exist, or it has moved.',
  },
  code: '404',
  title: 'This page does not exist.',
  text:
    'The link may be wrong, or the page has moved. Here are the most useful places on the site.',
  links: {
    features: 'The signature editor',
    pricing: 'Pricing and calculator',
    blog: 'The blog',
    contact: 'Contact & demo',
  },
  home: 'Back to the home page',
} satisfies NotFound;
