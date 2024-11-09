<template>
    <v-container>
        <v-row>
            <v-col 
            v-for="user in getUsers"
            :key="user.id"
            cols="12"
            sm="6"
            md="4"
            >
            <v-card>
                <v-card-title>
                    {{ user.id }}
                </v-card-title>
                <v-card-subtitle>
                    {{ user.title }}
                </v-card-subtitle>
                <v-card-text>
                    post: {{ user.body}} 
                </v-card-text>


            </v-card>
        
        </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import {usePostStore} from '@/stores/post';
const userStore = usePostStore();
const getUsers = computed(()=>userStore.getUsers);

onMounted(userStore.fetchUsers);
</script>