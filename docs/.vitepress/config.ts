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
            '/docs/': sidebarGuide()
        },

        nav: [
            { text: 'Apps', link: '/apps/' },
            { text: 'Docs', link: '/docs/helium/' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Xenon-project' },
            { icon: 'twitter', link: 'https://twitter.com/XenonTeam_' },

        ],
    },
});

function sidebarGuide() {
    return [
        {
            text: 'Helium',
            collapsible: true,
            items: [
                {
                    text: 'Download',
                    link: '/docs/helium/'
                },
                {
                    text: 'Build from source',
                    link: '/docs/helium/build-from-source'
                },
		{
                    text: 'Contribute',
                    link: '/docs/helium/contribute'
                }
            ]
        },
	{
            text: 'Xenon Music Player',
            collapsible: true,
            items: [
                {
                    text: 'Xenon Music Player end of support',
                    link: '/docs/xenon-music/end'
                }
            ]
        }

    ]
}
