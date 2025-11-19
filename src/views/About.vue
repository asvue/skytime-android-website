<template>
  <div class="about-page">
    <div class="container">
      <div class="page-header">
        <h1>{{ t('aboutPage.title') }}</h1>
      </div>
      
      <div class="about-content">
        <section class="intro-section">
          <p class="intro-text">{{ t('aboutPage.intro') }}</p>
        </section>

        <section class="mission-section">
          <h2>{{ t('aboutPage.missionTitle') }}</h2>
          <p>{{ t('aboutPage.missionBody') }}</p>
        </section>

        <section class="values-section">
          <h2>{{ t('aboutPage.valuesTitle') }}</h2>
          <div class="values-grid">
            <div class="value-item" v-for="value in values" :key="value.title">
              <h3>{{ value.title }}</h3>
              <p>{{ value.body }}</p>
            </div>
          </div>
        </section>

        <section class="contact-section">
          <h2>{{ t('aboutPage.contactTitle') }}</h2>
          <p>{{ t('aboutPage.contactBody') }}</p>
          <div class="contact-info">
            <p>{{ t('aboutPage.contactEmail') }}</p>
            <p>{{ t('aboutPage.contactMcn') }}</p>
            <p>{{ t('aboutPage.contactBiz') }}</p>
            <p>{{ t('aboutPage.contactAddress') }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const values = computed(() => tm('aboutPage.values') || [])
</script>

<style scoped>
.about-page {
  padding: 80px 0;
  min-height: 70vh;
  background: radial-gradient(circle at top, rgba(255, 74, 99, 0.15), transparent 45%), #0f0f0f;
  color: #f5f5f5;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 42px;
  color: #ffffff;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
}

.intro-section {
  margin-bottom: 60px;
  text-align: center;
}

.intro-text {
  font-size: 20px;
  line-height: 1.8;
  color: #cfcfcf;
}

.mission-section,
.values-section,
.contact-section {
  margin-bottom: 60px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.mission-section h2,
.values-section h2,
.contact-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #ffffff;
}

.mission-section p {
  font-size: 16px;
  line-height: 1.8;
  color: #b5b5b5;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.value-item {
  padding: 30px;
  background: #161616;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(255, 74, 99, 0.2);
}

.value-item h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #ffffff;
}

.value-item p {
  font-size: 14px;
  line-height: 1.6;
  color: #c0c0c0;
}

.contact-section p {
  font-size: 16px;
  line-height: 1.8;
  color: #c7c7c7;
  margin-bottom: 15px;
}

.contact-info {
  margin-top: 20px;
  padding: 20px;
  background: #161616;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.contact-info p {
  margin-bottom: 10px;
  color: #e2e2e2;
}

@media (max-width: 768px) {
  .about-page {
    padding: 40px 0;
  }

  .page-header h1 {
    font-size: 32px;
  }

  .mission-section,
  .values-section,
  .contact-section {
    padding: 24px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>

