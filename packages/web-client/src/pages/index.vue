<template>
  <div>
    <img alt="Vue logo" src="/src/assets/logo.png" />
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <ClAvatar msg="Hello Vue 3 + TypeScript + Vite" />
    <ClButton label="Register" />
    <div>{{ t('messagebox.title') }}</div>
    <div class="my-4">
      <el-switch v-model="switchVal" @click="switchLang" />
      switch language
    </div>

    <!--  <div>{{ t('button.about') }}</div>-->
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
    <div class="text-center my-4 text-2xl">
      <!-- A large Vue logo -->
      <em class="i-carbon-user-admin" />
      <!-- Sun in light mode, Moon in dark mode, from Carbon -->
      <em class="i-carbon-sun hover:i-carbon-moon dark:i-carbon-moon" />
      <!-- Twemoji of laugh, turns to tear on hovering -->

      <el-badge :value="12" class="item">
        <el-button>comments</el-button>
      </el-badge>
      <el-card shadow="hover" class="w-1/6 mx-auto my-4"> you'r right</el-card>

      <router-link to="/user">nav to about</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import { useI18n } from 'vue-i18n'
  import { messageApi, userApi } from '@conferer/api'
  import { onMounted, ref } from 'vue'
  import { findUsers, isFirefox } from '@conferer/util'

  import { ElMessage } from 'element-plus'
  import { useRouter } from 'vue-router'

  import { ClAvatar, ClButton } from '@conferer/component'

  const router = useRouter()
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
    userApi
      .createUser({ name: 'allen', age: 18 })
      .then((res) => {
        console.log(51)
        ElMessage.success('you are login!')
      })
      .catch((err) => {
        console.log(54, err, isFirefox())
        findUsers([2, 3])
      })
  }

  const searchMessage = () => {
    messageApi.search({})
  }

  const switchVal = ref<boolean>(true)
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
