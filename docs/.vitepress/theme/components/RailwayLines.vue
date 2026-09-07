<script setup lang="ts">
import { ref, computed } from 'vue'

interface Station {
  name: string
  enName?: string
  transfers?: string[]
  subStations?: Station[]
  note?: string
}

interface Line {
  id: string
  code: string
  name: string
  fullName: string
  color: string
  textColor?: string
  bgLight: string
  category: 'SITMC' | 'MUC'
  status: '运营中' | '建设中' | '规划中'
  description?: string
  stations: Station[]
}

const lines: Line[] = [
  {
    id: 'oll',
    code: 'OLL',
    name: '前哨站环线',
    fullName: 'SITMC NetherMetro Line 3：Outpost Loop Line',
    color: '#a855f7',
    textColor: '#ffffff',
    bgLight: 'rgba(168, 85, 247, 0.12)',
    category: 'SITMC',
    status: '运营中',
    description: '下界前哨站核心枢纽双向环线，连接东南、西南、西北、东北四大前哨站与公司总部。',
    stations: [
      { name: '小各-东南前哨站（南域火车站）', enName: '(Xiaoge-) SouthEast Outpost (Southern Railway Station)', transfers: ['南部联合线', '海川线', '河晏线'] },
      { name: '黏土山中转站', enName: 'Clay Mountain Freight', transfers: ['南部联合线', '河晏线'] },
      { name: '平原中转站', enName: 'Plain Freight', transfers: ['南部联合线', '海川线'] },
      { name: '茗柠の家', enName: "Meaning's Home", transfers: ['南部联合线', '内环观光线'] },
      { name: '短道速线换乘站', enName: 'Speed Line Transfer', transfers: ['短道速线'] },
      { name: '末地站', enName: 'End Station', transfers: ['主城-末地冰道'] },
      { name: '小各-西南前哨站', enName: '(Xiaoge-) SouthWest Outpost', transfers: ['南部联合线', '海川线'], subStations: [{ name: '小竹林', enName: 'Bamboo Copse' }] },
      { name: 'Vergilの家', enName: "Vergil's Home" },
      { name: '小各-西北前哨站', enName: '(Xiaoge-) NorthWest Outpost', subStations: [{ name: 'Hgfdddddsの家', enName: "Hgfddddds' Home" }] },
      { name: 'SITMC铁道建设公司总部', enName: 'SITMC Railway Construction Company Headquarters', transfers: ['海川线'] },
      { name: '雪地中转站', enName: 'Snowland Freight' },
      { name: '小各-东北前哨站', enName: '(Xiaoge-) NorthEast Outpost' },
      { name: '沙漠中转站', enName: 'Desert Freight' },
      { name: '稀树草原中转站', enName: 'Savanna Freight', transfers: ['六角环线'] }
    ]
  },
  {
    id: 'su',
    code: 'SU',
    name: '南部联合线',
    fullName: 'SITMC NetherMetro Line 4：South Union',
    color: '#eab308',
    textColor: '#000000',
    bgLight: 'rgba(234, 179, 8, 0.12)',
    category: 'SITMC',
    status: '运营中',
    description: '下界南北走廊重要交通线，贯穿南域各大度假区、灵沙市区及西南中转站。',
    stations: [
      { name: 'Sakanaの家北站', enName: "Sakana's North Home", transfers: ['六角环线'] },
      { name: '小各-东南前哨站（南域火车站）', enName: '(Xiaoge-) SouthEast Outpost (Southern Railway Station)', transfers: ['前哨站环线', '海川线', '河晏线'] },
      { name: '黏土山中转站', enName: 'Clay Mountain Freight', transfers: ['前哨站环线', '河晏线'], subStations: [{ name: '稀草度假区', enName: 'Savanna Resort', transfers: ['前哨站环线', '海川线'] }] },
      { name: '平原中转站', enName: 'Plain Freight', transfers: ['前哨站环线', '海川线'], subStations: [{ name: '平原露营地', enName: 'Plain Campground', transfers: ['海川线'] }] },
      { name: '茗柠の家', enName: "Meaning's Home", transfers: ['前哨站环线', '内环观光线'], subStations: [{ name: '常阳坡', enName: 'Perpetual Sun Slope' }, { name: '灵沙市区', enName: 'Lingsha Area', transfers: ['内环观光线'] }] },
      { name: '小各-西南中转站', enName: '(Xiaoge-) SouthWest Outpost', transfers: ['前哨站环线', '海川线'] }
    ]
  },
  {
    id: 'sl',
    code: 'SL',
    name: '短道速线',
    fullName: 'SITMC NetherMetro Line 5：Shortspeed Line',
    color: '#94a3b8',
    textColor: '#ffffff',
    bgLight: 'rgba(148, 163, 184, 0.12)',
    category: 'SITMC',
    status: '运营中',
    description: '直连幻想庄园与荒地聚落的快速下界直通线。',
    stations: [
      { name: '幻想庄园', enName: 'Fantasy Manor', transfers: ['海川线'] },
      { name: '短道速线换乘站', enName: 'Speed Line Transfer', transfers: ['前哨站环线'] },
      { name: '多草荒地', enName: 'Grassy Yssarg', transfers: ['海川线'] },
      { name: '少草荒地', enName: 'Wilderness Ground' },
      { name: 'Enderperの家', enName: "Enderper's Home", transfers: ['海川线'] },
      { name: 'guanyimaiの墓', enName: "guanyimai's Grave" },
      { name: 'A_Mengの家', enName: "A_Meng's Home", transfers: ['海川线'] }
    ]
  },
  {
    id: 'ccc',
    code: 'CCC',
    name: '内环观光线',
    fullName: 'SITMC NetherMetro Line 6：CityCore Circult',
    color: '#84cc16',
    textColor: '#ffffff',
    bgLight: 'rgba(132, 204, 22, 0.12)',
    category: 'SITMC',
    status: '运营中',
    description: '下界主城区景观走廊，串联永恒之地、星萤岛、天空岛与主城站。',
    stations: [
      { name: '茗柠の家', enName: "Meaning's Home", transfers: ['前哨站环线', '南部联合线'] },
      { name: 'Totollyの家', enName: "Totolly's Home", transfers: ['海川线'] },
      { name: '永恒之地', enName: 'Eternal Land', transfers: ['海川线'] },
      { name: '灵沙市区', enName: 'Lingsha Area', transfers: ['南部联合线'] },
      { name: '针杏原野森林', enName: 'Wilderness Forest' },
      { name: '星萤岛', enName: 'Stella Island', transfers: ['基 bedrock 联络线', '河晏线', '二号线 (规划)'] },
      { name: '天空岛', enName: 'Skye Island' },
      { name: 'Shangxiaoerの家南站', enName: "Shangxiaoer's South Home", transfers: ['河晏线'] },
      { name: '7_hanの家', enName: "7_han's Home" },
      { name: '北岸', enName: 'North Shore', transfers: ['基 bedrock 联络线', '一号线'] },
      { name: '主城站', enName: 'MainCity', transfers: ['主城-末地冰道', '基 bedrock 联络线', '一号线', '二号线 (规划)'] },
      { name: 'Macroの家', enName: "Macro's Home", transfers: ['河晏线', '基 bedrock 联络线'] },
      { name: 'Old head Zhengの家', enName: "Old head Zheng's Home", transfers: ['基 bedrock 联络线'] },
      { name: 'Carol031の家', enName: "Carol031's Home", transfers: ['海川线'] },
      { name: 'Asakioの家', enName: "Asakio's Home", transfers: ['海川线'] },
      { name: 'Luckybirdの家', enName: "Luckybird's Home", transfers: ['海川线'] }
    ]
  },
  {
    id: 'ol',
    code: 'OL',
    name: '海川线',
    fullName: 'SITMC MainMetro Line 7：Oceanic Line',
    color: '#2563eb',
    textColor: '#ffffff',
    bgLight: 'rgba(37, 99, 235, 0.12)',
    category: 'SITMC',
    status: '运营中',
    description: '主世界核心干线，横贯海川段、西南工业区段与东延伸段三大主要片区。',
    stations: [
      { name: '小各-东南前哨站（南域火车站）', enName: '(Xiaoge-) SouthEast Outpost (Southern Railway Station)', transfers: ['前哨站环线', '南部联合线', '河晏线'] },
      { name: '海螺岛', enName: 'Conch Island' },
      { name: '稀草度假区', enName: 'Savanna Resort', transfers: ['南部联合线'] },
      { name: '浅浪岛', enName: 'Ripple Island' },
      { name: '海中城', enName: 'Marine Metropolis', transfers: ['雪原-海城冰道'] },
      { name: 'A_Mengの家', enName: "A_Meng's Home", transfers: ['短道速线'] },
      { name: 'Enderperの家', enName: "Enderper's Home", transfers: ['短道速线'], subStations: [{ name: 'Noriceの家', enName: "Norice's Home" }, { name: '多草荒地', enName: 'Grassy Yssarg', transfers: ['短道速线'] }] },
      { name: '火碟', enName: 'Pyotechnic Disc' },
      { name: '寒冰中转站', enName: 'Cryogenic Freight' },
      { name: 'SITMC铁道建设公司总部', enName: 'SITMC Railway Construction Company Headquarters', transfers: ['前哨站环线'] },
      { name: '小各-西南前哨站', enName: '(Xiaoge-) SouthWest Outpost', transfers: ['前哨站环线', '南部联合线'] },
      { name: '魔法猫咪故居', enName: "Magical Cat's dwelling", transfers: ['基 bedrock 联络线'] },
      { name: '渔海', enName: 'Fishsea' },
      { name: 'tianjinzhikongの家', enName: "tianjinzhikong's Home", transfers: ['基 bedrock 联合线'] },
      { name: '农庄', enName: 'Ranch' },
      { name: '幻想庄园', enName: 'Fantasy Manor', transfers: ['短道速线'] },
      { name: '让我看看！', enName: 'Let_Me_See_See！', transfers: ['河晏线'], subStations: [{ name: 'Luckybirdの家', enName: "Luckybird's Home" }, { name: 'Asakioの家', enName: "Asakio's Home" }] },
      { name: '主城西', enName: 'West MainCity', transfers: ['河晏线', '一号线'] },
      { name: 'Carol031の家', enName: "Carol031's Home", transfers: ['内环观光线'] },
      { name: '永恒之地', enName: 'Eternal Land', transfers: ['河晏线', '内环观光线'] },
      { name: 'Totollyの家', enName: "Totolly's Home", transfers: ['内环观光线'] },
      { name: '平原露营地', enName: 'Plain Campground', transfers: ['南部联合线'] },
      { name: '平原中转站', enName: 'Plain Freight', transfers: ['前哨站环线', '南部联合线'] },
      { name: '星萤新区', enName: 'Stella District' },
      { name: '贪哥の家', enName: "Skydj233's Home", transfers: ['六角环线'] }
    ]
  },
  {
    id: 'pl',
    code: 'PL',
    name: '河晏线',
    fullName: 'SITMC MainMetro Line 8：Pacifica Line',
    color: '#38bdf8',
    textColor: '#0f172a',
    bgLight: 'rgba(56, 189, 248, 0.12)',
    category: 'SITMC',
    status: '运营中',
    description: '主世界核心骨干线，涵盖南支线、主线与北直通线，直达星萤庄园及公司分部。',
    stations: [
      { name: '小各-东南前哨站（南域火车站）', enName: '(Xiaoge-) SouthEast Outpost (Southern Railway Station)', transfers: ['前哨站环线', '南部联合线', '海川线'] },
      { name: '黏土山中转站', enName: 'Clay Mountain Freight', transfers: ['前哨站环线', '南部联合线'] },
      { name: '劫掠之塔', enName: 'Pillaging Tower' },
      { name: '让我看看！', enName: 'Let_Me_See_See！', transfers: ['海川线'] },
      { name: '主城西', enName: 'West MainCity', transfers: ['海川线', '一号线'] },
      { name: 'Macroの家', enName: "Macro's Home", transfers: ['内环观光线', '基 bedrock 联络线'] },
      { name: 'JohnWongの家', enName: "JohnWong's Home", transfers: ['基 bedrock 联络线'] },
      { name: '大风车', enName: 'Windmill' },
      { name: 'Shangxiaoerの家南站', enName: "Shangxiaoer's South Home", transfers: ['内环观光线'] },
      { name: 'Shangxiaoerの家北站', enName: "Shangxiaoer's North Home" },
      { name: '永恒之地（直通）', enName: 'Eternal Land', transfers: ['海川线', '内环观光线'] },
      { name: '星萤庄园', enName: 'Stella Estate', transfers: ['二号线 (规划)', '三号线 (规划)'] },
      { name: '星萤岛', enName: 'Stella Island', transfers: ['二号线 (规划)', '内环观光线', '地狱联络线'] },
      { name: '小各-东北前哨站', enName: '(Xiaoge-) NorthEast Outpost', transfers: ['前哨站环线'] },
      { name: 'SITMC铁道建设公司分部（直通）', enName: 'SITMC Railway Construction Company Branch', transfers: ['橙圆线 (SUESMC)', '奶牛线 (NENUMC)'] },
      { name: 'Bailiの家', enName: "Baili's Home" }
    ]
  },
  {
    id: 'hll',
    code: 'HLL',
    name: '六角环线',
    fullName: 'SITMC NetherMetro Line 9：Hexagonal Loop Line',
    color: '#06b6d4',
    textColor: '#ffffff',
    bgLight: 'rgba(6, 182, 212, 0.12)',
    category: 'SITMC',
    status: '建设中',
    description: '下界六边形环形线路，规划连接南域与外围各站点。',
    stations: [
      { name: 'Sakanaの家北站', enName: "Sakana's North Home", transfers: ['南部联合线'] },
      { name: 'Sakanaの家南站', enName: "Sakana's South Home" }
    ]
  },
  {
    id: 'tl',
    code: 'TL',
    name: '橙圆线 (SUESMC)',
    fullName: 'SUESMC NetherMetro Line 11：Tangerine Line',
    color: '#f97316',
    textColor: '#ffffff',
    bgLight: 'rgba(249, 115, 22, 0.12)',
    category: 'MUC',
    status: '建设中',
    description: 'MUC 联道项目合作线路，连接 SUESMC 生存服与 SITMC 铁道分部。',
    stations: [
      { name: 'SITMC铁道建设公司分部', enName: 'SITMC Railway Construction Company Branch', transfers: ['河晏线 (SITMC)', '奶牛线 (NENUMC)'] }
    ]
  },
  {
    id: 'kl',
    code: 'KL',
    name: '奶牛线 (NENUMC)',
    fullName: 'NENUMC MainMetro Line 12：Klim Line',
    color: '#d97706',
    textColor: '#ffffff',
    bgLight: 'rgba(217, 119, 6, 0.12)',
    category: 'MUC',
    status: '运营中',
    description: 'MUC 联道项目主世界线路，连接 NENUMC 生存服各大工业基地与 SITMC 铁道分部。',
    stations: [
      { name: '福居', enName: 'Fukuju' },
      { name: '卡电园', enName: 'E-Card Zone' },
      { name: 'MosC0vの家', enName: "MosC0v's Home" },
      { name: 'SITMC铁道建设公司分部', enName: 'SITMC Railway Construction Company Branch', transfers: ['河晏线 (SITMC)', '橙圆线 (SUESMC)'] },
      { name: '楉日岛', enName: 'Prosperity Island' },
      { name: '塱上', enName: 'Wetland' },
      { name: '伊甸生物圈', enName: 'Biosphere Paradise' },
      { name: '海军船坞', enName: 'Naval Dockyard' }
    ]
  }
]

const activeCategory = ref<'ALL' | 'SITMC' | 'MUC'>('ALL')
const activeLineId = ref<string>(lines[0].id)
const searchQuery = ref<string>('')

const filteredLines = computed(() => {
  if (activeCategory.value === 'ALL') return lines
  return lines.filter(l => l.category === activeCategory.value)
})

const currentLine = computed(() => {
  return lines.find(l => l.id === activeLineId.value) || lines[0]
})

const selectLine = (id: string) => {
  activeLineId.value = id
}
</script>

<template>
  <div class="railway-showcase">
    <!-- Category & Filter Tabs -->
    <div class="filter-header">
      <div class="category-tabs">
        <button 
          :class="['tab-btn', { active: activeCategory === 'ALL' }]" 
          @click="activeCategory = 'ALL'"
        >全部线路 ({{ lines.length }})</button>
        <button 
          :class="['tab-btn', { active: activeCategory === 'SITMC' }]" 
          @click="activeCategory = 'SITMC'"
        >SITMC 本服线路 (7)</button>
        <button 
          :class="['tab-btn', { active: activeCategory === 'MUC' }]" 
          @click="activeCategory = 'MUC'"
        >MUC 跨服联道 (2)</button>
      </div>
    </div>

    <!-- Line Pills Selector -->
    <div class="line-selector">
      <button
        v-for="line in filteredLines"
        :key="line.id"
        class="line-chip"
        :class="{ selected: activeLineId === line.id }"
        :style="{
          '--line-color': line.color,
          '--line-bg': line.bgLight
        }"
        @click="selectLine(line.id)"
      >
        <span class="line-badge" :style="{ backgroundColor: line.color, color: line.textColor || '#fff' }">
          {{ line.code }}
        </span>
        <span class="line-chip-name">{{ line.name }}</span>
        <span class="status-dot" :class="line.status === '运营中' ? 'active' : 'building'"></span>
      </button>
    </div>

    <!-- Active Line Details Card -->
    <div 
      class="line-detail-card" 
      :style="{ '--active-color': currentLine.color, '--active-bg': currentLine.bgLight }"
    >
      <div class="line-detail-header">
        <div class="line-meta">
          <div class="line-tag-row">
            <span class="line-tag-code" :style="{ backgroundColor: currentLine.color, color: currentLine.textColor || '#fff' }">
              {{ currentLine.code }}
            </span>
            <span class="status-badge" :class="currentLine.status === '运营中' ? 'badge-active' : 'badge-building'">
              {{ currentLine.status }}
            </span>
            <span class="category-badge">{{ currentLine.category === 'SITMC' ? '本服路网' : '高校联道' }}</span>
          </div>
          <h2 class="line-title">{{ currentLine.name }}</h2>
          <div class="line-full-name">{{ currentLine.fullName }}</div>
          <p class="line-desc">{{ currentLine.description }}</p>
        </div>
        <div class="line-stat-card">
          <div class="stat-item">
            <span class="stat-num">{{ currentLine.stations.length }}</span>
            <span class="stat-label">站点数</span>
          </div>
        </div>
      </div>

      <!-- Station Visual Ribbon Route Map -->
      <div class="route-map-container">
        <div class="route-map-title">
          <span>🚇 线路走向与停靠站点图</span>
          <span class="direction-hint">始发站 ➔ 终点站</span>
        </div>
        <div class="station-track-wrap">
          <div class="station-track" :style="{ '--track-color': currentLine.color }">
            <div 
              v-for="(st, idx) in currentLine.stations" 
              :key="idx"
              class="station-node"
            >
              <!-- Track Marker -->
              <div class="node-marker-wrap">
                <span class="node-index">{{ idx + 1 }}</span>
                <div class="node-circle" :style="{ borderColor: currentLine.color }">
                  <div class="node-inner" :style="{ backgroundColor: currentLine.color }"></div>
                </div>
                <div class="node-line" :style="{ backgroundColor: currentLine.color }"></div>
              </div>

              <!-- Station Card -->
              <div class="node-card">
                <div class="node-name-main">{{ st.name }}</div>
                <div v-if="st.enName" class="node-name-en">{{ st.enName }}</div>
                
                <!-- Transfer Badges -->
                <div v-if="st.transfers && st.transfers.length" class="transfer-list">
                  <span class="transfer-icon">⇄ 换乘:</span>
                  <span 
                    v-for="(tr, tIdx) in st.transfers" 
                    :key="tIdx"
                    class="transfer-pill"
                  >
                    {{ tr }}
                  </span>
                </div>

                <!-- Sub stations / branches -->
                <div v-if="st.subStations && st.subStations.length" class="substations-list">
                  <div class="sub-label">↳ 沿线分支 / 邻近:</div>
                  <div v-for="(sub, sIdx) in st.subStations" :key="sIdx" class="sub-item">
                    <span class="sub-name">{{ sub.name }}</span>
                    <span v-if="sub.transfers" class="sub-transfer">
                      (换乘: {{ sub.transfers.join(', ') }})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.railway-showcase {
  margin: 1.5rem 0 3rem;
  font-family: inherit;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.category-tabs {
  display: flex;
  gap: 0.5rem;
  background: var(--vp-c-bg-soft);
  padding: 0.35rem;
  border-radius: 9999px;
  border: 1px solid var(--vp-c-divider);
}

.tab-btn {
  padding: 0.4rem 1.1rem;
  border-radius: 9999px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  color: var(--vp-c-text-1);
}

.tab-btn.active {
  background: var(--vp-c-brand-1);
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(236, 72, 153, 0.35);
}

.line-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.line-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.9rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1.5px solid var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.line-chip:hover {
  transform: translateY(-2px);
  border-color: var(--line-color);
  box-shadow: 0 4px 14px var(--line-bg);
}

.line-chip.selected {
  background: var(--line-bg);
  border-color: var(--line-color);
  box-shadow: 0 0 16px var(--line-bg);
}

.line-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
}

.line-chip-name {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.status-dot.active {
  background-color: #10b981;
  box-shadow: 0 0 6px #10b981;
}

.status-dot.building {
  background-color: #f59e0b;
  box-shadow: 0 0 6px #f59e0b;
}

/* Detail Card */
.line-detail-card {
  position: relative;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.07);
  overflow: hidden;
}


.line-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.line-tag-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.line-tag-code {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}

.status-badge {
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  font-weight: 600;
}

.badge-active {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.badge-building {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}

.category-badge {
  font-size: 0.75rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
}

.line-title {
  margin: 0.2rem 0 0.4rem;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.line-full-name {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-family: monospace;
  margin-bottom: 0.6rem;
}

.line-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

.line-stat-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: var(--vp-c-bg-soft);
  padding: 0.9rem 1.4rem;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--active-color);
  line-height: 1.1;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

/* Route Map */
.route-map-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1.25rem;
}

.direction-hint {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  font-weight: 400;
}

.station-track-wrap {
  position: relative;
  overflow-x: auto;
  padding: 1rem 0.5rem;
}

.station-track {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  position: relative;
}

.station-node {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  position: relative;
}

.node-marker-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32px;
  flex-shrink: 0;
  padding-top: 4px;
}

.node-index {
  position: absolute;
  left: -24px;
  top: 6px;
  font-size: 0.75rem;
  font-family: monospace;
  color: var(--vp-c-text-3);
}

.node-circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--vp-c-bg-elv);
  border: 3px solid var(--track-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.node-inner {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.node-line {
  position: absolute;
  top: 26px;
  bottom: -15px;
  width: 3px;
  z-index: 1;
  opacity: 0.8;
}

.station-node:last-child .node-line {
  display: none;
}

.node-card {
  flex: 1;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 0.85rem 1.15rem;
  transition: all 0.2s ease;
}

.node-card:hover {
  border-color: var(--track-color);
  transform: translateX(4px);
}

.node-name-main {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.node-name-en {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  margin-top: 0.15rem;
}

.transfer-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.transfer-icon {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.transfer-pill {
  font-size: 0.75rem;
  padding: 0.15rem 0.55rem;
  border-radius: 6px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-divider);
  font-weight: 600;
}

.substations-list {
  margin-top: 0.5rem;
  padding-top: 0.4rem;
  border-top: 1px dashed var(--vp-c-divider);
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.sub-label {
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--vp-c-text-3);
}

.sub-item {
  margin-left: 0.5rem;
  line-height: 1.5;
}

.sub-name {
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.sub-transfer {
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
}

@media (max-width: 640px) {
  .line-detail-header {
    flex-direction: column;
  }
}
</style>
