<template>
    <div v-if="showBeforeMountMessage">wait for mounting</div>
    <div v-if="showMountMessage">mount process done {{ message }}</div>
</template>
<script>
export default{
    data(){
        return{
            message:'',
            showBeforeMountMessage: true,
            showMountMessage: false,
        }
    },

beforeMount(){
    this.message = 'Hello from beforeMount!';
},

    mounted(){
        this.showBeforeMountMessage= false;
        this.showMountMessage= true;
    },
};
</script>