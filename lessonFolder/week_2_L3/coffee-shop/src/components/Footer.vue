<template>
    <v-footer
        height="60"
        class="bg-black"
        app
    >
        <v-row>
            <v-col
                cols="3"
                class="text-left font-weight-light"
            >
                &copy; Copyright {{ new Date().getFullYear() }} Coffee Shop, Inc
            </v-col>
            <v-col
                class="text-right font-weight-light"
                cols="9"
            >
                Privacy Policy<br />
                Terms and Conditions
            </v-col>
        </v-row>
    </v-footer>
</template>
