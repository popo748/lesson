<template>
    <v-card>
      <v-card-title>{{ book.title }}</v-card-title>
      <v-card-subtitle>{{ book.author }}</v-card-subtitle>
      <v-card-text>Published: {{ book.published_year }}</v-card-text>
      <v-card-actions>
        <v-btn color="secondary" @click="$emit('edit', book)">Edit</v-btn>
        <v-btn color="error" @click="$emit('delete', book.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      book: {
        type: Object,
        required: true,
      },
    },
  };
  </script>