<template>
    <div class="profile-card">
        <img
            :src="user.image"
            :alt="user.name"
            class="profile-image"
        />
        <h2 :class="{ highlight: isHighlighted }">{{ user.name }}</h2>
        <p>Age: {{ user.age }}</p>
        <button :disabled="!user.isActive">Send Message</button>
        <button @click="toggleHighlight">
            {{ isHighlighted ? "Remove Highlight" : "Highlight" }}
        </button>
    </div>
</template>

<style>
.highlight {
    background-color: aqua;
}
</style>

<script>
export default {
    data() {
        return {
            user: {
                name: "John",
                age: 22,
                image: "https://placehold.co/600x400",
                isActive: true,
            },
            isHighlighted: true,
        };
    },
    methods: {
        toggleHighlight() {
            this.isHighlighted = !this.isHighlighted;
        },
    },
};
</script>
