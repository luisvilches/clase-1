
var btn = document.getElementById('btn');
var input = document.getElementById('input');
var btn2 = document.getElementById('btn2');
var dblClick = document.getElementById('dblClick');
var label = document.getElementById('label');
var form = document.getElementById('form');



// evento onBlur
btn.addEventListener('blur',function(){
    alert('Hola Mundo!!');
});

// evento onChange
input.addEventListener('change', function(){
    console.log(input.value);
});

// evento onClick
btn2.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Hola mundo desde el evento click");
    input.value = '';
});

dblClick.addEventListener('dblclick', function(){
    alert('Esto es un doble click!');
});

label.addEventListener('focus',function(){
    document.body.style.backgroundColor = "#ec0000";
});

form.txt.addEventListener('keydown', function(){
    console.log('evento keyDown');
});

form.texto.addEventListener('keypress',function(){
    console.log("evento keypress");
})

form.keyup.addEventListener('keyup', function(){
    console.log("evento keyup");
});

document.addEventListener('DOMContentLoaded', function(){
    var tags = document.getElementsByTagName('input');
    //console.log(tags);
    //console.log('tag 2 ->',tags[2]);
    var tag = document.querySelector("h1");
    var clase = document.querySelector(".miBoton");
    var id = document.querySelector("#btn2");
    var anidado = document.querySelector("form input");
    /*console.log(tag);
    console.log('dataset ->',tag.dataset.name);
    console.log(clase);
    console.log(id);
    console.log(anidado);*/
    //var inputs = document.querySelectorAll("input");
    //console.log(inputs);
    var clase1 = document.querySelector(".clase1");
    var btn3 = document.querySelector("#btn3");
    var btn4 = document.querySelector("#btn4");
    var btn5 = document.querySelector("#btn5");
    var btn6 = document.querySelector("#btn6");
    var btn7 = document.querySelector("#btn7");
    var btn8 = document.querySelector("#btn8");

    btn3.addEventListener('click', function(){
        clase1.classList.add("clase2");
    });

    btn4.addEventListener('click', function(){
        clase1.classList.toggle('clase2');
    });

    btn5.addEventListener('click', function(){
        clase1.classList.remove('clase2');
    });

    btn6.addEventListener('click', function(){
        if(clase1.classList.contains('clase2')){
            alert("Si existe la clase!");
        } else {
            alert("No existe la clase!");
        }
    });

    btn7.addEventListener('click', function(){
        clase1.classList.replace('clase1','clase2');
    });

    btn8.addEventListener('click', function(){
        document.body.innerHTML = `
            <header>
                <h1>Mi nuevo BODY</h1>
            </header>
        `;
    });


})