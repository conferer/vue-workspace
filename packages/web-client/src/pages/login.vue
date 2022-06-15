<template>
  <div class="p-4 flex justify-center items-center">
    <el-card>
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item label="username" prop="username">
          <el-input v-model="form.username" clearable />
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model="form.password" type="password" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(formRef)">Create</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import { userApi } from '@conferer/api'
  import { useRouter } from 'vue-router'

  interface User {
    username: string
    password: string
  }

  const router = useRouter()

  const formRef = ref<FormInstance>()
  const form = reactive<User>({
    username: '',
    password: '',
  })
  const rules = reactive<FormRules>({
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
    ],
  })

  const onSubmit = (formEl: FormInstance) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
      console.log(40, valid, fields)
      if (valid) {
        userApi.login(form).then((res) => {
          console.log(res)
          router.push({ name: 'message' })
        })
      }
    })
  }
</script>

<style scoped></style>