<template>
  <div>
    <pre>
      {{ message }}
    </pre>
    <div class="w-1/3 my-4">
      <el-input v-model="id" />
    </div>
    <el-button @click="createMessage"> create message</el-button>
    <el-button @click="updateMessage"> update message</el-button>
    <el-button @click="getMessage"> get message</el-button>
    <el-button @click="createUser">create user</el-button>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { messageApi, userApi } from '@conferer/api'

  onMounted(() => {
    getMessage()
  })
  const id = ref<number>(3)
  const message = ref<Record<string, any>>({})
  const createMessage = () => {
    const form = {
      title: 'test message',
      content: 'hello, there, long time no see',
    }
    messageApi.create(form).then((res: any) => {
      message.value = res.data
    })
  }
  const updateMessage = () => {
    message.value.title = 'test message'
    delete message.value.modifiedBy
    messageApi.update(message.value).then((res: any) => {
      message.value = res.data
    })
  }
  const getMessage = () => {
    messageApi.get(id.value).then((res: any) => {
      console.log(40, res.data)
      message.value = res.data
    })
  }

  const createUser = () => {
    userApi.createUser({}).then((res) => {
      console.log(res.data)
    })
  }
</script>

<style scoped></style>
