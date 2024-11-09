<template>
    <v-app>
        <v-main>
            <v-container class="fill-height">
                <v-card
                    class="mx-auto pa-2 border-sm"
                    width="350"
                    height="350"
                >
                    <v-card-title class="font-weight-bold">
                        Kuala Lumpur
                    </v-card-title>

                    <v-card-subtitle class="font-weight-bold">
                        Tues, 01:30 PM, Mostly Sunny
                    </v-card-subtitle>

                    <br />

                    <v-row class="pa-2 text-center">
                        <v-col
                            class="text-h2 mt-3"
                            cols="6"
                        >
                            30&deg;C
                        </v-col>

                        <v-col cols="6">
                            <v-icon
                                color="orange-darken-4"
                                icon="mdi-weather-sunny"
                                size="90"
                            ></v-icon>
                        </v-col>
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
