<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const msg = ref('');
const imgSrc = ref('');

watch(
  () => route.params.mood,
  (cur, prev) => {
    if (cur === 'happy') {
      msg.value = '행복합니다';
      imgSrc.value =
        'https://png.pngtree.com/png-clipart/20241125/original/pngtree-smiling-bear-png-image_17294668.png';
    } else {
      msg.value = '씝납니다';
      imgSrc.value =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOZuuVXLVJ1js-zRUxNHxz5_I6WZOyjWnYJh3i42emw&s';
    }
  },
  { immediate: true },
);
</script>

<template>
  <div>
    <h1>오늘의 기분은 !? {{ msg }}</h1>
    <img :src="imgSrc" :alt="msg" />
  </div>
</template>

<style lang="scss" scoped></style>
