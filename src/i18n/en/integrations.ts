import type { Integrations } from '../fr/integrations';

export const integrations = {
  microsoft: {
    meta: {
      title: 'Microsoft 365 & Outlook email signature — centrally deployed add-in',
      description:
        'Deploy the Outlook signature for your whole company from the Microsoft 365 admin center. No Exchange transport rule, no rerouting, in fifteen minutes.',
    },
    hero: {
      eyebrow: 'Microsoft 365 add-in',
      title: 'Outlook and Microsoft 365 signatures: central deployment, no transport rule.',
      lede:
        'The Signally add-in installs from your Microsoft 365 admin center and applies the right signature to every employee, in Outlook Web, Windows, Mac and mobile. Your email always leaves from your own tenant.',
    },
    journeysTitle: 'What actually happens, on the admin side and on the employee side',
    adminTag: 'ADMIN SIDE — 15 MINUTES',
    adminSteps: [
      {
        title: 'Connect the tenant',
        text:
          'You authorise Signally from Entra ID with admin consent, read-only on the directory.',
      },
      {
        title: 'Deploy the add-in',
        text:
          'Under "Integrated apps", you deploy the add-in to the whole organisation or to a pilot group.',
      },
      {
        title: 'Assign the templates',
        text: 'You map each Microsoft 365 group to the signature template that fits it.',
      },
      {
        title: 'Continuous updates',
        text:
          'A new joiner appears in the directory: they get their signature with nothing for you to do.',
      },
    ],
    userTag: 'EMPLOYEE SIDE — 0 MINUTES',
    userSteps: [
      {
        title: 'They open Outlook',
        text: 'Nothing to install, nothing to copy and paste, no tutorial to follow.',
      },
      {
        title: 'They write a message',
        text:
          'The signature is inserted into the body of the message, with their details and the current banner.',
      },
      {
        title: 'They send it',
        text: 'The message leaves from their Microsoft 365 account. Signally plays no part in sending.',
      },
      {
        title: 'They see what the recipient sees',
        text:
          'The signature is visible in sent items — unlike server-side transport rules.',
      },
    ],
    callout: {
      title: 'Why an add-in rather than an Exchange transport rule?',
      text:
        'A transport rule adds the signature after sending, server-side: the employee never sees it, threaded replies stack up badly and encryption can get in the way. The add-in inserts the signature as the message is written, in the message the user has in front of them, with no traffic rerouting and no SMTP connector to maintain.',
    },
    environmentsTitle: 'Environments covered',
    environments: [
      { name: 'Outlook Web', detail: 'Browser, all operating systems' },
      { name: 'Outlook Windows', detail: 'Classic and new Outlook' },
      { name: 'Outlook Mac', detail: 'Current version' },
      { name: 'Outlook mobile', detail: 'iOS and Android' },
      { name: 'Exchange Online', detail: 'Microsoft 365 tenants' },
    ],
    howToName: 'Deploy an email signature on Microsoft 365 and Outlook',
    faq: {
      title: 'Frequently asked questions — Microsoft 365 and Outlook',
      items: [
        {
          q: 'How do I deploy an email signature to all Microsoft 365 users?',
          a: 'You connect your tenant to Signally with admin consent, deploy the add-in from the "Integrated apps" section of the Microsoft 365 admin center, then assign a template to each group. The full deployment takes about fifteen minutes.',
        },
        {
          q: 'Does the add-in work on the new Outlook?',
          a: 'Yes. The add-in works on Outlook Web, the new Outlook for Windows, classic Outlook for Windows, Outlook for Mac and Outlook mobile on iOS and Android.',
        },
        {
          q: 'Do I need to create an Exchange transport rule?',
          a: 'No, and that is an advantage: no traffic rerouting, no connector, no change to your outbound routing. The signature is inserted into the message as it is written.',
        },
        {
          q: 'Does the add-in have access to the content of my emails?',
          a: 'No. It inserts a signature block into the body of the message being written. It does not read, analyse or keep the content of your messages, and no email passes through our servers.',
        },
        {
          q: 'What happens for a new joiner?',
          a: 'As soon as their account appears in the directory and belongs to a group mapped to a template, they get their signature. Nothing is asked of them or of the IT team.',
        },
        {
          q: 'Can we test on a pilot group before going wider?',
          a: 'Yes. The add-in deployment can be limited to a Microsoft 365 group of your choice, then extended to the whole organisation once you are satisfied.',
        },
      ],
    },
    cta: {
      title: 'Deploy your Outlook signatures with Signally',
      text:
        'Fifteen minutes from your Microsoft 365 admin center, without touching your routing.',
      secondaryLabel: 'Request a demo',
    },
  },

  google: {
    meta: {
      title: 'Gmail & Google Workspace signature — domain-wide add-on',
      description:
        'Manage the Gmail signature for your whole domain from the Google admin console: domain-wide add-on, templates per organisational unit, scheduled banners.',
    },
    hero: {
      eyebrow: 'Google Workspace add-on',
      title: 'Gmail signatures for the whole company, managed from the Google admin console.',
      lede:
        'Domain-wide installation, organisational units kept in sync, the signature applied on Gmail web and mobile. Your messages keep leaving from your Google Workspace account.',
    },
    stepsTitle: 'Domain-wide installation, in four steps',
    steps: [
      {
        n: '01',
        title: 'Domain-wide installation',
        text:
          'From the Google admin console, you install the Signally add-on for the entire domain.',
      },
      {
        n: '02',
        title: 'Directory synchronisation',
        text: 'Users and their attributes come across from Google Directory, read-only.',
      },
      {
        n: '03',
        title: 'Templates per organisational unit',
        text: 'Each Google OU or group gets its signature template and its banners.',
      },
      {
        n: '04',
        title: 'Applied in Gmail',
        text:
          'The signature appears as the message is written, on Gmail web and mobile, always up to date.',
      },
    ],
    callout: {
      title: 'What about the limits of native Gmail signatures?',
      text:
        'Gmail lets each user define their own signature, with no central control, no locked template and no scheduled banner. The "append footer" feature in the Google console applies server-side in plain text and breaks the formatting. Signally brings the single template, the administrator lock and the campaigns, without changing anything in your routing.',
    },
    howToName: 'Deploy a Gmail signature domain-wide across Google Workspace',
    faq: {
      title: 'Frequently asked questions — Google Workspace and Gmail',
      items: [
        {
          q: 'How do I set the same signature for all Google Workspace users?',
          a: 'You install the Signally add-on domain-wide from the Google admin console, synchronise the directory, then assign a template to each organisational unit or group. The signature then applies inside Gmail.',
        },
        {
          q: 'How is this different from the native Google Workspace footer?',
          a: 'The console footer is appended server-side, at the bottom of the conversation, with very limited formatting. The Signally add-on inserts a complete HTML signature as the message is written, with logo, social links and campaign banner.',
        },
        {
          q: 'Are organisational units taken into account?',
          a: 'Yes. You can assign a different template per organisational unit or per Google group, which covers multi-subsidiary and multi-country organisations.',
        },
        {
          q: 'Does the signature show on Gmail mobile?',
          a: 'Yes, the signature applies to messages written from the Gmail app, within the rendering limits of mobile clients.',
        },
        {
          q: 'Does Signally send my emails for me?',
          a: 'No. Your messages leave from your own Google Workspace account. We play no part in sending, routing or deliverability.',
        },
        {
          q: 'What permissions are requested?',
          a: 'Read access to the directory attributes the signature needs, and permission to insert the signature as the message is written. No access to message content is required.',
        },
      ],
    },
    cta: {
      title: 'Unify your Gmail signatures with Signally',
      text:
        'One add-on installed domain-wide, templates per organisational unit, and no more improvised signatures.',
      secondaryLabel: 'Request a demo',
    },
  },
} satisfies Integrations;
