<template>
  <div>
    <h1>props로 굴러온 데이터 : {{ drilling }}</h1>
    <h1>inject로 날아온 데이터 : {{ fly }}</h1>
  </div>
</template>

<script>
export default {
  props: ['drilling'],
  inject: ['fly'],
};
</script>

<style scoped></style>
