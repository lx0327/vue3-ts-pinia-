import service from "./server";
import "./mock";
export function Login() {
  return service({
    url: "/login",
  });
}
