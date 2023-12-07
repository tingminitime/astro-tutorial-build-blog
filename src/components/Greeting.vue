<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  messages: string[]
}>()

function randomMessage() {
  return props.messages[Math.floor(Math.random() * props.messages.length)]
}

const greeting = ref<string>(randomMessage())
const setGreeting = () => (greeting.value = randomMessage())
</script>

<template>
  <div>
    <h3>{{ greeting }}! Thank you for visiting!</h3>
    <button
      type="button"
      @click="setGreeting"
    >
      New Greeting
    </button>
  </div>
</template>

<style scope></style>
