<script setup lang="ts">
import { ref } from "vue";
import SubMenuVue from "@/components/SubMenu.vue";
import router from "@/router";
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
const list = [
  {
    key: "1",
    title: "首页",
    path: "/",
  },
  {
    key: "2",
    title: "关于",
    path: "/about",
  },
  {
    key: "3",
    title: "我的",
    path: "/mine",
    children: [
      {
        key: "3-1",
        title: "我的账户",
        path: "/mine/acount",
      },
    ],
  },
];
const goPath = (item: string) => {
  router.push(item);
};
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu
        v-for="item in list"
        :key="item.key"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <a-menu-item
          @click.stop="goPath(item.path)"
          v-if="!item.children"
          :key="item.key"
        >
          <span>{{ item.title }}</span>
        </a-menu-item>
        <SubMenuVue v-else :menu-info="item" />
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <!-- <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item> -->
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center"> lx </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
