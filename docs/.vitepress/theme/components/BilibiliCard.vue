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
              <path d="M17.813 4.653h.854c1.51 0 2.733 1.224 2.733 2.734v10.144c0 1.51-1.224 2.734-2.733 2.734H5.333c-1.51 0-2.733-1.224-2.733-2.734V7.387c0-1.51 1.224-2.734 2.733-2.734h.854l-1.92-1.92a1.002 1.002 0 0 1 1.417-1.417l2.833 2.834h6.766l2.833-2.834a1.002 1.002 0 1 1 1.417 1.417l-1.92 1.92zM5.333 6.653c-.404 0-.733.329-.733.734v10.144c0 .405.329.734.733.734h13.334c.404 0 .733-.329.733-.734V7.387c0-.405-.329-.734-.733-.734H5.333zm3 4.667c.736 0 1.333.597 1.333 1.333s-.597 1.334-1.333 1.334c-.737 0-1.333-.598-1.333-1.334s.596-1.333 1.333-1.333zm7.334 0c.736 0 1.333.597 1.333 1.333s-.597 1.334-1.333 1.334c-.737 0-1.333-.598-1.333-1.334s.596-1.333 1.333-1.333z"/>
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
