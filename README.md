# Weather Forecast App 🌤️

Este projeto é uma aplicação web de previsão meteorológica que permite aos usuários consultar as previsões do tempo para qualquer cidade utilizando um mapa de apoio. A aplicação foi desenvolvida utilizando TypeScript e a biblioteca OpenLayers para o mapa.

<ul><a href="#o-projeto"> Sobre o projeto </a></ul>
        <ul><a href="install"> Instalação </a></ul>
        <ul><a href="how-to-use"> Como usar </a></ul>
        <ul><a href="application-breaker"> Testes </a></ul>
        <ul><a href="nerd-thing"> Documentação Técnica </a></ul>

<h2 id="o-projeto"> Funcionalidades </h2>

- Pesquisa de Cidade: Os usuários podem pesquisar por uma cidade e obter informações detalhadas sobre o clima atual.
- Mapa Interativo: O mapa exibe a localização da cidade pesquisada e atualiza dinamicamente conforme novas pesquisas são realizadas.
- Informações do Clima: Mostra a temperatura atual, temperatura máxima e mínima, tipo do clima e ícones correspondentes.
- Cidades Salvas: Os usuários podem acessar rapidamente as cidades pesquisadas anteriormente através de um menu de seleção.

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/download/)
- [React](https://react.dev/)
- [OpenLayers](https://openlayers.org/): Para o mapa.
- [OpenWeather Geocoding API](https://openweathermap.org/api/geocoding-api): Para obter as coordenadas geográficas das cidades.
- [OpenWeather Current weather data](https://openweathermap.org/current): Para obter os dados climáticos.
> As APIs utilizadas para esse projeto são gratúitas e infelizmente não possuem dados relacionados às fases da lua ou uma previsão de até 3 dias do clima da região selecionada como foi solicitado

## Estrutura do projeto

```
cypress
├── e2e/
│   ├── TestandoApp.cy.js
│
weather-forecast/
├── public/
│   ├── index.html
│
├── src/
│   ├── components/
│   │   ├── CitySearch.tsx
│   │   ├── Popup.tsx
│   │   ├── Map.tsx
│   │   ├── WeatherInfo.tsx
│   │   ├── SavedCities.tsx
│   │
│   ├── service/
│   │   ├── api.ts
│   │
│   ├── styles/
│   │   ├── app.css
│   │   ├── global.css
│   │   ├── index.css
│   │
│   ├── App.tsx
│   ├── main.tsx
│
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
```

<h2 id="install"> Instalação </h2>
### Pré-requisitos

- Node.js
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:
```bash
git clone https://github.com/JhontanLop/weather-forecast.git
cd weather-forecast/weather-forecast/
```

2. Instale as dependências:
```bash
npm install
yarn
```

3. Configure suas chaves de API:

Para conseguir uma api key acesse o site da [openWeather](https://openweathermap.org/) e crie uma conta se não tiver.
Depois vá para a parte de [API keys](https://home.openweathermap.org/api_keys) onde estarão listadas todas as suas chaves.

![openWeatherpage](https://github.com/JhonatanLop/weather-forecast/assets/111443621/f00f9371-0cc5-4859-98c1-3d98aa5b5471)

No arquivo `api.ts` coloque a sua chave de acesso
```typescript
const WEATHER_API_KEY = "YOUR_API_KEY";
```

4. Inicie a aplicação:
```bash
npm run dev
yarn dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

<h2 id="how-to-use"></h2>

Tela inicial

![tela_inicial](https://github.com/JhonatanLop/weather-forecast/assets/111443621/acdf50d9-cd16-45c7-b786-fafcfd821aa1)

<p>O sistema faz o uso da API externa a partir do campo de pesquisa com input do tipo string e um botão ao lado para fazer a chamada da função.<br>
Pesquisando pelo nome de uma cidade o primeiro endpoint será usado. Este recebe como parâmetro o nome de uma cidade e retorna algumas informações como latitude e longitude<br>
Esses dados são usados em outro endpoint que retorna os dados do clima naquela regial.
Se a consulta for bem sucedida, o mapa será movido em direção à cidade e as informaçãos sserão reenderizadas na tela e a cidade pesquisada vai para a lista no canto superior da página.</p>

![pesquisa](https://github.com/JhonatanLop/weather-forecast/assets/111443621/4417dfdb-d6cb-4c2e-b711-6bb73a60e52f)

Caso pesquise por uma cidade e a mesma não é encontrada haverá um popup de aviso.

![pesquisa_sem_retorno](https://github.com/JhonatanLop/weather-forecast/assets/111443621/971ad844-060f-4ee5-a3bc-6cf3d70c9c53)

<h2 id="application-breaker"> Testes automatizados </h2>

Para executar os testes automatizados

1. Instalar dependências
```bash
npm i cypress --save-dev
```

2. Executar testes
```bash
npx cypress run
```
Esse comando irá rodar os testes e exibir um relatório pelo terminal.

<details>
  <summary> Usando interface do Cypress </summary>

1. Abrir o cypress

```bash
npx cypress open
```
Este comando irá abrir o cypress, onde executara os testes em tempo real com uma interface para visualização do processo

2. Fazer login

![cypress_home](https://github.com/JhonatanLop/weather-forecast/assets/111443621/da473959-b512-4cfe-8361-f6c26ee25f6f)

3. Escolha o tipo de teste

![tipo_teste](https://github.com/JhonatanLop/weather-forecast/assets/111443621/a09050a6-aabe-4115-94fc-5bae43c271f9)

Para esse projeto usaremos a opção E2E

4. Escolha do ambiente a ser executado

![escolha_ambiente](https://github.com/JhonatanLop/weather-forecast/assets/111443621/c25d11df-26f1-496e-9818-9bd54201a5a9)

No meu caso eu acabei usando o firefox pois é o navegador que eu possuo

5. Escolha o teste

![escolha_test](https://github.com/JhonatanLop/weather-forecast/assets/111443621/1c99bc62-f7ab-44b6-aade-b546f7669407)

Ao escolher o teste, o cypress comecará os testes

 ![test](https://github.com/JhonatanLop/weather-forecast/assets/111443621/ee4f116d-7981-4fa9-90ba-aaa5af506f58)

</details>

<h2 id="nerd-thing"> Documentação técnica </h2>

OpenWeather Geocoding API: [Documentação](https://openweathermap.org/api/geocoding-api)

OpenWeather Current weather data: [Documentação](https://openweathermap.org/current)
