<template>
  <div class="dmca-page">
    <div class="dmca-hero">
      <p class="eyebrow">{{ t('dmcaPage.heroEyebrow') }}</p>
      <h1>{{ t('dmcaPage.heroTitle') }}</h1>
      <p class="hero-desc">{{ t('dmcaPage.heroDescription') }}</p>
      <div class="hero-actions">
        <router-link class="btn-primary" to="/dmca/submit">{{ t('dmcaPage.ctaSubmit') }}</router-link>
        <router-link class="btn-secondary" to="/dmca/learn">{{ t('dmcaPage.ctaLearn') }}</router-link>
      </div>
    </div>

    <section class="help-section">
      <div class="section-header">
        <h2>{{ t('dmcaPage.helpTitle') }}</h2>
        <p>{{ t('dmcaPage.helpDescription') }}</p>
      </div>
      <div class="help-cards">
        <div class="help-card" v-for="topic in helpTopics" :key="topic.title">
          <p class="tag">{{ topic.tag }}</p>
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.description }}</p>
          <component
            class="inline-link"
            :is="linkComponent(topic.link)"
            v-bind="linkBindings(topic.link)"
          >
            {{ topic.cta }}
          </component>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="section-header">
        <h2>{{ t('dmcaPage.processTitle') }}</h2>
        <p>{{ t('dmcaPage.processDescription') }}</p>
      </div>
      <div class="process-steps">
        <div class="step" v-for="(step, index) in processSteps" :key="step.title">
          <div class="step-number">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </div>
      </div>
      <router-link class="btn-primary process-cta" to="/dmca/submit">{{ t('dmcaPage.ctaSubmit') }}</router-link>
    </section>

    <section class="faq-section">
      <div class="section-header">
        <h2>{{ t('dmcaPage.faqTitle') }}</h2>
        <p>{{ t('dmcaPage.faqDescription') }}</p>
      </div>
      <div class="faq-list">
        <div
          class="faq-item"
          v-for="(faq, index) in faqs"
          :key="faq.question"
          :class="{ active: activeFaq === index }"
        >
          <button class="faq-question" type="button" @click="toggleFaq(index)">
            <span>{{ faq.question }}</span>
            <span class="icon" :class="{ open: activeFaq === index }">⌄</span>
          </button>
          <div class="faq-answer" v-if="activeFaq === index">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2>{{ t('dmcaPage.ctaTitle') }}</h2>
      <p>{{ t('dmcaPage.ctaDescription') }}</p>
      <div class="cta-actions">
        <a class="btn-primary" :href="ctaContactHref">{{ t('dmcaPage.ctaFooter') }}</a>
        <router-link class="btn-secondary" to="/dmca/learn">{{ t('dmcaPage.ctaLibrary') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const COPYRIGHT_EMAIL = 'copyright@skytime.life'

const helpTopics = computed(() => tm('dmcaPage.helpCards') || [])
const processSteps = computed(() => tm('dmcaPage.processSteps') || [])
const faqs = computed(() => tm('dmcaPage.faqs') || [])
const ctaContactHref = computed(() => t('dmcaPage.ctaContactLink', { email: COPYRIGHT_EMAIL }))

const activeFaq = ref(0)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? -1 : index
}

const isRouterLink = (link = '') =>
  link && !link.startsWith('#') && !link.startsWith('http') && !link.startsWith('mailto:')

const linkComponent = (link = '') => (isRouterLink(link) ? 'router-link' : 'a')

const linkBindings = (link = '') => {
  if (!link) return { href: '#' }
  if (isRouterLink(link)) {
    return { to: link }
  }
  return { href: link }
}
</script>

<style scoped>
.dmca-page {
  padding: 80px 0 100px;
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, rgba(255, 77, 90, 0.08), transparent 50%),
    radial-gradient(circle at 80% 0%, rgba(81, 113, 255, 0.15), transparent 50%),
    #050505;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;
}

.dmca-hero,
.help-section,
.process-section,
.faq-section,
.cta-section {
  width: min(1100px, 90%);
}

.dmca-hero {
  text-align: center;
  max-width: 840px;
}

.eyebrow {
  display: inline-flex;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 13px;
  color: #ff5c7a;
  margin-bottom: 18px;
}

.dmca-hero h1 {
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.3;
  margin-bottom: 18px;
  color: #fff;
}

.hero-desc {
  font-size: 18px;
  color: #c7c7c7;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 32px;
  margin-bottom: 12px;
}

.section-header p {
  color: #a2a2a2;
  line-height: 1.7;
}

.help-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
}

.help-card {
  padding: 32px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  min-height: 240px;
}

.help-card .tag {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ff7c82;
  margin-bottom: 14px;
}

.help-card h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #fff;
}

.help-card p {
  color: #cfcfcf;
  line-height: 1.7;
  margin-bottom: 16px;
}

.inline-link {
  background: none;
  border: none;
  color: #6f9dff;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 28px;
  margin-bottom: 40px;
}

.step {
  padding: 32px 26px;
  background: #0f0f0f;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.step-number {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: linear-gradient(135deg, #ff4d4d 0%, #ff2a6d 60%, #f88529 100%);
  box-shadow: 0 15px 30px rgba(255, 74, 99, 0.4);
}

.step h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.step p {
  color: #bdbdbd;
  line-height: 1.6;
}

.process-cta {
  margin: 0 auto;
  display: block;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
}

.faq-question {
  width: 100%;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  font-size: 16px;
  cursor: pointer;
}

.faq-answer {
  padding: 0 24px 20px;
  color: #cfcfcf;
  line-height: 1.7;
}

.icon {
  transition: transform 0.3s;
}

.icon.open {
  transform: rotate(180deg);
}

.cta-section {
  text-align: center;
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #ff4d4d 0%, #ff2a6d 50%, #f88529 100%);
  color: #fff;
  border: none;
  box-shadow: 0 15px 35px rgba(255, 74, 99, 0.4);
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 45px rgba(255, 74, 99, 0.45);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: transparent;
  color: #fff;
  transition: border-color 0.3s, color 0.3s;
}

.btn-secondary:hover {
  border-color: #fff;
}

@media (max-width: 768px) {
  .dmca-page {
    padding: 50px 0 70px;
    gap: 60px;
  }

  .dmca-hero,
  .help-section,
  .process-section,
  .faq-section,
  .cta-section {
    width: 92%;
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
  }
}
</style>

