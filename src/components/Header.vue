<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="brand">
          <img :src="logo" alt="Skybox" class="logo-img" />
          <div class="brand-meta">
            <span class="brand-title">Skybox</span>
            <span class="brand-tagline">{{ t('header.tagline') }}</span>
          </div>
        </router-link>
        <div class="header-actions">
          <nav class="nav">
            <router-link to="/">{{ t('nav.home') }}</router-link>
            <router-link to="/about">{{ t('nav.about') }}</router-link>
            <router-link to="/dmca">{{ t('nav.dmca') }}</router-link>
            <router-link to="/creator/login" class="creator-link">{{ t('nav.creator') }}</router-link>
          </nav>
          <label class="locale-switcher" :aria-label="t('language.label')">
            <span class="sr-only">{{ t('language.label') }}</span>
            <select class="locale-select" v-model="currentLocale">
              <option v-for="option in languageOptions" :key="option.code" :value="option.code">
                {{ option.label }}
              </option>
            </select>
          </label>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import logo from '@skybox-logo.png'

const { t, locale } = useI18n()

const persistLocale = (value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', value)
  }
}

const currentLocale = computed({
  get: () => locale.value,
  set: (value) => {
    locale.value = value
    persistLocale(value)
  }
})

const languageOptions = computed(() => [
  { code: 'en', label: t('language.options.en') },
  { code: 'id', label: t('language.options.id') },
  { code: 'ja', label: t('language.options.ja') },
  { code: 'ko', label: t('language.options.ko') },
  { code: 'zh', label: t('language.options.zh') }
])
</script>

<style scoped>
.header {
  background: rgba(8, 8, 8, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: #f5f5f5;
}

.brand.router-link-active,
.brand.router-link-exact-active {
  color: #f5f5f5;
  align-items: center;
}

.logo-img {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}

.brand-meta {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.brand-title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
}

.brand-tagline {
  font-size: 12px;
  color: #8a8a8a;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav a {
  font-size: 16px;
  font-weight: 500;
  color: #c9c9c9;
  transition: color 0.3s, transform 0.3s;
  text-decoration: none;
}

.nav a:hover,
.nav a.router-link-active {
  color: #ffffff;
  transform: translateY(-1px);
}

.creator-link {
  background: linear-gradient(120deg, #ff4d4d 0%, #ff2a6d 50%, #f88529 100%);
  color: #fff !important;
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 0.3s;
  box-shadow: 0 14px 30px rgba(255, 74, 99, 0.3);
}

.creator-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(255, 74, 99, 0.4);
}

.locale-switcher {
  position: relative;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.locale-select {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: 8px 28px 8px 14px;
  color: #f5f5f5;
  font-size: 14px;
  appearance: none;
}

.locale-select:focus {
  outline: none;
  border-color: #6a8bff;
  box-shadow: 0 0 0 2px rgba(106, 139, 255, 0.2);
}

@media (max-width: 768px) {
  .nav {
    gap: 15px;
  }
  
  .nav a {
    font-size: 14px;
  }

  .header-actions {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }

  .locale-select {
    font-size: 12px;
  }
}
</style>

