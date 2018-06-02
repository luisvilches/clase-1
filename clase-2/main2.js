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
        // creamos la etiqueta span que contendra el boton de eliminar
        let del = document.createElement('span');
        // creamos la etiqueta span que contendra el texto
        let text = document.createElement('span');
        // creamos el boton de eliminar
        let btn = document.createElement('button');
        // le asignamos un valor
        text.innerHTML = item;
        btn.innerHTML = "x";
        btn.classList.add('btn-delete');

        btn.addEventListener('click', function(){
            tareas.splice(tareas.indexOf(item),1);
            renderList();
        })
        li.appendChild(btn);
        li.appendChild(text);
        // insertamos la etiqueta en el DOM
        lista.appendChild(li);
    });
}


button.addEventListener('click', function(){
    addTarea(input.value);
})


renderList();
