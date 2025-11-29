# API de Tarefas 

## Descrição do Projeto

Esta é uma **API simples de gerenciamento de tarefas** desenvolvida em **Node.js** com **Express.js**, criada como parte da Etapa 01 do seminário de Engenharia de Software II. A API fornece 4 métodos (endpoints) para realizar operações CRUD (Create, Read, Update, Delete) em uma lista de tarefas.

### Funcionalidades

A API oferece as seguintes funcionalidades através de 4 métodos principais:

1. **GET /tarefas** - Listar todas as tarefas cadastradas
2. **POST /tarefas** - Criar uma nova tarefa
3. **PUT /tarefas/:id** - Atualizar uma tarefa existente
4. **DELETE /tarefas/:id** - Deletar uma tarefa

---

##  Tecnologias Utilizadas

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


---

## Autores

**Desenvolvido por:** [Leandro de freitas Neto] 
**Disciplina:** Engenharia de Software II  
**Instituição:** UENP  


---

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---


