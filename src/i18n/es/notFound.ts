import type { NotFound } from '../fr/notFound';

export const notFound = {
  meta: {
    title: 'Página no encontrada',
    description: 'Esta página no existe o se ha movido.',
  },
  code: '404',
  title: 'Esta página no existe.',
  text:
    'Puede que el enlace sea incorrecto o que la página se haya movido. Estos son los sitios más útiles.',
  links: {
    features: 'El editor de firmas',
    pricing: 'Precios y simulador',
    blog: 'El blog',
    contact: 'Contacto y demo',
  },
  home: 'Volver al inicio',
} satisfies NotFound;
