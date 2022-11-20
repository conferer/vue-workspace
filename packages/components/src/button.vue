<template>
  <div>
    <div class="btn">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    label: string
  }>()
</script>

<style scoped>
  .btn {
    cursor: pointer;
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 20px;
    background: #efefef;
    border: 1px solid #999;
    border-radius: 8px;
  }
  .btn:hover {
    background: rgb(34, 97, 174);
    color: #fff;
  }
</style>
