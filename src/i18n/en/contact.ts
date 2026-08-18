import type { Contact } from '../fr/contact';

export const contact = {
  meta: {
    title: 'Contact & demo — let us talk about your rollout',
    description:
      'A Signally demo takes twenty minutes: your directory, your template, your first campaign. Write to us or book a slot.',
  },

  hero: {
    eyebrow: 'Contact & demo',
    title: 'Let us talk about your rollout.',
    lede: 'A demo takes twenty minutes: your directory, your template, your first campaign.',
  },

  form: {
    title: 'Request a demo',
    successTitle: 'Message sent.',
    successText: 'We will get back to you within one working day, at the address you gave.',
    submit: 'Request my demo',
    submitting: 'Sending…',
    legal:
      'Your details are used only to handle your request. They are hosted in the European Union and never passed on.',
    honeypot: 'Do not fill in this field',
    fields: {
      name: { label: 'First and last name', placeholder: 'Camille Durand' },
      email: { label: 'Work email', placeholder: 'camille@company.com' },
      company: { label: 'Company', placeholder: 'Company name' },
      headcount: { label: 'Number of employees', placeholder: '120' },
      environment: { label: 'Email environment' },
      message: {
        label: 'What you need',
        placeholder:
          'Unify the signatures of three subsidiaries and launch a hiring campaign.',
      },
    },
    environments: [
      'Microsoft 365 / Outlook',
      'Google Workspace / Gmail',
      'Both',
      'Other',
    ],
    errors: {
      name: 'Please give your first and last name.',
      emailRequired: 'Please give your work email.',
      emailInvalid: 'This email address is not valid.',
      company: 'Please give your company name.',
      environment: 'Please choose an email environment.',
      message: 'Describe what you need in a few words (10 characters minimum).',
      tooLong: 'This field is too long.',
    },
    alerts: {
      validation: 'Some fields are incomplete or invalid. Please check the form.',
      frequence: 'Too many requests from this address. Try again in a few minutes.',
      envoi: 'Sending failed. Try again in a moment, or write to us at',
      format: 'The request could not be read. Please try again.',
      network: 'Could not connect. Check your network, or write to us at',
    },
  },

  side: {
    tryTitle: 'Would you rather try it first?',
    tryText:
      'The editor is open: build a complete signature, test it in your email client, decide afterwards.',
    tag: 'SIGNALLY',
    points: [
      'European email signature management software',
      'Data hosted in the European Union',
      'Support included in the subscription',
    ],
    mailLabel: 'Write to us directly:',
    todo: 'Section to complete: postal address, phone number, company number, DPO contact.',
  },
} satisfies Contact;
