/*
AUTOR: Maximiliano Sosa

Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	//tomo la edad  

	var edad;

		edad = document.getElementById('txtIdEdad').value;

	if (edad >= 18){
		alert('Es mayor de edad');
	}
	

}//FIN DE LA FUNCIÓN