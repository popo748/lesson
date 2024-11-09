<template>
  <v-row class="">
    <v-col cols="12">
      <v-select
        v-model="selectedMovie"
        :items="movies"
        item-title="title"
        item-value="id"
        density="compact"
        label="Select A Movie"
        @update:model-value="onMovieSelect"
      ></v-select>
      <CinemaInfo :movie="movieInfo" :imageSource="movieImageSource" />
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" class="pl-15">
      <!-- Theater Selection Components -->
      <TheaterSelect 
        :locations="theaterLocations" 
        :modelValue="selectedTheater"
        @doneTheater="handleTheaterSelection" 
        @update:modelValue="handleTheaterSelection"
      />
      
      <!-- Add Theater Map -->
      <TheaterMap 
        :theaters="theaterLocations"
        :selectedTheater="selectedTheater"
        @theater-selected="handleTheaterSelection"
      />
      
      <DateSelect 
        :dates="onAirDates" 
        @doneDate="handleDate" 
        v-model="selectedDate" 
      />
      <TimeSelect 
        :times="onAirTimes" 
        @doneTime="handleTime" 
        v-model="selectedTime"
        ref="timeSelectRef"
      />
    </v-col>
  </v-row>

  <v-container :style="`background-image: url(${movieTickeSource}); background-size: cover; background-position: center; height: 400px; width: 1200px;`">
    <v-row class="fill-height">
      <v-col cols="8">
        <h1 class="pt-10 ml-11 mb-10" style="color: black;">{{ movieInfo.title }}</h1>
        <h2 class="mb-5 ml-11" style="color: black;">Theater: {{ selectedTheater }}</h2>
        <h2 class="mb-5 ml-11" style="color: black;">Date: {{ selectedDate }}</h2>
        <h2 class="mb-20 ml-11" style="color: black;">Time: {{ selectedTime }}</h2>
      </v-col>
      <v-col cols="4" class="d-flex justify-end align-end">
        <v-btn class="mb-12 mr-8">
          <h6>Proceed to <br>seat selection</h6>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DateSelect from '@/components/DateSelect.vue';
import TheaterSelect from '@/components/TheaterSelect.vue';
import TimeSelect from '@/components/TimeSelect.vue';
import CinemaInfo from '@/components/CinemaInfo.vue';
import TheaterMap from '@/components/TheaterMap.vue'; // Add this import
import movieImage from '@/assets/movieImage.jpg';
import movieTicket from '@/assets/movieTicket.png';
import { getMovies, getTheaters, getShowdates } from '@/composables/useApi';

// Keep your existing state variables
const movies = ref([]);
const selectedMovie = ref(null);
const loading = ref(false);
const selectedShowingId = ref(null);
const timeSelectRef = ref(null);

const theaterLocations = ref([]);
const selectedTheater = ref('');

const onAirDates = ref([]);
const selectedDate = ref('');

const onAirTimes = ref([]);
const selectedTime = ref('');

const movieInfo = ref({});

const movieImageSource = ref(movieImage);
const movieTickeSource = ref(movieTicket);

// Methods
const fetchMovies = async () => {
try {
  loading.value = true;
  const response = await getMovies();
  movies.value = response.data;
} catch (error) {
  console.error('Error fetching movies:', error);
} finally {
  loading.value = false;
}
};

const onMovieSelect = async (movieId) => {
const selectedMovieData = movies.value.find(movie => movie.id === movieId);
if (selectedMovieData) {
  movieInfo.value = {
    title: selectedMovieData.title,
    duration: selectedMovieData.duration,
    genre: selectedMovieData.genre,
  };
  movieImageSource.value = selectedMovieData.image_url;

  try {
      loading.value = true;
      const response = await getShowdates(movieId);
      
      // Process showings data
      const showingsMap = new Map();
      
      response.data.forEach(showing => {
        const startTime = new Date(showing.start_time);
        const date = startTime.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit'
        });
        const day = startTime.toLocaleDateString('en-US', { weekday: 'long' });
        const time = startTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });

        if (!showingsMap.has(date)) {
          showingsMap.set(date, {
            id: date,
            label: date,
            day: day,
            fullLabel: `${date} ${day}`,
            times: []
          });
        }

        showingsMap.get(date).times.push({
          id: showing.id,
          label: time,
          hall_id: showing.hall_id,
          price: showing.pricex100 / 100 // Convert cents to dollars/main currency
        });
      });

      // Update onAirDates with processed showings
      onAirDates.value = Array.from(showingsMap.values());
      
      // Reset selections and update available times
      if (onAirDates.value.length > 0) {
        selectedDate.value = onAirDates.value[0].fullLabel;
        onAirTimes.value = onAirDates.value[0].times;
        selectedTime.value = '';
        timeSelectRef.value?.resetSelection(); // Add this line

      } else {
        selectedDate.value = '';
        onAirTimes.value = [];
        selectedTime.value = '';
        timeSelectRef.value?.resetSelection(); // Add this line
      }

    } catch (error) {
      console.error('Error fetching showings:', error);
      onAirDates.value = [];
      onAirTimes.value = [];
      timeSelectRef.value?.resetSelection(); // Add this line
    } finally {
      loading.value = false;
    }
}
};

const fetchTheaters = async () => {
  try {
    loading.value = true;
    const response = await getTheaters();
    theaterLocations.value = response.data.map(theater => ({
      id: theater.id,
      label: theater.name,
      name: theater.name,
      address: theater.address,
      phone: theater.phone
    }));
    
    // Set initial selection if available
    if (theaterLocations.value.length > 0) {
      selectedTheater.value = theaterLocations.value[0].label;
    }
  } catch (error) {
    console.error('Error fetching theaters:', error);
    theaterLocations.value = [];
  } finally {
    loading.value = false;
  }
};

const handleTheaterSelection = (theaterName) => {
  selectedTheater.value = theaterName;
};

const handleDate = (fullLabel) => {
  // Reset time selection when date changes
  timeSelectRef.value?.resetSelection();
  selectedShowingId.value = null;
  
  // Update date and available times
  selectedDate.value = fullLabel;
  const selectedDateData = onAirDates.value.find(d => d.fullLabel === fullLabel);
  if (selectedDateData) {
    onAirTimes.value = selectedDateData.times;
  }
};

const handleLocation = (label) => {
selectedTheater.value = label;
};

const handleTime = (label) => {
  selectedTime.value = label;

  // If you need to store the showing ID for the next step (seat selection)
  const selectedDateData = onAirDates.value.find(d => d.fullLabel === selectedDate.value);
  const selectedTimeData = selectedDateData?.times.find(t => t.label === label);
  if (selectedTimeData) {
    // Store the showing ID if needed
    selectedShowingId.value = selectedTimeData.id;
  }
};

// Update the onMounted hook with proper error handling
onMounted(async () => {
  try {
    loading.value = true;
    
    // Fetch initial data
    await Promise.all([fetchMovies(), fetchTheaters()]);
    
    // Set initial values only if we have data
    if (movies.value.length > 0) {
      selectedMovie.value = movies.value[0].id;
      await onMovieSelect(selectedMovie.value);
    }

    if (theaterLocations.value.length > 0) {
      selectedTheater.value = theaterLocations.value[0].label;
    }

  } catch (error) {
    console.error('Error during initialization:', error);
  } finally {
    loading.value = false;
  }
});
</script>