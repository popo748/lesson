<template>
    <!--v-container organize content in a grid manner pass parent property to child, v-card for visuallize showcsae content like image text-->
    <!--since this file is in components file sohave to get back to the coffee-shop file and then access the assets so need use .. instead of . which means current-->
    <v-row class="mt-1 mx-auto">
        <v-col cols="12">
            <v-card class="text-center bg-black">
                <h1>Featured Products</h1>
            </v-card>

            <v-carousel
                cycle
                interval="6000"
            >
                <v-carousel-item
                    src="../assets/pexels-coffee1.jpg"
                    cover
                ></v-carousel-item>

                <v-carousel-item
                    src="../assets/pexels-coffee2.jpg"
                    cover
                ></v-carousel-item>

                <v-carousel-item
                    src="../assets/pexels-coffee3.jpg"
                    cover
                ></v-carousel-item>
                <v-carousel-item
                    src="../assets/pexels-coffee4.jpg"
                    cover
                ></v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</template>
