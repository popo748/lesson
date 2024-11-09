<template>
    <Doughnut
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

export default {
    name: "DoughnutChart", // Updated name to reflect the chart type
    components: { Doughnut },
    data() {
        return {
            chartData: {
                labels: [
                    "Saving",
                    "Food",
                    "Transport",
                    "Room Rental",
                    "Others",
                ],
                datasets: [
                    {
                        backgroundColor: [
                            "#41B883",
                            "#E46651",
                            "#00D8FF",
                            "#DD1B16",
                            "#d1bee0",
                        ],
                        data: [200, 500, 300, 1000, 250],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Expense Breakdown", // Updated title
                    },
                },
            },
        };
    },
};
</script>
