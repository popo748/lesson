<template>
    <!--use npm i vue-chartjs chart.js to download the chartjs first-->
    <v-app>
        <v-main>
            <v-row class="fill-height">
                <v-col cols="6">
                    <v-container
                        class="fill-height"
                        width="750"
                        heigth="500"
                    >
                        <BarChart></BarChart>
                    </v-container>
                </v-col>
                <v-col cols="6">
                    <v-container
                        class="fill-height"
                        width="750"
                        heigth="500"
                    >
                        <LineChart></LineChart>
                    </v-container>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<script setup>
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
</script>
