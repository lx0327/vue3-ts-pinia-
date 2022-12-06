<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>
<template>
  <div>这是Home组件{{ count }}<a-button type="primary">Primary</a-button></div>
</template>
<style scoped lang="scss"></style>
