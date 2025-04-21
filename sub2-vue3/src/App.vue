<template>
  <div>sub2 vue3 子应用</div>
  <RouterView />
</template>
<script setup lang="ts">
import Garfish from 'garfish';
Garfish.run({
  basename: '/',
  domGetter: '#sub',
  apps: [
    {
      name: 'sub-react',
      activeWhen: '/sub',
      entry: 'http://localhost:3006', // html入口
    },
  ],
});
</script>
