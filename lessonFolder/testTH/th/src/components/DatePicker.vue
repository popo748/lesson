<template>
    <v-btn-toggle>
    <v-btn v-for="date in dates" :key="date.id" @click="selectDate(date.fullLabel)">
        {{ date.label }} 
        {{ date.day }} 
    </v-btn>
    </v-btn-toggle>
</template>

<script>
export default{
name: 'times',
props:{
    dates:{
        type: Array,
        required: true
    }
},

methods:{
    selectDate(fullLabel){
        this.$emit('doneSelectDate', fullLabel)
    }
}
}

</script>