<template>
  <v-container class="ma-5">
    <h2 class="text-medium-emphasis">Select Time</h2>
    <v-btn-toggle v-model="selectedTimeButton">
      <v-btn
        class="rounded"
        v-for="time in times"
        :key="time.id"
        :value="time.label"
        @click="selectTime(time.label)"
      >
        <v-icon left>
          mdi-clock-time-eight-outline
        </v-icon>
        {{ time.label }}
      </v-btn>
    </v-btn-toggle>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  times: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'doneTime']);

const selectedTimeButton = ref(null);

// Watch for times array changes to reset selection
watch(() => props.times, () => {
  resetSelection();
}, { deep: true });

// Watch for v-model changes from parent
watch(() => props.modelValue, (newValue) => {
  selectedTimeButton.value = newValue;
});

const selectTime = (label) => {
  selectedTimeButton.value = label;
  emit('doneTime', label);
  emit('update:modelValue', label);
};

const resetSelection = () => {
  selectedTimeButton.value = null;
  emit('doneTime', '');
  emit('update:modelValue', '');
};

// Expose reset method to parent component
defineExpose({ resetSelection });
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
  