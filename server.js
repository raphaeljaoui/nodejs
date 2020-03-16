const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hello world!')
})
app.get("/hello?nom=:id", function(req,res){
    res.send('bonjour '+ req.params.id)
})


app.listen(3000, function(){
    console.log('port 3000')
})