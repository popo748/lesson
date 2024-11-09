<template>
    <!--app bar or nav bar should put beofre v-main after v-app-->
    <!--v-slot:prepend is what will appear before the main content append is after the main content-->
    <v-app>
        <v-app-bar class="px-3 text-center">
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>
                <v-icon>mdi-car-cog</v-icon>
                ABX Workshop
            </v-app-bar-title>
            <!--wrap icon inside v-btn to serve the click and navigate purpose-->
            <v-btn icon>
                <v-icon>mdi mdi-web</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-login</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-row>
                <v-col cols="12">
                    <v-carousel>
                        <v-carousel-item
                            src="./assets/pexels-car1.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./assets/pexels-car2.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./assets/pexels-car3.jpg"
                            cover
                        ></v-carousel-item>
                        <v-carousel-item
                            src="./assets/pexels-car4.jpg"
                            cover
                        ></v-carousel-item
                        ><v-carousel-item
                            src="./assets/pexels-car5.jpg"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-tabs
                        class="bg-grey-lighten-2 opacity-90"
                        slider-color="grey-darken-3"
                        v-model="tab"
                        align-tabs="center"
                    >
                        <v-tab :value="1"><h2 class="mx-5">Home</h2></v-tab>
                        <v-tab :value="2"
                            ><h2 class="mx-5">Get a Quote</h2></v-tab
                        >
                        <v-tab :value="2"><h2 class="mx-5">Booking</h2></v-tab>
                        <v-tab :value="2"><h2 class="mx-5">Blog</h2></v-tab>
                        <v-tab :value="3"><h2 class="mx-5">Contect</h2></v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="12">
                    <h1>Your One Stop Auto Service Car</h1>
                    <h4>
                        Automative services and maintenance taht keeps oyur
                        vehicle driving
                    </h4>
                </v-col>
            </v-row>
            <br />
            <v-row class="mx-3">
                <v-col cols="4">
                    <v-img
                        class="mt-2"
                        width="1000"
                        height="550"
                        src="./assets/pexels-descar.jpg"
                        cover
                    ></v-img>
                </v-col>
                <v-col cols="8">
                    <p class="text-justify text-h6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <br />
                    <p class="text-justify text-h6">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur?
                    </p>
                    <br />
                    <p class="text-justify text-h6">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt.
                    </p>
                </v-col>
            </v-row>
            <v-row class="mx-3">
                <v-col cols="3">
                    <v-card
                        class="mx-auto"
                        width="400"
                        height="500"
                    >
                        <v-img
                            height="300"
                            src="./assets/pexels-cardcar.jpg"
                            cover
                        ></v-img>
                        <v-card-title class="text-center font-weight-bold">
                            CAR SERVICES
                        </v-card-title>

                        <v-card-text class="text-center">
                            The Petronas Twin Towe, located in Kuala Lumpur,
                            Malayysia, are iconic skyscrapers that were once the
                            tallest buildings in the world from 1998 to 20004
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card
                        class="mx-auto"
                        width="400"
                        height="500"
                    >
                        <v-img
                            height="300"
                            src="./assets/pexels-cardcar3.jpg"
                            cover
                        ></v-img>
                        <v-card-title class="text-center font-weight-bold">
                            CAR BATTERY
                        </v-card-title>

                        <v-card-text class="text-center">
                            The Petronas Twin Towe, located in Kuala Lumpur,
                            Malayysia, are iconic skyscrapers that were once the
                            tallest buildings in the world from 1998 to 20004
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card
                        class="mx-auto"
                        width="400"
                        height="500"
                    >
                        <v-img
                            height="300"
                            src="./assets/pexels-cardcar1.jpg"
                            cover
                        ></v-img>
                        <v-card-title class="text-center font-weight-bold">
                            ROAD SIDE ASSISTANCE
                        </v-card-title>

                        <v-card-text class="text-center">
                            The Petronas Twin Towe, located in Kuala Lumpur,
                            Malayysia, are iconic skyscrapers that were once the
                            tallest buildings in the world from 1998 to 20004
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card
                        class="mx-auto"
                        width="400"
                        height="500"
                    >
                        <v-img
                            height="300"
                            src="./assets/pexels-cardcar2.jpg"
                            cover
                        ></v-img>
                        <v-card-title class="text-center font-weight-bold">
                            EMERGENCY
                        </v-card-title>

                        <v-card-text class="text-center">
                            The Petronas Twin Towe, located in Kuala Lumpur,
                            Malayysia, are iconic skyscrapers that were once the
                            tallest buildings in the world from 1998 to 20004
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="12">
                    <h2>4 simple ways to service your car</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-timeline side="end">
                        <v-timeline-item
                            size="small"
                            width="700"
                        >
                            <!--strong is to bold the word-->
                            <v-alert color="blue">
                                <strong>Step 1:</strong>Select a Service
                            </v-alert>
                        </v-timeline-item>

                        <v-timeline-item
                            size="small"
                            width="700"
                        >
                            <v-alert color="blue">
                                <strong>Step 1:</strong>Select a Service
                            </v-alert>
                        </v-timeline-item>
                        <v-timeline-item
                            size="small"
                            width="700"
                        >
                            <v-alert color="blue">
                                <strong>Step 1:</strong>Select a Service
                            </v-alert>
                        </v-timeline-item>
                        <v-timeline-item
                            size="small"
                            width="700"
                        >
                            <v-alert color="blue">
                                <strong>Step 1:</strong>Select a Service
                            </v-alert>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-main>
        <v-footer
            height="60"
            class="bg-blue-grey-darken-4"
            app
        >
            <!--{{}} to do a function in to words-->
            <div class="mx-auto">
                {{ new Date().getFullYear() }} - <strong>ABX Workshop</strong>
            </div>
            <div class="d-flex flex-row-reverse">
                <v-btn icon>
                    <v-icon size="25">mdi mdi-youtube</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon size="25">mdi mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon size="25">mdi mdi-twitter</v-icon>
                </v-btn>
            </div>
        </v-footer>
    </v-app>
    <!--67% to see the full and perfect website-->
</template>

<script setup>
//
</script>
