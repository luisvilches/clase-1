// creamos la funcion que creara un nuevo objeto producto
function nuevoProducto(nombre,descripcion,imagen,precio){
    // creamos propiedades y metodos del producto
    var producto = {
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        precio: precio
    }
    // agregamos el nuevo producto
    addProduct(producto);
}

// creamos la funcion que rendirazara nuestros productos
function renderView(arr){
    // llamamos al contendor
    var ul = document.getElementById('productosList');
    // limpiamos la vista
    ul.innerHTML = '';
    // hacemos el forEach del array de productos
    arr.forEach((item,index) => {
        // creamos los elemntos necesarios
        var li = document.createElement('li');
        var col1 = document.createElement('span');
        var col2 = document.createElement('span');
        var titulo = document.createElement('h4');
        var descripcion = document.createElement('p');
        var precio = document.createElement('strong');
        var imagen = document.createElement('img');
        // seteamos los atributos de los elementos html
        titulo.innerText = item.nombre;
        descripcion.innerText = item.descripcion;
        precio.innerText = '$ ' + item.precio;
        imagen.src = item.imagen;
        // insertamos los elementos en el DOM
        col1.appendChild(imagen);
        col2.appendChild(titulo);
        col2.appendChild(descripcion);
        col2.appendChild(precio);
        li.appendChild(col1);
        li.appendChild(col2);
        ul.appendChild(li);
    });
}

// creamos la funcion que guarda los datos en el localStorage
function setStorage(arr){
    window.localStorage.setItem('productos',JSON.stringify(arr));
}
// creamos la funcion que trae los datos del localStorage
function getStorage(){
    return JSON.parse(window.localStorage.getItem('productos'));
}
// creamos la funcion que guarda el producto en el localStorage
function addProduct(producto){
    var nuevoArrayProductos = getStorage();
    console.log(nuevoArrayProductos)
    nuevoArrayProductos.push(producto);
    setStorage(nuevoArrayProductos);
}   

// funcion que verifica si el localStorage tiene productos
// si no tiene crea un array vacio
function validStorage(){
    if(getStorage() == null){
        setStorage([]);
        return getStorage();
    } else {
        return getStorage();
    }
}