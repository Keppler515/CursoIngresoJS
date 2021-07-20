/*
AUTOR: Maximiliano Sosa


Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/



function mostrar()
{
	var numero1;
	var numero2;
	var resta;
	var suma;

	numero1 = prompt('Ingrese el primer número');
	numero2 = prompt('Ingrese el segundo número');
	resta = numero1 - numero2;
	suma = numero1 + numero2;

	
	if (numero1 == numero2) {
		alert(numero1 + numero2);

	} else if (numero1 > numero2) {
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);

		alert(resta); //ACA FUNCIONA SI LLAMO A LA VARIABLE 

	} else {
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);

		alert(numero1 + numero2); //ACA SI LLAMO A LA VARIABLE suma EN VEZ DE SUMARSE SE CONCATENA
	}
	
		if (resta > 10) {
			alert('La resta es ' + resta + ' y superó el 10');
		}
}//FIN DE LA FUNCION
