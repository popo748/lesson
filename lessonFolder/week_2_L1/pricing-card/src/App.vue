<template>
    <v-app>
        <v-main>
            <v-container class="fill-height">
                <v-row>
                    <v-card
                        class="mx-auto text-center border-lg rounded"
                        width="300"
                        height="420"
                    >
                        <v-card-title>BUy m=e</v-card-title>
                    </v-card>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
//
</script>
<!--v-resppnsive not intended for row and column but suitable for like video and image
the ans to why no need fill-width in v-container is because it isalreafy fill up by default unlike height
horizontal centering can use mx-auto in child element, but for vertical box centering only use flexbox or grid in parent container to control the child element accordingly
Using flexbox with align-center and justify-center on a parent container allows centering in both directions, as flexbox treats both axes (horizontal and vertical) simultaneously.-->
