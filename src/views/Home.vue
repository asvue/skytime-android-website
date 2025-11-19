<template>
  <div class="home-page">
    <section class="section section1">
      <img src="/imgs/banner.png" alt="Banner" class="banner" />
      <div class="content hero-content">
        <h1>{{ t('home.heroTitle') }}</h1>
        <p>{{ t('home.heroDescription') }}</p>
        <button id="get-start-link" type="button">{{ t('home.heroButton') }}</button>
        <div class="happy-users">
          <div class="avatars">
            <img v-for="avatar in heroAvatars" :key="avatar" :src="avatar" alt="Avatar" />
          </div>
          <div class="text">
            <span class="count">{{ t('home.heroCount') }}</span>
            <span class="label">{{ t('home.heroLabel') }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section2">
      <div class="content">
        <h2>{{ t('home.trendingTitle') }}</h2>
        <p>{{ t('home.trendingDescription') }}</p>
      </div>
      <img src="/imgs/pic_1.png" alt="Hot short dramas" class="full-width-image" />
    </section>

    <section class="section section3">
      <div class="content">
        <h2>{{ t('home.whyTitle') }}</h2>
        <div class="features">
          <div class="feature-item" v-for="feature in features" :key="feature.title">
            <img :src="feature.icon" :alt="feature.title" />
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section4">
      <div class="relative-wrapper">
        <img src="/imgs/pic_2.png" alt="Watch for free" class="full-width-image" />
        <div class="content">
          <h2>{{ t('home.freeTitle') }}</h2>
          <p>{{ t('home.freeDescription') }}</p>
        </div>
        <img src="/imgs/icon_1.png" alt="Icon" class="overlay-icon" />
      </div>
    </section>

    <section class="section section5">
      <div class="content">
        <h2>{{ t('home.testimonialTitle') }}</h2>
      </div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide" v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="card">
              <div class="card-top">
                <img :src="testimonial.avatar" :alt="testimonial.name" />
                <div class="user-info">
                  <h4>{{ testimonial.name }}</h4>
                  <div class="rating">
                    <img v-for="index in 5" :key="`${testimonial.name}-star-${index}`" src="/imgs/icon_star.png" alt="Star" />
                  </div>
                </div>
              </div>
              <p>{{ testimonial.quote }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section6">
      <div class="brand-lockup">
        <img :src="skyboxLogo" alt="Skybox Logo" class="brand-logo" />
        <p class="brand-subtitle">{{ t('home.brandSubtitle') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import skyboxLogo from '@skybox-logo.png'

const heroAvatars = ['/imgs/head_t1_1.png', '/imgs/head_t1_2.png', '/imgs/head_t1_3.png']
const { t } = useI18n()

const features = computed(() => [
  {
    title: t('home.featureCuratedTitle'),
    description: t('home.featureCuratedDesc'),
    icon: '/imgs/icon_2.png'
  },
  {
    title: t('home.featurePlaybackTitle'),
    description: t('home.featurePlaybackDesc'),
    icon: '/imgs/icon_3.png'
  },
  {
    title: t('home.featureDiscoveryTitle'),
    description: t('home.featureDiscoveryDesc'),
    icon: '/imgs/icon_4.png'
  }
])

const testimonials = computed(() => [
  {
    name: 'Emma Thompson',
    quote: t('home.testimonials.emma'),
    avatar: '/imgs/head_1.png'
  },
  {
    name: 'Ramuel Smith',
    quote: t('home.testimonials.ramuel'),
    avatar: '/imgs/head_2.png'
  },
  {
    name: 'Wizzard Yanto',
    quote: t('home.testimonials.wizzard'),
    avatar: '/imgs/head_3.png'
  },
  {
    name: 'Queenita Warless',
    quote: t('home.testimonials.queenita'),
    avatar: '/imgs/head_4.png'
  },
  {
    name: 'Liam Wilson',
    quote: t('home.testimonials.liam'),
    avatar: '/imgs/head_5.png'
  }
])
</script>

<style scoped>
:global(html),
:global(body),
:global(#app) {
  background-color: #0f0f0f;
  color: #fff;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  margin: 0;
  min-height: 100%;
}

.home-page {
  min-height: 100vh;
  background-color: #0f0f0f;
}

.content {
  padding: 0 104px;
}

.section {
  margin-top: 135px;
}

.section:first-child {
  margin-top: 0;
}

.section1 {
  position: relative;
}

.section1 .banner {
  width: 100%;
  display: block;
}

.section1 .hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
}

.section1 h1 {
  font-size: clamp(32px, 5vw, 58px);
  font-weight: 800;
  margin-top: auto;
  margin-bottom: 30px;
  line-height: 1.2;
}

.section1 p {
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  width: min(600px, 90%);
  margin-bottom: 30px;
  line-height: 30px;
}

.section1 button {
  width: 210px;
  height: 60px;
  background-color: #e80e1d;
  border: none;
  border-radius: 14px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
}

.section1 button:hover {
  opacity: 0.9;
}

.section1 .happy-users {
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 50px;
}

.section1 .avatars img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-left: -16px;
  border: 2px solid #0f0f0f;
}

.section1 .avatars img:first-child {
  margin-left: 0;
}

.section1 .happy-users .text {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.section1 .happy-users .count {
  font-size: 30px;
  font-weight: 600;
}

.section1 .happy-users .label {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
}

.section2 h2 {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 700;
  text-align: center;
  margin: 0;
  line-height: 1.3;
}

.section2 p {
  font-size: 18px;
  font-weight: 400;
  color: #999999;
  text-align: center;
  max-width: 800px;
  margin: 16px auto 0;
  line-height: 28px;
}

.section2 .full-width-image {
  width: 100%;
  margin-top: 40px;
  display: block;
}

.section3 h2 {
  font-size: clamp(32px, 4vw, 54px);
  font-weight: 700;
  text-align: center;
  margin-top: 0;
  margin-bottom: 70px;
  line-height: 1.3;
}

.section3 .features {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.section3 .feature-item {
  flex: 1;
  min-width: 260px;
  border: 1px solid #4d4d4d;
  background: #242424;
  border-radius: 30px;
  padding: 52px 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.section3 .feature-item img {
  width: 82px;
  height: auto;
}

.section3 .feature-item h3 {
  font-size: 26px;
  font-weight: 700;
  margin: 30px 0 20px;
}

.section3 .feature-item p {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #999999;
}

.section4 .relative-wrapper {
  position: relative;
}

.section4 .full-width-image {
  width: 100%;
  display: block;
}

.section4 .content {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
}

.section4 h2 {
  font-size: clamp(32px, 4vw, 54px);
  font-weight: 700;
  margin-top: 0;
}

.section4 p {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  max-width: 50%;
  margin-top: 20px;
  line-height: 30px;
}

.section4 .overlay-icon {
  position: absolute;
  width: 180px;
  bottom: -30px;
  left: 104px;
}

.section5 h2 {
  font-size: clamp(32px, 4vw, 54px);
  font-weight: 700;
  text-align: center;
  margin: 0;
  line-height: 1.3;
  margin-bottom: 70px;
}

.slider {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}

.slide-track {
  display: flex;
  flex-wrap: nowrap;
}

.slide {
  width: 394px;
  flex-shrink: 0;
  margin-right: 24px;
}

.card {
  background: #242424;
  border-radius: 20px;
  padding: 24px;
  aspect-ratio: 394 / 230;
}

.card-top {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card-top img {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  margin-right: 16px;
}

.user-info h4 {
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 10px;
}

.rating img {
  width: 24px;
  height: 24px;
  margin-right: 4px;
  vertical-align: middle;
}

.card p {
  font-size: 14px;
  color: #999999;
  line-height: 28px;
}

.section5 .slide:nth-child(1) .card,
.section5 .slide:nth-child(5) .card {
  opacity: 0.4;
}

.section5 .slide:nth-child(2) .card,
.section5 .slide:nth-child(4) .card {
  opacity: 0.7;
}

.section6 {
  display: flex;
  justify-content: center;
}

.brand-lockup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.brand-logo {
  width: 120px;
  height: 120px;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
}

.brand-subtitle {
  font-size: 16px;
  color: #c7c7c7;
  letter-spacing: 1px;
}

@media (max-width: 1024px) {
  .content {
    padding: 0 40px;
  }

  footer .content {
    padding: 24px 40px;
  }

  .section4 .content {
    padding: 0 40px;
  }

  .section4 p {
    max-width: 70%;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 0 24px;
  }

  footer .content {
    flex-direction: column;
    gap: 12px;
    padding: 24px;
  }

  .section {
    margin-top: 80px;
  }

  .section1 .hero-content {
    padding: 0 24px;
  }

  .section1 button {
    width: 180px;
    height: 52px;
    font-size: 20px;
  }

  .section3 .features {
    flex-direction: column;
  }

  .section4 .content {
    position: static;
    margin-top: 24px;
  }

  .section4 p {
    max-width: 100%;
  }

  .slider {
    overflow-x: auto;
  }

  .slide {
    width: 80%;
  }
}
</style>

