

<template>
    <div v-if="showResults">
        <p v-if="loading">Loading data...</p>
        <p v-else-if="error">{{ error }}</p>
        <div v-else>
            <br>
            <h3>Exchange Rates:{{ base }} to {{ selectedCountry }}</h3>
            <v-card>
                <v-row>
                    <v-col cols="9" class="border-e-thin">
                        <LineChartComponent :chartData="chartData"/>
                    </v-col>
                    <v-col cols="3">
                        <v-card-text align="center" class="pb-0">Data Information<v-divider/></v-card-text>
                        <v-card-text class="pt-3 pb-0">
                            Start Date: <b>{{ formatDateToReadable(start_date) }}</b><br>
                            End Date: <b>{{ formatDateToReadable(end_date) }}</b><br>
                            <br><v-divider/>

                        </v-card-text>

                        <div class="text-center pa-4">
                            <v-btn @click="dialog=true">
                                View Details
                            </v-btn>
                            <v-dialog
                            v-model="dialog"
                            width="auto">
                                <v-card width="700px"
                                prepend-icon="mdi-swap-horizontal"
                                title="Exchange Rate:">
                                <v-card-text>
                                    <v-table density="compact">
                                        <thead>
                                            <tr>
                                                <th class="text-left">Date</th>
                                                <th class="text-left">{{ selectedCountry }} Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="{rate, date} in rates" :key="date">
                                                <td>{{ formatDateToReadable(date) }}</td>
                                                <td>{{ rate[selectedCountry].toFixed(5) }}</td>
                                            </tr>
                                        </tbody>

                                    </v-table>
                                </v-card-text>
                                <template v-slot:actions>
                                    <v-btn
                                    class="px-6 mb-1 mr-3"
                                    text="Close"
                                    elevation="2"
                                    rounded
                                    @click="dialog=false">

                                    </v-btn>

                                </template>
                                

                                </v-card>
                            </v-dialog>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>

    </div>
</template>
<script>
import {ref} from 'vue';
import{useDateFormatter} from'@/composables/useDateFormatter';
import LineChartComponent from './LineChartComponent.vue';

export default{
    name: 'ExchangeRateResults',
    components:{LineChartComponent
    },
    props:{
        showResults: Boolean,
        loading: Boolean,
        error: String,
        base: String,
        selectedCountry: String,
        chartData: Object,
        start_date: String,
        end_date: String,
        rates: Object,

    },
    setup(){
        const dialog =ref(false);
        const {formatDateToReadable}=useDateFormatter();

        return{
            dialog,
            formatDateToReadable
        }
    }
}

</script>
<style>
table{
    border-collapse: collapse;
    width:100%
}
th, td{
    border:1px solid #dddd;
    padding: 8px;
    text-align:left
}
th{
    background-color: #f2f2f2;
}
</style>