const nav = require('./nav');
const sidebar = require('./sidebar');
module.exports = {
    title: 'hblog',
    description: 'huangbo',
    head: [
        ['link',{
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    base: '/',
    themeConfig: {
        nav: nav,
        sidebar: sidebar
    },
    extraWatchFiles: [
        '.vuepress/config.js'
    ]

}