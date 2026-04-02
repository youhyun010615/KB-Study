<script setup>
import { ref } from 'vue';
const userId = ref('');
const userPassword = ref('');
</script>

<template>
  <div>
    <h1>LOGIN PAGE</h1>
    아이디 : <input type="text" v-model.trim="userId" />
    <br />
    패스워드 : <input type="password" v-model.trim="userPassword" />
    <br />
    <button>로그인</button> / <button>로그 아웃</button>
  </div>
</template>

<style lang="scss" scoped></style>
