<script setup lang="ts">
import Layout from "./views/Layout.vue";
</script>

<template>
  <Layout v-if="$route.meta.layout"></Layout>
  <router-view v-else></router-view>
</template>

<style scoped></style>
