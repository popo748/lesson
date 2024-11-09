<template>
    <v-container
        class="pa-0 movie-booking-page"
        fluid
    >
        <v-app-bar
            color="purple"
            dark
        >
            <v-toolbar-title>tiket4u.</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text>CINEMA</v-btn>
            <v-btn text>PROMOTION</v-btn>
            <v-btn text>
                MORE
                <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
            <v-btn
                class="ml-4"
                color="red"
                >Logout</v-btn
            >
        </v-app-bar>

        <v-main
            class="pa-6"
            style="background-color: #1e1e1e"
        >
            <v-row>
                <v-col cols="8">
                    <h2 class="white--text mb-4">Theater</h2>
                    <v-chip-group
                        v-model="selectedTheater"
                        active-class="purple white--text"
                        column
                    >
                        <v-chip outlined>
                            <v-icon left>mdi-map-marker</v-icon>
                            Bukit Bintang
                        </v-chip>
                        <v-chip outlined>
                            <v-icon left>mdi-map-marker</v-icon>
                            IOI Putrajaya
                        </v-chip>
                        <v-chip outlined>
                            <v-icon left>mdi-map-marker</v-icon>
                            KB Mall
                        </v-chip>
                    </v-chip-group>

                    <h2 class="white--text mt-6 mb-4">Date</h2>
                    <v-chip-group
                        v-model="selectedDate"
                        active-class="purple white--text"
                        column
                    >
                        <v-chip
                            v-for="i in 6"
                            :key="i"
                            outlined
                        >
                            22 Oct
                            <br />
                            Mon
                        </v-chip>
                    </v-chip-group>

                    <h2 class="white--text mt-6 mb-4">Time</h2>
                    <v-chip-group
                        v-model="selectedTime"
                        active-class="purple white--text"
                        column
                    >
                        <v-chip
                            v-for="i in 4"
                            :key="i"
                            outlined
                        >
                            15:40
                        </v-chip>
                    </v-chip-group>
                </v-col>

                <v-col cols="4">
                    <v-card
                        class="mx-auto"
                        max-width="344"
                        outlined
                    >
                        <v-img
                            height="250px"
                            src="https://placehold.co/400x700"
                        ></v-img>
                        <v-card-title
                            >SPIDERMAN ACROSS THE SPIDERVERSE</v-card-title
                        >
                        <v-card-subtitle
                            >Movie description here...</v-card-subtitle
                        >
                        <v-card-text>
                            <div>Duration: 2h 30m</div>
                            <div>Type: Cartoon</div>
                        </v-card-text>
                    </v-card>

                    <v-card
                        class="mt-6 pa-4"
                        outlined
                    >
                        <div class="text-h6 mb-2">IOI Putrajaya</div>
                        <div>28 October 2023</div>
                        <div class="mb-4">15:40</div>
                        <div class="caption mb-2">
                            *Seat selection can be done after this
                        </div>
                        <v-btn
                            block
                            color="green"
                            >Proceed</v-btn
                        >
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </v-container>
</template>

<script>
export default {
    name: "MovieBookingPage",
    data: () => ({
        selectedTheater: 1,
        selectedDate: 2,
        selectedTime: 1,
    }),
};
</script>

<style scoped>
.movie-booking-page {
    background-color: #1e1e1e;
    min-height: 100vh;
}
</style>
