# dashboard-goandreact
# **Dashboard App**

Este é um projeto de monitoramento de produtos utilizando um **backend em Go** e um **frontend em React**. Ele fornece um dashboard para visualizar informações como produtos mais vendidos, mais populares e produtos esgotados.

---

## **Estrutura do Projeto**

```plaintext
dashboard-goadnreact/
│
├── backend/         # Backend em Go
│   ├── main.go      # Arquivo principal para rodar o servidor
│   ├── handlers/    # Handlers para rotas
│   └── ...
│
├── frontend/        # Frontend em React com Vite
│   ├── src/         # Código fonte React
│   ├── index.html   # HTML principal do Vite
│   └── ...
│
└── README.md        # Documentação do projeto
```

---

## **Pré-requisitos**

Antes de começar, certifique-se de que você possui os seguintes itens instalados:

- [Go](https://golang.org/) (versão 1.20 ou superior)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [PNPM](https://pnpm.io/) (recomendado para gerenciar pacotes do frontend)

---

## **Como Rodar o Projeto**

Siga os passos abaixo para configurar e executar o projeto localmente.

### **1. Clone o Repositório**

```bash
git clone [https://github.com/seu-usuario/dashboard-goandreact.git](https://github.com/MthdeSouza/dashboard-goandreact.git)
cd dashboard-goandreact
```

---

### **2. Rodando o Backend**

1. Navegue para o diretório do backend:
   ```bash
   cd dashboard-backend
   ```

2. Instale as dependências (caso necessário):
   ```bash
   go mod tidy
   ```

3. Inicie o servidor backend:
   ```bash
   go run main.go
   ```

4. O servidor estará disponível em:
   ```
   http://localhost:8080
   ```

---

### **3. Rodando o Frontend**

1. Abra um novo terminal e navegue para o diretório do frontend:
   ```bash
   cd dashboard-frontend
   ```

2. Instale as dependências do projeto:
   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento do frontend:
   ```bash
   npm run dev
   ```

4. O frontend estará disponível em:
   ```
   http://localhost:5173
   ```

---

### **4. Testando a Integração**

- Certifique-se de que o **backend** e o **frontend** estão rodando.
- Acesse o dashboard via navegador em `http://localhost:5173`.
- O frontend consumirá os dados do backend para exibir o dashboard.

---

## **Endpoints do Backend**

| Método | Endpoint                    | Descrição                              |
|--------|-----------------------------|----------------------------------------|
| GET    | `/products`                 | Retorna a lista de produtos            |
| GET    | `/products/popular`         | Retorna os produtos mais populares     |
| GET    | `/products/out-of-stock`    | Retorna os produtos esgotados          |

---

## **Tecnologias Utilizadas**

### **Backend**
- Linguagem: [Go](https://golang.org/)
- Framework: [Gin](https://gin-gonic.com/)
- Middleware de CORS: [gin-contrib/cors](https://github.com/gin-contrib/cors)

### **Frontend**
- Build Tool: [Vite](https://vitejs.dev/)
- Biblioteca: [React](https://reactjs.org/)
- UI Library: [Radix UI](https://www.radix-ui.com/)

---


