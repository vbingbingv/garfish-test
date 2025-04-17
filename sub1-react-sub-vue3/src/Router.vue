<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild. react子应用的vue子应用</p>
    <RouterView />
    <button @click="jumpHome">跳转home页面</button>
    <button @click="jumpAbout">跳转about页面</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function jumpHome() {
  console.log(11111, router.getRoutes());
  router.push({
    path: '/home',
  });
}
function jumpAbout() {
  console.log(11111, router.getRoutes());
  router.push({
    path: '/about',
  });
}
</script>
<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
