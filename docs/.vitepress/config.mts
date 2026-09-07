import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'SITMC 铁道交通建设无限公司',
  description: '致力于铺设更多便民的 Minecraft 铁道铁路 · MUA-SITMC 旗下交通建设机构',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#ec4899' }],
    ['meta', { property: 'og:title', content: 'SITMC 铁道交通建设无限公司' }],
    ['meta', { property: 'og:description', content: 'SITMC 铁道交通建设无限公司官方网站与知识库' }],
    ['meta', { property: 'og:image', content: '/logo.png' }]
  ],
  themeConfig: {
    logo: { src: '/logo.png', alt: 'SITMC Logo' },
    siteTitle: 'SITMC 铁道建设',

    nav: [
      { text: '首页', link: '/' },
      { text: '线路成果厅', link: '/lines/' },
      { text: '发展编年史', link: '/history/' },
      { text: '联道计划', link: '/projects/mulliance' },
      { text: '团队名单', link: '/team/' },
      {
        text: '官方社媒',
        items: [
          { text: '哔哩哔哩官方空间', link: 'https://space.bilibili.com/3707011933932335' }
        ]
      }
    ],

    sidebar: {
      '/lines/': [
        {
          text: '铁道成果展示厅',
          items: [
            { text: '线路总览与换乘大厅', link: '/lines/' },
            { text: 'SITMC 本服路网', link: '/lines/sitmc' },
            { text: 'MUC 跨服联道工程', link: '/lines/muc' }
          ]
        }
      ],
      '/history/': [
        {
          text: '历史编年史',
          items: [
            { text: '建设历史日志', link: '/history/' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '合作工程',
          items: [
            { text: '联道计划 (MUlliance)', link: '/projects/mulliance' }
          ]
        }
      ],
      '/team/': [
        {
          text: '组织架构',
          items: [
            { text: '公司人员名单', link: '/team/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1pd17nK/sitmc' }
    ],

    footer: {
      message: '社区内容除另有注明外，均在 CC-BY-SA 4.0 协议下提供',
      copyright: 'Copyright © 2025-2026 SITMC 铁道交通建设无限公司'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    search: {
      provider: 'local'
    }
  }
})
