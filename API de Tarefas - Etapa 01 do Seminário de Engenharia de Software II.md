# API de Tarefas - Etapa 01 do Seminário de Engenharia de Software II

## Descrição do Projeto

Esta é uma **API simples de gerenciamento de tarefas** desenvolvida em **Node.js** com **Express.js**, criada como parte da Etapa 01 do seminário de Engenharia de Software II. A API fornece 4 métodos (endpoints) para realizar operações CRUD (Create, Read, Update, Delete) em uma lista de tarefas.

### Funcionalidades

A API oferece as seguintes funcionalidades através de 4 métodos principais:

1. **GET /tarefas** - Listar todas as tarefas cadastradas
2. **POST /tarefas** - Criar uma nova tarefa
3. **PUT /tarefas/:id** - Atualizar uma tarefa existente
4. **DELETE /tarefas/:id** - Deletar uma tarefa

---

## Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript para servidor
- **Express.js** - Framework web minimalista para Node.js
- **JSON** - Formato de troca de dados

---

## Estrutura de Arquivos

```
api-tarefas/
├── api.js                    # Arquivo principal com toda a lógica da API
├── package.json              # Arquivo de configuração com dependências
├── DOCUMENTACAO_API.md       # Documentação completa da API
├── README.md                 # Este arquivo
└── .gitignore               # Arquivo para ignorar pastas no Git
```

---

## Instalação Local

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** versão 14.0.0 ou superior
- **npm** (gerenciador de pacotes, já vem com Node.js)

### Passos para Instalar

1. **Clone o repositório** (ou extraia os arquivos):

```bash
git clone https://github.com/seu-usuario/api-tarefas.git
cd api-tarefas
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Inicie o servidor**:

```bash
npm start
```

4. **Acesse a API**:

A API estará disponível em `http://localhost:3000`

---

## Como Usar a API

### Teste Rápido no Terminal

Para testar se a API está funcionando, abra um novo terminal e execute:

```bash
curl http://localhost:3000/tarefas
```

Você deve receber uma resposta JSON com a lista de tarefas.

### Exemplos de Requisições

#### 1. Listar todas as tarefas

```bash
curl -X GET http://localhost:3000/tarefas
```

#### 2. Criar uma nova tarefa

```bash
curl -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Minha Tarefa","descricao":"Descrição da tarefa"}'
```

#### 3. Atualizar uma tarefa

```bash
curl -X PUT http://localhost:3000/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Tarefa Atualizada","concluida":true}'
```

#### 4. Deletar uma tarefa

```bash
curl -X DELETE http://localhost:3000/tarefas/1
```

### Usando Postman

1. Baixe o [Postman](https://www.postman.com/downloads/)
2. Crie uma nova requisição
3. Selecione o método HTTP (GET, POST, PUT, DELETE)
4. Cole a URL: `http://localhost:3000/tarefas`
5. Para POST e PUT, adicione o JSON no corpo (Body)
6. Clique em "Send"

---

## Publicação no GitHub

### Passo 1: Criar um Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no ícone **+** no canto superior direito
3. Selecione **New repository**
4. Preencha os dados:
   - **Repository name:** `api-tarefas`
   - **Description:** API simples de gerenciamento de tarefas
   - **Public** (para que seja acessível)
5. Clique em **Create repository**

### Passo 2: Preparar o Repositório Local

Na pasta do projeto, execute:

```bash
git init
git add .
git commit -m "Commit inicial: API de Tarefas"
```

### Passo 3: Conectar ao GitHub

Copie o comando que o GitHub fornece (algo como):

```bash
git branch -M main
git remote add origin https://github.com/seu-usuario/api-tarefas.git
git push -u origin main
```

### Passo 4: Verificar no GitHub

Acesse seu repositório no GitHub e verifique se os arquivos foram enviados corretamente.

---

## Publicação em Servidor (Opcional)

### Opção 1: Usar Servidor UENP (Recomendado)

Se deseja hospedar a API no servidor da UENP:

1. **Envie um email** para o professor: **thiago.coleti@uenp.edu.br**
2. **Assunto:** Solicitação de Hospedagem - API de Tarefas
3. **Conteúdo do Email:**

```
Prezado Professor Thiago,

Solicitamos a hospedagem da API de Tarefas no servidor da UENP para realização da Etapa 02 do seminário de Engenharia de Software II.

Repositório GitHub: https://github.com/seu-usuario/api-tarefas

Atenciosamente,
[Seu Nome e Seu Colega]
```

### Opção 2: Usar Heroku (Gratuito)

1. Crie uma conta em [Heroku.com](https://www.heroku.com)
2. Instale o Heroku CLI
3. Execute os comandos:

```bash
heroku login
heroku create seu-app-name
git push heroku main
```

4. Sua API estará disponível em: `https://seu-app-name.herokuapp.com`

### Opção 3: Usar Render (Gratuito)

1. Crie uma conta em [Render.com](https://render.com)
2. Conecte seu repositório GitHub
3. Crie um novo "Web Service"
4. Configure e faça o deploy

---

## Estrutura da Resposta da API

Todas as respostas da API seguem este padrão JSON:

```json
{
  "sucesso": true,
  "mensagem": "Descrição da operação",
  "dados": { /* dados retornados */ }
}
```

### Exemplo de Resposta de Sucesso

```json
{
  "sucesso": true,
  "mensagem": "Tarefas recuperadas com sucesso",
  "total": 3,
  "dados": [
    {
      "id": 1,
      "titulo": "Estudar Node.js",
      "descricao": "Aprender o básico de Node.js",
      "concluida": false
    }
  ]
}
```

### Exemplo de Resposta de Erro

```json
{
  "sucesso": false,
  "mensagem": "Erro: O título da tarefa é obrigatório"
}
```

---

## Documentação Completa

Para documentação detalhada de cada endpoint, incluindo parâmetros, respostas e exemplos, consulte o arquivo **DOCUMENTACAO_API.md**.

---

## Testes Automatizados (Opcional)

Se desejar adicionar testes automatizados, você pode usar a biblioteca **Jest**:

```bash
npm install --save-dev jest
```

Depois, crie um arquivo `api.test.js` com testes para cada endpoint.

---

## Possíveis Melhorias Futuras

1. **Banco de Dados:** Integrar com MongoDB ou PostgreSQL para persistência de dados
2. **Autenticação:** Adicionar autenticação com JWT
3. **Validação:** Usar bibliotecas como `joi` ou `yup` para validação robusta
4. **CORS:** Configurar CORS para aceitar requisições de diferentes domínios
5. **Testes:** Adicionar testes automatizados com Jest ou Mocha
6. **Documentação Interativa:** Usar Swagger para documentação interativa

---

## Troubleshooting

### Erro: "npm: command not found"

**Solução:** Node.js não está instalado. Baixe e instale de [nodejs.org](https://nodejs.org)

### Erro: "Port 3000 is already in use"

**Solução:** Outro processo está usando a porta 3000. Você pode:
- Fechar o outro processo
- Usar uma porta diferente: `PORT=3001 npm start`

### Erro: "Cannot find module 'express'"

**Solução:** Execute `npm install` para instalar as dependências

### API não responde

**Solução:**
1. Verifique se o servidor está rodando (`npm start`)
2. Verifique a URL (deve ser `http://localhost:3000`)
3. Verifique se o método HTTP está correto

---

## Autores

**Desenvolvido por:** [Seu Nome] e [Nome do Colega]  
**Disciplina:** Engenharia de Software II  
**Instituição:** UENP  
**Data:** Novembro de 2025

---

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## Contato

Para dúvidas ou sugestões sobre a API, entre em contato com o professor:

**Professor:** Thiago Coleti  
**Email:** thiago.coleti@uenp.edu.br

---

## Checklist para Entrega

Antes de entregar a Etapa 01, certifique-se de que:

- [ ] API criada em um único arquivo (`api.js`)
- [ ] `package.json` configurado corretamente
- [ ] Documentação completa (`DOCUMENTACAO_API.md`)
- [ ] README com instruções (`README.md`)
- [ ] Projeto enviado para GitHub
- [ ] API publicada e acessível
- [ ] Todos os 4 métodos funcionando corretamente
- [ ] Email enviado ao professor (se usar servidor UENP)
- [ ] Arquivos entregues no Classroom

---

**Boa sorte com a entrega!** 🚀
