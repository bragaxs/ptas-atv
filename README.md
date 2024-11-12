Sistema Node.js com Express
Este é um sistema básico em Node.js que utiliza o framework Express.js para criar rotas e middlewares. Inclui uma pesquisa sobre middleware e um exemplo de aplicação.

Pesquisa sobre Middleware
Middleware é um software intermediário que gerencia, manipula ou modifica requisições e respostas em um sistema. Em Node.js, middlewares são funções que executam algum tipo de operação antes de entregar uma resposta ao cliente. Alguns tipos comuns:

Autenticação: Valida o acesso a rotas específicas.
Logging: Registra informações sobre cada requisição.
Tratamento de Erros: Manipula erros centralmente.

const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
