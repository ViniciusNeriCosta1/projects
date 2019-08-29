const http = require('http');

const requisicao= function(request, response){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<h1>exibir no browser</h1>");
    response.end();
}

const server = http.createServer(requisicao);

var resultado = function(){
    console.log("Servidor funcionando")
}

server.listen(3000, resultado);