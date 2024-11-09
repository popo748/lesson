<template>
    <v-card>
      <v-card-title>{{ item.user }}</v-card-title>
      <v-card-subtitle>{{ item.task }}</v-card-subtitle>
      <v-card-text>Date: {{ item.date }}</v-card-text>
      <v-card-text>Priority: {{ item.priority }}</v-card-text>

      <v-card-actions>
        <v-btn color="secondary" @click="$emit('edit', item)">Edit</v-btn>
        <v-btn color="error" @click="$emit('delete', item.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  };
  </script>