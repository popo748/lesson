<template>
    <div class="fruit-container">
        <h2>Fruit List</h2>
        <ul>
            <li
                v-for="(fruit, index) in fruits"
                :keys="index"
            >
                <v-btn
                    v-on:click="handleClick(fruit)"
                    color="primary"
                    >{{ fruit }}</v-btn
                >
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fruits: ["apple", "banana", "orange"],
        };
    },
    methods: {
        handleClick(fruit) {
            console.log("Clicked on:", fruit);
        },
    },
};
</script>
