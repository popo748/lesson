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
                    {{ user.name }}
                </v-card-title>
                <v-card-subtitle>
                    {{ user.email }}
                </v-card-subtitle>
                <v-card-text>
                    username: {{ user.username }} <br>
                    website: {{ user.website }}
                </v-card-text>


            </v-card>
        
        </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import {useUserStore} from '@/stores/user';
const userStore = useUserStore();
const getUsers = computed(()=>userStore.getUsers);

onMounted(userStore.fetchUsers);
</script>