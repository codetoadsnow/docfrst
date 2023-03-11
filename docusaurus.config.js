// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // navbar: {
      //   items: [
      //      {
      //       type: 'dropdown',
      //       label: 'Community',
      //       position: 'left',
      //       items: [
      //         {
      //           label: 'Facebook',
      //           href: 'https://www.facebook.com',
      //         },
      //         {
      //           label: 'SQL',
      //           to: '/SQL'
      //           // type: 'doc',
      //           // label: 'Social',
      //           // docId: 'social',
      //         },              
      //         {
      //           label: 'Python',
      //           to: '/Python'
      //           // type: 'doc',
      //           // label: 'Social',
      //           // docId: 'social',
      //         },
      //         // ... more items
      //       ],
      //     },
      //   ],
      // },
      navbar: {
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Tutorial',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Tutorial',
          },
          {
            type: 'dropdown',
            label: 'SQL',
            position: 'left',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com',
              },
              {                
                label: 'Big Query',
                to: '/docs/intro'
                // type: 'doc',
                // label: 'Social',
                // docId: 'social',
              },
              {                
                label: 'asdf',
                to: '/docs/intro'
                // type: 'doc',
                // label: 'Social',
                // docId: 'social',
              },
            ], 
          },
          {
            type: 'dropdown',
            label: 'BI',
            position: 'left',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com',
              },
              {                
                label: 'DataLens',
                to: '/docs/BI/DataLens/DataLens'
                // type: 'doc',
                // label: 'Social',
                // docId: 'social',
              },
              {                
                label: 'Courses',
                to: '/docs/BI/DataLens/Courses/YaDashBoard'
                // type: 'doc',
                // label: 'Social',
                // docId: 'social',
              },
            ], 
          },
        ],
        
      },
      // navbar: {        
      //   title: 'My Site',
      //   logo: {
      //     alt: 'My Site Logo',
      //     src: 'img/logo.svg',
      //   },
      //   items: [
      //     {
      //       type: 'dropdown',
      //       docId: 'intro',
      //       position: 'left',
      //       label: 'Tutorial',
      //     },
      //     {to: '/blog', label: 'Blog', position: 'left'},
      //     {to: '/Python', label: 'Python', position: 'left'},
      //     {to: '/SQL', label: 'SQL', position: 'left'},
      //     {to: '/Analytics', label: 'Analytics', position: 'left'},
      //     {to: '/Pron', label: 'Pron', position: 'left'},
          
      //     {
      //       type: 'docsVersionDropdown',
      //       position: 'right',
      //     },
      //     {
      //       type: 'localeDropdown',
      //       position: 'right',
      //     },
      //     {
      //       href: 'https://github.com/facebook/docusaurus',
      //       label: 'GitHub',
      //       position: 'right',
      //     },
      //   ],
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
