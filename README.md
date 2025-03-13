🎮 Classificação de Gamers - Frontend (React, Vite, TypeScript)

Este é o frontend da aplicação de classificação de gamers, que utiliza técnicas de Machine Learning para categorizar jogadores com base em seus atributos. O projeto permite visualizar e interagir com modelos de aprendizado supervisionado e não supervisionado, tornando o processo de categorização claro e acessível.

🚀 Tecnologias Utilizadas
React + Vite ⚡
TypeScript 📜
Chart.js 📊 (para visualização dos dados)
Axios 🔄 (para consumir a API Flask)
TailwindCSS 🎨 (para estilização)
🧠 Métodos de Machine Learning Implementados
📌 Aprendizado Não Supervisionado (K-Means Clustering)
O algoritmo K-Means agrupa jogadores automaticamente em 5 categorias, sem que os rótulos sejam definidos previamente. Ele analisa os atributos dos jogadores e os organiza em clusters semelhantes, permitindo uma identificação automática de perfis de jogo.

🎯 Aprendizado Supervisionado (Regressão Linear)
Utilizando regressão linear, o sistema prevê a categoria de um novo jogador com base em seus atributos. Esse método aprende com os dados previamente rotulados e gera um modelo de previsão.

🔗 Como Funciona?
1️⃣ O usuário insere seus atributos de jogo (habilidade, tempo de jogo, etc.).
2️⃣ O sistema pode prever sua categoria usando regressão linear.
3️⃣ Também é possível visualizar os grupos de jogadores gerados pelo K-Means.
4️⃣ Os resultados são exibidos com gráficos interativos e estatísticas.

🌐 Backend
Este frontend se conecta a uma API Flask que processa os dados e realiza os cálculos de Machine Learning. O backend pode ser encontrado aqui: [link para o repositório do backend].

📌 Deploy
Este frontend está hospedado na Vercel para fácil acesso e visualização.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> e1a076f (Primeiro commit do frontend)
