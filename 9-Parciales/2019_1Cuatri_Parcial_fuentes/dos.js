/*
AUTOR: Maximiliano Sosa

Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/


function mostrar()
{
  
  var 	nombre1,
    		nombre2,
    		peso1,
    		peso2,
    		sumaPesos,
    		promedioPesos;


    		nombre1 = prompt('Coloca tu nombre');
    		nombre2 = prompt('Coloca el nombre de tu pareja');

    		peso1 = prompt('Coloca tu peso');
    		peso2 = prompt('Coloca el peso de tu pareja');

    		peso1 = parseInt(peso1);
    		peso2 = parseInt(peso2);

    		sumaPesos = peso1 + peso2;

    		promedioPesos = sumaPesos / 2;

    		alert('Ustedes se llaman ' + nombre1 + ' y ' + nombre2 + 
    			'. Pesan ' + peso1 + ' kilos y ' + peso2 + ' kilos. La suma de los pesos es ' + 
    			sumaPesos + 'kilos y el promedio de los pesos es ' + promedioPesos + ' kilos.');
}
