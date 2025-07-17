# Testes de Performance com K6 e JavaScript

Este repositório contém scripts de teste de performance desenvolvidos com o K6, focados em cenários de carga e estresse para a API do projeto **Banco API**.

> 📁 Repositório oficial: [banco-api-performance](https://github.com/rafaelzanella17/banco-api-performance)

---

## 🧪 Introdução

O objetivo deste projeto é validar a performance da API através de testes automatizados, avaliando **tempo de resposta**, **resiliência** sob carga e **comportamento em situações de pico**. O K6 foi escolhido por sua eficiência, suporte a JavaScript e interface amigável para análise de resultados em tempo real.

---

## ⚙️ Tecnologias Utilizadas

- [K6](https://k6.io/) — Ferramenta de testes de carga open-source.
- JavaScript (ES6) — Linguagem usada para os scripts de teste.
- Variáveis de ambiente — Utilizadas para facilitar a parametrização dos testes.

---

## 📁 Estrutura do Repositório

```bash
banco-api-performance/
├── config/
│   └── config.local.json
├── fixtures/
│   └── postLogin.json
├── helpers/
│   └── autenticacao.js
├── tests/
│   ├── login.test.js
│   ├── transferencias.test.js
├── utils/
│   └── variaveis.js
```

---

## 📂 Objetivo de Cada Grupo de Arquivos

- **config/**: Contém a baseUrl do projeto.
- **fixtures/**: Contém arquivo do usuário e senha.
- **helpers/**: Contém uma função que obtém o token de autenticação.
- **tests/**: Contém os arquivos principais de testes de performance, organizados por funcionalidade da API.
- **utils/**: Funções utilitárias que ajudam a organizar e reutilizar código entre os testes.


---

## 🚀 Instalação e Execução

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [K6](https://k6.io/docs/getting-started/installation/) instalado globalmente

### 2. Clonar o repositório

```bash
git clone https://github.com/rafaelzanella17/banco-api-performance.git
cd banco-api-performance
```

### 3. Configurar variável de ambiente

Altere o arquivo `config/config.local.json` e defina a `BASE_URL` a ser testada.


### 4. Executar os testes

#### Execução padrão

```bash
k6 run tests/login.test.js
```

#### Execução com dashboard web em tempo real

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

> 📝 O relatório em tempo real será acessível via browser enquanto o teste estiver rodando. O resultado final será exportado como `html-report.html`.

---


## 🧑‍💻 Autor

[Rafael Zanella](https://github.com/rafaelzanella17) — Analista de Testes | QA
