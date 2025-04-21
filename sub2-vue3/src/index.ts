import { vueBridge } from '@garfish/bridge-vue-v3';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Sub from './Sub.vue';
import './index.css';
import Home from './Home.vue';
import Router from './Router.vue';

const routes = [
  { path: '/', component: Router },
  { path: '/home', component: Home },
  {
    path: '/sub/:chapters*',
    component: Sub,
  },
];

function newRouter(basename: string) {
  return createRouter({
    history: createWebHistory(basename),
    routes,
  });
}

export const provider = vueBridge({
  async loadRootComponent() {
    return (await import('./App.vue')).default;
  },
  // 可选，注册 vue-router或状态管理对象
  handleInstance: (vueInstance, { basename }) => {
    vueInstance.use(newRouter(basename));
  },
});

try {
  async function init() {
    if (!window.__GARFISH__) {
      const App = (await import('./App.vue')).default;
      createApp(App)
        .use(newRouter('/'))
        .mount(`#${process.env.PUBLIC_MOUNT_ID}`);
    }
  }
  init();
} catch (e) {
  console.error('single mount error');
}
