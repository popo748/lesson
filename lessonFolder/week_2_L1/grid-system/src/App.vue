<template>
    <v-app>
        <v-main>
            <v-row>
                <v-col
                    v-for="n in 60"
                    :key="n"
                    cols="3"
                    sm="3"
                    md="2"
                    lg="1"
                >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${
                            n * 5 + 10
                        }`"
                        aspect-ratio="1"
                        class="bg-grey-lighten-2"
                        cover
                    >
                    </v-img>
                </v-col>
            </v-row>
        </v-main>

        <AppFooter />
    </v-app>
</template>

<script setup>
//
</script>
<!-- v-for="n in 60" means that the n value range from 0 to 60.
 key is to make n the key attribute since vue will recognize it when it is being add, update or remove.
 four grid system(the total grid system have is 12), cols="3"(extra small screen) where each img take 3 so can only contain 4 img, 
 sm="3"(small screen) where each img take 3 so can only contain 4 img, md="2"(medium screen) where each image take up 2 column so can contain 6 img,
 lg="1"(large screen) where each image take up 1 concan contain 12 images  -->
