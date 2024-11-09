<template>
 <MyInput @input="handleInput" color="yellow" 
 prependIcon="mdi-checkbox-blank-circle" 
 appendIcon="mdi-checkbox-blank-circle-outline">
</MyInput>
<p>{{ inputValue }}</p>

</template>

<script>
import MyInput from '@/components/MyInput.vue';

export default{
  components:{
    MyInput,
  },

  data(){
    return{
      inputValue:"",
   };
  },
  methods:{
   handleInput(event){
      if(event.target){
      this.inputValue=event.target.value;
      }
    },
  },
}
//
</script>
