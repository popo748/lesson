<template>
  <TheaterCompo 
    :locations="theaterLocations" 
    v-model="selectedTheater"
    @doneSelect="handleLocation"
  ></TheaterCompo>
  <h2>{{ selectedTheater }}</h2>
  <DatePicker :dates="theaterDates" @doneSelectDate="handleDate"></DatePicker><br>
  <h2>{{ selectedDate }}</h2>
  <Time :times="filteredMovieTimes" @doneSelectTime="handleTime"></Time>
  <h2>{{ selectedTime }}</h2>
  <h2>{{ movieCinemas }}</h2>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import TheaterCompo from '@/components/TheaterCompo.vue';
import Time from '@/components/Time.vue';
import DatePicker from '@/components/DatePicker.vue';
import { getMovieCinemas } from '@/composables/useApi';

export default {
  components: {
    TheaterCompo,
    Time,
    DatePicker,
  },
  setup() {
    
    const movieCinemas = ref('')

    const theaterLocations = ref([
      { id: 1, label: 'Theater A' },
      { id: 2, label: 'Theater B' },
    ]);
    const selectedTheater = ref('');

    const theaterDates = ref([]);
    const selectedDate = ref('');

    const movieTimes = ref([
      { id: 1, label: '330', theater: 'Theater A' },
      { id: 2, label: '440', theater: 'Theater B' },
    ]);

    const filteredMovieTimes = computed(() => {
      return movieTimes.value.filter(time => time.theater === selectedTheater.value);
    });

    const selectedTime = ref('');

    const handleLocation = (label) => {
      selectedTheater.value = label;
      console.log(label);
      console.log(selectedTheater.value);
    };

    const handleTime = (label) => {
      selectedTime.value = label;
      console.log(label);
    };

    const handleDate = (fullLabel) => {
      selectedDate.value = fullLabel;
      console.log(label);
    };

    const generateDateRange = () => {
    const dates = [];
    const today = new Date();
  
    for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit'
    });
    const dayName = date.toLocaleDateString('en-US', {
      weekday: 'long' // or 'short' for Mon, Tue, etc.
    });
    dates.push({
      id: i + 1,
      label: formattedDate,
      day: dayName,
      fullLabel: `${formattedDate} ${dayName}`
    });
    }
    return dates;
  };

  onMounted(() => {
      theaterDates.value = generateDateRange();
      selectedDate.value = theaterDates.value[0].fullLabel;
      // Set the default selected theater
      selectedTheater.value = theaterLocations.value[0].label; // Changed this line
    });
  onMounted(async()=>{
    movieCinemas.value = await getMovieCinemas(movie_Id)
  })

    return {
      theaterLocations,
      selectedTheater,
      theaterDates,
      selectedDate,
      selectedTime,
      filteredMovieTimes,
      handleLocation,
      handleTime,
      handleDate,
      movieCinemas
    };
  },
}
</script>
