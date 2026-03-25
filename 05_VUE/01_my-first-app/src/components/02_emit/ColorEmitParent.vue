<template>
  <div :style="{ backgroundColor: color }">
    <h1>저의 색상을 정해주세요!!</h1>
    <ColorEmitChild v-on:colorChanged="colorChangedHandler" />
  </div>
</template>

<script>
import ColorEmitChild from './ColorEmitChild.vue';

export default {
  components: {
    ColorEmitChild,
  },
  data() {
    return {
      color: ',',
    };
  },
  methods: {
    colorChangedHandler(color) {
      this.color = color;
    },
  },
};
</script>

<style lang="scss" scoped></style>
