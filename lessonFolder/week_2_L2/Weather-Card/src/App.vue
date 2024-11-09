<template>
    <v-app>
        <v-main>
            <v-container class="fill-height">
                <v-card
                    class="mx-auto pa-2 border-lg rounded"
                    width="420"
                    height="420"
                >
                    <v-card-title class="text-left font-weight-bold">
                        Kuala Lumpur
                    </v-card-title>
                    <v-card-subtitle class="text-left font-weight-bold">
                        Tues, 01:30pm, Mostly Sunny
                    </v-card-subtitle>
                    <br />
                    <v-row class="text-center pa-2">
                        <v-col
                            cols="6"
                            class="text-h2 mt-8"
                        >
                            30&deg;C
                        </v-col>
                        <v-col cols="6">
                            <v-icon
                                color="orange-darken-4"
                                icon="mdi-weather-sunny"
                                size="90"
                            >
                            </v-icon>
                        </v-col>
                    </v-row>
                    <v-row class="pa-2 text-center">
                        <v-col cols="6">
                            <v-icon> </v-icon>
                            <div class="mt-3"></div>
                        </v-col>
                        <v-col cols="6"> </v-col>
                    </v-row>
                    <v-row class="px-2 text-center">
                        <v-col cols="6">
                            <v-icon
                                color="blue-grey-lighten-3"
                                icon="mdi-weather-pouring"
                                size="45"
                            >
                            </v-icon>

                            <div class="mt-3">2% Precipication</div>
                        </v-col>

                        <v-col cols="6">
                            <v-icon
                                color="blue-grey-lighten-3"
                                icon="mdi-weather-windy"
                                size="45"
                            ></v-icon>

                            <div class="mt-3">20km/h Wind</div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
//
</script>
<!--we dont use para since gap too big we use div so that we can use mt = margin top-->
