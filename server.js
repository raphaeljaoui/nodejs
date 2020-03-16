const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hello world!')
})
// app.get("/hello", function(req,res){
//     res.send('Quel est votre nom ?')
// })

app.get("/hello", function(req,res){
    if(req.query.nom == null){
        res.send('Quel est votre nom ?')
    }
    res.send('Bonjour, '+ req.query.nom+' !')
})

app.post('/', function (req, res) {
    res.send('Got a POST request');
  });

app.listen(3000, function(){
    console.log('port 3000')
})