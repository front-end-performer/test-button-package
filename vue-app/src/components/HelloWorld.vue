<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import "button-wc";

defineProps({
  msg: String,
});

const count = ref(0);
const inputValue = ref("");
const buttonRef = ref(null);  // Reference to the Web Component

// Method to handle input-change event from the Web Component
const handleInputChange = (event) => {
  inputValue.value = event.detail.value;  // Update the input value from the event
};

// Attach the event listener once the component is mounted
onMounted(() => {
  const buttonElement = buttonRef.value;
  if (buttonElement) {
    buttonElement.addEventListener('input-change', handleInputChange);
  }
});

// Clean up the event listener before the component is destroyed
onBeforeMount(() => {
  const buttonElement = buttonRef.value;
  if (buttonElement) {
    buttonElement.removeEventListener('input-change', handleInputChange);
  }
});

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <my-button ref="buttonRef" background="#dea32f"></my-button>
    <button type="button" @input-change="inputValue" @click="count++">count is {{ count }}</button>

    <p class="read-the-docs">Vue {{ inputValue }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
