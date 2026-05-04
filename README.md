# 🚀 Testes de Performance com K6 - Banco API

## 📌 Introdução

Este repositório contém testes de performance desenvolvidos com
**JavaScript** utilizando o **K6**, com o objetivo de validar a
estabilidade, desempenho e capacidade da API de um sistema bancário.

Os testes simulam cenários reais de uso, como autenticação e
transferências, permitindo identificar gargalos, medir tempo de resposta
e garantir que a aplicação suporte cargas elevadas.

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   **JavaScript (ES6+)**
-   **K6** -- ferramenta de teste de carga e performance
-   **Node.js** (suporte auxiliar para scripts/utilitários, se
    necessário)

------------------------------------------------------------------------

## 📂 Estrutura do Repositório

    .
    ├── tests/
    ├── helpers/
    ├── fixtures/
    ├── utils/
    ├── config/
    └── README.md

------------------------------------------------------------------------

## 📖 Objetivo de Cada Grupo de Arquivos

### 🔹 `tests/`

Contém os scripts principais de teste do K6.

### 🔹 `helpers/`

Funções reutilizáveis como autenticação e utilidades.

### 🔹 `fixtures/`

Dados utilizados nos testes.

### 🔹 `config`

Arquivo de configuracao

### 🔹 `utils`

Funcoes utilitarias reutilizaveis

------------------------------------------------------------------------

## ⚙️ Modo de Instalação

``` bash
git clone https://github.com/roob3x/banco-api-perfomance.git
cd banco-api-perfomance
```

Instale o K6 conforme seu sistema operacional.

------------------------------------------------------------------------

## ▶️ Modo de Execução

### Variável obrigatória

``` json
{
    "baseUrl":  "http://localhost:3000"
}
```

### Executar teste

``` bash
k6 run tests/nome-do-teste.js -e BASE_URL=http://localhost:3000
```

### Dashboard em tempo real

``` bash
K6_WEB_DASHBOARD=true \
k6 run tests/nome-do-teste.js \
-e BASE_URL=http://localhost:3000
```

### Exportar relatório HTML

``` bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run tests/nome-do-teste.js \
-e BASE_URL=http://localhost:3000 \
```

------------------------------------------------------------------------

## 🎯 Objetivo do Projeto

-   Validar performance da API
-   Identificar gargalos
-   Garantir escalabilidade
