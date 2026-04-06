import { ref } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

const BASE_URL = '/api';

export const useTodoStore = defineStore('todo', () => {
  const todoArr = ref([]); //_랑 computed 방법 알아보기
  const isFetching = ref(false);
  const isError = ref(false);

  const fetchTodoList = async () => {
    try {
      isFetching.value = true;
      const fetchTodoListUrl = BASE_URL + '/todos';
      const fetchTdoListRes = await axios.get(fetchTodoListUrl);

      todoArr.value = fetchTdoListRes.data;
      isFetching.value = false;

      return todoArr.value;
    } catch (e) {
      isError.value = true;
      console.error(e);
    }
  };

  return { todoArr, isFetching, isError, fetchTodoList };
});
