/*
AUTOR: Maximiliano Sosa

Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/


function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	

 	//FUNCIONA PERO NO ESTA HECHO CON IF().	

 	var numeroAleatorio;
 		numeroAleatorio = Math.random();
 		numeroAleatorio = numeroAleatorio * 10 + 1;
 		numeroAleatorio = parseInt(numeroAleatorio);	

	alert(numeroAleatorio);	



}//FIN DE LA FUNCIÓN