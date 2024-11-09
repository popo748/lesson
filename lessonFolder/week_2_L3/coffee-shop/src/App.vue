<script setup>
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";
import Coffeedetails from "./components/Coffeedetails.vue";
import Coffeeslideshow from "./components/Coffeeslideshow.vue";
</script>

<template>
    <v-app>
        <Header></Header>
        <v-main>
            <Coffeeslideshow></Coffeeslideshow>
            <Coffeedetails></Coffeedetails>
        </v-main>
        <Footer></Footer>
    </v-app>
</template>
