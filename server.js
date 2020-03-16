const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hello world!')
})
app.get('/hello', function(req,res){
    res.send('bonjour')
})


app.listen(3000, function(){
    console.log('port 3000')
})