const express = require('express');
const cors = require('cors');
const path = require('path');
var mqtt = require('mqtt');
const app = express();
const fs = require ('fs');


var topic ='test'
var topic_1 = 'test1'
var message_1 = 'Hello World nodejs'

var client = mqtt.connect('mqtt://165.22.226.54',{

username:'Rahi@4197',
password: 'Rahi@4197'

});



client.subscribe(topic)

  client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString())
  })

  



client.on('connect', () => {
setInterval(()=>{

  client.publish(topic_1, message_1);
  console.log('Message sent!', message_1)
}, 5000)

});


app.get('/',(req, res)=>{
res.sendFile(path.join(__dirname, 'public', 'index.html'));

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));


/*app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'Sive', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});*/

