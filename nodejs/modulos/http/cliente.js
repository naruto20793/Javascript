const http = require('http');

// Faz uma requisição GET para o servidor local na porta 8080
http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
  let data = '';

  // Recebe os dados em pedaços
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Quando todos os dados forem recebidos, exibe a resposta no console
  res.on('end', () => {
    console.log(data);
  });

}).on('error', (err) => {
  console.error('Erro: ' + err.message);
});