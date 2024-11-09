import {defineStore} from 'pinia';
import { useDateFormatter } from '../composables/useDateFormatter';
import axios from 'axios';

export const useExchangeRateStore = defineStore('exchangeRate',{
    state:()=>({
        exchangeData:{},
        loading: false,
        error: null,
        selectedCountry: null,
        API_URL:"https://api.frankfurter.app/"
    }),

    getters: {
        base: (state)=>state.exchangeData?.base,
        start_date: (state)=>state.exchangeData?.start_date,
        end_date: (state)=>state.exchangeData?.end_date,
        rates: (state)=>state.exchangeData?.rates
    },

    actions:{
        async fetchExchangeRates(fromCurrency, toCurrency, startDate, endDate){
            const {formatDate} = useDateFormatter();
            this.loading=true;
            this.error=null;
            const formattedStartDate = formatDate(startDate);
            const formattedEndDate = formatDate(endDate);
            const url = `${formattedStartDate}..${formattedEndDate}?from=${fromCurrency}&to=${toCurrency}`;
            console.log(url);
            try{
                const response = await axios.get(url);
                this.exchangeData=response.data;
                this.selectedCountry=toCurrency;
                this.loading=false;
            }catch(error){
                this.error='An error occured while fetching currency exchange data';
                this.loading=false;
                console.error('Error fetching currency exchange data: ', error)
            }
        }
    }
})