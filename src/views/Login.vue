<script setup lang="ts">
import { Login } from "../request/api";
import router from "@/router";
import { reactive } from "vue";
import "../request/mock";
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
interface FormState {
  username: string;
  password: string;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
});
const onFinish = (values: any) => {
  Login().then((res: any) => {
    localStorage.setItem("token", res.token);
    store.token = res.token;
    console.log("Success:", values);
    router.push("/");
  });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
<template>
  <div class="Form">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<style scoped lang="scss">
.Form {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
