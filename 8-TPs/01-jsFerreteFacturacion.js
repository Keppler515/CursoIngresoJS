/*
AUTOR: Maximiliano Sosa

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1,
		precio2,
		precio3,
		calculo,
		resultado;

		precio1 = document.getElementById('txtIdPrecioUno').value;
		precio2 = document.getElementById('txtIdPrecioDos').value;
		precio3 = document.getElementById('txtIdPrecioTres').value;

		precio1 = parseInt(precio1);
		precio2 = parseInt(precio2);
		precio3 = parseInt(precio3);


		resultado = precio1 + precio2 + precio3;

		alert(resultado);
}


function Promedio () 
{
		precio1 = document.getElementById('txtIdPrecioUno').value;
		precio2 = document.getElementById('txtIdPrecioDos').value;
		precio3 = document.getElementById('txtIdPrecioTres').value;

		precio1 = parseInt(precio1);
		precio2 = parseInt(precio2);
		precio3 = parseInt(precio3);


		calculo = precio1 + precio2 + precio3;

	var precios = [precio1, precio2, precio3];

		alert(calculo / precios.length);	
}


function PrecioFinal () 
{
		precio1 = document.getElementById('txtIdPrecioUno').value;
		precio2 = document.getElementById('txtIdPrecioDos').value;
		precio3 = document.getElementById('txtIdPrecioTres').value;

		precio1 = parseInt(precio1);
		precio2 = parseInt(precio2);
		precio3 = parseInt(precio3);


		calculo = precio1 + precio2 + precio3;

		alert(calculo * 1.21);
}