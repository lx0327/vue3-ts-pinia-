import Mock from "mockjs";
Mock.mock("http://127.0.0.1:5173/login", "get", {
  "token|1": /\d{5,10}/,
});
