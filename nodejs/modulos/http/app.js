// Importa o módulo 'http' do Node.js para criar um servidor web
const http = require('http');

// Cria um servidor HTTP
http.createServer((req, res) => {
  // Define o status da resposta como 200 (OK) e o tipo de conteúdo como texto simples
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Envia a resposta 'Hello World!' para o cliente e finaliza a conexão
  res.end('Hello World!');
// O servidor escuta na porta 8080
}).listen(8080);
console.log('Servidor rodando em http://localhost:8080/');  