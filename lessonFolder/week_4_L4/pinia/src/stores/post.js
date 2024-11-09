import { defineStore } from 'pinia';

export const usePostStore = defineStore('user',{
    state: ()=>({
        users:[],
    }),
    getters: {
        getUsers: (state) => state.users
    },
    actions:{
        async fetchUsers(){
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                this.users=data;
            }catch (error){
                console.error('Error fetching users in store: ', error);
            }
        },
    }
})