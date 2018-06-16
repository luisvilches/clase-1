class Render {
    constructor(element){
        this.storage = this.validStorageRender();
        this.contenedor = element;
        this.renderView(this.contenedor);
    }

    getStorage(){
        return JSON.parse(window.localStorage.getItem('productos'));
    }

    setSorage(arr){
        window.localStorage.setItem('productos',JSON.stringify(arr));
    }

    validStorageRender(){
        if(this.getStorage() == null){
            this.setSorage([]);
            return this.getStorage();
        } else {
            return this.getStorage();
        }
    }

    renderView(contenedor){
        this.storage.forEach( item => {
            let li = document.createElement('li');
            let template = `
                <span>
                    <img src="${item.imagen}">
                </span>
                <span>
                    <h3>${item.nombre}</h3>
                    <p>${item.descripcion}</p>
                    <strong>${item.precio}</strong>
                </span>
            `;

            li.innerHTML = template;
            contenedor.appendChild(li);
        })
    }
}