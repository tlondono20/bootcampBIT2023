const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usuarios = [];
app.use(bodyParser.urlencoded({extended:true}));

app.get('/home', function (req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/login', function(req, res){
    res.sendFile(__dirname + '/login.html');
    });

    app.get('/registro', function(req, res){
        res.sendFile(__dirname + '/registro.html');
        });
        
    

    app.post('/formulario_registro', function(req, res){
    let datos = {
        "nombre" : req.body.nombre,
        "email" : req.body.email,
        "password":req.body.password
        
    }
    usuarios.push(datos);
    });


    app.post('/formulario_login', function(req, res){
    let email = req.body.email;
    let password = req.body.password;

    let usuarioEncontrado = false;
    for (let i = 0; i < usuarios.lenght;i++){
        if(usuarios[i].email === email && usuarios[i].password === password){
            usuarioEncontrado = true;
            //el break es para salir del ciclo cuando se encuentra el elemento que cumple la condicion
            break;
        }
    }

    if (usuarioEncontrado){
        res.send ('Bienvenido' + email)
    }else{
        res.send('el usuario no existe ');
    }
    });

        app.listen(5000,function(){
            console.log("servidor listo y preparado en el puerto 5000");
        });