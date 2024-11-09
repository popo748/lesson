<template>
    <v-app>
        <v-main>
            <v-container class="fill height">
                <v-responsive
                    class="mx-auto border-sm"
                    max-width="500"
                >
                    <h1 class="text-center my-5">Login Page</h1>
                    <v-form
                        fast-fail
                        @submit.prevent
                        class="pa-4"
                    >
                        <v-text-field
                            label="username"
                            prepend-inner-icon="mdi-email-outline"
                            placeholder="johndoe@gmail.com"
                            type="email"
                        >
                        </v-text-field>
                        <v-text-field
                            prepend-inner-icon="mdi-lock-outline"
                            label="password"
                            type="password"
                        >
                        </v-text-field>
                        <v-btn
                            class="mt-1"
                            type="submit"
                            block
                            >Submit</v-btn
                        >
                        <!--block to follow the parent property which is the width-->
                    </v-form>
                    <!--fast-fail @submit to prevent fail info from submitting-->
                </v-responsive>
            </v-container>
        </v-main>

        <AppFooter />
    </v-app>
</template>

<script setup>
//
</script>
