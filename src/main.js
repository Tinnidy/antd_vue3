import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { setupAntd } from './ant-design-vue';
import "../mock/mock";    //引入请求拦截

//babel-plugin-import  按需引用  安装在开发包中 -D   安装好在babel.config.js中修改
const app = createApp(App)
setupAntd(app);
app.use(router).mount('#app')
