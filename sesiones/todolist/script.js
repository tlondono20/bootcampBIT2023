var nuevatareainput = document.getElementById('nueva-tarea');
var agregartareabtn = document.getElementById('agregar-tarea-boton');
var listatarea = document.getElementById('lista-tarea');
var tareas = [];
var tarea1;
//agregar tarea a la lista 
function agregartarea() {
     tarea1 = nuevatareainput.value;
    if (tarea1 === '') {
        alert('ingrese una tarea');
        return;                           
    }

    tareas = JSON.parse(localStorage.getItem('tareasl')) || [];
    
    tareas.push(tarea1);

    //guardar la tarea 
    localStorage.setItem('tareasl',JSON.stringify(tareas));

    //agregar a la listahtml
    var tareahtml = `
<li class="tarea-item">
  
  <span>${tarea1}</span>
</li>
`;
    //agrega
    listatarea.innerHTML += tareahtml;
    //limpia
    nuevatareainput.value = " ";
}

//mostar las tareas guardadas 
function mostrartareas() {
    tareas = JSON.parse(localStorage.getItem('tareasl')) || [];
    for (var i = 0; i < tareas.length; i++) {
        var tarea = tareas[i];
        var tareahtml = '<li class="tarea-item">' + '<span>' + tarea + '</span></li>';
        listatarea.innerHTML += tareahtml;
    }
};

agregartareabtn.addEventListener('click', agregartarea);

mostrartareas();