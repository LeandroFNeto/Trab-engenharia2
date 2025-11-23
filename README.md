# Trab-engenharia2

Documentação da API de Tarefas
Visão Geral
A API de Tarefas é uma aplicação simples desenvolvida em Node.js com Express.js que permite gerenciar uma lista de tarefas através de operações CRUD (Create, Read, Update, Delete). Uma API foi projetada para ser leve, fácil de usar e sem dependências complexas.

Versão: 1.0.0
Linguagem: Node.js
Framework: Express.js
Formato de resposta: JSON

Requisitos de Instalação
Pré-requisitos
Você precisa ter instalado em seu computador:

Node.js (versão 14.0.0 ou superior) - Baixe aqui
npm (gerenciador de pacotes do Node.js, já vem com Node.js)
Verificar Instalação
Para verificar se o Node.js e npm estão instalados corretamente, execute os seguintes comandos no terminal:

node --version
npm --version
Você deve ver os números da versão como resposta (ex: v18.0.0 para Node.js).

Instalação e Execução Local
Passo 1: Clonar ou Baixar o Projeto
Se o projeto estiver no GitHub, clone-o:

git clone https://github.com/seu-usuario/api-tarefas.git
cd api-tarefas
Ou, se você recebeu os arquivos diretamente, extraia-os em uma pasta de sua escolha e abra o terminal nessa pasta.

Passo 2: Instalar Dependências
Execute o comando abaixo para instalar as dependências do projeto:

npm install
Este comando lerá o arquivo package.jsone instalará o Express.js automaticamente.

Passo 3: Iniciar uma API
Para iniciar o servidor da API, execute:

npm start
Você verá uma mensagem no terminal inferior que a API está rodando:

✓ API de Tarefas iniciada com sucesso!
✓ Servidor rodando em: http://localhost:3000
✓ Documentação disponível em: http://localhost:3000/documentacao

Endpoints disponíveis:
  GET    /tarefas       - Listar todas as tarefas
  POST   /tarefas       - Criar uma nova tarefa
  PUT    /tarefas/:id   - Atualizar uma tarefa
  DELETE /tarefas/:id   - Deletar uma tarefa
A API estará acessível em http://localhost:3000.

Pontos finais da API
1. GET /tarefas - Listar todas as tarefas
Descrição: Retorna uma lista de todas as tarefas cadastradas no sistema.

Método HTTP: GET

URL: http://localhost:3000/tarefas

Parâmetros: Nenhum

Exemplo de Requisição:

curl -X GET http://localhost:3000/tarefas
Resposta Esperada (Status 200 - OK):

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
Descrição dos Campos:

Campo	Tipo	Descrição
sucesso	Booleano	Indica se a operação foi bem-sucedida
mensagem	Corda	Mensagem descritiva da operação
total	Número inteiro	Número total de tarefas retornadas
dados	Variedade	Lista de tarefas com seus detalhes
2. POST /tarefas - Criar uma Nova Tarefa
Descrição: Crie uma nova tarefa no sistema.

Método HTTP: POST

URL: http://localhost:3000/tarefas

Parâmetros do Corpo (Body):

Parâmetro	Tipo	Obrigatório	Descrição
titulo	Corda	Sim	Título da tarefa (não pode estar vazio)
descricao	Corda	Não	Descrição detalhada da tarefa
Exemplo de Requisição:

curl -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Aprender Express.js",
    "descricao": "Estudar os conceitos básicos do Express"
  }'
Resposta Esperada (Status 201 - Criado):

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
Resposta de Erro (Status 400 - Solicitação incorreta):

Se o título não for fornecido:

{
  "sucesso": false,
  "mensagem": "Erro: O título da tarefa é obrigatório"
}
3. PUT /tarefas/:id - Atualizar uma Tarefa
Descrição: Atualiza os dados de uma tarefa existente.

Método HTTP: PUT

URL: http://localhost:3000/tarefas/:id

Parâmetros da URL:

Parâmetro	Tipo	Descrição
id	Número inteiro	ID da tarefa a ser atualizada
Parâmetros do Corpo (Body):

Parâmetro	Tipo	Obrigatório	Descrição
titulo	Corda	Não	Novo título da tarefa
descricao	Corda	Não	Nova descrição da tarefa
concluida	Booleano	Não	Status de conclusão da tarefa (verdadeiro/falso)
Exemplo de Requisição:

curl -X PUT http://localhost:3000/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Estudar Node.js Avançado",
    "concluida": true
  }'
Resposta Esperada (Status 200 - OK):

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
Resposta de Erro (Status 404 - Não Encontrado):

Se a tarefa com o ID fornecido não existir:

{
  "sucesso": false,
  "mensagem": "Erro: Tarefa com ID 999 não encontrada"
}
4. DELETE /tarefas/:id - Excluir uma Tarefa
Descrição: Remova uma tarefa do sistema.

Método HTTP: DELETE

URL: http://localhost:3000/tarefas/:id

Parâmetros da URL:

Parâmetro	Tipo	Descrição
id	Número inteiro	ID da tarefa a ser deletada
Exemplo de Requisição:

curl -X DELETE http://localhost:3000/tarefas/1
Resposta Esperada (Status 200 - OK):

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
Resposta de Erro (Status 404 - Não Encontrado):

Se a tarefa com o ID fornecido não existir:

{
  "sucesso": false,
  "mensagem": "Erro: Tarefa com ID 999 não encontrada"
}
Códigos de Status HTTP
A API utiliza os seguintes códigos de status HTTP para indicar o resultado das operações:

Código	Significado	Descrição
200	OK	Operação realizada com sucesso
201	Criado	Recurso criado com sucesso
400	Pedido ruim	Erro na requisição (dados inválidos)
404	Não encontrado	Recurso não encontrado
500	Erro do Servidor Interno	Erro no servidor
Testando uma API
Opção 1: Usando cURL (Terminal)
O cURL é uma ferramenta de linha de comando para fazer requisições HTTP. Exemplos já foram fornecidos acima para cada endpoint.

bolsa 2: Usando o carteiro
Postman é uma ferramenta gráfica para testar APIs. Siga os passos:

Baixe e instale o Postman
Abra o carteiro
Crie uma nova requisição clicando em "Novo" → "Solicitar"
Selecione o método HTTP (GET, POST, PUT, DELETE)
Cole uma URL da API (ex: http://localhost:3000/tarefas)
Para POST e PUT, vá em "Body" → "raw" → "JSON" e cole o JSON
Clique em "Enviar" para fazer uma requisição
Opção 3: usando JavaScript/Fetch API
Se você quiser testar a API a partir de um arquivo HTML ou JavaScript:

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
Estrutura do Projeto
api-tarefas/
├── api.js                 # Arquivo principal da API
├── package.json           # Dependências do projeto
├── DOCUMENTACAO_API.md    # Este arquivo
└── README.md              # Instruções gerais
Tratamento de gado
Uma API fornece mensagens de erro claras e códigos de status HTTP protegidos para facilitar o diagnóstico de problemas:

Título vazio ao criar tarefa: Retorna 400 Bad Requestcom mensagem de erro
Tarefa não encontrada: Retorna 404 Not Foundcom mensagem de erro
Rota não encontrada: Retorno 404 Not Foundcom mensagem genérica
Notas Importantes
Dados em Memória: Os dados das tarefas são armazenados em memória (variável JavaScript). Quando o servidor é reiniciado, todos os dados são perdidos. Para uma aplicação em produção, seria necessário usar um banco de dados real (MongoDB, PostgreSQL, etc.).

Sem Autenticação: A API atual não possui autenticação ou autorização. Qualquer pessoa com acesso à URL pode usar uma API.

CORS: Uma API não está configurada com CORS. Se você quiser acessar um domínio diferente, será necessário adicionar a configuração do CORS.

Validação Simples: A validação de dados é básica. Para uma aplicação em produção, seria recomendado usar bibliotecas como joiou yuppara validação mais robusta.

bem e Dúvidas
Se tiver dúvidas ou encontrar problemas ao usar uma API, verifique:

Se o Node.js está instalado corretamente
Se as dependências foram instaladas comnpm install
Se o servidor está rodando comnpm start
Se você estiver usando a URL correta ( http://localhost:3000 )
Se o método HTTP está correto (GET, POST, PUT, DELETE)
Versão
Versão Atual: 1.0.0
Data de Criação: Novembro de 2025
Última Atualização: Novembro de 2025
