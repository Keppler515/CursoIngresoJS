/*
AUTOR: Maximiliano Sosa

Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/


function mostrar()
{
	var precio,
		descuento,
		resultado;

		precio = prompt('Ingresar precio');
		descuento = prompt('Ingresar porcentaje de descuento');
		
		descuento = precio * descuento / 100;

		resultado = document.getElementById('elPrecioFinal');

		resultado.value = precio - descuento;
}
