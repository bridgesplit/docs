import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const config: Config = {
  title: 'Loopscale Docs',
  tagline: 'Resources on the Loopscale Protocol, Markets, and more',
  favicon: 'img/favicon.ico',
  url: 'https://docs.loopscale.com',
  baseUrl: '/',
  organizationName: 'loopscale',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  }],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
      disableSwitch: true,
      defaultMode: 'dark'

    },

    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Loopscale',
        src: 'img/docs_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'concepts',
          position: 'left',
          label: 'Concepts',
        },
        {
          type: 'html',
          position: 'left',
          value: '<div class="navbar__link-disabled">Guides<span class="navbar__tooltip">Coming Soon</span></div>',
        },
        {
          type: 'html',
          position: 'left',
          value: '<div class="navbar__link-disabled">Protocol<span class="navbar__tooltip">Coming Soon</span></div>',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a class=" button button--outline " href="http://feedback.loopscale.com" target="_blank">Feedback</a>',
        },

        {
          type: 'html',
          position: 'right',
          value: '<a class="button button--contained" href="https://app.loopscale.com" target="_blank">Launch App</a>',
        },
        {
          type: 'search',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',

      logo: {
        src: 'img/docs_logo.svg',
        href: 'https://loopscale.com',
        width: 160,
        height: 51,
      },
      links: [
        {
          title: 'Ecosystem',
          items: [{
            label: 'App',
            to: 'https://app.loopscale.com'
          },
          {
            label: 'Discord',
            to: 'https://discord.gg/loopscale'
          },
          {
            label: 'Feedback',
            to: 'http://feedback.loopscale.com'
          },
          {
            label: 'Support',
            to: 'https://discord.com/channels/895116209958297631/932703647236771850'
          },
          ]
        },
        {
          title: 'Company',
          items: [{
            label: 'About',
            to: 'https://loopscale.com/about'
          }, {
            label: 'Careers',
            to: 'https://careers.loopscale.com'
          },
          {
            label: 'Blog',
            to: 'https://blog.loopscale.com'
          },
          ]
        }
      ]
    },
    algolia: {
      appId: 'NE73VEETA1',
      apiKey: '1116e1043b428ae3fa98b5cf1d9f239c',
      indexName: 'loopscale',
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
