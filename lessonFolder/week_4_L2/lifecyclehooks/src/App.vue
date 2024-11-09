<template>
  <v-app>
    <v-main>
      <ExerciseThreeComp></ExerciseThreeComp>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Carousel from './components/Carousel.vue';
import ExerciseThreeComp from './components/ExerciseThreeComp.vue';
import Activate from './pages/activate.vue';
import Lifecyclehooksdemo from './pages/lifecyclehooksdemo.vue';
import Lifeexerciseone from './pages/lifeexerciseone.vue';
import Mountexercisetwo from './pages/mountexercisetwo.vue';
import TabbedTimer from './pages/TabbedTimer.vue';

  //
</script>
