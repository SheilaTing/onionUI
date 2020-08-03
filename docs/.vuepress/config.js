module.exports = {
    title: 'tangerine UI',
    description: 'Just playing around',
    base:'/onionUI/',
    themeConfig: {
        nav: [
            { text: '源码', link: '/' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    // '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/collapse',
                    '/components/grid'
                ]
            }

        ]
    }
}