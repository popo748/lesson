<template>
    <div id="app">
        <p v-if="isLoggedIn">Welcome back, user</p>
        <p v-else>Please log in to continue.</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        };
    },
};
</script>
