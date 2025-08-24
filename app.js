// app.js
const createError = require("http-errors");
const express = require("express");
const path = require("path");

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");

const app = express();

// Configuração da view engine
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

// Middlewares de segurança e utilitários

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Arquivos estáticos (CSS, JS, imagens, etc)
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Tratamento de erro 404
app.use((req, res, next) => {
  next(createError(404));
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  // Definir informações de erro disponíveis só no ambiente de desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Renderizar página de erro
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
