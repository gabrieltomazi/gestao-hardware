
# Gestão de Hardware

Projeto full stack para gestão de inventário de hardware, desenvolvido para portfólio e estudos de integração entre frontend e backend.
=======
# 🖥️ Gestão de Hardware - Full Stack

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange)

Sistema para controle de inventário de hardware, conectando uma interface React a uma API Node.js com persistência em MongoDB via Prisma.


> Status: **em desenvolvimento**  
> Novas features e melhorias de qualidade estao sendo implementadas continuamente.

## Visão geral

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


## Próximas melhorias (roadmap)

- [X] Edição de hardware no frontend
- [X] Exclusão de hardware no frontend
- [ ] Melhor tratamento de erros para usuário
- [ ] Validações mais robustas no backend
- [ ] Deploy completo (frontend + backend)


## Como rodar localmente

### 1) Clone o projeto

```bash
<<<<<<< HEAD
git clone https://github.com/SEU_USUARIO/gestao-hardware.git
=======
git clone https://github.com/gabrieltomazi/gestao-hardware.git
>>>>>>> ab566349b52e5130ffce6e35c440120aa3f83e07
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
<<<<<<< HEAD
- `npm run build` - gera build de producao
- `npm run lint` - executa lint
- `npm run preview` - preview da build

## Objetivo de portfolio

Este repositorio faz parte da minha evolucao como desenvolvedor iniciante, com foco em:

- Integracao entre API REST e interface React
- Organizacao de codigo em componentes e camadas
- Boas praticas progressivas de desenvolvimento

Feedbacks e sugestoes são bem-vindos.
=======

## Objetivo de portfólio

Este repositório faz parte da minha evolução como desenvolvedor iniciante, com foco em:

- Integração entre API REST e interface React
- Organização de código em componentes e camadas
- Boas práticas progressivas de desenvolvimento

Feedbacks e sugestões são bem-vindos.
>>>>>>> ab566349b52e5130ffce6e35c440120aa3f83e07
