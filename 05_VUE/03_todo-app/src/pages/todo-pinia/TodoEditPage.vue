<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const BASE_URL = '/api';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const todo = ref({});

const editedTodo = ref('');
const editedDesc = ref('');
const editedDone = ref(false);

const fetchTodo = async () => {
  try {
    const todoUrl = BASE_URL + `/todos/${id}`;
    const todoRes = await axios.get(todoUrl);

    todo.value = todoRes.data; //ref는 무조건 .value 써주기, todoRes.data가 되는 이유는 axios 덕분에

    editedTodo.value = todo.value.todo;
    editedDesc.value = todo.value.desc;
    editedDone.value = todo.value.done;

    console.log('Todo 데이터 : ', todo.value);
  } catch (e) {
    console.error(e);
  }
};

const editTodo = async (id) => {
  try {
    const editUrl = BASE_URL + `/todos/${id}`;

    const newEditedTodo = {
      todo: editedTodo.value,
      desc: editedDesc.value,
      done: editedDone.value,
    };

    const editRes = await axios.put(editUrl, newEditedTodo);

    router.push({ name: 'todo' });
  } catch (e) {
    error(e);
  }
};

fetchTodo();
</script>

<template>
  <div>
    <h1>EDIT PAGE</h1>
    <div>
      <h2>todo : <input type="text" v-model.trim="editedTodo" /></h2>
      <!-- template파트에서는 value 넣을 필요 없다-->
      <h2>desc : <input type="text" v-model.trim="editedDesc" /></h2>
      <h2>done : <input type="checkbox" v-model.trim="editedDone" /></h2>
      <button @click="editTodo(id)">수정</button>
      <button @click="router.push(`/todo/detail/${id}`)">취소</button>
      <!-- @click="router.push({name: 'todo/detail', params: {id: id}})"-->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
