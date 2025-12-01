const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Dados em memória (simulando um banco de dados simples)
let tarefas = [
  { id: 1, titulo: 'Estudar Node.js', descricao: 'Aprender o básico de Node.js', concluida: false },
  { id: 2, titulo: 'Fazer exercícios', descricao: 'Resolver 5 exercícios de programação', concluida: false },
  { id: 3, titulo: 'Revisar conteúdo', descricao: 'Revisar aulas anteriores', concluida: true }
];

let proximoId = 3;

// ============================================
// MÉTODO 1: GET /tarefas - Listar todas as tarefas
// ============================================
app.get('/tarefas', (req, res) => {
  res.status(200).json({
    sucesso: true,
    mensagem: 'Tarefas recuperadas com sucesso',
    total: tarefas.length,
    dados: tarefas
  });
});

// ============================================
// MÉTODO 2: POST /tarefas - Criar uma nova tarefa
// ============================================
app.post('/tarefas', (req, res) => {
  const { titulo, descricao } = req.body;

  // Validação
  if (!titulo || titulo.trim() === '') {
    return res.status(400).json({
      sucesso: false,
      mensagem: 'Erro: O título da tarefa é obrigatório'
    });
  }

  // Criar nova tarefa
  const novaTarefa = {
    id: proximoId++,
    titulo: titulo.trim(),
    descricao: descricao ? descricao.trim() : '',
    concluida: false,
    dataCriacao: new Date().toISOString()
  };

  tarefas.push(novaTarefa);

  res.status(201).json({
    sucesso: true,
    mensagem: 'Tarefa criada com sucesso',
    dados: novaTarefa
  });
});

// ============================================
// MÉTODO 3: PUT /tarefas/:id - Atualizar uma tarefa
// ============================================
app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, concluida } = req.body;

  // Encontrar a tarefa
  const tarefa = tarefas.find(t => t.id === parseInt(id));

  if (!tarefa) {
    return res.status(404).json({
      sucesso: false,
      mensagem: `Erro: Tarefa com ID ${id} não encontrada`
    });
  }

  // Atualizar campos se fornecidos
  if (titulo !== undefined && titulo.trim() !== '') {
    tarefa.titulo = titulo.trim();
  }
  if (descricao !== undefined) {
    tarefa.descricao = descricao.trim();
  }
  if (concluida !== undefined) {
    tarefa.concluida = concluida;
  }

  res.status(200).json({
    sucesso: true,
    mensagem: 'Tarefa atualizada com sucesso',
    dados: tarefa
  });
});

// ============================================
// MÉTODO 4: DELETE /tarefas/:id - Deletar uma tarefa
// ============================================
app.delete('/tarefas/:id', (req, res) => {
  const { id } = req.params;

  // Encontrar o índice da tarefa
  const indice = tarefas.findIndex(t => t.id === parseInt(id));

  if (indice === -1) {
    return res.status(404).json({
      sucesso: false,
      mensagem: `Erro: Tarefa com ID ${id} não encontrada`
    });
  }

  // Remover a tarefa
  const tarefaRemovida = tarefas.splice(indice, 1);

  res.status(200).json({
    sucesso: true,
    mensagem: 'Tarefa deletada com sucesso',
    dados: tarefaRemovida[0]
  });
});


// ============================================
// TRATAMENTO DE ERROS - Rota não encontrada
// ============================================
app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: 'Rota não encontrada'
  });
});

// ============================================
// INICIAR O SERVIDOR
// ============================================
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✓ API de Tarefas iniciada com sucesso!`);
  console.log(`✓ Servidor rodando em: http://localhost:${PORT}`);
  console.log(`✓ Documentação disponível em: http://localhost:${PORT}/documentacao`);
  console.log(`\nEndpoints disponíveis:`);
  console.log(`  GET    /tarefas       - Listar todas as tarefas`);
  console.log(`  POST   /tarefas       - Criar uma nova tarefa`);
  console.log(`  PUT    /tarefas/:id   - Atualizar uma tarefa`);
  console.log(`  DELETE /tarefas/:id   - Deletar uma tarefa\n`);
});

module.exports = app;
