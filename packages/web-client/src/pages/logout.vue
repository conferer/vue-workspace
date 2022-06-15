<template></template>

<script setup lang="ts">
  import { userApi } from '@conferer/api'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  userApi.logout().then((res) => {
    router.push({ name: 'login' })
  })
</script>

<style scoped></style>