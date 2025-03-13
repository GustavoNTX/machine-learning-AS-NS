const API_URL = "https://backend-py-ml.onrender.com/";

export const preverCategoria = async (dados: any) => {
    try {
        console.log("Enviando dados para prever:", dados);
        const resposta = await fetch(`${API_URL}/prever`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        });

        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.statusText}`);
        }

        const respostaJson = await resposta.json();
        console.log("Resposta da previsão:", respostaJson);
        return respostaJson;
    } catch (erro) {
        console.error("Erro ao fazer a requisição de previsão:", erro);
        throw erro;
    }
};

export const obterClusters = async () => {
    try {
        const resposta = await fetch(`${API_URL}/clusters`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!resposta.ok) {
            throw new Error("Erro ao obter os clusters");
        }

        return resposta.json();
    } catch (erro) {
        console.error("Erro ao fazer requisição para /clusters", erro);
        return null;
    }
};
