import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xenon",
  description: "Privacy for everyone",
  lang: 'en-US',
  lastUpdated: false,
  appearance: 'dark',
  head: [
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
      ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
      ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
      ['meta', { name: 'theme-color', content: '#00000' }],
  ],

  markdown: {
      lineNumbers: true,
      theme: 'one-dark-pro'
  },

  rewrites: {
    'source/:page': 'destination/:page'
  },
  themeConfig: {
    logo: '/hero.png',
    footer: {
      copyright: "&copy; Xenon Team All Rights Reserved.",
  },

  sidebar: {
      '/docs/': sidebarGuide()
  },

  nav: [
  {
  text: 'Projects',
  items: [
    { text: 'Xenon Music Player', link: '/docs/xenon-music/end/' }
   ]
  },
{ text: 'Docs', link: '/docs/' }
     ],

  socialLinks: [
      { icon: 'github', link: 'https://github.com/Xenon-project' },
      { icon: 'twitter', link: 'https://twitter.com/xenon_labs_' },

  ],
},
})
function sidebarGuide() {
  return [
{
          text: 'Xenon Music Player',
          collapsible: true,
          items: [
              {
                  text: 'Xenon Music Player end of support',
                  link: '/docs/xenon-music/end/'
              }
          ]
      }

  ]
}
