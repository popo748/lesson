<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
          <v-card
              class="mx-auto text-center border-lg rounded"
              width="300"
              height="420">

              <v-card-title 
                class="font-weight-bold">
                Basic
             </v-card-title>

             <v-card-subtitle class="font-weight-bold">
              $3.99/Month
            </v-card-subtitle>
            
             <br><br>

             <h1 class="font-weight-bold">100GB</h1>

             <br>

             <v-card-actions>
              <v-btn class="mx-auto"
                color="purple-lighten-2"
                text="Purchase"
                variant="elevated"
                width="120"                
              ></v-btn>
            </v-card-actions>

            <br><br>

            <v-divider class="mb-1"></v-divider>

            <v-card-text class="py-2 ml-7 text-left">
              <v-icon
                icon="mdi-check"
                start>
              </v-icon>
              100 GB of Storage
            </v-card-text>

            <v-card-text class="py-2 ml-7 text-left">
              <v-icon
                icon="mdi-check"
                start>
              </v-icon>
              Option to add members
            </v-card-text>
          
            <v-card-text class="py-2 ml-7 text-left">
              <v-icon
                icon="mdi-check"
                start>
              </v-icon>
              Extra member benefits
            </v-card-text>
          </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>
