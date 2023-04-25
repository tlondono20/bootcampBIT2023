$(document).ready(function(){

  
     
    //evento click del boton
     $('#btn_enviar').click(function(){
        //obtengo el valor que el usuario ingreso en el input
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

     //evento del submit del formulario de registro
     $("#form").submit(function(e){
      e.preventDefault();//impido que realize la accion predeterminada 
      
      //capturar los datos ingresados en el formulario
      let datos = $("#form").serialize();//convierte en json todos los datos ingresados

      //AJAX
      $.ajax({
      url: '/form_registro',
      method: 'post',
      data: datos,
      success: function(resp){
       $('#mensajeRegistro').text(resp).show;
       
      },

     });


     });

     //evento para enviar datos del formulario del login
     $("#formulario2").submit(function(e){
        e.preventDefault();

        let datos = $("#formulario2").serialize();

        $.ajax({
            url: '/form_login',
            method: 'post',
            data: datos,
            success: function(resp){
              alert(resp);
            },
      
           });

     });

 });