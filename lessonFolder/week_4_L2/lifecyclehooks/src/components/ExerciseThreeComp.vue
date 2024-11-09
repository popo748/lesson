<template>
    <v-container>
      <div
        :style="{ backgroundColor: color, padding: '20px', color: 'white' }"
        ref="colorBox"
      >
        <h3>Current Color: {{ color }}</h3>
      </div>
  
      <v-alert v-if="showBeforeUpdateMessage" type="info">
        beforeUpdate: Color is about to change.
      </v-alert>
      <v-alert v-if="showUpdatedMessage" type="success">
        updated: Color has been updated.
      </v-alert>
  
      <v-btn-toggle v-model="selectedColor" mandatory>
        <v-btn value="red">Red</v-btn>
        <v-btn value="green">Green</v-btn>
        <v-btn value="blue">Blue</v-btn>
      </v-btn-toggle>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        color: 'red',
        selectedColor: 'red',
        showBeforeUpdateMessage: false,
        showUpdatedMessage: false,
      };
    },
    watch: {
      selectedColor(newColor) {
        setTimeout(() => {
          this.color = newColor;
  
          // Force Vue to update the DOM and trigger lifecycle hooks
          this.$nextTick(() => {
            // Any code that depends on the updated DOM or data should go here
          });
        }, 10);
      },
    },
    beforeUpdate() {
      this.showBeforeUpdateMessage = true;
      this.showUpdatedMessage = false;
    },
    updated() {
      this.showBeforeUpdateMessage = false;
      this.showUpdatedMessage = true;
  
      // Optional: You can still log to the console for additional debugging if needed
      console.log('updated: Color has been updated. New color:', this.color);
  
      // Hide the "updated" message after a short delay
      setTimeout(() => {
        this.showUpdatedMessage = false;
      }, 1000);
    },
  };
  </script>