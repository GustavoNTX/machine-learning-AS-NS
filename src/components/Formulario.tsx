import { useState } from "react";
import { preverCategoria } from "../services/api";
import RadarChart from "./RadarChart";
import "bootstrap/dist/css/bootstrap.min.css";

const Formulario = () => {
    const [dados, setDados] = useState({
        habilidade: "",
        tempo_jogo: "",
        familiaridade: "",
        competitividade: "",
        imersao: ""
    });
    const [categoria, setCategoria] = useState("");
    const [showChart, setShowChart] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const dadosNumericos = Object.fromEntries(
            Object.entries(dados).map(([key, value]) => [key, parseFloat(value)])
        );

        const resultado = await preverCategoria(dadosNumericos);
        setCategoria(resultado.categoria_prevista);
        setShowChart(true);
    };

    return (
        <div className="bg-secondary text-white p-4 rounded shadow">
            <h2 className="text-center mb-3">Classificação de Gamer</h2>

            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    {Object.entries(dados).map(([campo, valor]) => (
                        <div key={campo} className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">
                                    {campo.charAt(0).toUpperCase() + campo.slice(1)}:
                                </label>
                                <input
                                    type="number"
                                    name={campo}
                                    value={valor}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3">
                    Prever Categoria
                </button>
            </form>

            {categoria && (
                <div className="mt-4 text-center">
                    <div className="alert alert-success">
                        <h3 className="h5">Categoria Prevista:</h3>
                        <p className="h4 fw-bold">{categoria}</p>
                    </div>
                </div>
            )}

            {showChart && (
                <div className="mt-4">
                    <h3 className="text-center">Visualização dos Atributos</h3>
                    <RadarChart
                        habilidade={parseFloat(dados.habilidade)}
                        tempo_jogo={parseFloat(dados.tempo_jogo)}
                        familiaridade={parseFloat(dados.familiaridade)}
                        competitividade={parseFloat(dados.competitividade)}
                        imersao={parseFloat(dados.imersao)}
                    />
                </div>
            )}
        </div>
    );
};

export default Formulario;
