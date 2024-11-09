<template>
    <v-btn-toggle>
    <v-btn v-for="time in times" :key="time.id" @click="selectTime(time.label)">{{ time.label }}</v-btn>
    </v-btn-toggle>
</template>

<script>
export default{
name: 'times',
props:{
    times:{
        type: Array,
        required: true
    }
},

methods:{
    selectTime(label){
        this.$emit('doneSelectTime', label)
    }
}
}

</script>