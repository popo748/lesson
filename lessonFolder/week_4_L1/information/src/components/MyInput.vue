<template>
    <div class="input-wrapper">
        <slot name="prepend"></slot>
    <input type="text" v-model='inputValue' :style="{color: color}" @input="emitInput"/>
    <slot name="append"></slot>
    </div>
</template>
<script>
export default{
    data(){
        return{
            inputValue: "",
        };
    },
    props:{
        color:{
            type: String,
            default: 'white',
        },
    },
    methods:{
        emitInput(event){
            this.$emit('input',event.target.value);
        }
    }
};
</script>