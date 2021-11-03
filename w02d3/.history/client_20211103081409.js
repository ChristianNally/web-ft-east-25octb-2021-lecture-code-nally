const net = require('net');
const port = 8009;

const configObj = {
  port: port,
  host: 'localhost'
};

const client = net.createConnection();