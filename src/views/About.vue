<script setup lang="ts">
import { ref } from "vue";
const message = ref("lx");
</script>
<template>
  <div>
    这是About组件{{ message }}
    <a-input v-model:value="message" placeholder="Basic usage" />
  </div>
</template>
<style scoped lang="scss"></style>
