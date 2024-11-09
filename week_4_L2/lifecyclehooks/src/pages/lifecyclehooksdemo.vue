<template>
    <v-container>
    <v-list>
    <v-list-item v-for="user in users" :key="user.id">
    <v-list-item-content>
    <v-list-item-title>{{user.name}}</v-list-item-title>
    <v-list-item-title>{{user.phone}}</v-list-item-title>
    </v-list-item-content>
    </v-list-item>
    </v-list>
    </v-container>
</template>
<script>
export default{
    data(){
        return{
            users:[],
        };
    },
    beforeCreated(){
        console.log('beforeCreated hook executed');
    },
    created(){
        console.log('create hook created');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>{this.users = data;
            console.log('Fetched Items', this.users);})
       .catch((error)=>console.error('Error fetching items', error));
    },
};
</script>