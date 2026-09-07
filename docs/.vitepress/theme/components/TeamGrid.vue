<script setup lang="ts">
interface Member {
  name: string
  ign: string
  role: string
  roles: string[]
  school: string
  schoolTag: string
  avatarColor: string
  isLeader?: boolean
  isSpecial?: boolean
  status?: string
}

const directMembers: Member[] = [
  {
    name: '小各',
    ign: 'Xiaoge0801',
    role: 'SITMC 铁道公司老板',
    roles: ['公司老板', '铁道装修员', '站台装修员', '后勤', '财务', '铁道图片制作'],
    school: '上海应用技术大学 SITMC',
    schoolTag: 'SITMC',
    avatarColor: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    isLeader: true
  },
  {
    name: '苦小怕',
    ign: 'KuLiPaid',
    role: '核心开发',
    roles: ['网站开发', '基础设施与系统研发'],
    school: '暨南大学 JNU',
    schoolTag: 'JNU',
    avatarColor: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    isSpecial: true
  },
  {
    name: '茗柠',
    ign: 'Meaning',
    role: '公司吉祥物',
    roles: ['吉祥物', '企业文化形象'],
    school: '上海应用技术大学 SITMC',
    schoolTag: 'SITMC',
    avatarColor: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    isSpecial: true
  },
  {
    name: '魔法猫咪',
    ign: 'Magic_cat_SITMC',
    role: '生电技术专家（退休）',
    roles: ['后勤', '生电技术人员（退休）'],
    school: '上海应用技术大学 SITMC',
    schoolTag: 'SITMC',
    avatarColor: 'linear-gradient(135deg, #10b981, #059669)',
    status: '荣誉退休'
  },
  {
    name: '阿萌',
    ign: 'A_Meng',
    role: '安保与宣传委员',
    roles: ['安保保障', '公司宣传员'],
    school: '东北农业大学 NEAUMC',
    schoolTag: 'NEAUMC',
    avatarColor: 'linear-gradient(135deg, #3b82f6, #6366f1)'
  },
  {
    name: '水银',
    ign: 'Hgfddddds_MUA',
    role: '工程管家与安保',
    roles: ['后勤', '财务', '安保', '铁道装修员'],
    school: '天津大学 TJUMC',
    schoolTag: 'TJUMC',
    avatarColor: 'linear-gradient(135deg, #64748b, #475569)'
  },
  {
    name: '让我看看',
    ign: 'Let_me_see_see',
    role: '站台装修与建筑顾问',
    roles: ['站台装修', '建筑美学顾问'],
    school: '上海应用技术大学 SITMC',
    schoolTag: 'SITMC',
    avatarColor: 'linear-gradient(135deg, #14b8a6, #0d9488)'
  },
  {
    name: '贪哥',
    ign: 'skydj233',
    role: '宣传与视觉审核',
    roles: ['公司宣传员', '图片审核员'],
    school: '上海应用技术大学 SITMC',
    schoolTag: 'SITMC',
    avatarColor: 'linear-gradient(135deg, #f97316, #ea580c)'
  },
  {
    name: '诺冰',
    ign: 'Norice',
    role: '站台装修员（毕业）',
    roles: ['站台装修员（毕业）'],
    school: '上海应用技术大学 SITMC',
    schoolTag: 'SITMC',
    avatarColor: 'linear-gradient(135deg, #0284c7, #0369a1)',
    status: '已毕业'
  },
  {
    name: '邶风',
    ign: 'beifeng',
    role: '后勤保障',
    roles: ['后勤物资供应'],
    school: '上海应用技术大学 SITMC',
    schoolTag: 'SITMC',
    avatarColor: 'linear-gradient(135deg, #84cc16, #65a30d)'
  }
]

const partnerMembers: Member[] = [
  {
    name: 'MCyoucaijun',
    ign: 'MCyoucaijun',
    role: 'SUESMC 联道甲方对接',
    roles: ['橙圆线工程推进', '高校生存服对接'],
    school: '上海工程技术大学 SUESMC',
    schoolTag: 'SUESMC',
    avatarColor: 'linear-gradient(135deg, #f97316, #f59e0b)'
  },
  {
    name: 'Lisztelly',
    ign: 'Lisztelly',
    role: 'NENUMC 联道甲方对接',
    roles: ['奶牛线工程推进', '高校生存服对接'],
    school: '东北师范大学 NENUMC',
    schoolTag: 'NENUMC',
    avatarColor: 'linear-gradient(135deg, #eab308, #ca8a04)'
  }
]
</script>

<template>
  <div class="team-wrapper">
    <h3 class="section-title">
      <span>🏛️ 公司直属人员 (Direct Staff)</span>
      <span class="count-badge">{{ directMembers.length }} 人</span>
    </h3>

    <div class="members-grid">
      <div 
        v-for="m in directMembers" 
        :key="m.ign" 
        class="member-card"
        :class="{ 'leader-card': m.isLeader }"
      >
        <div class="card-top">
          <div class="member-avatar" :style="{ background: m.avatarColor }">
            {{ m.name.charAt(0) }}
          </div>
          <div class="member-info">
            <div class="name-row">
              <span class="member-name">{{ m.name }}</span>
              <span v-if="m.status" class="status-pill">{{ m.status }}</span>
            </div>
            <div class="member-ign">ID: {{ m.ign }}</div>
          </div>
        </div>

        <div class="primary-role">{{ m.role }}</div>

        <div class="roles-chips">
          <span v-for="(r, rIdx) in m.roles" :key="rIdx" class="role-chip">{{ r }}</span>
        </div>

        <div class="card-footer">
          <span class="school-tag">🏫 {{ m.schoolTag }}</span>
          <span class="school-full">{{ m.school }}</span>
        </div>
      </div>
    </div>

    <h3 class="section-title mt-8">
      <span>🤝 高校联道副属人员 (Project Partners)</span>
      <span class="count-badge">{{ partnerMembers.length }} 人</span>
    </h3>

    <div class="members-grid">
      <div 
        v-for="m in partnerMembers" 
        :key="m.ign" 
        class="member-card partner-card"
      >
        <div class="card-top">
          <div class="member-avatar" :style="{ background: m.avatarColor }">
            {{ m.name.charAt(0) }}
          </div>
          <div class="member-info">
            <span class="member-name">{{ m.name }}</span>
            <div class="member-ign">ID: {{ m.ign }}</div>
          </div>
        </div>

        <div class="primary-role">{{ m.role }}</div>

        <div class="roles-chips">
          <span v-for="(r, rIdx) in m.roles" :key="rIdx" class="role-chip">{{ r }}</span>
        </div>

        <div class="card-footer">
          <span class="school-tag">🏫 {{ m.schoolTag }}</span>
          <span class="school-full">{{ m.school }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-wrapper {
  margin: 1.5rem 0 3rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1.25rem !important;
}

.count-badge {
  font-size: 0.75rem;
  padding: 0.15rem 0.6rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.mt-8 {
  margin-top: 2.5rem !important;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.member-card {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.member-card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 10px 24px rgba(6, 182, 212, 0.15);
}

.leader-card {
  border-color: rgba(6, 182, 212, 0.5);
  background: linear-gradient(to bottom right, var(--vp-c-bg-elv), rgba(6, 182, 212, 0.05));
}

.card-top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.9rem;
}

.member-avatar {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 800;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.member-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.status-pill {
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-3);
  border-radius: 4px;
}

.member-ign {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  font-family: monospace;
}

.primary-role {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.75rem;
}

.roles-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
  flex: 1;
}

.role-chip {
  font-size: 0.73rem;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.card-footer {
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.school-tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.school-full {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
</style>
