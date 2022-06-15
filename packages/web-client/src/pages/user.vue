<template>
  <div class="p-4 m-4">
    <span>hello</span>
    <router-link to="/">nav to homepage</router-link>

    <el-button @click="getUser">api request getUser</el-button>
    <el-button @click="searchUser">api request searchUser</el-button>
    <el-button @click="createUser">api request createUser</el-button>
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
