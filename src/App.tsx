import Formulario from "./components/Formulario";
import Clusters from "./components/Clusters";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-white bg-dark py-5">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h1 className="display-4 fw-bold text-center">🎮 Classificação de Gamers</h1>
      </div>

      <div className="row w-100 g-4">
        <div className="col-md-6">
          <div className="bg-secondary p-4 rounded shadow">
            <h2 className="h4 text-center mb-3">Supervisionada</h2>
            <Formulario />
            <div className="mt-4">
              <h5 className="fw-bold">Como funciona a Regressão Supervisionada?</h5>
              <p>
                A Regressão Linear Supervisionada utiliza um modelo que estima a relação entre uma variável dependente (por exemplo, a especialidade do gamer) e variáveis independentes (como habilidade, tempo de jogo, etc). O modelo tenta ajustar uma linha ou hiperplano que minimiza o erro entre as previsões e os valores reais, utilizando o Método dos Mínimos Quadrados.
              </p>
              <h6 className="fw-bold">Cálculo:</h6>
              <p>
                A equação de regressão é:
                <br />
                <code style={{ color: "black" }}>y = b0 + b1·x1 + b2·x2 + b3·x3 + b4·x4 + b5·x5</code>
                <br />
                Onde:
                <ul>
                  <li><strong>y</strong>: Valor previsto (ex.: probabilidade ou classe)</li>
                  <li><strong>b0</strong>: Intercepto</li>
                  <li><strong>b1, b2, ...</strong>: Coeficientes dos atributos</li>
                  <li><strong>x1, x2, ...</strong>: Valores dos atributos (ex.: habilidade, tempo de jogo, etc.)</li>
                </ul>
                <strong>Exemplo:</strong> Suponha que, após o treinamento, os coeficientes sejam:
                <br />
                <code style={{ color: "black" }}>b0 = -3.5, b1 = 0.04, b2 = 0.001, b3 = 0.02, b4 = 0.03, b5 = 0.05</code>
                <br />
                Para um jogador com:
                <br />
                <code style={{ color: "black" }}>habilidade = 75, tempo_jogo = 1200, familiaridade = 80, competitividade = 90, imersao = 60</code>
                <br />
                O valor linear seria:
                <br />
                <code style={{ color: "black" }}>
                  z = -3.5 + (0.04×75) + (0.001×1200) + (0.02×80) + (0.03×90) + (0.05×60)
                  <br />
                  z = -3.5 + 3 + 1.2 + 1.6 + 2.7 + 3 = 8.0
                </code>
                <br />
                Esse valor <em>z</em> é então transformado em probabilidade (no caso de classificação, via a função sigmoide ou softmax).
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-secondary p-4 rounded shadow">
            <h2 className="h4 text-center mb-3">Não Supervisionada</h2>
            <Clusters />
            <div className="mt-4">
              <h5 className="fw-bold">Como funciona o Agrupamento Não Supervisionado (K-Means)?</h5>
              <p>
                O K-Means é um algoritmo que divide os dados em <strong>k</strong> grupos (clusters). Ele inicia definindo <strong>k</strong> centros de cluster aleatórios e, em seguida, atribui cada ponto ao cluster com o centro mais próximo. Após isso, recalcula os centros como a média dos pontos de cada grupo e repete o processo até que os centros se estabilizem.
              </p>
              <h6 className="fw-bold">Cálculo:</h6>
              <p>
                <strong>Exemplo:</strong> Suponha que um dos centros de cluster seja:
                <br />
                <code style={{ color: "black" }}>[80, 1250, 85, 95, 65]</code>
                <br />
                E que o novo jogador tenha os atributos:
                <br />
                <code style={{ color: "black" }}>[75, 1200, 80, 90, 60]</code>
                <br />
                A distância Euclidiana entre o jogador e este centro é calculada por:
                <br />
                <code style={{ color: "black" }}>
                  distância = √[(75-80)² + (1200-1250)² + (80-85)² + (90-95)² + (60-65)²]
                  <br />
                  = √[5² + 50² + 5² + 5² + 5²]
                  <br />
                  = √[25 + 2500 + 25 + 25 + 25] = √2600 ≈ 50.99
                </code>
                <br />
                O algoritmo repete essa operação para cada centro, e o jogador é associado ao cluster com a menor distância.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
