const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/js", express.static('js'))

app.get('/inicio', function (req, res) {

    res.sendFile(__dirname + '/index.html');
});

//peticion por AJAX
app.post("/ejemplo_ajax", function (req, res){
console.log(req.body);
res.send("hola" + req.body.nombre + ",como estas hoy?");

});

app.listen(3000, function () {
    
    console.log
        ("servidor funcionando correctamente");
});