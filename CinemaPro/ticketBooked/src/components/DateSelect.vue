<template>
    <v-container class="ma-5">
      <h2 class="text-medium-emphasis">Select Date</h2>
      <v-btn-toggle v-model="selectedValue">
        <v-btn class="rounded"
        v-for="date in dates" 
        :key="date.id" 
        :value="date.fullLabel"
        @click="selectDate(date.fullLabel)">
        <v-icon left>
          mdi-calendar-range
        </v-icon>

          {{ date.fullLabel }}
        </v-btn>
      </v-btn-toggle>
    </v-container>
  </template>
  
  <script>
  export default {
    props: {
      dates: {
        type: Array,
        required: true
      },
      modelValue: {
      type: String,
      default:''
    }
    },
    
    data(){
    return {
      selectedValue: this.modelValue
      }
    },
    watch:{
    modelValue(newValue){
      this.selectedValue = newValue; /* since modelvalue is a prop means 
      that it will pass the prop to the parent so when the v-model in the
      parent compo change it will pass to the model 
      value in the child compo and update the child compo
       */
      }
    },
    mounted(fullLabel){
      if(!this.selectedValue&&this.dates.length>0){
        this.selectDate(this.dates[0].fullLabel);
      }
    },
    methods: {
      selectDate(fullLabel) {
        this.selectedValue = fullLabel;
        this.$emit('update:modelValue', fullLabel);
        this.$emit('doneDate', fullLabel);
        
      }
    }
  };

  </script>
  
  <style scoped>
  .v-btn {
    background-color: #6A1B9A; /* Deep purple color */
    color: white;
    margin-right: 10px;
    width: 200px;
  }
  /* Add active state styling */
  .v-btn.v-btn--active {
  background-color: #ac69d5 !important; /* Light purple for active state */
  color: white !important;
  }
  
  </style>