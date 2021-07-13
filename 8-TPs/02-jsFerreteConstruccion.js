/*

AUTOR: Maximiliano Sosa.

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno,
		anchoTerreno,
		perimetro,
		alambre;

		largoTerreno = document.getElementById('txtIdLargo').value;
		anchoTerreno = document.getElementById('txtIdAncho').value;

		largoTerreno = parseInt(largoTerreno);
		anchoTerreno = parseInt(anchoTerreno);

		perimetro = largoTerreno * anchoTerreno;

		alambre = perimetro * 3;

		alert(alambre);
}


function Circulo () 
{

	var	radio,
		circunferencia,
		alambre;

		radio = document.getElementById('txtIdRadio').value;
		radio = parseInt(radio);

		circunferencia = radio * 3.14;

		alambre = circunferencia * 3;

		alert(alambre);
		
}


function Materiales () 
{

	var bolsasCemento,
		bolsasCal,
		largoTerreno,
		anchoTerreno,
		perimetro;

		largoTerreno = document.getElementById('txtIdLargo').value;
		anchoTerreno = document.getElementById('txtIdAncho').value;

		largoTerreno = parseInt(largoTerreno);
		anchoTerreno = parseInt(anchoTerreno);

		perimetro = largoTerreno * anchoTerreno;

		bolsasCemento = 2;
		bolsasCal = 3;

		bolsasCemento = bolsasCemento * perimetro; 
		bolsasCal = bolsasCal * perimetro;

		alert('Se necesitan ' + bolsasCemento +' Bolsas de cemento y ' + bolsasCal + ' bolsas de cal');
}