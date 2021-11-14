const express = require('express');
const app = express();
const server = require('http').createServer(app);
const webSocket = require('ws');
const wss = new webSocket.Server({server:server});
const cors = require('cors');
const path = require('path');
var mqtt = require('mqtt');



wss.on('connection', function connection(ws){
console.log('A new client is connected');
ws.send('Welcome new client');

ws.on('message',function income(message){
console.log('recieved %s',message);
ws.send ('Got your message, it is:'+ message);
 });

});


app.get('/', (req, res) => res.send ('Hello World'))
/*

var topic ='test'
var topic_1 = 'test1'
var message_1 = 'Hello World nodejs'

var client = mqtt.connect('mqtt://165.22.226.54',{

username:'Rahi@4197',
password: 'Rahi@4197'

});



client.subscribe(topic)

  
  app.get("/get-data", (req, res)=>{
    client.on('message', (topic, payload) => {
 
      console.log('Received Message:', topic, payload.toString())
      res.send(payload);
      })
    
  })

  server.on('connection', (stream) => {
    console.log('someone connected!');
  });



client.on('connect', () => {
setInterval(()=>{

  client.publish(topic_1, message_1);
  console.log('Message sent!', message_1)
}, 5000)

});




/*app.get ('/api/data',(req,res) =>{

  client.on('message', (topic, payload) => {
 
  console.log('Received Message:', topic, payload.toString())

  res.json (payload.toString())
  })
});*/
const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));



