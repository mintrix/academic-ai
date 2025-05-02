from flask import Flask, request, jsonify  # importa o Flask e funções para receber e responder dados em JSON
import db_controller # Funções para manipular o banco de dados


app = Flask(__name__) # Cria uma instância do Flask


@app.route('/notas', methods=['POST']) # Rota para adicionar notas, com o método POST e chamando a função adicionar_nota
def adicionar_nota():
    data = request.get_json() # Guarda os dados que vem do front-end no formato JSON, na variável data
    if 'aluno' not in data or 'valor' not in data:  # Verifica se os campos 'aluno' e 'valor' estão presentes nos dados recebidos
        return jsonify({'erro': 'Campos obrigatórios faltando'}), 400
    try:
        db_controller.salvar_nota(data['aluno'], data['valor']) # Chama a função salvar_nota do db_controller, passando os dados recebidos
        return jsonify({'mensagem': 'Nota adicionada com sucesso!'})
    except Exception:
        return jsonify({'erro': 'Erro interno ao salvar nota'}), 500

@app.route('/feedbacks', methods=['POST']) # Rota para adicionar feedbacks, com o método POST e chamando a função adicionar_feedback
def adicionar_feedback():
    data = request.get_json() # Guarda os dados que vem do front-end no formato JSON, na variável data
    if 'aluno' not in data or 'texto' not in data: # Verifica se os campos 'aluno' e 'texto' estão presentes nos dados recebidos
        return jsonify({'erro': 'Campos obrigatórios faltando'}), 400 
    try:
        db_controller.salvar_feedback(data['aluno'], data['texto']) # Chama a função salvar_feedback do db_controller, passando os dados recebidos
        return jsonify({'mensagem': 'Feedback adicionado com sucesso!'})
    except Exception:
        return jsonify({'erro': 'Erro interno ao salvar feedback'}), 500
    
@app.route('/metas', methods=['POST']) # Rota para adicionar metas, com o método POST e chamando a função adicionar_meta
def adicionar_meta():
    data = request.get_json() # Guarda os dados que vem do front-end no formato JSON, na variável data
    if 'aluno' not in data or 'descricao' not in data: # Verifica se os campos 'aluno' e 'meta' estão presentes nos dados recebidos
        return jsonify({'erro': 'Campos obrigatórios faltando'}), 400
    try:
        db_controller.salvar_meta(data['aluno'], data['descricao']) # Chama a função salvar_meta do db_controller, passando os dados recebidos
        return jsonify({'mensagem': 'Meta adicionada com sucesso!'})
    except Exception:
        return jsonify({'erro': 'Erro interno ao salvar meta'}), 500
    

if __name__ == '__main__': # Verifica se o arquivo está sendo executado diretamente
    app.run(debug=True) # Inicia o servidor Flask em modo de depuração (debug), permitindo ver os erros e alterações em tempo real    
    
    
