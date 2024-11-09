<!-- think template as html like mark up text willbe reusable-->
<template>
    <Bar
        :options="chartOptions"
        :data="chartData"
    />
</template>
<script>
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);
//components to tell which chart to use and data to tell which data is inside the chart
//square bracket[] for arrays then inside curly bracket{} for multiple property
export default {
    name: "BarChart",
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                datasets: [
                    {
                        label: "popo company",
                        backgroundColor: "#f87979",
                        bordercolor: "black",
                        data: [
                            5200, 4800, 6100, 5500, 7200, 8100, 9300, 8700,
                            7600, 6900, 6300, 7800,
                        ],
                    },
                ],
            },
            chartOptions: {
                responsive: true, // fixed typo here
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: "Month", // changed assignment from `=` to `:`
                        },
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: "Sales price ($)",
                        },
                    },
                },
                // plugins: added chart title
                plugins: {
                    title: {
                        display: true,
                        text: "Sales revenue in popo company",
                    },
                },
            },
        };
    },
};
</script>
