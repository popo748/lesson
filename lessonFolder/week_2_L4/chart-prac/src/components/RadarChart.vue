<template>
    <Radar
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import { Radar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    Filler,
    PointElement,
    RadialLinearScale,
    LineElement,
} from "chart.js";

ChartJS.register(
    Tooltip,
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement,
    Filler
);

export default {
    name: "RadarChart",
    components: { Radar },
    data() {
        return {
            chartData: {
                labels: ["Maths", "Physics", "Chemistry", "Biology", "English"],
                datasets: [
                    {
                        label: "Student A",
                        backgroundColor: "rgba(179,181,198,0.2)",

                        data: [65, 59, 90, 81, 76],
                    },
                    {
                        label: "Student B",
                        backgroundColor: "rgba(225,99,132,0.2)",
                        data: [78, 88, 40, 69, 96],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Exam Performance Comparison",
                    },
                },
            },
        };
    },
};
</script>
