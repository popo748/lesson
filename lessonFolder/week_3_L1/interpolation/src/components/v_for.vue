<template>
    <div class="fruit-container">
        <h2>Fruit List</h2>
        <ul>
            <li
                v-for="(fruit, index) in fruits"
                :keys="index"
            >
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fruits: ["apple", "banana", "cherry", "Date"],
        };
    },
};
</script>
