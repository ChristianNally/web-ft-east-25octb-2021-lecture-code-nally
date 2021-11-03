const net = require('net');
const port = 8009;

const server = net.createServer(); // factory function

server.on('connection', function(client){

  console.log('a new client has connected.');

});

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});
