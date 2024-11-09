<template>
    <h1 :class="{ active: isActive, 'text-danger': hasError }">
        Dynamic Class Binding
    </h1>
    <button @click="toggleActive">Toggle Active</button>
    <button @click="toggleError">Toggle Error</button>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            hasError: false,
        };
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        },
        toggleError() {
            this.hasError = !this.hasError;
        },
    },
};
</script>
<style scoped>
.active {
    color: green;
}

.text-danger {
    color: red;
}
</style>
