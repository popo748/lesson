<template>
<v-container>
    <v-row>
        <v-col v-for="user in users" :key="user.id" cols="12" sm="6" md="4" >
    <v-card >
       
        <v-card-title>{{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.username }}</v-card-subtitle>
        <v-card-text>{{ user.email }}</v-card-text>
        <v-card-text>{{ user.phone }}</v-card-text>
        <v-card-text>{{ user.website }}</v-card-text>

    </v-card>
    </v-col>
    </v-row>
</v-container>


</template>
<script>
export default{
    data(){
        return{
            users:[],
        }
    },
    beforeCreated() {
    console.log('beforeCreated: Data has not been fetched yet:', this.users);
  },
    created(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{if (!response.ok){
            throw new Error('Network not ok');
        }
        return response.json();})
        .then((data)=>{this.users=data;
            console.log('created: Data has been fetched', this.users);
        })
        .catch((error)=>{console.error('error fetching user', error);});
    },
}


</script>