const net = require('net');
const port = 14740;

const configObj = {
  port: port,
  host: '4.tcp.ngrok.io'
};

const client = net.createConnection(configObj);

client.on('connect',function(){
  console.log('client is connected to server.');
});

client.on('data', function(message){ // this is how we receive
  console.log(`Server says: ${message}`);
});

process.stdin.on('data', function(message){ // this is how we send
  client.write(message);
});

client.on('end', function(){
  console.log('client is disconnected from the server.');
});

