const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get('/home', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/calculadora', function(req, res){
    res.sendFile(__dirname + '/calculadora.html');
    });

    app.post('/formulario_calculadora', function(req, res){
        let operacion = req.body.dato1;
        let a = parseInt(req.body.dato2);
        let b = parseInt(req.body.dato3);
        
        if (operacion === "suma"){
            let suma = a + b;
            console.log("El resultado es " + suma);
        } else if (operacion === "resta") {
            let resta = a - b;
            console.log("El resultado es " + resta);
        } else if (operacion === "multiplicacion") {
            let multiplicacion = a * b;
            console.log("El resultado es " + multiplicacion);
        } else if (operacion === "division") {
            let division = a / b;
            console.log("El resultado es " + division);
        } 
        
    });
    

    app.listen(4000,function(){
        console.log("servidor listo y preparado en el puerto 4000");
    });