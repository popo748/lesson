<template>
<div class="image-container">
    <v-img
      :src="imageSource"
      height="400"
      width="100%"
      cover
    >
      <div class="fade-overlay"></div>
      <div class="image-text">
        <h2>{{ movie.title }}</h2>
        <v-chip
        class="ma-1"
        > 
        {{ movie.genre }}
        </v-chip>
        <v-chip
        class="ma-1"
        > 
        {{ movie.duration }} minutes
        </v-chip>
        
      </div>
      
    </v-img>
  </div>

</template>
  
<script>
export default {
  name: 'cinema-props',
  props: {
    movie: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        duration: '',
        genre: '',
        
      })
    },
    imageSource: {
      type: String,
      default: ''
    },
  },
  data() {
  return {
    showFullDescription: false
  }
},

};
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  max-height: 400px;
  overflow: hidden;
}

.fade-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 30%, /* Transparent center */
    rgba(0, 0, 0, 0.75) 100%
    
  );
}

.image-text {
  position: absolute;
  bottom: 10px; /* Adjust to control how far from the bottom the text appears */
  left: 10px;
  right: 0;
  text-align: left; /* Center the text horizontally */
  color: white; /* Make the text stand out on the overlay */
  padding: 10px; /* Add some padding if needed */
  font-size: 24px; /* Adjust font size as needed */
}

.more-info-btn {
  background-color: transparent !important;
  border: 2px solid #6A1B9A !important;
  color: #6A1B9A !important;
  font-weight: bold !important;
  letter-spacing: 1px !important;
  padding: 0 20px !important;
  height: 40px !important;
  left: 10px !important;
}

.more-info-btn:hover {
  background-color: #ac69d5 !important;
}

/* Override Vuetify's internal styles */
.more-info-btn::before {
  background-color: transparent !important;
}
</style>