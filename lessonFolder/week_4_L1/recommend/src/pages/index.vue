<template>
  <div>
    <MyInput color="red" @input="handleInput">
      <template #prepend>
        <v-icon>mdi-checkbox-blank-circle</v-icon>

      </template>
      <template #append>
       <v-icon>mdi-checkbox-blank-circle-outline</v-icon>
      </template>
    </MyInput>
    <p>{{ inputValue }}</p>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput.vue';

export default{
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
};

  //
</script>