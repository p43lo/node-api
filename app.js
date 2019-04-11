// Requisitamos o módulo http do Node
var http = require('http');

// Executamos o método para criar o servidor
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  // Verificamos a URL
  if (request.url === '/') {
    response.write('<h1>Página inicial</h1>');
  } else if (request.url === '/sobre'){
    response.write('<h1>Sobre</h1>');
  } else {
    response.write('<h1>Página não encontrada :(</h1>');
  }

  response.end();
});

// Iniciamos o servidor criado
server.listen(3000, function() {
  console.log('Servidor rodando!');
});