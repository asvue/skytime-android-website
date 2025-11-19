<template>
  <div class="creator-login-page">
    <div class="hero-container">
      <div class="hero-copy">
        <p class="badge">{{ t('creator.badge') }}</p>
        <h1>{{ t('creator.title') }}</h1>
        <p class="subtitle">{{ t('creator.subtitle') }}</p>
      </div>
      <div class="circle-stage">
        <div
          v-for="circle in circles"
          :key="circle.id"
          class="circle"
          :style="{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: circle.top,
            left: circle.left,
            backgroundImage: `url(${circle.image})`
          }"
        ></div>
      </div>
      <div class="login-panel">
        <div class="panel-header">
          <span>{{ isForgotMode ? t('creator.panelReset') : t('creator.panelLogin') }}</span>
          <button class="toggle-button" type="button" @click="toggleMode">
            {{ isForgotMode ? t('creator.toggleBack') : t('creator.toggleForgot') }}
          </button>
        </div>

        <form v-if="!isForgotMode" class="login-form" @submit.prevent="handleLogin">
          <div class="form-group">
            <input type="email" v-model="email" :placeholder="t('creator.emailPlaceholder')" required />
          </div>
          <div class="form-group">
            <input type="password" v-model="password" :placeholder="t('creator.passwordPlaceholder')" required />
          </div>
          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" v-model="remember" />
              <span>{{ t('creator.remember') }}</span>
            </label>
            <button class="link-button" type="button" @click="toggleMode">{{ t('creator.toggleForgot') }}</button>
          </div>
          <button type="submit" class="primary-button">{{ t('creator.login') }}</button>
        </form>

        <form v-else class="login-form" @submit.prevent="handleForgot">
          <div class="form-group">
            <input type="email" v-model="forgotEmail" :placeholder="t('creator.emailPlaceholder')" required />
          </div>
          <p class="helper-text">{{ t('creator.helper') }}</p>
          <button type="submit" class="primary-button">{{ t('creator.send') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import head1 from '@head_1.png'
import head2 from '@head_2.png'
import head3 from '@head_3.png'
import head4 from '@head_4.png'
import head5 from '@head_5.png'

const { t } = useI18n()

const email = ref('')
const password = ref('')
const remember = ref(false)
const isForgotMode = ref(false)
const forgotEmail = ref('')

const circles = [
  { id: 1, size: 220, top: '10%', left: '6%', image: head1 },
  { id: 2, size: 180, top: '0%', left: '48%', image: head2 },
  { id: 3, size: 260, top: '34%', left: '20%', image: head3 },
  { id: 4, size: 150, top: '58%', left: '55%', image: head4 },
  { id: 5, size: 190, top: '50%', left: '-4%', image: head5 }
]

const handleLogin = () => {
  console.log('登录:', { email: email.value, password: password.value, remember: remember.value })
  notifyUnavailable()
}

const handleForgot = () => {
  console.log('忘记密码:', { email: forgotEmail.value })
  notifyUnavailable()
}

const toggleMode = () => {
  isForgotMode.value = !isForgotMode.value
}

const notifyUnavailable = () => {
  alert(t('creator.unavailable'))
}
</script>

<style scoped>
.creator-login-page {
  min-height: calc(100vh - 80px);
  background: radial-gradient(circle at 20% 20%, rgba(253, 62, 94, 0.12), transparent 55%),
    radial-gradient(circle at 80% 30%, rgba(62, 137, 255, 0.12), transparent 45%),
    #f4f6fb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  display: flex;
  align-items: center;
  width: min(1200px, 92%);
  gap: 40px;
  position: relative;
}

.hero-copy {
  flex: 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  color: #fb3449;
  background: rgba(251, 52, 73, 0.12);
  margin-bottom: 16px;
}

.hero-copy h1 {
  font-size: clamp(32px, 4vw, 48px);
  color: #151826;
  line-height: 1.3;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 18px;
  color: #7a7f92;
}

.circle-stage {
  flex: 1.5;
  position: relative;
  height: 540px;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  box-shadow: 0 25px 60px rgba(17, 36, 76, 0.15);
  border: 4px solid #fff;
}

.login-panel {
  width: 360px;
  background: #fff;
  border-radius: 32px;
  padding: 32px;
  box-shadow: 0 30px 80px rgba(35, 74, 137, 0.18);
  position: relative;
}

.panel-header {
  font-size: 18px;
  font-weight: 600;
  color: #1f2333;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group input {
  width: 100%;
  border: 1px solid #e5e7ef;
  border-radius: 14px;
  padding: 14px 16px;
  font-size: 15px;
  color: #1f2333;
  background: #f9fafc;
}

.form-group input:focus {
  outline: none;
  border-color: #4c77f6;
  box-shadow: 0 0 0 3px rgba(76, 119, 246, 0.15);
  background: #fff;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #7a7f92;
}

.toggle-button,
.link-button {
  background: none;
  border: none;
  color: #4c77f6;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
}

.helper-text {
  font-size: 13px;
  color: #7a7f92;
  margin-top: -6px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.checkbox-label input {
  width: 16px;
  height: 16px;
  accent-color: #4c77f6;
}

.help-link {
  font-size: 13px;
  color: #4c77f6;
  text-decoration: none;
}

.primary-button {
  width: 100%;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, #004fff 0%, #3964ff 60%, #5b47ff 100%);
  color: #fff;
  font-size: 16px;
  letter-spacing: 4px;
  padding: 16px 0;
  cursor: pointer;
  margin-top: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 20px 40px rgba(59, 102, 255, 0.35);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 30px 60px rgba(59, 102, 255, 0.4);
}

@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    align-items: center;
  }

  .circle-stage {
    order: 2;
    width: 100%;
    height: 420px;
  }

  .login-panel {
    order: 3;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .creator-login-page {
    padding: 40px 0 60px;
  }

  .hero-container {
    width: 92%;
  }

  .circle-stage {
    height: 360px;
  }

  .circle {
    border-width: 2px;
  }
}
</style>

