<template>
  <div class="dmca-learn">
    <header class="help-header">
      <div class="brand">{{ t('dmcaLearn.headerBrand') }}</div>
      <nav>
        <span v-for="item in headerNav" :key="item">{{ item }}</span>
      </nav>
    </header>

    <div class="breadcrumbs">{{ t('dmcaLearn.breadcrumb') }}</div>

    <section class="hero">
      <p class="eyebrow">{{ t('dmcaLearn.heroEyebrow') }}</p>
      <h1>{{ t('dmcaLearn.heroTitle') }}</h1>
      <p class="intro">
        {{ t('dmcaLearn.heroIntro') }}
      </p>
    </section>

    <div class="content-wrapper">
      <aside class="side-nav">
        <p class="side-title">{{ t('dmcaLearn.sideArticlesTitle') }}</p>
        <ul>
          <li v-for="link in sideLinks" :key="link.id">
            <a :href="`#${link.id}`">{{ link.title }}</a>
          </li>
        </ul>
        <div class="faq-block">
          <p class="side-title">{{ t('dmcaLearn.faqTitle') }}</p>
          <ul>
            <li v-for="faq in faqList" :key="faq.id">
              <a :href="`#${faq.id}`">{{ faq.title }}</a>
            </li>
          </ul>
        </div>
      </aside>

      <article class="article">
        <section v-for="section in articleSections" :key="section.id" :id="section.id" class="article-section">
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
          <ul v-if="section.list">
            <li v-for="item in section.list" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="article-section" id="faq">
          <h2>{{ t('dmcaLearn.faqTitle') }}</h2>
          <div class="faq-group">
            <details v-for="item in faqList" :key="item.id" :id="item.id">
              <summary>{{ item.title }}</summary>
              <p>{{ item.answer }}</p>
            </details>
          </div>
        </section>

        <section class="related-section">
          <h2>{{ t('dmcaLearn.relatedTitle') }}</h2>
          <div class="related-grid">
            <router-link class="related-card" to="/dmca/submit">
              <h3>{{ t('dmcaLearn.relatedSubmit') }}</h3>
              <p>{{ t('dmcaSubmit.heroDesc') }}</p>
            </router-link>
            <router-link class="related-card" to="/dmca">
              <h3>{{ t('dmcaLearn.relatedHub') }}</h3>
              <p>{{ t('dmcaPage.heroDescription') }}</p>
            </router-link>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const headerNav = computed(() => tm('dmcaLearn.headerNav') || [])
const sideLinks = computed(() => tm('dmcaLearn.sections')?.map(({ id, title }) => ({ id, title })) || [])
const articleSections = computed(() => tm('dmcaLearn.sections') || [])
const faqList = computed(() => tm('dmcaLearn.faqs') || [])
</script>

<style scoped>
.dmca-learn {
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, rgba(255, 88, 122, 0.18), transparent 45%),
    radial-gradient(circle at 85% 10%, rgba(80, 122, 255, 0.15), transparent 45%),
    #050505;
  color: #f5f5f5;
  padding: 60px 0 80px;
}

.help-header {
  width: min(1100px, 92%);
  margin: 0 auto 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #b9b9b9;
}

.brand {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.breadcrumbs {
  width: min(1100px, 92%);
  margin: 0 auto 24px;
  font-size: 13px;
  color: #7f8190;
}

.hero {
  width: min(900px, 92%);
  margin: 0 auto 40px;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ff5c7a;
  font-size: 13px;
  margin-bottom: 14px;
}

.hero h1 {
  font-size: clamp(30px, 4vw, 48px);
  margin-bottom: 16px;
}

.intro {
  font-size: 18px;
  color: #cfcfcf;
  line-height: 1.8;
}

.content-wrapper {
  width: min(1100px, 92%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;
}

.side-nav {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px;
  position: sticky;
  top: 40px;
  align-self: flex-start;
  height: fit-content;
}

.side-title {
  font-size: 14px;
  color: #8f92a3;
  margin-bottom: 10px;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.side-nav a {
  color: #f5f5f5;
  text-decoration: none;
  font-size: 15px;
}

.article {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}

.article-section + .article-section {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.article-section h2 {
  font-size: 26px;
  margin-bottom: 16px;
}

.article-section p {
  color: #dcdcdc;
  line-height: 1.8;
  margin-bottom: 14px;
}

.article-section ul {
  color: #bebebe;
  padding-left: 20px;
  line-height: 1.8;
}

.faq-group details {
  margin-bottom: 14px;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.faq-group summary {
  cursor: pointer;
  font-weight: 600;
}

.related-section {
  margin-top: 32px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.related-card {
  padding: 20px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: inherit;
  text-decoration: none;
}

.related-card h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

@media (max-width: 900px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .side-nav {
    position: static;
  }
}

@media (max-width: 600px) {
  .article {
    padding: 24px;
  }
}
</style>

