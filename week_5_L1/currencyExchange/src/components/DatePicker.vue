<template>
<v-menu
v-model="menu"
:close-on-content-click="false"
transition="scale-transition"
>
<template v-slot:activator="{props}">
    <v-text-field
    :model-value="formattedDate"
    :label="label"
    prepend-inner-icon="mdi-calender"
    readonly
    v-bind="props">

    </v-text-field>

</template>
<v-date-picker
v-model="localDate"
@update:model-value="handleDateSelection"
:min="min"
:max="max">

</v-date-picker>
</v-menu>
</template>
<script>
import {ref, computed, watch} from 'vue';
import { useDateFormatter } from '@/composables/useDateFormatter';
export default{
    name:'DatePicker',
    props:{
        modelValue: Date,
        label: String,
        min: Date,
        max: Date,
    },
    emits:['update:modelValue'],
    setup(props, {emit}){
        const { formatDateToReadable } = useDateFormatter();
        const menu = ref(false);
        const localDate=ref(props.modelValue);

        const formattedDate=computed(()=>{
            return formatDateToReadable(localDate.value);
        });

        function handleDateSelection(newDate){
            localDate.value=newDate;
            menu.value=false;
            emit('update:modelValue', newDate);
        }

        watch(()=>props.modelValue,(newValue=>{
            localDate.value=newValue;
        }));

        return{
            menu,
            localDate,
            formattedDate,
            handleDateSelection,
        }
    }
}

</script>