import { vueBridge } from '@garfish/bridge-vue-v3';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import About from './About.vue';
import App from './App.vue';
import Home from './Home.vue';
import './index.css';
import Router from './Router.vue';

const routes = [
  { path: '/', component: Router },
  { path: '/home', component: Home },
  { path: '/about', component: About },
];

function newRouter(basename: string) {
  console.log('11111 basename', basename);
  return createRouter({
    history: createWebHistory(basename),
    routes,
  });
}

export const provider = vueBridge({
  rootComponent: App,
  // 可选，注册 vue-router或状态管理对象
  handleInstance: (vueInstance, { basename }) => {
    vueInstance.use(newRouter(basename));
  },
});
console.log(window.__GARFISH__);

if (!window.__GARFISH__) {
  const app = createApp(App);
  app.use(newRouter('/'));
  app.mount('#sub-vue3-root');
}
