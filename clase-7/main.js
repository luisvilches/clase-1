document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('formulario');
    var dia = form.dia;
    var mes = form.mes;
    var anio = form.anio;

    for(var i = 1; i <= 31; i++){
        var option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        dia.appendChild(option);
    }

    for(var i = 1970; i <= 2018; i++){
        var option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        anio.appendChild(option);
    }

    var meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    for(var i = 0; i < meses.length; i++){
        var option = document.createElement('option');
        option.value = i;
        option.innerText = meses[i];
        mes.appendChild(option);
    }

})


function validacion(){
    var formulario = document.getElementById('formulario');
    if(formulario.nombre.value == null || formulario.nombre.value.length == 0 || /^\s+$/.test(formulario.nombre.value)){
        alert("Completa el campo nombre con un formato valido");
        return false;
    }

    if( formulario.edad.value == null || formulario.edad.value == 0 || isNaN(formulario.edad.value)){
        alert("Completa el campo edad con un formato valido");
        return false;
    }

    if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(formulario.email.value))){
        alert("Completa el campo email con un formato valido");
        return false;
    }

    var radios = formulario.querySelectorAll('input[type=radio]');
    var select = false;

    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            select = true;
            break;
        }
    }

    if(!select){
        alert("Debes seleccionar al menos una opción");
        return false;
    }

    if(formulario.telefono.value == null || !(/^\d{9}$/.test(formulario.telefono.value))){
        alert("Completa el campo teléfono con un formato valido");
        return false;
    }
    
    alert("formulario enviado");
    return true;
}