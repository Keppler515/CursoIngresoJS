/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno,
		numeroDos,
		resultado;

		numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
		numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
		resultado = numeroUno + numeroDos;

		alert('El resultado de la suma es: ' + resultado);
}

function restar()
{
	var numeroUno,
		numeroDos,
		resultado;

		numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
		numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
		resultado = numeroUno - numeroDos;

		alert('El resultado de la resta es: ' + resultado);	
}

function multiplicar()
{ 
	var numeroUno,
		numeroDos,
		resultado;

		numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
		numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
		resultado = numeroUno * numeroDos;

		alert('El resultado de la multiplicación es: ' + resultado);
}

function dividir()
{
	var numeroUno,
		numeroDos,
		resultado;

		numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
		numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
		resultado = numeroUno / numeroDos;

		alert('El resultado de la división es: ' + resultado);
}

