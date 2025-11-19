<template>
  <div class="agreement-page">
    <div class="container">
      <div class="page-header">
        <h1>{{ t('userAgreement.title') }}</h1>
        <p>{{ t('userAgreement.updated') }}</p>
      </div>

      <div class="agreement-content">
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
const sections = computed(() => tm('userAgreement.sections') || [])
</script>

<style scoped>
.agreement-page {
  padding: 80px 0;
  min-height: 70vh;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 42px;
  margin-bottom: 10px;
  color: #333;
}

.page-header p {
  font-size: 16px;
  color: #666;
}

.agreement-content {
  max-width: 800px;
  margin: 0 auto;
}

.agreement-content section {
  margin-bottom: 50px;
}

.agreement-content h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.agreement-content p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
}

@media (max-width: 768px) {
  .agreement-page {
    padding: 40px 0;
  }

  .page-header h1 {
    font-size: 32px;
  }
}
</style>

