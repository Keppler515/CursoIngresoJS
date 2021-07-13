/*
AUTOR: Maximiliano Sosa

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;

	temperatura = txtIdTemperatura.value;

	FaC = parseInt(temperatura);

	FaC = (FaC - 32) * 5/9;

	alert(temperatura + '° Farenheit son ' + FaC + '° Centigrados');
}

function CentigradosFahrenheit () 
{
	var temperatura;

	temperatura = txtIdTemperatura.value;

	CaF = parseInt(temperatura);

	CaF = (CaF * 9/5) + 32;

	alert(temperatura + '° Centigrados son ' + CaF + '° Farenheit');
}
