<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const BASE_URL = '/api';

const todoArr = ref([]);
const isFetching = ref(true);
const isError = ref(false);

const fetchTodos = async () => {
  try {
    const res = await axios.get(BASE_URL + '/todos');
    todoArr.value = res.data;
  } catch (error) {
    console.error(error);
    isError.value = true;
  } finally {
    isFetching.value = false;
  }
};

fetchTodos();
</script>

<template>
  <div>
    <h1>TODOLIST PAGE</h1>
    <h2 v-if="isFetching">데이터 로딩 중</h2>
    <h2 v-else-if="isError">통신 중 에러 발생</h2>
    <div v-else>
      <ul>
        <li v-for="item in todoArr" :key="item.id">
          {{ item.id }} /
          <RouterLink :to="`/todo/detail/${item.id}`">{{
            item.todo
          }}</RouterLink>
          / {{ item.done }}
        </li>
      </ul>
      <button @click="router.push({ name: 'todo/write' })">Todo 작성</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
