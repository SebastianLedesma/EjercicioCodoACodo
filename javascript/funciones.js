
//PUNTO 1

//obtiene el valor del input y lo retorna.El parametro indica el nombre de id del input a obtener.
function obtenerValorInput(valor){
    let input = document.getElementById(valor).value;
    return input;
}


function validarEdad(){
    let edad = obtenerValorInput("edad");

    if(isNaN(edad)){
        alert("Valor incorrecto.Debe ingresar una edad.");
    }else{
        if(edad > 17){
            alert("El usuario es MAYOR de edad.");
        }else{
            alert("El usuario es MENOR de edad.");
        }
    }
    document.getElementById("edad").value = "";
}

//PUNTO 2

//devuelve true si el parametro es un número.
let esNumerico = (a) => !isNaN(a);

function encontrarEdadMayor(){
    let edad;
    let mayor=0;
    let edadNumerica;
    for (let index = 0; index < 3; index++) {;
        do {
            edad = prompt(`${index +1}.Ingrese una edad:`);
            if(!esNumerico(edad)){
                alert("Debe ingresar un numero.");
            }

            //si el valor ingresado no es numérico lo pedirá nuevamente.
        } while (!esNumerico(edad));

        edadNumerica = parseInt(edad);

        if(edadNumerica > mayor){
            mayor = edadNumerica;
        }
    }
    
    alert(`La edad mayor ingresada es ${mayor}`);
}

