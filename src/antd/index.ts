import {
  Button,
  Input,
  Layout,
  Menu,
  Breadcrumb,
  Form,
  message,
} from "ant-design-vue";
const loadAntd = (app: any) => {
  return app
    .use(Button)
    .use(Input)
    .use(Layout)
    .use(Menu)
    .use(Breadcrumb)
    .use(Form)
    .use(message);
};
export default loadAntd;
