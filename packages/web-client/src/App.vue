<template>
  <img alt="Vue logo" src="/src/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>{{ t('messagebox.title') }}</div>
  <div @click="switchLang" class="my-4">switch language</div>
  <!--  <div>{{ t('button.about') }}</div>-->
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文</el-button>

  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
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
