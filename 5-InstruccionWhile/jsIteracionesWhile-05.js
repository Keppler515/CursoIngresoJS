/*
AUTOR: Maximiliano Sosa

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var sexoValidado;
	sexoIngresado = prompt("ingrese f ó m .");
	sexoValidado = document.getElementById('txtIdSexo');


	while (sexoIngresado != 'f' && sexoIngresado != 'm' || sexoIngresado == '') {
		sexoIngresado = prompt("ingrese f ó m .");
	}

	sexoValidado.value = sexoIngresado;
	
}//FIN DE LA FUNCIÓN