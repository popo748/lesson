<template>
    <div class="properties">
        <h1>{{ fullName }}</h1>
        <input
            v-model="firstName"
            class="input-field"
            placeholder="First Name"
        />
        <input
            v-model="lastName"
            class="input-field"
            placeholder="Last Name"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
        };
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
};
</script>
