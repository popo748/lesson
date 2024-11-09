<template>
    <div class="input-holder">
        <v-icon v-if="prependIcon">{{ prependIcon }}</v-icon>
        
        <input @input="emitInput" type="text" v-model="inputValue" :style="{color: color}"/>
        <v-icon v-if="appendIcon">{{ appendIcon }}</v-icon>
    </div>
</template>
<script>
export default{
    data(){
        return{
            inputValue:"",
        };
    },

    props:{
        color:{
            type: String,
         default: 'white',
       },
       prependIcon:{
        type: String,
        default:'',
       },
       appendIcon:{
        type: String,
        default: '',
       },
    },



    methods:{
    emitInput(event){
    this.$emit('input', event.target.value)
    },
},
};
</script>