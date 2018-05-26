// se llama al input
var input = document.getElementById('box');
// se llama a la lista
var lista = document.getElementById('lista');
// se llama al boton
var button = document.getElementById('add');
// se creal el aray tareas
var tareas = []; 
// se crea la funcion que agrega las tareas al array
function addTarea(tarea){
    tareas.push(tarea);
    renderList();
}
// se crea la funcion que renderiza la lista de tareas
function renderList(){
    // seteamos la lista del html
    lista.innerHTML = '';
    // recorremos el array 
    tareas.forEach(function(item,i){
        // creamos la etiqueta <li></li>
        let li = document.createElement('li');
        // le asignamos un valor
        li.innerHTML = item;
        // insertamos la etiqueta en el DOM
        lista.appendChild(li);
    });
}


button.addEventListener('click', function(){
    addTarea(input.value);
})


renderList();
