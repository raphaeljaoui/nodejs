const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hello world!')
})

app.get("/hello", function(req,res){
    if(req.query.nom == null){
        res.send('Quel est votre nom ?')
    }
    res.send('Bonjour, '+ req.query.nom+' !')
})

app.get('/chat', function (req, res) {
    res.send('Je ne connais pas demain…');
  });
app.post('/chat', function (req, res) {
    res.send(req.body.app);
  });

app.listen(3000, function(){
    console.log('port 3000')
})