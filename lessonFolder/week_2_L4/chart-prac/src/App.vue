<template>
    <v-app>
        <v-main>
            <v-row>
                <!--put container so can spec set width and height fill height so that it appears in the middle if not it will appear in the top middle-->
                <v-col cols="6">
                    <v-container
                        class="fill-height"
                        width="800"
                        height="600"
                    >
                        <LineChart></LineChart>
                    </v-container>
                </v-col>
                <v-col cols="6">
                    <v-container
                        class="fill-height"
                        width="800"
                        height="600"
                    >
                        <BarChart></BarChart>
                    </v-container>
                </v-col>
            </v-row>
            <v-row>
                <!--put container so can spec set width and height fill height so that it appears in the middle if not it will appear in the top middle-->
                <v-col cols="4">
                    <v-container class="fill-height">
                        <PieChart></PieChart>
                    </v-container>
                </v-col>
                <v-col cols="4">
                    <v-container class="fill-height">
                        <DoughnutsChart></DoughnutsChart>
                    </v-container>
                </v-col>
                <v-col cols="4">
                    <v-container class="fill-height">
                        <RadarChart></RadarChart>
                    </v-container>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<script setup>
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
import PieChart from "./components/PieChart.vue";
import DoughnutsChart from "./components/DoughnutsChart.vue";
import RadarChart from "./components/RadarChart.vue";

//
</script>
