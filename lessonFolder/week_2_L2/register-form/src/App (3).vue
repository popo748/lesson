<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
          <v-responsive
            class="align-centerfill-height mx-auto border-sm bg-blue-grey-lighten-5"
            max-width="900"           
          >
          <h1 class="text-center">Registration Page</h1>
          <h4 class="text-center text-grey">Fill out the form to apply for class enrollment</h4>
          <br>
          <v-form class="pa-3">
            <h2 class="mb-2">Student Information</h2>
            <v-row>

              <v-col cols="4">
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  label="First Name"
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  label="Middle Name"
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  label="Last Name"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="Date of Birth"
                  type="date"
                  prepend-inner-icon="mdi-cake"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  prepend-inner-icon="mdi-id-card"
                  type="number"
                  label="Student ID"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <p>Gender</p>
                <v-radio-group inline>
                  <v-radio label="Male" value="Male"></v-radio>
                  <v-radio label="Female" value="Female"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="8">
                <p>Choose One Study Area</p>
                <v-radio-group inline>
                  <v-radio label="IT" value="IT"></v-radio>
                  <v-radio label="Data Science" value="Data Science"></v-radio>
                  <v-radio label="Arts and Social Science" value="Arts"></v-radio>
                  <v-radio label="Law" value="Law"></v-radio>
                  <v-radio label="Finance" value="Finance"></v-radio>
                  <v-radio label="Economy" value="Economy"></v-radio>
                  <v-radio label="Science" value="Science"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <v-divider></v-divider>

            <h2 class="mt-2 mb-2">Address</h2>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  prepend-inner-icon="mdi-map-marker"
                  label="Street Address"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-text-field
                  prepend-inner-icon="mdi-map-marker"
                  label="City"
                ></v-text-field>                
              </v-col>

              <v-col cols="6">
                <v-text-field
                  prepend-inner-icon="mdi-map-marker"
                  label="State/Province"
                ></v-text-field>                
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-text-field
                  prepend-inner-icon="mdi-map-marker"
                  label="Country"
                ></v-text-field>                
              </v-col>

              <v-col cols="6">
                <v-text-field
                  type="number"
                  prepend-inner-icon="mdi-map-marker"
                  label="ZIP Code"
                ></v-text-field>                
              </v-col>
            </v-row>

            <v-divider></v-divider>

            <h2 class="mt-2 mb-2">Contact info</h2>

            <v-row>
              <v-col cols="6">
                <v-text-field
                  type="email"
                  prepend-inner-icon="mdi-email"
                  label="Corresponding Email"
                ></v-text-field> 
              </v-col>

              <v-col cols="6">
                <v-text-field
                  prepend-inner-icon="mdi-cellphone"
                  label="Phone Number"
                ></v-text-field> 
              </v-col>
            </v-row>

            <v-divider></v-divider>

            <h2 class="mt-2 mb-2">Upload Transcript</h2>
            <v-row>
              <v-col cols="12">
                <v-file-input clearable label="Transcript(in word or PDF format)"></v-file-input>
              </v-col>
            </v-row>

            <v-divider></v-divider> 

            <h2 class="mt-2 mb-2">Remarks</h2>
            <v-row>
              <v-col cols="12">
                <v-textarea label="Additional Remarks/Comments"></v-textarea>
              </v-col>
            </v-row>
            <v-btn class="mt-2" type="submit" block>Submit</v-btn>
          </v-form>
          

        </v-responsive>
      </v-container>
    </v-main>

    
  </v-app>
</template>

<script setup>
  //
</script>
