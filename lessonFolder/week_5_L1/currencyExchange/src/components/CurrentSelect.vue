<template>
    <v-select
    :id="id"
    v-model="selectedCurrency"
    :item="currencies"
    item-title="name"
    item-value="code"
    :label="label"
    return-object
    >
<template v-slot:selection="{item}">
    {{ item.raw.code }} - {{ item.raw.name }}

</template>
<template v-slot:item="{props, item}">
    <v-list-item v-bind="props" :title="`${item.raw.code} - ${item.raw.name}`"></v-list-item>

</template>
</v-select>
</template>
<script>
import {ref, watch} from 'vue'
export default{
    name:'CurrencySelect',
    props:{
        id:{
            type: String,
            Required: true
        },
        label:{
            type: String,
            default:'Select a currency'
        },
        modelValue:{
            type: Object,
            default: null
        }
    },
    emits: ['update:modelValue'],


setup(props, {emit}){
    const currencies = [
        {code: 'USD', name: 'US Dollar'},
        {code: 'EUR', name: 'Euro'},
        {code: 'MYR', naem: 'Malaysian Ringgit'}
    ];
    const selectedCurrency = ref(props.modelValue);

    watch(selectedCurrency,(newValue)=>{
        emit('update:modelValue', newValue);
    });

    return{
        currencies,
        selectedCurrency,
    }
}
};

</script>