// servidor creado con express

//cargamos el package express y creamos nuestra app 
const express = require("express");
const app = express();
//body-parser nos ayuda a ordenar el objeto de peticion rquest antes de utilizarlo
//toma los elemetos del <form> y los agrega al body del objeto rquest 
const bodyParser = require("body-parser");

//configurar el body-parser para utilizarlo
//app.us middleware en una aplicación.
// se utiliza para analizar los datos enviados desde un formulario HTML en formato URL codificado y convertirlos en un objeto JavaScript 
//una opción extended con el valor true. Cuando extended está establecido en true, permite analizar datos codificados en una sintaxis de objetos anidados, lo que significa que los valores pueden ser cualquier tipo, en lugar de solo cadenas y matrices. Si se establece en false, solo se permiten cadenas y matrices.es decir que me loenvie en formato JSON y lo pueda usar en el servidor

app.use(bodyParser.urlencoded({extended:true}));

//creamoa la url + metodo 
//cuando el cliente ingresa por la URL con get que esta en el puerto ,la ruta es  la url que en este caso es /home
app.get('/home', function (req, res){
//hago algo dentro de la peticion
console.log("el cliente ingreso por get a http://localhost:3000/home");

//aca esta la respuesta esto se utiliza comúnmente para enviar archivos HTML, CSS, JavaScript, imágenes y otros recursos estáticos al cliente que realizó la solicitud HTTP.
res.sendFile(__dirname + '/index.html');

});
//ruta para get de registro y login
app.get('/registro', function(req, res){
res.sendFile(__dirname + '/registro.html');
});

app.get('/login', function (req, res){
res.sendFile(__dirname+ '/login.html');
});
//ruta para manejar la pesticion post /formulario en el form del login
//aca podemos guardar una base de datos ,enviar un emial y cualquier cosa
app.post('/formulario_login', function(req, res){

    //datos que me envian de otro lado y se aplica body para manipulas todo lo que este en el body
console.log(req.body);
console.log("email: "  + req.body.dato1);
console.log("Contrasena: "  + req.body.dato2);



//res.send("gracias por completar el formulario.nos pondremos en contacto contigo a la brevedad");
});


app.listen(3000,function(){
    console.log("servidor listo y preparado en el puerto 3000");
});
