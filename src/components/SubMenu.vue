<script setup lang="ts">
import router from "@/router";

const props = defineProps(["menuInfo"]);
const goPath = (item: string) => {
  console.log(111);
  router.push(item);
};
</script>
<template>
  <a-sub-menu :key="menuInfo.key">
    <template #title>{{ props.menuInfo.title }}</template>
    <template v-for="item in props.menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item @click="goPath(item.path)" :key="item.key">
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>
<style scoped lang="scss"></style>
