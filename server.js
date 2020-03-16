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
    if(req.body.msg != undefined){
        var msg = req.body.msg
        var index = msg.indexOf('=')
        console.log(msg);
        if(msg.indexOf('=') == -1){
            fs.readFile("./reponses.json", (err, data) => {
                if(data != undefined){
                    if(data.length == 0){
                        res.send("Je ne connais pas " + msg + ".");
                    } else {
                        if (err) throw err;
                            let demain = JSON.parse(data);
                            if(demain.demain !== undefined){
                                res.send("demain: " + demain.demain)
                            }
                    }
                } else {
                    res.send("Je ne connais pas " + msg + ".");
                }
            });
        } else {
            let key = msg.substring(0, index)
            let value = msg.substring(index+1, msg.length)
            let content = {
                demain: value
            }
            fs.writeFile("./reponses.json",JSON.stringify(content), error => {
                if(error){
                    console.error(error);
                }
                res.send("Merci pour cette information.")
            })
        }
    }  });

app.listen(3000, function(){
    console.log('port 3000')
})