---
layout: home

hero:
  name: "SITMC 铁道交通建设无限公司"
  text: "铺设便民铁路 · 贯通方块世界"
  tagline: "隶属于 MUA-SITMC 旗下的专业交通工程组织，致力于构建联通主界、下界与各大高校生存服的现代化轨道交通网。"
  image:
    src: /logo.png
    alt: SITMC 铁道建设 Logo
  actions:
    - theme: brand
      text: 🚇 查阅线路成果厅
      link: /lines/
    - theme: alt
      text: 📜 建设历史日志
      link: /history/
    - theme: alt
      text: 👥 公司人员名单
      link: /team/

features:
  - icon: 🚄
    title: 浩瀚路网体系
    details: 覆盖主世界深海群岛与下界枢纽要塞，规划并建成 7 大骨干干线与环线，实现多线无缝换乘与双向快通。
  - icon: 🌐
    title: MUA 高校联盟
    details: 积极推进 MUAlliance 跨服互联工程，联合 SUESMC、NENUMC 等高校生存服拓展交通版图。
  - icon: 🏛️
    title: 站台建筑美学
    details: 融合红石生电技术与环境艺术设计，每一座换乘大厅与前哨站台均倾注匠心设计。
  - icon: 🤝
    title: 开源共建社区
    details: 秉持开放包容的开源理念，文档与工程资料全方位共享，社区内容遵循 CC-BY-SA 4.0 许可协议。
---

<div class="home-showcase-section">
  <div class="section-badge">✨ 核心成果概览</div>
  <h2 class="section-heading">纵横穿梭的方块交通命脉</h2>
  <p class="section-subheading">
    从最初的前哨站物资小道，到如今连接各大聚落、度假区与工业中心的立体化铁路网络。
  </p>

  <RailwayLines />

  <BilibiliCard />
</div>

<style>
.home-showcase-section {
  max-width: 1152px;
  margin: 3rem auto;
  padding: 0 1.5rem;
}

.section-badge {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(236, 72, 153, 0.12);
  color: #ec4899;
  border: 1px solid rgba(236, 72, 153, 0.3);
  margin-bottom: 0.75rem;
}

.section-heading {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
  border: none !important;
  padding: 0 !important;
}

.section-subheading {
  color: var(--vp-c-text-2);
  font-size: 1.05rem;
  margin-bottom: 2rem;
  max-width: 680px;
}
</style>
