<script setup lang="ts">
</script>

<template>
  <div class="bili-card-wrap">
    <div class="bili-glow"></div>
    <div class="bili-inner">
      <div class="bili-badge">📺 官方新媒体中心</div>
      <div class="bili-content">
        <h3 class="bili-title">SITMC 铁道交通建设无限公司 · 哔哩哔哩官方空间</h3>
        <p class="bili-desc">
          关注我们的 Bilibili 空间，获取第一手铁道通车实录、站台建筑延时摄影、通车仪式纪录片及 MUA 高校生存服联合建设前沿动向！
        </p>
        <div class="bili-actions">
          <a 
            href="https://space.bilibili.com/3707011933932335" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="bili-btn"
          >
            <svg class="bili-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/>
            </svg>
            <span>访问哔哩哔哩官方空间 ➔</span>
          </a>
          <span class="uid-tag">UID: 3707011933932335</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bili-card-wrap {
  position: relative;
  margin: 2rem 0;
  border-radius: 20px;
  overflow: hidden;
}

.bili-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(251, 114, 153, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%);
  animation: rotateGlow 14s linear infinite;
  z-index: 0;
}

@keyframes rotateGlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.bili-inner {
  position: relative;
  z-index: 1;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  backdrop-filter: blur(12px);
  padding: 1.75rem;
  border-radius: 20px;
}

.bili-badge {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  background: rgba(251, 114, 153, 0.15);
  color: #fb7299;
  border: 1px solid rgba(251, 114, 153, 0.3);
  margin-bottom: 0.75rem;
}

.bili-title {
  margin: 0 0 0.5rem !important;
  font-size: 1.25rem !important;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.bili-desc {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.bili-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.bili-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: #fb7299;
  color: #fff !important;
  font-weight: 600;
  font-size: 0.92rem;
  border-radius: 10px;
  text-decoration: none !important;
  box-shadow: 0 4px 14px rgba(251, 114, 153, 0.4);
  transition: all 0.25s ease;
}

.bili-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(251, 114, 153, 0.6);
  background: #ff85a7;
}

.uid-tag {
  font-family: monospace;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}
</style>
