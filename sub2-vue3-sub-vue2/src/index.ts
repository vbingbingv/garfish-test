import Vue from 'vue';
import App from './App.vue';
import './index.css';

try {
  new Vue({
    el: `#${process.env.PUBLIC_MOUNT_ID}`,
    render: (h) => h(App),
  });
} catch (e) {
  console.error('single mount error');
}
