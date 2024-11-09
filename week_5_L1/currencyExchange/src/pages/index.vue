<template>
  <v-container>
    <v-row>
 <v-col cols="12" class="pa-0">
  <v-card-text class="pb-0"><h3 align="center">Currency Exchange Rates</h3></v-card-text>
 </v-col>

 <v-col cols="6">
  <v-card-text class="pb-o pt-0">
    <CurrentSelect
    id="from-currency"
    label="From Currency"
    v-model="selectedOption1"></CurrentSelect>

  </v-card-text>
 </v-col>

 <v-col cols="6">
  <v-card-text class="pb-o pt-0">
    <CurrentSelect
    id="to-currency"
    label="To Currency"
    v-model="selectedOption1"></CurrentSelect>

  </v-card-text>
 </v-col>

 <v-col cols="6">
  <v-card-text class="pb-o pt-0">
    <DatePicker
    :max="maxDate"
    label="From Date"
    v-model="fromDate"></DatePicker>
<v-btn
@click="handleSelection"
color="primary"
class="mt-4 mb-5"
::diabled="!selectedOption1||!fromDate||!toDate">Submit</v-btn>

  </v-card-text>
 </v-col>
 <v-col cols="6">
  <v-card-text class="pb-o pt-0">
    <DatePicker
    :min="fromDate"
    :max="maxDate"
    label="To Date"
    v-model="toDate"></DatePicker>
  </v-card-text>
 </v-col>
</v-row>
</v-container>
</template>

<script>

import CurrentSelect from '@/components/CurrentSelect.vue';
import DatePicker from '@/components/DatePicker.vue';
import {ref} from 'vue';
import { useDateFormatter } from '@/composables/useDateFormatter';
import { useExchangeRateStore } from '@/stores/exchangeRateStore';
import ExchangeRateResults from '@/components/ExchangeRateResults.vue';
  //

export default{
  name:'CurrencyexchangeRates',
  components:{CurrentSelect, DatePicker},
  setup(){

    const fromDate=ref(null);
    const toDate=ref(null);
    const{formatDateToReadable, maxDate} = useDateFormatter();
    const exchangeRateStore=useExchangeRateStore()

    return{
      fromDate,
      toDate,
      maxDate,
      exchangeRateStore,
      formatDateToReadable,
    };
  },
  data(){
    return{
      selectedOption1:{code: 'MYR', name: 'Malaysian Ringgit'},
      selectedOption2:{code: 'USD', name: 'US Dollar'},
      showResults: false,
      chartData:{labels:[], datasets:[]}
      
    }
  },
  computed:{
    base(){return this.exchangeRateStore.base;},
    start_date(){return this.exchangeRateStore.start_date},
    end_date(){return this.exchangeRateStore.end_date},
    rates(){return this.exchangeRateStore.rates},
    loading(){return this.exchangeRateStore.loading},
    error(){this.exchangeRateStore.error},
    selectedCountry(){return this.exchangeRateStore.selectedCountry}
  },
  async handleSelection(){
if(this.selectedOption1.code===this.selectedOption2.code){
  alert("Please select different country for both options");
  return;
}
if(this.fromDate&&this.toData){
  this.showResults=true;
  await this.exchangeRateStore.fetchExchangeRates(
    this.selectedOption1.code,
    this.selectedOption2.code,
    this.fromDate,
    this.toDate,
  );
  this.updateChartDate();
}
  },
  watch:{
    fromDate(newDate){
      if(this.toDate&&new Date(this.toDate)<new Date(newDate)){
        this.toDate=newDate;
        console.log('Auto adjust the date')
      }
    }
  }
  
}

</script>
