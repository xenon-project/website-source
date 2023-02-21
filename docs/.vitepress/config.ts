import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Xenon Project',
    lastUpdated: true,

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['script', { defer: "true", "data-domain": "stack.jimmycai.com", src: 'https://stat.jimmycai.com/js/include.js' }],
    ],

    markdown: {
        lineNumbers: true,
        theme: 'one-dark-pro'
    },

    cleanUrls: 'with-subfolders',

    themeConfig: {
        logo: '/logo.png',

        footer: {
            copyright: "Copyright © 2023 Xenon Team All Rights Reserved.",
        },

        sidebar: {
            '/apps/': sidebarGuide(),
            '/config/': sidebarGuide(),
            '/writing/': sidebarGuide(),
        },

        nav: [
            { text: 'Apps', link: '/apps/' },
            { text: 'Config', link: '/config/' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/CaiJimmy/hugo-theme-stack' },
            { icon: 'twitter', link: 'https://twitter.com/XenonTeam_' },

        ],
    },
});

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'About Stack', link: '/apps/' },
                { text: 'Getting Started', link: '/apps/getting-started' },
                { text: 'Modify Theme', link: '/apps/modify-theme' }
            ]
        },
        {
            text: 'Writing',
            collapsible: true,
            items: [
                { text: 'Markdown', link: '/writing/markdown' },
                {
                    text: 'Frontmatter Configs', link: '/writing/frontmatter'
                },
                { text: 'Shortcodes', link: '/writing/shortcodes' },
            ]
        },
        {
            text: 'Config',
            collapsible: true,
            items: [
                {
                    text: 'Introduction',
                    link: '/docs/'
                },
                {
                    text: 'Site Configs',
                    link: '/docs/site'
                },
                {
                    text: 'i18n Configs',
                    link: '/docs/i18n'
                },
                {
                    text: 'Custom Menu',
                    link: '/docs/menu'
                },
            ]
        },
    ]
}