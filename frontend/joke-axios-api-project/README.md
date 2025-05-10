# Joke App

This is a simple **Joke Management App** built with **React.js**, **Context API**, `useReducer`, and **JSON Server API** for CRUD operations.

## 🔧 Features

- View all jokes
- Add new jokes
- Edit existing jokes
- Delete jokes
- View single joke detail

---

## 📦 Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/dixit-wd/joke-app.git
cd joke-app
```

---

## 🔙 Backend Setup using JSON Server

### Step 1: Install `json-server`

```bash
npm install -g json-server
```

> If you want to install locally (recommended):

```bash
npm install json-server
```

### Step 2: Create a `db.json` file in `/backend` folder

Example content:
```json
{
  "jokes": [
    {
      "id": 1,
      "title": "Why did the scarecrow win an award?",
      "punchline": "Because he was outstanding in his field!"
    }
  ]
}
```

### Step 3: Start JSON Server

```bash
npx json-server --watch backend/db.json --port 3000
```

> Make sure your API base URL in the code is: `http://localhost:3000`

---

## 💻 Frontend Setup (React)

### Step 1: Go to frontend folder

```bash
cd frontend/joke-axios-api-project
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Start React App

```bash
npm run dev
```

---

## 🗂 Folder Structure

```
frontend/
│
├── src/
│   ├── api/                # Axios API calls
│   ├── components/         # UI and Form components
│   ├── context/            # JokesContext with useReducer
│   ├── pages/              # Home & Jokes pages
│   ├── layout/             # RootLayout with Outlet
│   ├── App.jsx             # Main app router setup
│   └── main.jsx            # React root
│
├── public/
├── index.html
└── vite.config.js
```

---

## 📚 Tech Stack

- React.js (with Vite)
- Context API + useReducer
- React Router DOM
- JSON Server (Fake REST API)
- Tailwind CSS (optional)

---

## ✅ Usage

1. Start JSON server: `npx json-server --watch backend/db.json --port 3000`
2. Start frontend: `npm run dev` inside `frontend/joke-axios-api-project`
3. Visit app at: `http://localhost:5173`

---

## ✍️ Author

Created by Dixit Deshani



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.