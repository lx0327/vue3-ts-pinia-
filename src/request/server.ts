import axios from "axios";
import { message } from "ant-design-vue";
import { useCounterStore } from "@/stores/counter";
import router from "@/router";
const store = useCounterStore();
const service = axios.create({
  //基础路径URL配置
  baseURL: "http://127.0.0.1:5173",
  //五秒未响应提示
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
// 请求拦截器
axios.interceptors.request.use(
  (config: any) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//响应拦截器
service.interceptors.response.use(
  (response) => {
    //只返回config内的data的数据，其他的不展示
    const res = response.data;
    return res;
  },
  (error) => {
    //如果请求出错会有弹框提示
    message.error(error.message);
    return Promise.reject(error);
  }
);
export default service;

// axios.defaults.baseURL = "http://127.0.0.1:5173/";
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8";
// const store = useCounterStore();
// // 请求拦截器
// axios.interceptors.request.use(
//   (config) => {
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     const token = store.token;
//     token && (config.headers.Authorization = token);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// axios.interceptors.response.use(
//   (response) => {
//     if (response.status === 200) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
//   // 服务器状态码不是200的情况
//   (error) => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         // 401: 未登录
//         // 未登录则跳转登录页面，并携带当前页面的路径
//         // 在登录成功后返回当前页面，这一步需要在登录页操作。
//         case 401:
//           router.replace({
//             path: "/login",
//             query: { redirect: router.currentRoute.fullPath },
//           });
//           break;
//         // 403 token过期
//         // 登录过期对用户进行提示
//         // 清除本地token和清空vuex中token对象
//         // 跳转登录页面
//         case 403:
//           message.error("登录过期，请重新登录");
//           // 清除token
//           localStorage.removeItem("token");
//           store.commit("loginSuccess", null);
//           // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
//           setTimeout(() => {
//             router.replace({
//               path: "/login",
//               query: {
//                 redirect: router.currentRoute.fullPath,
//               },
//             });
//           }, 1000);
//           break;
//         // 404请求不存在
//         case 404:
//           message.error("网络请求不存在");
//           break;
//         // 其他错误，直接抛出错误提示
//         default:
//           message.error(error.response.data.message);
//       }
//       return Promise.reject(error.response);
//     }
//   }
// );
