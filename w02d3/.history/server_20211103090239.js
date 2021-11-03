const net = require('net');
const port = 8009;

const server = net.createServer(); // factory function

const connectClients = [];

const broadcast = function(message, from){
  for (let destination of connectClients){
    if (destination !== from) {
      destination.write(message);
    }
  }
};

server.on('connection', function(client){

  console.log('a new client has connected');
  connectClients.push(client);

  client.write("Welcome to my awesome ⛵ server!");

  client.on('data', function (message){
    console.log(`Message received from client: ${message}`);
    broadcast(message,client);
  });

});

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});

// ⛵