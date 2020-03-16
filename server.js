const express = require('express')
const myApp = express()

myApp.get('/', function(req,res){
    res.send('Hello world!')
})
myApp.get('/hello', function(req,res){
    if(req.query.country == '' || req.query.country == undefined){
           res.send('Which country?')
       }
       else
       res.send('Bonjour, '+ req.query.country+'!')
   })

myApp.listen(3000, function(){
    console.log('port 3000')
})