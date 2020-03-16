const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hello world!')
})

app.get("/hello", function(req,res){
    if(req.query.nom == '' || req.querry.nom == undefined){
        res.send('Quel est votre nom ?')
    }
    res.send('Bonjour, '+ req.query.nom+' !')
})

app.post('/chat', function (req, res) {
    if(req.body.msg == 'ville')
        res.send('Nous sommes à Paris.');
    if(req.body.msg == 'meteo')
        res.send('Il fait beau.')
  });

app.listen(3000, function(){
    console.log('port 3000')
})