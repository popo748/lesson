<template>
  <v-app>
    <v-main class="purple-gradient-background">
      <router-view />
    </v-main>


  </v-app>
</template>

<script lang="ts" setup>
  //
</script>

<style>
.purple-gradient-background{
    width: 100%;
    height: 100%;
    background-color: black;
    background-image:
        radial-gradient(circle at top right, rgba(130,29,231,1) 0%, transparent 30%),
        radial-gradient(circle at bottom left, rgba(130, 29, 231, 1) 0%, transparent 30%);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
} 

</style>