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
          sidebarPath: './sidebars.ts'
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
          href: 'https://github.com/bridgesplit',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://app.bridgesplit.com',
          label: 'App',
          position: 'right',
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
          title: 'Docs',
          items: [
            {
              label: 'Concepts',
              to: 'concepts/'
            },
            // {
            //   label: 'Guides',
            //   to: 'guides/',
            // },
            // {
            //   label: 'Protocol',
            //   to: 'protocol/'
            // },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Website',
              href: 'https://bridgesplit.com'
            },
            {
              label: 'App',
              href: 'https://app.bridgesplit.com'
            },
            {
              label: 'Analytics',
              href: 'https://dashboards.bridgesplit.com/login'
            },
            {
              label: 'Feedback',
              href: 'https://bridgesplit.canny.io/feedback'
            },

          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/A9xnqqzACF',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/bridgesplit',
            },
            {
              label: 'Blog',
              href: 'https://bridgesplit.com/blog',
            },
          ],
        }
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
