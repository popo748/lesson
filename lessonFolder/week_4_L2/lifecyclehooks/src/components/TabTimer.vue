<template>
    <div>
      <p>Elapsed time: {{ elapsedTime }} seconds</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        elapsedTime: 0,
        timerInterval: null,
      };
    },
    activated() {
      this.startTimer();
    },
    deactivated() {
      this.pauseTimer();
    },
    methods: {
      startTimer() {
        if (!this.timerInterval) {
          this.timerInterval = setInterval(() => {
            this.elapsedTime++;
          }, 1000);
        }
      },
      pauseTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      },
    },
    beforeUnmount() {
      this.pauseTimer();
    },
  };
  </script>