//aca estamos creando el servidor con puro node sin express

//obtiene el modulo con require que es de node http y lo guarda en la variable del mismo nombre 
const http = require('http');
const fs = require('fs');


//creamos un servidor http que maneje las "peticiones"(request) del cliente,
//y le devuelda una respuesta (res)
//listen(3000) va a escuchar todas las peticiones que se realizan el puerto 3000
http.createServer(function(req,res){
    //aca va todo lo necesario para devlver una respuesta al cliente 

    console.log("gracias ,se comunico con el servidor")

    //preparamos la cabecera de respuesta para decirlo el tipo de archivo 
    res.writeHead(200,{
        'Content-Type': 'text/html',
        'Access-Controll-Allow-Origin': '*'
    });
//tomamos el archivo html con fs es decir al archivo que quiero acceda el cliente con el localhost
    let leerArchivo = fs.createReadStream(__dirname + '/index.html' )
//la respuesta al cliente enviamos al usuario 
    leerArchivo.pipe(res);

    

}).listen(3000,function(){

console.log("servidor listo y  escuchando el puerto 3000");
});
