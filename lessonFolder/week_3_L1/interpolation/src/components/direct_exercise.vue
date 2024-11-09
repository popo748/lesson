<template>
    <v-container>
        <div id="changeMessage">
            <p v-if="changeMessage">Success change message</p>
            <p v-else>Fail change message</p>
            <v-btn @click="toggleMessage">Toggle Message</v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            changeMessage: true,
        };
    },
    methods: {
        toggleMessage() {
            this.changeMessage = !this.changeMessage;
        },
    },
};
</script>
