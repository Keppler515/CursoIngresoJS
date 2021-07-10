/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado,
		resultado,
		descuento;
/*
		importeIngresado = document.getElementById('txtIdImporte').value;
		importeIngresado = parseInt(importeIngresado);
		descuento = importeIngresado / 100 * 75;
		resultado = document.getElementById('txtIdResultado');
		resultado.value = descuento;
*/

		importeIngresado = prompt('Ingrese un importe');
		importeIngresado = parseInt(importeIngresado);

		descuento = prompt('Ingrese un porcentaje de descuento');
		descuento = parseInt(descuento);

		descuento = importeIngresado * descuento / 100;

		resultado = document.getElementById('txtIdResultado');
		resultado.value = importeIngresado - descuento;


}
