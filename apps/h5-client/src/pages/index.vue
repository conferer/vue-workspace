<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/user">User</RouterLink>
      </nav>
      <div class="py-4 bg-grey-300">{{ t('messagebox.title') }}</div>
      <van-switch v-model="agree" @change="switchLang">hello</van-switch>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { onMounted, ref } from 'vue'
  import { Notify } from 'vant'

  onMounted(() => {
    Notify('通知内容')
  })
  const agree = ref<boolean>(false)
  const { t, locale, availableLocales } = useI18n()
  const switchLang = (val: any) => {
    console.log(25, val)
    const lang: any = availableLocales.find((item) => item !== locale.value)
    locale.value = lang
    localStorage.setItem('locale', lang)
  }
</script>

<style></style>
