<template>
    <h1>hi regular</h1>
    <v-btn @click="logout">Logout</v-btn>
    </template>
    <script>
    export default {
  methods: {
    logout() {
      localStorage.removeItem("roles");
      window.location.href = "/weekfour/dayfour/exercisetwo";
    }
  }
};
    </script>