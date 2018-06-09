function Render(element){
    this.storage = this.validStorageRender();
    this.contenedor = element;
    this.renderview(this.contenedor);
}

Render.prototype.getStorage = function(){
    return JSON.parse(window.localStorage.getItem('productos'));
}

Render.prototype.setStorage = function(arr){
    window.localStorage.setItem('productos',JSON.stringify(arr));
}

Render.prototype.validStorageRender = function(){
     if(this.getStorage() == null){
        this.setStorage([]);
        return this.getStorage();
    } else {
        return this.getStorage();
    }
}

Render.prototype.renderview = function(contenedor){
    this.storage.forEach(function(item,index){
        var li = document.createElement('li');
        var template = `
            <span>
                <img class="" src="${item.imagen}" />
            </span>
            <span>
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <strong>$ ${item.precio}</strong>
            </span>`

            li.innerHTML = template;
            contenedor.appendChild(li);
    });
}

