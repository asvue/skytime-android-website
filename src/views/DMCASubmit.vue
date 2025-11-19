<template>
  <div class="dmca-submit">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">{{ t('dmcaSubmit.heroEyebrow') }}</p>
        <h1>{{ t('dmcaSubmit.heroTitle') }}</h1>
        <p class="desc">
          {{ t('dmcaSubmit.heroDesc') }}
        </p>
        <ul class="notice-list">
          <li v-for="notice in notices" :key="notice">{{ notice }}</li>
        </ul>
      </div>
    </section>

    <section class="form-section">
      <form @submit.prevent="handleSubmit" class="dmca-form">
        <fieldset>
          <legend>{{ t('dmcaSubmit.ownerSection') }}</legend>
          <div class="grid two">
            <label>
              <span>{{ t('dmcaSubmit.name') }} *</span>
              <input type="text" v-model="form.name" required :placeholder="t('dmcaSubmit.namePlaceholder')" />
            </label>
            <label>
              <span>{{ t('dmcaSubmit.email') }} *</span>
              <input type="email" v-model="form.email" required :placeholder="t('dmcaSubmit.emailPlaceholder')" />
            </label>
          </div>
          <div class="grid two">
            <label>
              <span>{{ t('dmcaSubmit.organization') }}</span>
              <input type="text" v-model="form.organization" :placeholder="t('dmcaSubmit.organizationPlaceholder')" />
            </label>
            <label>
              <span>{{ t('dmcaSubmit.role') }} *</span>
              <select v-model="form.role" required>
                <option value="" disabled>{{ t('dmcaSubmit.rolePlaceholder') }}</option>
                <option value="owner">{{ t('dmcaSubmit.ownerRole') }}</option>
                <option value="agent">{{ t('dmcaSubmit.agentRole') }}</option>
                <option value="other">{{ t('dmcaSubmit.otherRole') }}</option>
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>{{ t('dmcaSubmit.workSection') }}</legend>
          <div class="grid two">
            <label>
              <span>{{ t('dmcaSubmit.workType') }} *</span>
              <select v-model="form.workType" required>
                <option value="" disabled>{{ t('dmcaSubmit.workTypePlaceholder') }}</option>
                <option v-for="type in workTypeOptions" :key="type.value" :value="type.value">
                  {{ type.label }}
                </option>
              </select>
            </label>
            <label>
              <span>{{ t('dmcaSubmit.originalUrl') }} *</span>
              <input type="url" v-model="form.originalUrl" required placeholder="https://example.com/your-work" />
            </label>
          </div>
          <label>
            <span>{{ t('dmcaSubmit.workDescription') }} *</span>
            <textarea
              v-model="form.workDescription"
              required
              rows="4"
              :placeholder="t('dmcaSubmit.workDescriptionPlaceholder')"
            ></textarea>
          </label>
        </fieldset>

        <fieldset>
          <legend>{{ t('dmcaSubmit.infringeSection') }}</legend>
          <label>
            <span>{{ t('dmcaSubmit.infringingUrl') }} *</span>
            <textarea
              v-model="form.infringingUrls"
              required
              rows="3"
              :placeholder="t('dmcaSubmit.infringingPlaceholder')"
            ></textarea>
          </label>
        </fieldset>

        <fieldset>
          <legend>{{ t('dmcaSubmit.statementSection') }}</legend>
          <label class="checkbox" v-for="statement in statementItems" :key="statement.key">
            <input type="checkbox" v-model="form.statements[statement.key]" :required="true" />
            <span>{{ statement.label }}</span>
          </label>
          <label>
            <span>{{ t('dmcaSubmit.signatureSection') }} *</span>
            <input type="text" v-model="form.signature" required :placeholder="t('dmcaSubmit.signaturePlaceholder')" />
          </label>
        </fieldset>

        <div class="form-footer">
          <p>{{ t('dmcaSubmit.formDisclaimer') }}</p>
          <button type="submit" class="btn-primary">{{ t('dmcaSubmit.submit') }}</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const notices = computed(() => tm('dmcaSubmit.notices') || [])
const workTypeOptions = computed(() => tm('dmcaSubmit.workTypes') || [])
const statementItems = computed(() => tm('dmcaSubmit.statements') || [])

const buildStatementState = () =>
  statementItems.value.reduce((acc, item) => {
    acc[item.key] = false
    return acc
  }, {})

const form = reactive({
  name: '',
  email: '',
  organization: '',
  role: '',
  workType: '',
  workDescription: '',
  originalUrl: '',
  infringingUrls: '',
  statements: buildStatementState(),
  signature: ''
})

watch(statementItems, (items) => {
  items.forEach((item) => {
    if (!(item.key in form.statements)) {
      form.statements[item.key] = false
    }
  })
})

const handleSubmit = () => {
  console.log('DMCA submit payload:', JSON.parse(JSON.stringify(form)))
  alert(t('dmcaSubmit.success'))
}
</script>

<style scoped>
.dmca-submit {
  min-height: 100vh;
  background: radial-gradient(circle at 15% 20%, rgba(255, 84, 84, 0.12), transparent 50%),
    radial-gradient(circle at 85% 10%, rgba(85, 145, 255, 0.12), transparent 55%),
    #050505;
  color: #f5f5f5;
  padding: 80px 0 120px;
}

.hero {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  padding: 0 24px;
}

.hero-content {
  max-width: 860px;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ff5c7a;
  font-size: 13px;
  margin-bottom: 18px;
}

.hero h1 {
  font-size: clamp(28px, 4vw, 48px);
  line-height: 1.4;
  margin-bottom: 20px;
}

.desc {
  font-size: 18px;
  color: #c5c5c5;
  margin-bottom: 24px;
}

.notice-list {
  list-style: disc;
  text-align: left;
  margin: 0 auto;
  max-width: 720px;
  color: #b5b5b5;
  line-height: 1.8;
  padding-left: 20px;
}

.form-section {
  display: flex;
  justify-content: center;
  padding: 0 24px;
}

.dmca-form {
  width: min(900px, 100%);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 40px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  gap: 32px;
}

fieldset {
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

legend {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #cfcfcf;
}

input,
select,
textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 14px 16px;
  font-size: 15px;
  color: #fff;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #6a8bff;
  box-shadow: 0 0 0 3px rgba(106, 139, 255, 0.2);
}

.grid.two {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.checkbox {
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
}

.checkbox input {
  width: 18px;
  height: 18px;
  margin-top: 3px;
}

.form-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
}

.form-footer p {
  color: #a7a7a7;
}

.btn-primary {
  padding: 14px 32px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff4d4d 0%, #ff2a6d 50%, #f88529 100%);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 15px 40px rgba(255, 74, 99, 0.4);
  align-self: center;
}

.btn-primary:hover {
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .dmca-form {
    padding: 24px;
  }

  .grid.two {
    grid-template-columns: 1fr;
  }

  .notice-list {
    padding-left: 18px;
  }
}
</style>

