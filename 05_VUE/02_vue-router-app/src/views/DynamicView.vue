<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mood = computed(() => route.params.mood);
const msg = computed(() =>
  mood.value === 'happy' ? '행복합니다' : '씐납니다',
);
const imgSrc = computed(() =>
  mood.value === 'happy'
    ? 'https://png.pngtree.com/png-clipart/20241125/original/pngtree-smiling-bear-png-image_17294668.png'
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOZuuVXLVJ1js-zRUxNHxz5_I6WZOyjWnYJh3i42emw&s',
);
</script>

<template>
  <div>
    <h1>오늘의 기분은 !? {{ msg }}</h1>
    <img :src="imgSrc" :alt="msg" />
  </div>
</template>

<style lang="scss" scoped></style>
