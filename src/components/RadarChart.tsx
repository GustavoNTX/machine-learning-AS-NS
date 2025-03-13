import React from "react";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

interface RadarChartProps {
    habilidade: number;
    tempo_jogo: number;
    familiaridade: number;
    competitividade: number;
    imersao: number;
}

const RadarChart: React.FC<RadarChartProps> = ({
    habilidade,
    tempo_jogo,
    familiaridade,
    competitividade,
    imersao,
}) => {
    const data = {
        labels: ["Habilidade", "Tempo de Jogo", "Familiaridade", "Competitividade", "Imersão"],
        datasets: [
            {
                label: "Atributos do Gamer",
                data: [habilidade, tempo_jogo, familiaridade, competitividade, imersao],
                backgroundColor: "rgba(34, 202, 236, 0.2)",
                borderColor: "rgba(34, 202, 236, 1)",
                pointBackgroundColor: "rgba(34, 202, 236, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(34, 202, 236, 1)",
                borderWidth: 2,
                pointRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                beginAtZero: true,
                angleLines: { color: "rgba(255, 255, 255, 0.2)" },
                grid: { color: "rgba(255, 255, 255, 0.2)" },
                pointLabels: { color: "#ffffff", font: { size: 14, weight: 700 } },
                ticks: { display: false },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: { backgroundColor: "#1e293b", titleFont: { size: 14 }, bodyFont: { size: 12 } },
        },
    };

    return (
        <div className="container my-4">
            <div className="bg-dark p-4 rounded-lg shadow-lg d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                <Radar data={data} options={options} />
            </div>
        </div>
    );
};

export default RadarChart;
