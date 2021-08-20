const nav = require('./nav');
const sidebar = require('./sidebar');
module.exports = {
    title: 'hblog',
    description: 'huangbo',
    head: [
        ['link',{
            rel: 'icon',
            href: '/images/favicon.ico'
        }]
    ],
    base: '/',
    themeConfig: {
        logo: '/images/logo.png',
        nav: nav,// 右上导航条
        sidebar: sidebar,// 侧边栏左侧
    },
    extraWatchFiles: [
        '.vuepress/config.js'
    ]

}