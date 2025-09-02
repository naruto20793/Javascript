// Importa o módulo 'fs' do Node.js para manipulação de arquivos
const fs = require('fs');

// Lê o conteúdo do arquivo 'example.txt' de forma assíncrona
fs.readFile('example.txt', 'utf8', (err, data) => {
  // Se ocorrer um erro na leitura, exibe a mensagem de erro no console
  if (err) {
    console.error('Erro ao ler o arquivo', err);
    return;
  }
  // Se não houver erro, exibe o conteúdo do arquivo no console
  console.log('Conteúdo do arquivo:', data);
});

// Esta mensagem aparece antes da leitura do arquivo, pois readFile é assíncrono
console.log('Esta mensagem aparece primeiro.');