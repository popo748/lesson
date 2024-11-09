<!-- think template as html like mark up text, will be reusable-->
<!--change chart name accordingly to diff chart <Bar> to <Line> also import part have to update-->
<template>
    <Line
        :options="chartOptions"
        :data="chartData"
    />
</template>
<script>
import { Line } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
);
//components to tell which chart to use and data to tell which data is inside the chart
//square bracket[] for arrays then inside curly bracket{} for multiple property
export default {
    name: "LineChart",
    components: { Line },
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
                ],
                datasets: [
                    {
                        label: "City X",
                        backgroundColor: "#f87979",
                        data: [30, 26, 28, 31, 29, 27],
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
                            text: "Temperature in + ${}",
                        },
                    },
                },
                // plugins: added chart title
                plugins: {
                    title: {
                        display: true,
                        text: "Monthly Average Temperature (Jan-June, 2024)",
                    },
                },
            },
        };
    },
};
</script>
