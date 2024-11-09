<template>
    <v-container width="500" fluid>
        <h1>Sign Up</h1>
        <v-form @submit.prevent="onSubmit">
            <v-text-field
            label="Email"
            v-model="email"
            required>
            </v-text-field>
            <v-text-field
            label="Password"
            v-model="password"
            type="password"
            required>
            </v-text-field>
            <v-btn type="Submit">Sign up</v-btn>
        </v-form>

    </v-container>
</template>
<script setup>
const email = ref('');
const password = ref('');

const onSubmit = () =>{
    const tokenKey = 'authToken';
    const randomChars = Array.from({length: 12},()=>
Math.random().toString(36).charAt(2)
).join('');
localStorage.setItem(tokenKey, randomChars);
window.location.href = '/loggedin'
};
</script>