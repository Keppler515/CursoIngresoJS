/*
AUTOR: Maximiliano Sosa

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	//tomo la edad  
	
	var edad;

		edad = document.getElementById('txtIdEdad').value;
		edad = parseInt(edad);

	if (edad >= 1 && edad <= 12){
		alert('Es un niño');
	} 

	else if (edad >= 13 && edad <= 17){
		alert('Es un adolescente');
	} 

	else if (edad >= 18){
		alert('Es mayor de edad');
	}



}//FIN DE LA FUNCIÓN