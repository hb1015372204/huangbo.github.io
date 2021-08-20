module.exports = {
    '/vue/': [
        {collapsable: false, children: [['/vue/introduce/', '介绍']]},
        {collapsable: false, children: [['/vue/lifecycle/', '生命周期']]},
        {title: '源码', collapsable: true,},
    ],
    '/React/': [
        {title: 'React原理解析',collapsable: true, children: [
            ['/React/react/', 'React'],
            ['/React/lifecycle/', '生命周期']
        ]},
    ]
}