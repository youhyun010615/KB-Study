<template>
  <div class="todo">
    <h1>오늘의 할 일</h1>
    <TodoComponentChild />
    <hr />
    <TodoPropsChild todo="뷰 공부하기" />
    <TodoPropsChild todo="배열 함수 연습하기" />
    <TodoComponentChild />
  </div>
</template>

<script>
import TodoComponentChild from './TodoComponentChild.vue';
import TodoPropsChild from './TodoPropsChild.vue';

export default {
  name: 'TodoParent',
  components: {
    TodoComponentChild,
    TodoPropsChild,
  },
};
</script>

<style scoped></style>
