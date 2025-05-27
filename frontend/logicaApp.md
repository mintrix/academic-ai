## 🎓 O que o aluno deve fazer ao acessar o sistema:

### 🧑‍🎓 1. Acessar o sistema via navegador:
O aluno entra na interface web (Angular) hospedada localmente ou em um servidor.

### 📝 2. Preencher o formulário com seus dados:
O aluno deve inserir:

Nome: identificação do aluno.

Notas: histórico de desempenho, separadas por vírgula (ex: 7.5,8.0,9.0).

Metas: objetivo acadêmico (ex: "Melhorar em matemática", "Passar em cálculo").

Feedback (opcional): comentário livre sobre sua experiência ou dificuldades.

### 📤 3. Submeter os dados:
Os dados são enviados para o backend (Flask).

O sistema:

Armazena os dados no banco SQLite.

Analisa as notas com regressão linear para prever a próxima.

Usa MLP para recomendar um material de estudo personalizado.

Analisa o feedback com VADER para extrair o sentimento (positivo/negativo).

**📊 4. Receber os resultados:**
Após o envio, o aluno recebe de volta:

**📈 Previsão de próxima nota.**

**📚 Sugestão de estudo baseada nas metas.**

**😊 Análise de sentimento do feedback.**

### 🛠️ O que o administrador pode (ou deve) fazer:

👩‍💼 1. Gerenciar o sistema e supervisionar os dados:
Ter acesso ao banco students.db com os dados armazenados.

Verificar o desempenho geral dos alunos.

Usar os dados para análise estatística ou melhoria pedagógica.

🧠 2. Atualizar o modelo de recomendação:
O modelo MLP é treinado com base nos dados do banco.

Quanto mais dados forem inseridos, melhor será a qualidade da recomendação.

O administrador pode:

Rodar scripts de re-treinamento.

Melhorar as metas e os rótulos associados.

🧪 3. Avaliar o feedback emocional dos alunos:
A análise de sentimentos ajuda a detectar alunos com frustração, ansiedade ou desmotivação.

Pode ser usada para acionar orientação pedagógica ou psicológica.

🔧 4. Manter o sistema:
Atualizar a base de dados (backup, manutenção).

Garantir que os modelos (regressão/MLP) estão operando corretamente.

Atualizar o frontend/backend quando necessário.

### 📌 Conclusão
Papel	Responsabilidade Principal
Aluno	Inserir suas notas, metas e feedback. Receber previsões e sugestões.
Administrador	Supervisionar, manter, treinar modelos e usar dados para apoio pedagógico