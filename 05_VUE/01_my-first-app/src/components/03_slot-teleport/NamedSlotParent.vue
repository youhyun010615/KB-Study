<template>
  <div>
    <NamedSlotChild v-slot:top>
      <h2>여기는 Top으로 보낼 친구들입니다</h2>
    </NamedSlotChild>
    <NamedSlotChild #bot>
      <h2>여기는 bot으로 보낼 친구들입니다</h2>
    </NamedSlotChild>
  </div>
</template>

<script>
import NamedSlotChild from './NamedSlotChild.vue';

export default {
  name: 'NamedSloParent',
  components: {
    NamedSlotChild,
  },
};
</script>
