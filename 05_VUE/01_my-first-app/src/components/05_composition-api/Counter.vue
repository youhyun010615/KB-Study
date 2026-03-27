<template>
  <div>
    <h1>Vue3 Counter</h1>
    <h3>Count : {{ count }}</h3>
    <h3>두배로! : {{ double }}</h3>
    <h3>지금까지 계산한 횟수: {{ number }}</h3>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const number = ref(0);
const double = computed(() => {
  return count.value * 2;
});

function increment() {
  count.value++;
  number.value++;
}

function decrement() {
  count.value--;
  number.value++;
}
</script>
