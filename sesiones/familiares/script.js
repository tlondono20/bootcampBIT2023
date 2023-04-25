//obtener lista familiares 
var familiares = JSON.parse(localStorage.getItem('familiares')) || [];

//dar el evento boton agregar 
$('#agregar').click(function() {
    //obtener el nombre 
    var nombre = $('#nombre').val();

//agregar 
familiares.push([nombre]);

//guardar 
localStorage.setItem('familiares', JSON.stringify(familiares));

//limpiar 
$('#nombre').val('');
});

//dar el evento a agregar
$('#mostrar').click(function() {
    $('#lista').empty();

for (var i = 0; i < familiares.length;i++){
    var nombre = familiares[i][0];
    var li = $('<li>').text(nombre );
    $('#lista').append(li);

}
});