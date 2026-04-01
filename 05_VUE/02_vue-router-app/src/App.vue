<script setup>
import { RouterLink, RouterView } from 'vue-router';
import RouterHeader from './components/RouterHeader.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      /
      <RouterLink to="/about">About</RouterLink>
      /
      <RouterLink to="/dynamic/happy">Happy</RouterLink>
      /
      <RouterLink to="/dynamic/exciting">Exciting</RouterLink>
      /
      <RouterLink to="/dynamic-watch/happy">WatchHappy</RouterLink>
      /
      <RouterLink to="/dynamic-watch/exciting">WatchExciting</RouterLink>
    </nav>
  </header>
  <RouterHeader />

  <RouterView />
</template>

<style scoped></style>
