/*
AUTOR: Maximiliano Sosa

Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/


function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=1;
	acumulador=0;

	while (contador > 0 && contador < 6 ) {
		numeroIngresado = prompt('Ingrese un número');
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador ++;
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN