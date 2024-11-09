<!--
<template>
    <input type="text" v-model="message" />
    <p>Current message: {{ message }}</p>
</template>
<script lang="ts">
import {ref} from 'vue';
export default {
    const message=ref('');
    const showGreeting = ref(true);
    const items =ref(['1', '2', '3']);
    const imageUrl = ref(

    )
    
}
</script>
-->
<template>
    <div>
        <h2>Newsletter Signup</h2>
        <label for="email">Email:</label>
        <input
            type="email"
            id="email"
            v-model="email"
        />
        <button @click="onOffSubscribe">
            {{ subscribe ? "UnSubscribe" : "Subscribe" }}
        </button>
        <p v-if="subscribe">Thank you for subscribing!</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            subscribe: false,
        };
    },
    methods: {
        onOffSubscribe() {
            // Here you would typically send the email to your backend
            // for processing the signup
            this.subscribe = !this.subscribe;
        },
    },
};
</script>
