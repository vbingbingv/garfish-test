import { vueBridge } from '@garfish/bridge-vue-v2';
import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './About.vue';
import App from './App.vue';
import './index.css';
import Home from './Home.vue';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
];

function newRouter(basename: string) {
  return new VueRouter({
    mode: 'history',
    base: basename,
    routes,
  });
}

export const provider = vueBridge({
  // 根组件
  rootComponent: App,
  // 可选，注册 vue-router或状态管理对象
  appOptions: ({ basename }) => {
    // pass the options to Vue Constructor. check https://vuejs.bootcss.com/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE
    return {
      el: '#app',
      router: newRouter(basename),
    };
  },
});

try {
  Vue.use(VueRouter);
  new Vue({
    router: newRouter('/'),
    el: `#${process.env.PUBLIC_MOUNT_ID}`,
    render: (h) => h(App),
  });
} catch (e) {
  console.error('single mount error');
}
