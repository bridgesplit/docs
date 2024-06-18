import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Bridgesplit Docs',
  tagline: 'Resources on the Bridgesplit Protocol, Markets, and more',
  favicon: 'img/favicon.ico',
  url: 'https://docs.bridgesplit.com',
  baseUrl: '/',
  organizationName: 'bridgesplit',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'Bridgesplit Docs',
      logo: {
        alt: 'Bridgesplit',
        src: 'img/docs_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'concepts',
          position: 'left',
          label: 'Concepts',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'userGuides',
        //   position: 'left',
        //   label: 'Guides',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'protocol',
        //   position: 'left',
        //   label: 'Protocol',
        // },
        {
          type: 'html',
          position: 'right',
          value: '<button class="button--feedback button button--outline button--primary">Feedback</button>',
        },

        {
          type: 'html',
          position: 'right',
          value: '<button class="button button--outline button--primary">Launch App</button>',
        },
        {
          type: 'search',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Docs",
          items: [{
            label: 'Concepts',
            to: 'concepts/overview'
          },
          {
            label: 'Guides',
            to: 'guides/',
          },
          {
            label: 'Protocol',
            to: 'protocol/'
          },
          ]
        },
        {
          title: 'Product',
          items: [{
            label: 'Borrow',
            to: 'https://app.bridgesplit.com'
          },
          {
            label: 'Lend',
            to: 'https://app.bridgesplit.com'
          },

          {
            label: 'Businesses',
            to: 'https://app.bridgesplit.com'
          },

          {
            label: 'Build',
            to: 'https://www.bridgesplit.com/developers'
          },
          ]
        },
        {
          title: 'Resources',
          items: [{
            label: 'Docs',
            to: '/'
          }, {
            label: 'Feedback',
            to: 'bridgesplit.canny.io'
          },
          {
            label: 'Support',
            to: 'https://discord.com/channels/895116209958297631/932703647236771850'
          },
          {
            label: 'Analytics',
            to: 'https://dashboards.bridgesplit.com'
          }
          ]
        },
        {
          title: 'Company',
          items: [{
            label: 'About',
            to: 'https://bridgesplit.com/about'
          }, {
            label: 'Careers',
            to: 'https://careers.bridgesplit.com'
          },
          {
            label: 'Blog',
            to: 'ttps://bridgesplit.com/blog'
          },
          ]
        }
      ]
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
