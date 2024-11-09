<template>
    <!-- V-text-field for single line input like name email but for v-testarea is for multiple line for paragraph or descriptions-->
    <!--<h> stands for tittle heading <p> stands for paragraphs of text-->
    <!--<v-radio valaue=""> represents what is the value when the option is choose which will sent to v-model, id is for HTML to identidy an element -->
    <!--<v-card> use to handle visual style of the layout but <v-form> is to handle the logic that works with input like validation and submission-->
    <!--sometime need the sm lg in <v-col cols="" sm="" lg=""> stands for small and large screen so can controlhow columns behaveon dii screen size-->
    <!--<v-responsice>This is useful when you want to restrict how wide the content can become, especially on larger screens where elements might otherwise stretch too much.-->
    <v-app>
        <v-main>
            <v-container class="fill-height">
                <v-responsive
                    class="mx-auto pa-2 border-lg round align-center"
                    max-width="900"
                >
                    <v-form>
                        <v-card-title class="text-center text-h6"
                            >Registration Page</v-card-title
                        >
                        <v-card-subtitle class="text-center"
                            >Fill in the form to apply for class
                            enrollment</v-card-subtitle
                        >
                        <br />
                        <h3 class="font-weight-black">Student Information</h3>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-textarea
                                    label="First Name"
                                    prepend-inner-icon="mdi mdi-account"
                                    rows="1"
                                ></v-textarea>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-textarea
                                    label="Middle Name"
                                    prepend-inner-icon="mdi mdi-account"
                                    rows="1"
                                ></v-textarea>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-textarea
                                    label="Last Name"
                                    prepend-inner-icon="mdi mdi-account"
                                    rows="1"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    label="dd/mm/yyyy"
                                    prepend-inner-icon="mdi mdi-cake"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    label="Student ID"
                                    prepend-inner-icon="mdi mdi-id-card"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <h4 class="font-weight-bold">Gender</h4>
                                <v-radio-group inline>
                                    <v-radio
                                        label="Male"
                                        value="Male"
                                    ></v-radio>
                                    <v-radio
                                        label="Female"
                                        value="Female"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col cols="8">
                                <h4 class="font-weight-bold">
                                    Choose One Study Area
                                </h4>
                                <v-radio-group inline>
                                    <v-radio
                                        label="IT"
                                        value="IT"
                                    ></v-radio>
                                    <v-radio
                                        label="Data Science"
                                        value="Data Science"
                                    ></v-radio>
                                    <v-radio
                                        label="Arts and Social Science"
                                        value="IT"
                                    ></v-radio>
                                    <v-radio
                                        label="Law"
                                        value="Data Science"
                                    ></v-radio>
                                    <v-radio
                                        label="Finance"
                                        value="IT"
                                    ></v-radio>
                                    <v-radio
                                        label="Economy"
                                        value="Data Science"
                                    ></v-radio>
                                    <v-radio
                                        label="Science"
                                        value="Data Science"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>
                        <h3 class="font-weight-black">Adress</h3>
                        <v-text-field
                            label="Street Address"
                            prepend-inner-icon="mdi mdi-map-marker"
                            rows="1"
                        >
                        </v-text-field>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    label="City"
                                    prepend-inner-icon="mdi mdi-map-marker"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    label="State"
                                    prepend-inner-icon="mdi mdi-map-marker"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    label="Country"
                                    prepend-inner-icon="mdi mdi-map-marker"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    label="ZIP Code"
                                    prepend-inner-icon="mdi mdi-map-marker"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <h3 class="font-weight-black">Contact Info</h3>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    label="Corresponding Email"
                                    type="email"
                                    prepend-inner-icon="mdi mdi-email"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    label="Phone Number"
                                    type="number"
                                    prepend-inner-icon="mdi mdi-phone"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <h3 class="font-weight-black">Upload Transcript</h3>
                        <v-file-input label="File input"></v-file-input>
                        <v-divider></v-divider>
                        <h3 class="font-weight-black">Remarks</h3>
                        <v-textarea
                            clearable
                            label="Additional remarks/Comments"
                        ></v-textarea>
                        <v-btn
                            type="submit"
                            block
                            >SUBMIT</v-btn
                        >
                    </v-form>
                </v-responsive>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
//
</script>
