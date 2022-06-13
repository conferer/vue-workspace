<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>{{ t('messagebox.title') }}</div>
  <div @click="switchLang">switch language</div>
  {{ availableLocales }}
  {{ locale }}
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from './components/HelloWorld.vue'
  import { useI18n } from 'vue-i18n'
  import { userApi } from '@shimi-edu/api/src/user'
  import { onMounted } from 'vue'

  onMounted(() => {
    createUser()
  })
  const { t, locale, availableLocales } = useI18n()

  const switchLang = () => {
    const lang: any = availableLocales.find((item) => item !== locale.value)
    locale.value = lang
    localStorage.setItem('locale', lang)
  }

  const createUser = () => {
    userApi.createUser({ name: 'allen', age: 18 })
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
