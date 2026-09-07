<script setup lang="ts">
interface Member {
  name: string
  ign: string
  role: string
  roles: string[]
  school: string
  qq?: string
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
    school: 'SITMC',
    qq: '3212270471',
    avatarColor: 'linear-gradient(135deg, #ec4899, #f472b6)',
    isLeader: true
  },
  {
    name: '苦小怕',
    ign: 'KuLiPaid',
    role: '核心开发',
    roles: ['开发'],
    school: 'JNU',
    qq: '3290675192',
    avatarColor: 'linear-gradient(135deg, #f43f5e, #fb7185)',
    isSpecial: true
  },
  {
    name: '茗柠',
    ign: 'Meaning',
    role: '公司吉祥物',
    roles: ['吉祥物', '企业文化形象'],
    school: 'SITMC',
    qq: '2533501126',
    avatarColor: 'linear-gradient(135deg, #f59e0b, #ec4899)',
    isSpecial: true
  },
  {
    name: 'mrastv',
    ign: 'mrastv',
    role: '建筑顾问',
    roles: ['建筑顾问', '方案设计'],
    school: 'SITMC',
    qq: '368849291',
    avatarColor: 'linear-gradient(135deg, #e879f9, #d946ef)'
  },
  {
    name: '魔法猫咪',
    ign: 'Magic_cat_SITMC',
    role: '生电技术专家（退休）',
    roles: ['后勤', '生电技术人员（退休）'],
    school: 'SITMC',
    avatarColor: 'linear-gradient(135deg, #10b981, #059669)',
    status: '荣誉退休'
  },
  {
    name: '阿萌',
    ign: 'A_Meng',
    role: '安保与宣传委员',
    roles: ['安保保障', '公司宣传员'],
    school: 'NEAUMC',
    qq: '206352912',
    avatarColor: 'linear-gradient(135deg, #38bdf8, #818cf8)'
  },
  {
    name: '水银',
    ign: 'Hgfddddds_MUA',
    role: '工程管家与安保',
    roles: ['后勤', '财务', '安保', '铁道装修员'],
    school: 'TJUMC',
    qq: '1580232197',
    avatarColor: 'linear-gradient(135deg, #64748b, #475569)'
  },
  {
    name: '让我看看',
    ign: 'Let_me_see_see',
    role: '站台装修与建筑顾问',
    roles: ['站台装修', '建筑美学顾问'],
    school: 'SITMC',
    qq: '3849722908',
    avatarColor: 'linear-gradient(135deg, #14b8a6, #0d9488)'
  },
  {
    name: '贪哥',
    ign: 'skydj233',
    role: '宣传与视觉审核',
    roles: ['公司宣传员', '图片审核员'],
    school: 'SITMC',
    qq: '2669622368',
    avatarColor: 'linear-gradient(135deg, #fb923c, #ea580c)'
  },
  {
    name: '诺冰',
    ign: 'Norice',
    role: '站台装修员（毕业）',
    roles: ['站台装修员（毕业）'],
    school: 'SITMC',
    qq: '1728561263',
    avatarColor: 'linear-gradient(135deg, #0284c7, #0369a1)',
    status: '已毕业'
  },
  {
    name: '邶风',
    ign: 'beifeng',
    role: '后勤保障',
    roles: ['后勤物资供应'],
    school: 'SITMC',
    qq: '298426171',
    avatarColor: 'linear-gradient(135deg, #84cc16, #65a30d)'
  }
]

const partnerMembers: Member[] = [
  {
    name: 'MCyoucaijun',
    ign: 'MCyoucaijun',
    role: 'SUESMC 联道甲方对接',
    roles: ['橙圆线工程推进', '高校生存服对接'],
    school: 'SUESMC',
    qq: '2598631649',
    avatarColor: 'linear-gradient(135deg, #f97316, #f59e0b)'
  },
  {
    name: 'Lisztelly',
    ign: 'Lisztelly',
    role: 'NENUMC 联道甲方对接',
    roles: ['奶牛线工程推进', '高校生存服对接'],
    school: 'NENUMC',
    qq: '2377407132',
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
          <div class="member-avatar-box">
            <img 
              v-if="m.qq" 
              :src="`https://q2.qlogo.cn/headimg_dl?dst_uin=${m.qq}&spec=100`" 
              :alt="m.name"
              class="member-avatar-img"
              loading="lazy"
            />
            <div 
              v-else 
              class="member-avatar-fallback" 
              :style="{ background: m.avatarColor }"
            >
              {{ m.name.charAt(0) }}
            </div>
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
          <span class="school-tag">🏫 所属高校：{{ m.school }}</span>
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
          <div class="member-avatar-box">
            <img 
              v-if="m.qq" 
              :src="`https://q2.qlogo.cn/headimg_dl?dst_uin=${m.qq}&spec=100`" 
              :alt="m.name"
              class="member-avatar-img"
              loading="lazy"
            />
            <div 
              v-else 
              class="member-avatar-fallback" 
              :style="{ background: m.avatarColor }"
            >
              {{ m.name.charAt(0) }}
            </div>
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
          <span class="school-tag">🏫 所属高校：{{ m.school }}</span>
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
  height: 100%;
  box-sizing: border-box;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.member-card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 10px 24px rgba(236, 72, 153, 0.16);
}

.leader-card {
  border-color: rgba(236, 72, 153, 0.4);
  background: linear-gradient(to bottom right, var(--vp-c-bg-elv), rgba(236, 72, 153, 0.04));
}

.card-top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.9rem;
}

.member-avatar-box {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.15);
  flex-shrink: 0;
  border: 2px solid var(--vp-c-brand-soft);
  background: var(--vp-c-bg-soft);
}

.member-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.member-avatar-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 800;
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
  margin-bottom: 0.5rem;
}

.roles-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.6rem;
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
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
}

.school-tag {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  font-family: monospace;
}
</style>
