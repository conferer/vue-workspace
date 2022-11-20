<template>
  <div class="p-4 m-4">
    <span>hello</span>
    <router-link to="/">nav to homepage</router-link>

    <van-button @click="getUser">api request getUser</van-button>
    <van-button @click="searchUser">api request searchUser</van-button>
    <van-button @click="createUser">api request createUser</van-button>
    <VanSwipe />
  </div>
</template>

<script lang="ts" setup>
  import { userApi } from '@conferer/api'

  const getUser = () => {
    userApi
      .getUser(1)
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  const searchUser = () => {
    userApi
      .searchUsers({ page: 1, pageSize: 10 })
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  const createUser = () => {
    userApi
      .createUser({ name: 'young' })
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
</script>

<style scoped></style>
