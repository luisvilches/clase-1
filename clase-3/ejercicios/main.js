var auto = {
    color: 'rojo',
    marca:'toyota',
    modelo:'supra',
    motor:{
        cc:'1.6',
        combustible:'bencina'
    },
    puertas: 4,
    year: 2018,
    transmicion:'mecanica',
    permisoCirculacionAlDia: true,
    tipo: 'sedan',
    encendido:false,
    frenar: function(){
        return 'el auto freno';
    },
    encender: function(val){
        this.encendido = val;
    }
}
console.log(auto);
console.log(auto.encendido);
auto.encender(true);
console.log(auto.encendido);
auto.encender(false);
console.log(auto.encendido);
