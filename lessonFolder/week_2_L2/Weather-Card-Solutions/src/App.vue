<template>
    <v-app>
        <v-main>
            <!--You can't place the d-flex align-center justify-center in the <div>because the flexbox centering logic works based 
            on the parent container's size and layout. 
            ! since mx-auto need to baase on ther element but the v-container is already the whole thing so using mx-auto wont be visible 
            -->
            <v-container class="fill-height">
                <div class="pa-4 text-center mx-auto">
                    <v-dialog
                        v-model="dialog"
                        width="auto"
                    >
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn
                                color="brown"
                                prepend-icon="mdi-earth"
                                text="Select Country"
                                variant="outlined"
                                v-bind="activatorProps"
                            ></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
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
                                <v-card-actions>
                                    <v-btn
                                        text="Close"
                                        @click="dialog = false"
                                    ></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);

//
</script>
