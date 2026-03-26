<template>
  <div>
    <button @click="isModalVisible = true">모달 열기</button>
    <div class="content">
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
    </div>
    <VModalChild v-model:visible="isModalVisible">
      <h1>Modal</h1>
      <h1>초코파이 먹고 싶다</h1>
      <img
        src="https://i.namu.wiki/i/HHEPV66Xw0xx2DQqkjScgot3d-ZFQA455tyOvFcmjuQDhOK3fe9VINd2v20D7TtEUJXhMWC62lo41_-vgLPj3g.webp"
      />
      <p>초코파이</p>
    </VModalChild>
  </div>
</template>

<script>
import VModalChild from './VModalChild.vue';

export default {
  components: {
    VModalChild,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
};
</script>

<style scoped></style>
