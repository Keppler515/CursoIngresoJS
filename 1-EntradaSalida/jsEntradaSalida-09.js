/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


function mostrarAumento()
{


/*
	var sueldo,
		aumento,
		resultado;


		sueldo = document.getElementById('txtIdSueldo').value;
		sueldo = parseFloat(sueldo);
		sueldo = sueldo * 1.10;
		resultado = document.getElementById('txtIdResultado');
		resultado.value = sueldo;

*/	


	var sueldo,
		aumento,
		resultado;

		sueldo = prompt('Ingrese su sueldo');
		aumento = prompt('Porcentaje a aumentar');

		sueldo = parseFloat(sueldo);
		aumento = parseFloat(aumento);
		resultado = sueldo * aumento / 100;

		document.getElementById('txtIdSueldo').value = sueldo;
		document.getElementById('txtIdResultado').value = resultado + sueldo;


}
