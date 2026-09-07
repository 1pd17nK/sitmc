<script setup lang="ts">
import { ref } from 'vue'

interface LogEntry {
  period: string
  title: string
  badge?: string
  badgeType?: 'primary' | 'success' | 'warning'
  events: {
    lineTag?: string
    lineColor?: string
    text: string
    isHighlight?: boolean
  }[]
}

const logs: LogEntry[] = [
  {
    period: '2026.03',
    title: '线路命名规范化调整',
    badge: '优化迭代',
    badgeType: 'warning',
    events: [
      { lineTag: '短道速线', lineColor: '#94a3b8', text: '中心酒馆站正式更名为「幻想庄园站」。' }
    ]
  },
  {
    period: '2026.02',
    title: '站点与区间修缮扩容',
    badge: '站台工程',
    badgeType: 'warning',
    events: [
      { lineTag: '南部联合线', lineColor: '#eab308', text: 'Sakana_の家站更名为「Sakana_の家北站」，为六角环线互通预留接口。' }
    ]
  },
  {
    period: '2026.01',
    title: '公司正式成立与二期路网通车',
    badge: '重大里程碑',
    badgeType: 'primary',
    events: [
      { lineTag: '公司大事记', lineColor: '#ec4899', text: '🎉 2026.1.8：SITMC 铁道交通建设无限公司正式成立！', isHighlight: true },
      { lineTag: '前哨站环线', lineColor: '#a855f7', text: '设立「SITMC 铁道建设公司总部站」；前哨站环线二期全线完成，末地站站台竣工！' },
      { lineTag: '南部联合线', lineColor: '#eab308', text: '南部联合线二期全线完成！设立北支线（黏土山中转站—稀草中转站），改换换乘线：平原中转站—平原露营地—Meaningの家。' },
      { lineTag: '短道速线', lineColor: '#94a3b8', text: '短道速线二期计划提交，动线建设启动。' },
      { lineTag: '内环观光线', lineColor: '#84cc16', text: '观光线正式更名为「内环观光线」，二期工程提上日程，设立 7_hanの家。' }
    ]
  },
  {
    period: '2025.12',
    title: '双向化改造与多线互通并网',
    badge: '路网扩张',
    badgeType: 'success',
    events: [
      { lineTag: '前哨站环线', lineColor: '#a855f7', text: '灵魂站、稀草站与小各-东南前哨站连接，更名前哨站环线，二期单行线升级双向线。' },
      { lineTag: '站点更名', lineColor: '#64748b', text: '地狱堡垒站更名 Meaningの家，猪灵堡垒站更名黏土山中转站，灵魂站更名沙漠中转站，绯红站更名雪原中转站，交线站更名短道速线换乘站。' },
      { lineTag: '南部联合线', lineColor: '#eab308', text: 'Sakana_家站开通；黏土山中转站与 Meaningの家实现共线换乘；新设平原中转站。' },
      { lineTag: '内环观光线', lineColor: '#84cc16', text: '为提升主城周边出行便利性，观光线计划获批，以 Meaningの家 为首发站，设立英灵殿站、Cunminの家站。' }
    ]
  },
  {
    period: '2025.11',
    title: '前哨站延伸与短道速线初探',
    badge: '早期勘测',
    badgeType: 'warning',
    events: [
      { lineTag: '前哨站环线', lineColor: '#a855f7', text: '设立西北前哨站、东北前哨站；增设主城-末地冰道换乘站、绯红站、灵魂站、稀树招呼站。' },
      { lineTag: '南部联合线', lineColor: '#eab308', text: '设立西南前哨站、Sakana_家站、稀草度假区、平原露营地。' },
      { lineTag: '短道速线', lineColor: '#94a3b8', text: '修改主线规划，设立草原中转站、A_Mengの家、中心酒馆站与多草荒地站。' }
    ]
  },
  {
    period: '2025.10',
    title: '铁道拓荒起步',
    badge: '创基启程',
    badgeType: 'primary',
    events: [
      { lineTag: '前哨站线', lineColor: '#a855f7', text: '为满足物资传输需要，前哨站线工程批复，首发站：小各-东南前哨站站。' },
      { lineTag: '南部线', lineColor: '#eab308', text: '为连通南方与中部，南部线工程提上日程并获批更名「南部联合线」，首发站：小各-东南前哨站站。' },
      { lineTag: '前哨站线', lineColor: '#a855f7', text: '设立短线交线站（交而不换）、地狱堡垒站、猪灵堡垒站等初期招呼站。' }
    ]
  }
]

const selectedTag = ref<string>('ALL')
</script>

<template>
  <div class="timeline-container">
    <div class="timeline-track">
      <div 
        v-for="(item, idx) in logs" 
        :key="idx"
        class="timeline-card-wrap"
      >
        <!-- Period indicator node -->
        <div class="timeline-node">
          <div class="node-dot"></div>
          <div class="node-time">{{ item.period }}</div>
        </div>

        <!-- Content Card -->
        <div class="timeline-card">
          <div class="card-header">
            <h3 class="card-title">{{ item.title }}</h3>
            <span v-if="item.badge" class="badge" :class="'badge-' + (item.badgeType || 'primary')">
              {{ item.badge }}
            </span>
          </div>

          <div class="events-list">
            <div 
              v-for="(ev, eIdx) in item.events" 
              :key="eIdx" 
              class="event-item"
              :class="{ 'event-highlight': ev.isHighlight }"
            >
              <span 
                v-if="ev.lineTag" 
                class="line-tag"
                :style="{ borderColor: ev.lineColor, color: ev.lineColor }"
              >
                {{ ev.lineTag }}
              </span>
              <span class="event-text">{{ ev.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
  margin: 2rem 0;
  position: relative;
}

.timeline-track {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
}

.timeline-track::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: linear-gradient(to bottom, #ec4899, #f472b6, #fb7185, #f59e0b);
  border-radius: 2px;
}

.timeline-card-wrap {
  position: relative;
}

.timeline-node {
  position: absolute;
  left: -2rem;
  top: 1.1rem;
  display: flex;
  align-items: center;
}

.node-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 3px solid #ec4899;
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.6);
  z-index: 2;
}

.timeline-card {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 1.35rem 1.6rem;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.timeline-card:hover {
  transform: translateX(4px);
  border-color: #ec4899;
  box-shadow: 0 8px 30px rgba(236, 72, 153, 0.14);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-title {
  margin: 0 !important;
  font-size: 1.18rem !important;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.node-time {
  position: absolute;
  right: calc(100% + 12px);
  white-space: nowrap;
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: #ec4899;
  display: none;
}

.badge {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-weight: 600;
}

.badge-primary {
  background: rgba(236, 72, 153, 0.15);
  color: #ec4899;
  border: 1px solid rgba(236, 72, 153, 0.3);
}

.badge-success {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge-warning {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.event-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.93rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.event-highlight {
  background: rgba(236, 72, 153, 0.08);
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border-left: 3px solid #ec4899;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.line-tag {
  flex-shrink: 0;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  border: 1px solid;
  margin-top: 2px;
}

.event-text {
  flex: 1;
}
</style>
