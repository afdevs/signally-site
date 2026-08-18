/**
 * Point d'entrée du multilingue.
 *
 * Un composant n'importe jamais un dictionnaire de langue directement :
 * il appelle `getDictionary(locale)`. Ajouter un domaine de contenu (une
 * page) revient à créer `fr/<page>.ts`, ses jumeaux `en`/`es`, puis à les
 * enregistrer dans `DICTIONARIES` ci-dessous.
 */

import { common as frCommon } from './fr/common';
import { common as enCommon } from './en/common';
import { common as esCommon } from './es/common';
import { seo as frSeo } from './fr/seo';
import { seo as enSeo } from './en/seo';
import { seo as esSeo } from './es/seo';
import { home as frHome } from './fr/home';
import { home as enHome } from './en/home';
import { home as esHome } from './es/home';
import { pricing as frPricing } from './fr/pricing';
import { pricing as enPricing } from './en/pricing';
import { pricing as esPricing } from './es/pricing';
import { features as frFeatures } from './fr/features';
import { features as enFeatures } from './en/features';
import { features as esFeatures } from './es/features';
import { campaigns as frCampaigns } from './fr/campaigns';
import { campaigns as enCampaigns } from './en/campaigns';
import { campaigns as esCampaigns } from './es/campaigns';
import { useCases as frUseCases } from './fr/useCases';
import { useCases as enUseCases } from './en/useCases';
import { useCases as esUseCases } from './es/useCases';
import { security as frSecurity } from './fr/security';
import { security as enSecurity } from './en/security';
import { security as esSecurity } from './es/security';
import { compare as frCompare } from './fr/compare';
import { compare as enCompare } from './en/compare';
import { compare as esCompare } from './es/compare';
import { integrations as frIntegrations } from './fr/integrations';
import { integrations as enIntegrations } from './en/integrations';
import { integrations as esIntegrations } from './es/integrations';
import { contact as frContact } from './fr/contact';
import { contact as enContact } from './en/contact';
import { contact as esContact } from './es/contact';
import { blog as frBlog } from './fr/blog';
import { blog as enBlog } from './en/blog';
import { blog as esBlog } from './es/blog';
import { notFound as frNotFound } from './fr/notFound';
import { notFound as enNotFound } from './en/notFound';
import { notFound as esNotFound } from './es/notFound';

import type { Locale } from './config';

export type Dictionary = {
  common: typeof frCommon;
  seo: typeof frSeo;
  home: typeof frHome;
  pricing: typeof frPricing;
  features: typeof frFeatures;
  campaigns: typeof frCampaigns;
  useCases: typeof frUseCases;
  security: typeof frSecurity;
  compare: typeof frCompare;
  integrations: typeof frIntegrations;
  contact: typeof frContact;
  notFound: typeof frNotFound;
  blog: typeof frBlog;
};

const DICTIONARIES: Record<Locale, Dictionary> = {
  fr: {
    common: frCommon, seo: frSeo, home: frHome, pricing: frPricing, features: frFeatures,
    campaigns: frCampaigns, useCases: frUseCases, security: frSecurity, compare: frCompare,
    integrations: frIntegrations, contact: frContact, notFound: frNotFound, blog: frBlog,
  },
  en: {
    common: enCommon, seo: enSeo, home: enHome, pricing: enPricing, features: enFeatures,
    campaigns: enCampaigns, useCases: enUseCases, security: enSecurity, compare: enCompare,
    integrations: enIntegrations, contact: enContact, notFound: enNotFound, blog: enBlog,
  },
  es: {
    common: esCommon, seo: esSeo, home: esHome, pricing: esPricing, features: esFeatures,
    campaigns: esCampaigns, useCases: esUseCases, security: esSecurity, compare: esCompare,
    integrations: esIntegrations, contact: esContact, notFound: esNotFound, blog: esBlog,
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export * from './config';
export * from './routes';
