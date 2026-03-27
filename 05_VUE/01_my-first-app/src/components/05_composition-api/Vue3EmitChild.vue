<template>
  <div>
    <input type="text" v-model.trim="userInput" />
    <button @click="emit('send-msg', userInput)"
  </div>
</template>

<script setup>
const userInput = ref('');
const emit = defineEmits(['send-msg']);
</script>
