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
      { text: '团队名单', link: '/team/' }
    ],

    sidebar: {
      '/lines/': [
        {
          text: '铁道成果展示厅',
          items: [
            { text: '线路总览与换乘大厅', link: '/lines/' },
            { text: 'SITMC 本服路网', link: '/lines/sitmc' },
            { text: 'MUA 高校联盟线路', link: '/lines/muc' }
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
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path fill="currentColor" d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>'
        },
        link: 'https://space.bilibili.com/3707011933932335',
        ariaLabel: 'Bilibili 官方空间'
      }
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
