# 🖥️ Gestão de Hardware - Full Stack

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange)

Sistema para controle de inventário de hardware, conectando uma interface React a uma API Node.js com persistência em MongoDB via Prisma.

> Status: **em desenvolvimento**  
> Novas features e melhorias de qualidade estao sendo implementadas continuamente.

## Visao geral

Este projeto permite cadastrar e visualizar componentes de hardware, com filtro por categoria e busca por nome.

Estrutura atual do repositorio:

```txt
gestao-hardware
|-- backend/
|-- frontend/
```

## Stack utilizada

### Backend
- Node.js
- Express
- Prisma
- MongoDB
- dotenv

### Frontend
- React
- Vite
- Axios
- styled-components

## Funcionalidades atuais

- Cadastro de hardware
- Listagem de hardwares
- Busca por nome
- Filtro por categoria
- Interface organizada em componentes

## Proximas melhorias (roadmap)

- [ ] Edicao de hardware no frontend
- [ ] Exclusão de hardware no frontend
- [ ] Melhor tratamento de erros para usuário
- [ ] Validações mais robustas no backend
- [ ] Testes automatizados
- [ ] Deploy completo (frontend + backend)

## Como rodar localmente

### 1) Clone o projeto

```bash
git clone https://github.com/gabrieltomazi/gestao-hardware.git
cd gestao-hardware
```

### 2) Configure o backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` dentro de `backend/` com as variaveis necessarias, por exemplo:

```env
DATABASE_URL="sua_string_de_conexao"
PORT=3001
```

Depois execute:

```bash
npm run dev
```

Backend esperado em: `http://localhost:3001`

### 3) Configure o frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend esperado em: `http://localhost:5173`

## Scripts uteis

### Backend (`backend/package.json`)
- `npm run dev` - inicia servidor em modo watch

### Frontend (`frontend/package.json`)
- `npm run dev` - inicia ambiente de desenvolvimento

## Objetivo de portfolio

Este repositório faz parte da minha evolução como desenvolvedor iniciante, com foco em:

- Integração entre API REST e interface React
- Organização de código em componentes e camadas
- Boas práticas progressivas de desenvolvimento

Feedbacks e sugestões são bem-vindos.
