const http = require('http');

var delay = process.env.DELAY || 100

const requestListener = function (req, res) {
  setTimeout(function(res) {
    res.setHeader('Cache-Control', 'public, max-age=300')
    res.writeHead(200);
    res.end('Hello, World! (Response delayed by '+delay+'ms)\n');
  },delay, res);
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
