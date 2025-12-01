# API de Tarefas + Frontend

## 🔗 Demo Online
🚀 **Acesse o projeto rodando ao vivo:** 👉 [https://trab-engenharia2-2.onrender.com/](https://trab-engenharia2-2.onrender.com/)

---

## Descrição do Projeto

Esta é uma **API de gerenciamento de tarefas** desenvolvida em **Node.js** com **Express.js**, criada como parte da Etapa 01 do seminário de Engenharia de Software II. 

Diferente de uma API comum, este projeto **inclui uma interface gráfica (Frontend) embutida**, permitindo que o usuário interaja com as tarefas visualmente sem precisar de ferramentas externas como Postman ou cURL.

### Funcionalidades

O sistema oferece as seguintes funcionalidades, acessíveis tanto via API quanto pela Interface Web:

1.  **Interface Visual (Frontend):**
    * Visualizar tarefas em tempo real.
    * Adicionar novas tarefas.
    * **[NOVO] Editar tarefas existentes** (Título e Descrição).
    * Excluir tarefas.

2.  **API (Endpoints):**
    * `GET /tarefas`: Listar todas as tarefas.
    * `POST /tarefas`: Criar uma nova tarefa.
    * `PUT /tarefas/:id`: Atualizar uma tarefa existente.
    * `DELETE /tarefas/:id`: Deletar uma tarefa.

---

## Tecnologias Utilizadas

* **Node.js** - Runtime JavaScript para servidor.
* **Express.js** - Framework web minimalista.
* **HTML/CSS/JS Puro** - Utilizado no Frontend embutido no arquivo da API.
* **Render** - Plataforma de hospedagem (Deploy).

---

## Estrutura de Arquivos

```text
api-tarefas/
├── api.js                    # Arquivo ÚNICO (Backend + Frontend embutido)
├── package.json              # Configuração e dependências
├── DOCUMENTACAO_API.md       # Documentação técnica dos endpoints
├── README.md                 # Este arquivo
└── .gitignore                # Arquivos ignorados pelo Git
