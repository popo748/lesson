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
                labels: ["A", "B", "C", "D", "E", "F"],
                datasets: [
                    {
                        backgroundColor: [
                            "#41B883",
                            "#E46651",
                            "#00D8FF",
                            "#DD1B16",
                            "#d1bee0",
                            "BLACK",
                        ],
                        data: [320, 250, 180, 100, 80, 70],
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
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || "";
                                const value = context.parsed;
                                const total = context.dataset.data.reduce(
                                    (acc, data) => acc + data,
                                    0
                                );
                                const percentage =
                                    ((value / total) * 100).toFixed(2) + "%";
                                return `${label}: ${percentage}`;
                            },
                        },
                    },
                },
            },
        };
    },
};
</script>
