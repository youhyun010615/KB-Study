<template>
  <div>
    <SlotChild>
      <h1>가냐?</h1>
      <img
        src="https://kormedi.com/wp-content/uploads/2023/01/unnamed-file-77-700x467.jpg"
      />
    </SlotChild>
  </div>
</template>

<script>
import SlotChild from './SlotChild.vue';

export default {
  name: 'SloParent',
  components: {
    SlotChild,
  },
};
</script>
