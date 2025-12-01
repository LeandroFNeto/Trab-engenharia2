const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON
app.use(express.json());

// ========================================================
// 1. O SITE (FRONTEND) EMBUTIDO
// (O HTML está aqui dentro para garantir que o Render encontre)
// ========================================================
const SITE_HTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciador de Tarefas</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #f0f2f5; display: flex; justify-content: center; padding: 20px; }
        .app { background: white; width: 100%; max-width: 500px; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        h1 { text-align: center; color: #333; margin-bottom: 20px; }
        
        .form-group { display: flex; gap: 10px; margin-bottom: 25px; }
        input { flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 6px; outline: none; }
        button#btn-add { background: #007bff; color: white; border: none; padding: 0 20px; border-radius: 6px; cursor: pointer; font-weight: bold; }
        button#btn-add:hover { background: #0056b3; }

        ul { list-style: none; padding: 0; }
        li { background: #fff; border-bottom: 1px solid #eee; padding: 15px 0; display: flex; justify-content: space-between; align-items: center; }
        .task-info { display: flex; flex-direction: column; }
        .task-title { font-weight: 600; font-size: 1.1em; }
        .task-desc { font-size: 0.85em; color: #666; margin-top: 4px; }
        
        .btn-delete { background: #fee2e2; color: #dc2626; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
        .btn-delete:hover { background: #fecaca; }
        
        .loading { text-align: center; color: #888; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="app">
        <h1>✅ Minhas Tarefas (Ao Vivo)</h1>
        
        <div class="form-group">
            <input type="text" id="titulo" placeholder="O que vamos fazer hoje?">
            <button id="btn-add" onclick="criarTarefa()">Adicionar</button>
        </div>

        <ul id="lista">
            <li class="loading">Carregando tarefas...</li>
        </ul>
    </div>

    <script>
        const API_URL = '/tarefas';

        // Carregar tarefas
        async function carregar() {
            const lista = document.getElementById('lista');
            try {
                const res = await fetch(API_URL);
                const json = await res.json();
                
                if(json.dados.length === 0) {
                    lista.innerHTML = '<li style="justify-content:center; color:#888">Nenhuma tarefa encontrada.</li>';
                    return;
                }

                // Gera o HTML da lista
                lista.innerHTML = json.dados.map(t => \`
                    <li>
                        <div class="task-info">
                            <span class="task-title">\${t.titulo}</span>
                            <span class="task-desc">\${t.descricao || 'Sem descrição'}</span>
                        </div>
                        <button class="btn-delete" onclick="deletar(\${t.id})">Excluir</button>
                    </li>
                \`).join('');
            } catch (error) {
                lista.innerHTML = '<li style="color:red; justify-content:center">Erro ao conectar na API.</li>';
            }
        }

        // Criar tarefa
        async function criarTarefa() {
            const input = document.getElementById('titulo');
            if(!input.value) return alert('Digite um título!');
            
            const btn = document.getElementById('btn-add');
            btn.innerText = '...';
            btn.disabled = true;

            await fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ titulo: input.value, descricao: 'Criado pelo Site' })
            });

            input.value = '';
            btn.innerText = 'Adicionar';
            btn.disabled = false;
            carregar();
        }

        // Deletar tarefa
        async function deletar(id) {
            if(confirm('Apagar esta tarefa?')) {
                await fetch(API_URL + '/' + id, { method: 'DELETE' });
                carregar();
            }
        }

        carregar();
    </script>
</body>
</html>
`;

// ========================================================
// 2. DADOS EM MEMÓRIA (BACKEND)
// ========================================================
let tarefas = [
  { id: 1, titulo: 'Apresentar Trabalho', descricao: 'Engenharia de Software II', concluida: false },
  { id: 2, titulo: 'Testar API no Render', descricao: 'Funciona com Frontend embutido!', concluida: true }
];
let proximoId = 3;

// ========================================================
// 3. ROTAS (API + SITE)
// ========================================================

// ROTA RAIZ: Entrega o Site HTML acima
app.get('/', (req, res) => {
    res.send(SITE_HTML);
});

// GET /tarefas
app.get('/tarefas', (req, res) => {
    res.json({ sucesso: true, dados: tarefas });
});

// POST /tarefas
app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;
    if (!titulo) return res.status(400).json({ erro: 'Titulo obrigatorio' });
    
    const nova = { 
        id: proximoId++, 
        titulo, 
        descricao: req.body.descricao || '', 
        concluida: false 
    };
    tarefas.push(nova);
    res.status(201).json({ sucesso: true, dados: nova });
});

// PUT /tarefas/:id
app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = tarefas.find(t => t.id === id);
    if (!item) return res.status(404).json({ erro: 'Nao encontrado' });
    
    if (req.body.titulo) item.titulo = req.body.titulo;
    if (req.body.descricao) item.descricao = req.body.descricao;
    
    res.json({ sucesso: true, dados: item });
});

// DELETE /tarefas/:id
app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const inicial = tarefas.length;
    tarefas = tarefas.filter(t => t.id !== id);
    
    if (tarefas.length === inicial) {
        return res.status(404).json({ erro: 'Nao encontrado' });
    }
    res.json({ sucesso: true });
});

// ========================================================
// 4. INICIALIZAÇÃO (0.0.0.0 é essencial pro Render)
// ========================================================
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});