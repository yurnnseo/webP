const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    const filename = '../week1/1.html';
    fs.readFile(filename, (err, data) => {
        res.write(data);
        res.end();
    });
});

/*server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<h1>Hi! Welcome ~ </h1>");
    res.end("<h1>Hello World!</h1>");
});*/

/*const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<h1>Hi! Welcome ~ </h1>");
    res.end("<h1>Hello World!</h1>");
});*/

server.listen(500);
