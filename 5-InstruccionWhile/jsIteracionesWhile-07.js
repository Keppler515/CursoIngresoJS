/*
AUTOR: Maximiliano Sosa

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	contador=0;
	acumulador=0;
	respuesta='ok';
	ingreso = prompt('Ingrese un número. Cuando desée conocer la suma ingrese "si"');

	while (ingreso != respuesta) {
		ingreso = parseInt(ingreso);
		acumulador = acumulador + ingreso;
		ingreso = prompt('Ingrese un número. Cuando desée conocer la suma ingrese "si"');
		contador ++;
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN