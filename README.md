# Documentação da API de Tarefas

## Visão Geral

A **API de Tarefas** é uma aplicação simples desenvolvida em **Node.js** com **Express.js** que permite gerenciar uma lista de tarefas através de operações CRUD (Create, Read, Update, Delete). A API foi projetada para ser leve, fácil de usar e sem dependências complexas.

**Versão:** 1.0.0  
**Linguagem:** Node.js  
**Framework:** Express.js  
**Formato de Resposta:** JSON

---

## Requisitos de Instalação

### Pré-requisitos

Você precisa ter instalado em seu computador:

- **Node.js** (versão 14.0.0 ou superior) - [Baixar aqui](https://nodejs.org/)
- **npm** (gerenciador de pacotes do Node.js, já vem com Node.js)

### Verificar Instalação

Para verificar se o Node.js e npm estão instalados corretamente, execute os seguintes comandos no terminal:

```bash
node --version
npm --version
```

Você deve ver números de versão como resposta (ex: v18.0.0 para Node.js).

---

## Instalação e Execução Local

### Passo 1: Clonar ou Baixar o Projeto

Se o projeto estiver no GitHub, clone-o:

```bash
git clone https://github.com/seu-usuario/api-tarefas.git
cd api-tarefas
```

Ou, se você recebeu os arquivos diretamente, extraia-os em uma pasta de sua escolha e abra o terminal nessa pasta.

### Passo 2: Instalar Dependências

Execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
```

Este comando lerá o arquivo `package.json` e instalará o Express.js automaticamente.

### Passo 3: Iniciar a API

Para iniciar o servidor da API, execute:

```bash
npm start
```

Você verá uma mensagem no terminal indicando que a API está rodando:

```
✓ API de Tarefas iniciada com sucesso!
✓ Servidor rodando em: http://localhost:3000
✓ Documentação disponível em: http://localhost:3000/documentacao

Endpoints disponíveis:
  GET    /tarefas       - Listar todas as tarefas
  POST   /tarefas       - Criar uma nova tarefa
  PUT    /tarefas/:id   - Atualizar uma tarefa
  DELETE /tarefas/:id   - Deletar uma tarefa
```

A API estará acessível em `http://localhost:3000`.

---

## Endpoints da API

### 1. GET /tarefas - Listar Todas as Tarefas

**Descrição:** Retorna uma lista de todas as tarefas cadastradas no sistema.

**Método HTTP:** `GET`

**URL:** `http://localhost:3000/tarefas`

**Parâmetros:** Nenhum

**Exemplo de Requisição:**

```bash
curl -X GET http://localhost:3000/tarefas
```

**Resposta Esperada (Status 200 - OK):**

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
    },
    {
      "id": 2,
      "titulo": "Fazer exercícios",
      "descricao": "Resolver 5 exercícios de programação",
      "concluida": false
    },
    {
      "id": 3,
      "titulo": "Revisar conteúdo",
      "descricao": "Revisar aulas anteriores",
      "concluida": true
    }
  ]
}
```

**Descrição dos Campos:**

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `sucesso` | Boolean | Indica se a operação foi bem-sucedida |
| `mensagem` | String | Mensagem descritiva da operação |
| `total` | Integer | Número total de tarefas retornadas |
| `dados` | Array | Lista de tarefas com seus detalhes |

---

### 2. POST /tarefas - Criar uma Nova Tarefa

**Descrição:** Cria uma nova tarefa no sistema.

**Método HTTP:** `POST`

**URL:** `http://localhost:3000/tarefas`

**Parâmetros do Corpo (Body):**

| Parâmetro | Tipo | Obrigatório | Descrição |
| :--- | :--- | :--- | :--- |
| `titulo` | String | Sim | Título da tarefa (não pode estar vazio) |
| `descricao` | String | Não | Descrição detalhada da tarefa |

**Exemplo de Requisição:**

```bash
curl -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Aprender Express.js",
    "descricao": "Estudar os conceitos básicos do Express"
  }'
```

**Resposta Esperada (Status 201 - Created):**

```json
{
  "sucesso": true,
  "mensagem": "Tarefa criada com sucesso",
  "dados": {
    "id": 4,
    "titulo": "Aprender Express.js",
    "descricao": "Estudar os conceitos básicos do Express",
    "concluida": false,
    "dataCriacao": "2025-11-20T10:30:45.123Z"
  }
}
```

**Resposta de Erro (Status 400 - Bad Request):**

Se o título não for fornecido:

```json
{
  "sucesso": false,
  "mensagem": "Erro: O título da tarefa é obrigatório"
}
```

---

### 3. PUT /tarefas/:id - Atualizar uma Tarefa

**Descrição:** Atualiza os dados de uma tarefa existente.

**Método HTTP:** `PUT`

**URL:** `http://localhost:3000/tarefas/:id`

**Parâmetros da URL:**

| Parâmetro | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | Integer | ID da tarefa a ser atualizada |

**Parâmetros do Corpo (Body):**

| Parâmetro | Tipo | Obrigatório | Descrição |
| :--- | :--- | :--- | :--- |
| `titulo` | String | Não | Novo título da tarefa |
| `descricao` | String | Não | Nova descrição da tarefa |
| `concluida` | Boolean | Não | Status de conclusão da tarefa (true/false) |

**Exemplo de Requisição:**

```bash
curl -X PUT http://localhost:3000/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Estudar Node.js Avançado",
    "concluida": true
  }'
```

**Resposta Esperada (Status 200 - OK):**

```json
{
  "sucesso": true,
  "mensagem": "Tarefa atualizada com sucesso",
  "dados": {
    "id": 1,
    "titulo": "Estudar Node.js Avançado",
    "descricao": "Aprender o básico de Node.js",
    "concluida": true
  }
}
```

**Resposta de Erro (Status 404 - Not Found):**

Se a tarefa com o ID fornecido não existir:

```json
{
  "sucesso": false,
  "mensagem": "Erro: Tarefa com ID 999 não encontrada"
}
```

---

### 4. DELETE /tarefas/:id - Deletar uma Tarefa

**Descrição:** Remove uma tarefa do sistema.

**Método HTTP:** `DELETE`

**URL:** `http://localhost:3000/tarefas/:id`

**Parâmetros da URL:**

| Parâmetro | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | Integer | ID da tarefa a ser deletada |

**Exemplo de Requisição:**

```bash
curl -X DELETE http://localhost:3000/tarefas/1
```

**Resposta Esperada (Status 200 - OK):**

```json
{
  "sucesso": true,
  "mensagem": "Tarefa deletada com sucesso",
  "dados": {
    "id": 1,
    "titulo": "Estudar Node.js",
    "descricao": "Aprender o básico de Node.js",
    "concluida": false
  }
}
```

**Resposta de Erro (Status 404 - Not Found):**

Se a tarefa com o ID fornecido não existir:

```json
{
  "sucesso": false,
  "mensagem": "Erro: Tarefa com ID 999 não encontrada"
}
```

---

## Códigos de Status HTTP

A API utiliza os seguintes códigos de status HTTP para indicar o resultado das operações:

| Código | Significado | Descrição |
| :--- | :--- | :--- |
| `200` | OK | Operação realizada com sucesso |
| `201` | Created | Recurso criado com sucesso |
| `400` | Bad Request | Erro na requisição (dados inválidos) |
| `404` | Not Found | Recurso não encontrado |
| `500` | Internal Server Error | Erro no servidor |

---

## Testando a API

### Opção 1: Usando cURL (Terminal)

O **cURL** é uma ferramenta de linha de comando para fazer requisições HTTP. Exemplos já foram fornecidos acima para cada endpoint.

### Opção 2: Usando Postman

**Postman** é uma ferramenta gráfica para testar APIs. Siga os passos:

1. Baixe e instale o [Postman](https://www.postman.com/downloads/)
2. Abra o Postman
3. Crie uma nova requisição clicando em "New" → "Request"
4. Selecione o método HTTP (GET, POST, PUT, DELETE)
5. Cole a URL da API (ex: `http://localhost:3000/tarefas`)
6. Para POST e PUT, vá em "Body" → "raw" → "JSON" e cole o JSON
7. Clique em "Send" para fazer a requisição

### Opção 3: Usando JavaScript/Fetch API

Se você quiser testar a API a partir de um arquivo HTML ou JavaScript:

```javascript
// GET - Listar tarefas
fetch('http://localhost:3000/tarefas')
  .then(response => response.json())
  .then(data => console.log(data));

// POST - Criar tarefa
fetch('http://localhost:3000/tarefas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    titulo: 'Nova Tarefa',
    descricao: 'Descrição da tarefa'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

// PUT - Atualizar tarefa
fetch('http://localhost:3000/tarefas/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    titulo: 'Tarefa Atualizada',
    concluida: true
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

// DELETE - Deletar tarefa
fetch('http://localhost:3000/tarefas/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## Estrutura do Projeto

```
api-tarefas/
├── api.js                 # Arquivo principal da API
├── package.json           # Dependências do projeto
├── DOCUMENTACAO_API.md    # Este arquivo
└── README.md              # Instruções gerais
```

---

## Tratamento de Erros

A API fornece mensagens de erro claras e códigos de status HTTP apropriados para facilitar o diagnóstico de problemas:

- **Título vazio ao criar tarefa:** Retorna `400 Bad Request` com mensagem de erro
- **Tarefa não encontrada:** Retorna `404 Not Found` com mensagem de erro
- **Rota não encontrada:** Retorna `404 Not Found` com mensagem genérica

---

## Notas Importantes

1. **Dados em Memória:** Os dados das tarefas são armazenados em memória (variável JavaScript). Quando o servidor é reiniciado, todos os dados são perdidos. Para uma aplicação em produção, seria necessário usar um banco de dados real (MongoDB, PostgreSQL, etc.).

2. **Sem Autenticação:** A API atual não possui autenticação ou autorização. Qualquer pessoa com acesso à URL pode usar a API.

3. **CORS:** A API não está configurada com CORS. Se você quiser acessá-la de um domínio diferente, será necessário adicionar configuração de CORS.

4. **Validação Simples:** A validação de dados é básica. Para uma aplicação em produção, seria recomendado usar bibliotecas como `joi` ou `yup` para validação mais robusta.

---

## Suporte e Dúvidas

Se tiver dúvidas ou encontrar problemas ao usar a API, verifique:

1. Se o Node.js está instalado corretamente
2. Se as dependências foram instaladas com `npm install`
3. Se o servidor está rodando com `npm start`
4. Se você está usando a URL correta (http://localhost:3000)
5. Se o método HTTP está correto (GET, POST, PUT, DELETE)

---

## Versão

**Versão Atual:** 1.0.0  
**Data de Criação:** Novembro de 2025  
**Última Atualização:** Novembro de 2025
