$(document).ready(function(){

  
     
    //evento click del boton
     $('#btn_enviar').click(function(){
      let valor_input = $('#campo_nombre').val();

      //envio al servidor una peticion por AJAX

      $.ajax({
     //se usa JSON para escribir
     //que URL usar al enviar al servidor
      url: 'http://localhost:3000/ejemplo_ajax',
      //metodo a usar
      method: 'post',
      //que dato usare con la informacion enviada
      data:{nombre: valor_input},
      //que va a realizar cuando todo este ok
      success: function(respuesta){
     //en el parametro ,tenemos la respuesta del servidor
     alert(respuesta);
     $("#lista").append("<li>" + respuesta + "</li>" );
      }
      });
     });
 } );