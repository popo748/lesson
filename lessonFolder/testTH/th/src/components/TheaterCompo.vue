<template>
  <v-btn-toggle v-model="selectedValue">
    <v-btn v-for="location in locations" 
           :key="location.id" 
           :value="location.label"
           @click="selectTheater(location.label)"
    >{{ location.label }}</v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: 'theater-prop',
  props: {
    locations: {
      type: Array,
      required: true
    },
    modelValue: { // Add this prop for v-model support
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedValue: this.modelValue
    }
  },
  watch: {
    modelValue(newValue) {
      this.selectedValue = newValue;
    }
  },
  mounted() {
    // If no value is selected, select the first location by default
    if (!this.selectedValue && this.locations.length > 0) {
      this.selectTheater(this.locations[0].label);
    }
  },
  methods: {
    selectTheater(label) {
      this.selectedValue = label;
      this.$emit('doneSelect', label);
      this.$emit('update:modelValue', label); // Add this for v-model support
      console.log(label);
    }
  }
}
</script>