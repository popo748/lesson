<template>
    <div>
        <MyInput color="red" prependIcon="mdi-checkbox-blank-circle" appendIcon="mdi-checkbox-blank-circle-outline" @input="handleValue">
        </MyInput >
        

    <div class="input-message">
        <p class="input-text" v-if="showCustomMessage">{{ inputValue }}</p>
    </div>
    <MyButton @show="handleMessage" v-bind="buttonProps"></MyButton>
    </div>
</template>
<script>
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';

export default{

    data() {
    return {
      inputValue: '',
      showCustomMessage: false,
      buttonProps: {
        color: 'white',
        backgroundColor: 'blue',
        border: '1px solid red',
        label: 'Click me',
      },
    };
  },

    methods:{
        handleValue(event){
            if(event.target){
            this.inputValue=event.target.value;
        }
        },

        handleMessage(value){
            this.showCustomMessage=!this.showCustomMessage;
           

        }

    }
}

</script>
<style>
.input-message{
    padding: 10px;
  margin: 5px;
  height: 50px;
}

.input-text {
  padding: 0px;
  margin: 0px;
}
</style>