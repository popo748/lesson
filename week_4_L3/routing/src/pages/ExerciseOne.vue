<template>
    <div class="counter">
      <h2>Counter: {{ counterValue }}</h2>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </template>
  
  <script setup>
  import useCounterValueChange from '@/composables/counterValueChange'
  
  const { counterValue, increment, decrement } = useCounterValueChange(0)

  </script>
  
  <style scoped>
  .counter {
    text-align: center;
    margin: 20px;
  }
  
  button {
    font-size: 18px;
    margin: 0 10px;
    padding: 5px 10px;
  }
  </style>