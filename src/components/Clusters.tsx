import { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import { obterClusters } from "../services/api";
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale } from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(Tooltip, Legend, PointElement, LinearScale);

interface Jogador {
    categoria: string;
    competitividade: number;
    familiaridade: number;
    habilidade: number;
    id: number;
    imersao: number;
    tempo_jogo: number;
}

interface ClusterData {
    centro: number[];
    jogadores: Jogador[];
}

const Clusters: React.FC = () => {
    const [clusters, setClusters] = useState<ClusterData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchClusters = async () => {
        try {
            const data = await obterClusters();
            console.log("Dados recebidos:", data);
            const clustersData = data.clusters ? data.clusters : data;
            const clustersArray = Object.values(clustersData) as ClusterData[];
            console.log("Clusters Array:", clustersArray);
            setClusters(clustersArray);
        } catch (error) {
            console.error("Erro ao obter clusters:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClusters();
    }, []);

    if (loading) return <div className="text-center mt-4">Carregando clusters...</div>;
    if (!clusters || clusters.length === 0) return <div className="alert alert-warning text-center mt-4">Nenhum cluster encontrado.</div>;

    const colors = ["red", "blue", "green", "purple", "orange", "cyan", "magenta", "yellow"];

    const datasets = clusters.map((cluster, index) => ({
        label: `Cluster ${index + 1}`,
        data: cluster.jogadores.map((jogador) => ({
            x: jogador.habilidade,
            y: jogador.tempo_jogo,
        })),
        backgroundColor: colors[index % colors.length],
        pointRadius: 6,
    }));

    const centroidDataset = {
        label: "Centroides",
        data: clusters.map((cluster) => ({
            x: cluster.centro[0],
            y: cluster.centro[1],
        })),
        backgroundColor: "black",
        pointRadius: 8,
        pointStyle: "rectRounded",
    };

    const chartData = {
        datasets: [...datasets, centroidDataset],
    };

    const options = {
        scales: {
            x: {
                type: "linear" as const,
                title: {
                    display: true,
                    text: "Habilidade",
                },
            },
            y: {
                type: "linear" as const,
                title: {
                    display: true,
                    text: "Tempo de Jogo",
                },
            },
        },
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Clusters de Gamers</h2>
            <div className="card shadow p-4">
                <Scatter data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Clusters;
