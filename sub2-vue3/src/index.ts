import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

try {
  createApp(App).mount(`#${process.env.PUBLIC_MOUNT_ID}`);
} catch (e) {
  console.error('single mount error');
}
