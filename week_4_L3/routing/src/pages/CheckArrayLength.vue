<template>
    <div>
        <div id="results"></div>
    </div>
</template>
<script>
import useArrayLengthChecker from '@/composables/arraytLengthCheck';
export default{
    setup(){
        const myDataArray=ref([1, 2, 3, 4, 5]);
        useArrayLengthChecker(myDataArray);
        return{
            myDataArray,
        };
    }
};

</script>