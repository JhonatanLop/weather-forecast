# Weather Forecast App 🌤️

Este projeto é uma aplicação web de previsão meteorológica que permite aos usuários consultar as previsões do tempo para qualquer cidade utilizando um mapa de apoio. A aplicação foi desenvolvida utilizando TypeScript e a biblioteca OpenLayers para o mapa.

## Funcionalidades

- Pesquisa de Cidade: Os usuários podem pesquisar por uma cidade e obter informações detalhadas sobre o clima atual.
- Mapa Interativo: O mapa exibe a localização da cidade pesquisada e atualiza dinamicamente conforme novas pesquisas são realizadas.
- Informações do Clima: Mostra a temperatura atual, temperatura máxima e mínima, tipo do clima, probabilidade de chuva, fase da lua e ícones correspondentes.
- Cidades Salvas: Os usuários podem acessar rapidamente as cidades pesquisadas anteriormente através de um menu de seleção.

## Tecnologias Utilizadas

- TypeScript
- React
- OpenLayers: Para o mapa.
- OpenWeather Geocoding API: Para obter as coordenadas geográficas das cidades.
- OpenWeather Current weather data: Para obter os dados climáticos.
> As APIs utilizadas para esse projeto são gratúitas e infelizmente não possuem dados relacionados às fases da lua ou uma previsão de até 3 dias do clima da região selecionada

## Estrutura do projeto

```
weather-forecast/
│
├── public/
│   ├── index.html
│
├── src/
│   ├── components/
│   │   ├── CitySearch.tsx
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

## Instalação e Uso
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
```

3. Configure suas chaves de API:
No arquivo `api.ts` coloque a sua chave de acesso
```typescript
const WEATHER_API_KEY = "YOUR_API_KEY";
```

4.Inicie a aplicação:
```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Documentação das APIs

OpenWeather Geocoding API: [Documentação](https://openweathermap.org/api/geocoding-api)

OpenWeather Current weather data: [Documentação](https://openweathermap.org/current)