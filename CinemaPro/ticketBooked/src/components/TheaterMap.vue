<template>
<v-sheet class="map-wrapper ml-8" max-width="600px" width="100%" pl>
    <v-expansion-panels v-model="expandedPanel">
      <v-expansion-panel>
        <v-expansion-panel-title class="text-subtitle-1">
          Cinema Details
        </v-expansion-panel-title>
        
        <v-expansion-panel-text>
          <div class="position-relative">
            <div ref="mapRef" style="height: 400px; width: 100%;"></div>
            <v-overlay
              v-model="loadingAddresses"
              contained
              persistent
              class="align-center justify-center"
            >
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
              <span class="ml-2">Loading theater locations...</span>
            </v-overlay>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
</v-sheet>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  
  // Fix for default marker icon
  import icon from 'leaflet/dist/images/marker-icon.png';
  import iconShadow from 'leaflet/dist/images/marker-shadow.png';
  
  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  
  const props = defineProps({
    theaters: {
      type: Array,
      required: true,
      default: () => []
    },
    selectedTheater: {
      type: String,
      default: ''
    }
  });
  
  const emit = defineEmits(['theater-selected']);
  
  const mapRef = ref(null);
  const loadingAddresses = ref(false);
  const expandedPanel = ref(null);
  let map = null;
  const markers = {};
  
  // Geocoding function using Nominatim
  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      
      if (data && data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon)
        };
      }
      return null;
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  };
  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const updateMarkers = async () => {
    if (!map) return;
    
    loadingAddresses.value = true;
    
    // Clear existing markers
    Object.values(markers).forEach(marker => marker.remove());
    
    const bounds = L.latLngBounds();
    
    // Geocode addresses and add markers
    for (const theater of props.theaters) {
      // Add delay between requests to respect Nominatim's rate limit
      await delay(1000);
      
      const coords = await geocodeAddress(theater.address);
      if (coords) {
        const marker = L.marker([coords.latitude, coords.longitude])
          .bindPopup(`
            <strong>${theater.name}</strong><br>
            ${theater.address}<br>
            ${theater.phone || ''}
          `)
          .addTo(map);
        
        if (theater.name === props.selectedTheater) {
          marker.openPopup();
        }
        
        marker.on('click', () => {
          emit('theater-selected', theater.name);
        });
        
        markers[theater.id] = marker;
        bounds.extend([coords.latitude, coords.longitude]);
      }
    }
    
    if (Object.keys(markers).length > 0) {
      map.fitBounds(bounds);
    }
    
    loadingAddresses.value = false;
  };
  
  // Function to initialize map
  const initializeMap = () => {
    if (!map && mapRef.value) {
      // Set initial view to a default location (e.g., center of your city)
      map = L.map(mapRef.value).setView([51.505, -0.09], 13);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
  
      if (props.theaters.length > 0) {
        updateMarkers();
      }
    }
  };
  
  // Watch for panel expansion
  watch(expandedPanel, async (newValue) => {
    if (newValue === 0) { // Panel is opened
      // Wait for panel animation to complete
      await new Promise(resolve => setTimeout(resolve, 300));
      initializeMap();
      
      // Force a map refresh after initialization
      if (map) {
        map.invalidateSize();
      }
    }
  });
  
  // Watch for props changes
  watch(() => props.theaters, updateMarkers);
  watch(() => props.selectedTheater, () => {
    Object.entries(markers).forEach(([id, marker]) => {
      const theater = props.theaters.find(t => t.id === id);
      if (theater && theater.name === props.selectedTheater) {
        marker.openPopup();
      }
    });
  });
  </script>
  
  <style scoped>
  .position-relative {
    position: relative;
    width: 100%;
    height: 400px;
  }
  
  .leaflet-container {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  
  .v-overlay {
    z-index: 2;
  }
  
  /* Add some spacing around the map */
  :deep(.v-expansion-panel-text__wrapper) {
    padding: 16px !important;
    
  }

  .map-wrapper {
  margin: 0 auto; /* Center the sheet */
}
  </style>