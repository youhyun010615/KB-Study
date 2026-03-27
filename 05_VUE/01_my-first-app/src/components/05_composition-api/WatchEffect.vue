<template>
  <div>
    <h1>{{ count.value }}</h1>
    <button @click="count++"></button>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';

const count = ref(0);
watchEffect(() => {
  console.log(`카운트가 ${count.value}로 바뀌었습니다.`);
});
</script>
