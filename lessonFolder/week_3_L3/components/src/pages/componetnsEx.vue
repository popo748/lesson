<template>
    <v-text-field
        v-model="inputValue"
        width="600"
    ></v-text-field>
    <div v-if="inputValue !== null">
        <v-alert
            v-if="showMessage"
            type="error"
        >
            Please Enter Something
        </v-alert>
        <v-alert
            v-else
            type="success"
        >
            You doing great Keep going
        </v-alert>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputValue: null,
            showMessage: false,
        };
    },
    watch: {
        inputValue() {
            this.showMessage = this.inputValue === "";
        },
    },
};
</script>
