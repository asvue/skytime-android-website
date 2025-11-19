<template>
  <div class="privacy-page">
    <div class="container">
      <div class="page-header">
        <h1>{{ t('privacyPage.title') }}</h1>
        <p>{{ t('privacyPage.updated') }}</p>
      </div>
      
      <div class="privacy-content">
        <section v-for="(section, index) in sections" :key="section.title">
          <h2>{{ index + 1 }}. {{ section.title }}</h2>
          <p>{{ section.body }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const PRIVACY_EMAIL = 'privacy@skytime.life'

const sections = computed(() => {
  const rawSections = tm('privacyPage.sections') || []
  return rawSections.map((_, index) => ({
    title: t(`privacyPage.sections[${index}].title`),
    body: t(`privacyPage.sections[${index}].body`, { email: PRIVACY_EMAIL })
  }))
})
</script>

<style scoped>
.privacy-page {
  padding: 80px 0;
  min-height: 70vh;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #333;
}

.page-header p {
  font-size: 16px;
  color: #666;
}

.privacy-content {
  max-width: 800px;
  margin: 0 auto;
}

.privacy-content section {
  margin-bottom: 50px;
}

.privacy-content h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.privacy-content p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
}

.privacy-content ul {
  margin-left: 30px;
  margin-bottom: 20px;
}

.privacy-content li {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .privacy-page {
    padding: 40px 0;
  }

  .page-header h1 {
    font-size: 32px;
  }
}
</style>

