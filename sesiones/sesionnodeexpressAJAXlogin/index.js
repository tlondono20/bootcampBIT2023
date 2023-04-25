//paquetes
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var datos_nombres = [];
var datos_emails = [];
var datos_pass = [];

//configuraciones
//para manejar los datos ordenadamente que provienes del cliente con una peticion
app.use(bodyParser.urlencoded({ extended: true }));

//configuraciones para manejar archivos estaticos(css, imagenes , js)
app.use("/css", express.static('css'))
app.use("/js", express.static('js'))
//rutas



app.get('/inicio', function (req, res) {
    res.sendFile(__dirname + '/index.html');
}); 

app.get('/registrarse', function (req, res) {
    res.sendFile(__dirname + '/registro.html');
});

//formulario de registro
app.post("/form_registro", function (req, res) {
    /*let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;*/

    //destructuring es lo mimsmo que llamar a cada una de las variables 
    let { nombre, email, password } = req.body;

    datos_nombres.push(nombre);
    datos_emails.push(email);
    datos_pass.push(password);

    console.log("--------------");
    console.log(datos_nombres);
    console.log(datos_emails);
    console.log(datos_pass);
    console.log("--------------");

    res.send("hola" + nombre + ",gracias por registrarte!");

});

//ruta login.html
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.post("/form_login", function (req, res){
let { email, password} = req.body;
let existe_usuario = false;
let i = 0;
let mensaje = "email o password incorrecta";



//recorrer los 3 arrays y verificar si existen los datos 

while(existe_usuario == false && i < datos_emails.length){
if (datos_emails[i] == email && datos_pass[i]== password){
    existe_usuario = true;
    mensaje = "Bienvenido" + datos_nombres[i];
}
i++;
}

console.log("------------");
console.log("Email:" + email);
console.log("password:" + password);
console.log(mensaje);

console.log("------------");

res.send(mensaje);
//res.sendFile(
//existe_usuario == true
//?__dirname + "/status_ok.html"
//:__dirname + "/status_error.html"
//);
});   
//puerto
app.listen(3000, function () {
    console.log
        ("servidor funcionando correctamente");
});