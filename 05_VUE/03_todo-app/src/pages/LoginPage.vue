<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const BASE_URL = '/api';
const userId = ref('');
const userPassword = ref('');

const router = useRouter();

// 로그인
const login = async () => {
  try {
    const loginUrl = BASE_URL + '/users';
    const loginResponse = await axios.get(loginUrl);

    console.log('로그인 결과:', loginResponse);
    const userArr = loginResponse.data;

    const findUser = userArr.find((user, index) => userId.value === user.id);

    if (findUser === undefined)
      return alert('해당 ID를 가진 사용자가 존재하지 않습니다.');

    if (findUser.password !== userPassword.value)
      return alert('비밀번호가 일치하지 않습니다.');

    localStorage.setItem('auth', 'true');
    alert('로그인 성공!');

    return router.push({ name: 'todo' });
  } catch (e) {
    console.error(e);
  }
};

// 로그아웃
const logout = () => {
  localStorage.removeItem('auth');
  return alert('로그아웃 완료!');
};
</script>

<template>
    
  <div>
        
    <h1>로그인 페이지</h1>
        아이디: <input type="text" v-model.trim="userId" />     <br />
        패스워드:
    <input type="password" v-model.trim="userPassword" />     <br />
        <button @click="login">로그인</button> /     <button @click="logout">
      로그아웃
    </button>
      
  </div>
</template>

<style lang="scss" scoped></style>
