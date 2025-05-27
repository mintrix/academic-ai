# 🎓 Sistema de Acompanhamento Acadêmico – Resumo Geral

## 📌 Objetivo
Ajudar alunos e instituições a:

- Armazenar e acompanhar notas.
- Prever o desempenho futuro.
- Receber recomendações personalizadas de estudo.
- Analisar sentimentos de feedback com base em inteligência artificial.

---

## 🧱 Arquitetura do Projeto

### 🖥️ Frontend – Angular
Interface amigável para entrada de dados e visualização de resultados.

Formulários para envio de:

- Nome
- Notas
- Metas
- Feedback

Mostra:

- Nota prevista
- Recomendação de estudo
- Sentimento do feedback



### ⚙️ Backend – Flask (Python)
- API REST que se comunica com o frontend Angular.
- Processa os dados recebidos.
- Interage com a base de dados SQLite.
- Executa modelos de IA para previsão, recomendação e análise de sentimentos.

### 🗃️ Banco de Dados – SQLite
Armazena dados dos alunos:

- Nome
- Notas (string separada por vírgulas)
- Metas
- Feedback

Usado como fonte para treinar os modelos de IA (MLP).

---

## 🤖 Modelos de IA

### 1. Regressão Linear (Scikit-learn)
- **Entrada:** lista de notas
- **Saída:** próxima nota prevista
- Usado para identificar a tendência de desempenho.

### 2. Rede Neural MLP (Scikit-learn)
- **Entrada:** lista de notas
- **Saída:** sugestão de estudo com base na meta
- Aprende com os dados dos alunos cadastrados.

### 3. Análise de Sentimento (VADER)
- **Entrada:** texto de feedback
- **Saída:** score de sentimento (positivo, neutro, negativo e composto)
- Ajuda a entender a percepção emocional dos alunos.

---

## 🔌 Fluxo de Funcionamento

1. O aluno acessa a aplicação Angular via navegador.
2. Preenche um formulário com:
   - Nome
   - Notas
   - Metas acadêmicas
   - Feedback
3. O frontend envia os dados à API Flask.
4. Flask:
   - Armazena os dados no banco.
   - Calcula a previsão de nota via regressão linear.
   - Usa MLP para sugerir recomendações.
   - Usa VADER para analisar o feedback.
5. O resultado é retornado ao Angular e mostrado ao aluno.

---

## 🔍 Endpoints da API Flask

| Método | Rota                | Descrição                                |
|--------|---------------------|------------------------------------------|
| GET    | `/`                 | Página inicial (renderiza o HTML ou redirect) |
| POST   | `/submit`           | Salva os dados do aluno no banco         |
| POST   | `/predict`          | Retorna a próxima nota prevista          |
| POST   | `/recommend`        | Retorna uma recomendação de estudo       |
| POST   | `/analyze_sentiment`| Retorna o sentimento do feedback         |

---

## 📦 Dependências Principais

- **Flask**: servidor backend  
- **SQLite**: banco de dados local  
- **Pandas** e **NumPy**: manipulação de dados  
- **Scikit-learn**: modelos de IA (regressão e MLP)  
- **VADER Sentiment**: análise de sentimento  
- **Angular**: frontend SPA moderno  

---

## 🚀 Como Executar

### 1. Rodar o frontend Angular:

```bash


### 1. Instalar dependências:
```bash
pip install flask pandas numpy scikit-learn vaderSentiment

### 2. Rodar o backend Flask:
python app.py

### 2. Rodar o frontend Angular:
cd frontend
npm install
ng serve 

