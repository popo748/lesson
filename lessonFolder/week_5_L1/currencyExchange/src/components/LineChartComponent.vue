<template>
    <div class="chart-container">
        <Line :options="chartOptions" :data="chartData"></Line>
    </div>
</template>
<script>
    import {Line} from 'vue-chartjs';
    import {Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend} from 'chart.js';
    
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, 
    Title, Tooltip, Legend);

    export default{
        name: 'LineChartComponent',
        components:{Line},
        props:{
            chartData:{
                type: Object,
                required: true
            },
            chartOptions:{
                type: Object,
                default:()=>({
                    responsive: true,
                    maintainAspectRatio: false,
                    scales:{
                        x:{
                            display: true,
                            title:{
                                display: true, text:'Data'
                            }
                        },
                        y:{
                            display: true,
                            title:{
                                display: true, text: 'Exchange Rate'
                            }
                        }
                    },
                    plugins:{
                        title:{
                            display:true, text:'Exchange Rate Over Time'
                        },
                        tooltip:{
                            callbacks:{
                                label: function(context){
                                    let label=context.dataset.label||'';
                                    if(label){
                                        label+=': ';
                                    }
                                    if(context.parsed.y !== null){
                                        label+=context.parsed.y.toFixed(5);
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                })
            }
        },
        mounted(){
            this.resizeChart();
            window.addEventListener('resize', this.resizeChart);

        },
        beforeUnmount(){
            window.removeEventListener
        },
        methods:{
            resizeChart(){
                if(this.$refs,chartContainer){
                    const{width}=this.$refs.chartContainer.getBoundingClientRect();
                    this.chartOptions.width=width;
                    this.chartOptions.height=width*0.5;
                }
            }
        }
    }
    
</script>
<style scoped>
.chart-container{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
}
</style>