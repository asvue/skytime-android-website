<template>
  <div class="account-delete-page">
    <div class="container">
      <section class="hero">
        <p class="eyebrow">{{ t('accountDeletion.eyebrow') }}</p>
        <h1>{{ t('accountDeletion.title') }}</h1>
        <p class="intro">{{ t('accountDeletion.intro') }}</p>
      </section>

      <section class="card steps-card">
        <h2>{{ t('accountDeletion.stepsTitle') }}</h2>
        <ol>
          <li v-for="step in steps" :key="step">
            {{ step }}
          </li>
        </ol>
      </section>

      <section class="info-grid">
        <div class="card info-card">
          <h3>{{ t('accountDeletion.requiredTitle') }}</h3>
          <ul>
            <li v-for="item in requiredList" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="card info-card">
          <h3>{{ t('accountDeletion.timelineTitle') }}</h3>
          <p>{{ t('accountDeletion.timelineBody') }}</p>
        </div>
      </section>

      <section class="card data-card">
        <h3>{{ t('accountDeletion.dataTitle') }}</h3>
        <ul>
          <li v-for="item in dataList" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="contact-card">
        <h2>{{ t('accountDeletion.contactTitle') }}</h2>
        <p>{{ t('accountDeletion.contactDesc') }}</p>
        <a :href="contactEmailHref">{{ t('accountDeletion.contactEmail', { email: ACCOUNT_EMAIL }) }}</a>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const ACCOUNT_EMAIL = 'privacy@skytime.life'

const steps = computed(() => tm('accountDeletion.steps') || [])
const requiredList = computed(() => tm('accountDeletion.requiredList') || [])
const dataList = computed(() => tm('accountDeletion.dataList') || [])

const contactEmailHref = computed(() => `mailto:${ACCOUNT_EMAIL}`)
</script>

<style scoped>
.account-delete-page {
  min-height: 100vh;
  background: radial-gradient(circle at 20% 0%, rgba(255, 74, 99, 0.15), transparent 45%),
    radial-gradient(circle at 80% 0%, rgba(87, 129, 255, 0.15), transparent 45%),
    #050505;
  color: #f5f5f5;
  padding: 80px 0 120px;
}

.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 48px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 13px;
  letter-spacing: 1px;
  color: #ff5873;
  margin-bottom: 14px;
}

.hero h1 {
  font-size: clamp(32px, 4vw, 52px);
  margin-bottom: 16px;
}

.intro {
  font-size: 18px;
  color: #cfcfcf;
  line-height: 1.7;
}

.card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 32px;
  margin-bottom: 30px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
}

.steps-card ol {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: #d9d9d9;
  line-height: 1.6;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 30px;
}

.info-card ul,
.data-card ul {
  list-style: disc;
  margin: 16px 0 0 20px;
  color: #dcdcdc;
  line-height: 1.6;
  padding-left: 0;
}

.info-card p,
.data-card p {
  color: #c5c5c5;
  line-height: 1.7;
}

.contact-card {
  text-align: center;
  background: linear-gradient(145deg, rgba(255, 90, 118, 0.1), rgba(87, 129, 255, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 40px 32px;
}

.contact-card a {
  margin-top: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  text-decoration: none;
  transition: border-color 0.3s, transform 0.3s;
}

.contact-card a:hover {
  border-color: #fff;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .account-delete-page {
    padding: 60px 0 80px;
  }

  .card {
    padding: 24px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>

