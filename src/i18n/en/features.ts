import type { Features } from '../fr/features';

export const features = {
  meta: {
    title: 'Email signature editor — build and deploy a company-wide template',
    description:
      'The Signally editor: locked templates, dynamic fields from your directory, Outlook and Gmail previews, per-team deployment. Free generator.',
  },

  hero: {
    eyebrow: 'Email signature generator',
    title: 'Create a professional email signature and deploy it automatically across the company.',
    lede:
      'The Signally editor lets you design a flawless signature, and its deployment happens automatically, with no action from your employees.',
    cta: 'Open the editor for free',
  },

  grid: {
    title: 'Everything an email signature manager should be able to do',
    items: [
      {
        title: 'Visual editor',
        text:
          'Drag your blocks, set colours, fonts and separators. Not a line of HTML to write.',
      },
      {
        title: 'Template library',
        text:
          'Signature templates by industry, ready to restyle in your brand colours.',
      },
      {
        title: 'Dynamic fields',
        text:
          'Name, job title, department, phone, office: fields fill themselves from your Microsoft Entra ID or Google Directory.',
      },
      {
        // Anchor shared across all three languages — see the French source.
        id: 'equipes',
        title: 'Teams & groups',
        text:
          'One signature per subsidiary, brand, department or country. Employees inherit the right one automatically.',
      },
      {
        title: 'Administrator lock',
        text:
          'You decide what an employee may change — and what stays untouchable: logo, legal notices, disclaimer.',
      },
      {
        title: 'Social links & CTA',
        text:
          'Social icons, a booking button, a link to a customer review: every signature becomes actionable.',
      },
      {
        title: 'Multi-client preview',
        text:
          'Rendering checked on Outlook Windows and Mac, Outlook Web, Gmail, Apple Mail and mobile before any deployment.',
      },
      {
        title: 'vCard & QR code',
        text:
          'Add a digital business card or an add-contact QR code straight into the signature.',
      },
      {
        title: 'Statistics',
        text:
          'Click tracking on links and banners, by campaign, by team and by period.',
      },
    ] as { id?: string; title: string; text: string }[],
  },

  steps: {
    title: 'From design to deployment, in four steps',
    items: [
      {
        n: '01',
        title: 'You create your signature',
        text: 'From a template or a blank page, in your brand colours.',
      },
      {
        n: '02',
        title: 'You connect the directory',
        text:
          'Microsoft 365 or Google Workspace: employees and their details come across on their own.',
      },
      {
        n: '03',
        title: 'You assign by team',
        text: 'Each group gets its template and, if needed, its own banners.',
      },
      {
        n: '04',
        title: 'The add-in does the rest',
        text: 'The signature appears as the message is written, up to date, for everyone.',
      },
    ],
  },

  faq: {
    title: 'Frequently asked questions about the signature editor',
    items: [
      {
        q: 'How do I create a professional email signature?',
        a: 'Start from a library template or a blank page, add your logo, contact details and social links, then replace personal information with dynamic fields. The template then works for the whole company: every employee sees their own data.',
      },
      {
        q: 'Do I need to know HTML?',
        a: 'No. The editor is entirely visual. The HTML it generates is tuned for email clients, which avoids the classic hand-written mistakes: unclosed tables, unresized images, styles Outlook ignores.',
      },
      {
        q: 'Can I stop employees editing their own signature?',
        a: 'Yes. The administrator decides field by field what is editable and what is locked. The logo, legal notices and template structure stay untouchable, even if you let the employee adjust their direct phone number.',
      },
      {
        q: 'Can an employee have several signatures?',
        a: 'Yes: a first-message signature and a shorter reply signature, for example, or one signature per brand for sales people covering several entities.',
      },
      {
        q: 'How do I check the rendering before deploying?',
        a: 'Every template has a multi-client preview: Outlook Windows and Mac, Outlook Web, Gmail, Apple Mail, iOS and Android mobile. You can also send yourself a test before publishing.',
      },
      {
        q: 'Does the information come from the directory automatically?',
        a: 'Yes. Dynamic fields fill from Microsoft Entra ID or Google Directory. When a job title changes in the directory, the signature follows without anyone stepping in.',
      },
    ],
  },

  cta: {
    title: 'Create your first signature with Signally',
    text:
      'The editor is open and free. Company-wide deployment comes next, in a matter of minutes.',
    primaryLabel: 'Open the editor',
  },
} satisfies Features;
