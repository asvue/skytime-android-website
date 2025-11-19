<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
        <div class="footer-brand">
          <img :src="logo" alt="Skybox Logo" class="footer-logo" />
          <p>{{ t('footer.brandLine') }}</p>
        </div>
          <div class="footer-links">
            <div class="footer-column">
            <h4>{{ t('footer.aboutTitle') }}</h4>
            <router-link :to="{ name: 'About' }" @click="scrollToTop">{{ t('footer.aboutLink') }}</router-link>
            </div>
            <div class="footer-column">
            <h4>{{ t('footer.legalTitle') }}</h4>
            <router-link :to="{ name: 'UserAgreement' }" @click="scrollToTop">{{ t('footer.userAgreement') }}</router-link>
            <router-link :to="{ name: 'Privacy' }" @click="scrollToTop">{{ t('footer.privacyPolicy') }}</router-link>
            </div>
            <div class="footer-column">
              <h4>{{ t('footer.creatorTitle') }}</h4>
              <router-link :to="{ name: 'CreatorLogin' }" class="creator-login-link" @click="scrollToTop">
                {{ t('footer.creatorLogin') }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <p>{{ t('footer.copyright') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import logo from '@skybox-logo.png'

const { t } = useI18n()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
  padding: 60px 0 30px;
  margin-top: 80px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-logo {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

.footer-brand p {
  color: #999;
  font-size: 14px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-column h4 {
  font-size: 16px;
  margin-bottom: 20px;
  color: #fff;
  font-weight: 600;
}

.footer-column a {
  color: #ccc;
  font-size: 14px;
  margin-bottom: 12px;
  transition: color 0.3s;
  text-decoration: none;
}

.footer-column a:hover {
  color: #fff;
}

.creator-login-link {
  color: #667eea !important;
  font-weight: 600;
}

.footer-copyright {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #333;
}

.footer-copyright p {
  color: #999;
  font-size: 14px;
}

@media (max-width: 968px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>

