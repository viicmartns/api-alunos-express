const express = require("express");
const app = express();
const PORT = 3000;

// "Banco" simulado: uma lista em memória (nome, telefone e rg)
const alunos = [
  { id: 1, nome: "Ana Souza", telefone: "(88) 99911-1111", rg: "2001001-CE" },
  { id: 2, nome: "Carlos Lima", telefone: "(88) 99922-2222", rg: "2002002-CE" },
  { id: 3, nome: "Beatriz Alves", telefone: "(88) 99933-3333", rg: "2003003-CE" },
];

// GET / -> rota raiz
app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "API da Escola Fictícia. Use /alunos" });
});

// GET /alunos -> lista todos os alunos (200 + JSON)
app.get("/alunos", (req, res) => {
  res.status(200).json(alunos);
});

// Qualquer outra rota (ex.: /aluno) -> 404 + JSON
app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});