<template>
  <v-container class="ma-5">
    <h2 class="text-medium-emphasis">Select Cinema</h2>
    <v-btn-toggle v-model="selectedValue"
    >
      <v-btn 
        class="rounded"
        v-for="location in locations" 
        :key="location.id"
        :value="location.label"
        @click="selectTheater(location.label)"
      >
      <v-icon left>
      mdi-map-marker
      </v-icon>
      {{ location.label }}
      </v-btn>
    </v-btn-toggle>
  </v-container>
</template>

<script>
export default {
  name: 'theater-prop',
  props: {
    locations: {
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
      this.selectedValue = newValue;
       /* since modelvalue is a prop means 
      that it will pass the prop to the parent so when the v-model in the
      parent compo change it will pass to the model 
      value in the child compo and update the child compo
       */
    }
  },
  mounted(){
      if(!this.selectedValue&&this.locations.length>0){
        this.selectTheater(this.locations[0].label);
      }
  },
  methods: {
    selectTheater(label){
        this.selectedValue = label;
        this.$emit('update:modelValue', label);
        this.$emit('doneTheater', label)
    }
  }
};
</script>

<style scoped>
.v-btn {
  background-color: #6A1B9A; /* Deep purple color */
  color: white;
  
  margin-right: 10px;
}
/* Add active state styling */
.v-btn.v-btn--active {
  background-color: #ac69d5 !important; /* Light purple for active state */
  color: white !important;
}

</style>