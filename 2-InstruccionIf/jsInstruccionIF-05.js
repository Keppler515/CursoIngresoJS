/*
AUTOR: Maximiliano Sosa

Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	//tomo la edad  
	
	var edad;

		edad = document.getElementById('txtIdEdad').value;

	if (edad < 13 || edad > 17){
		alert('No es un adolescente');
	}

}//FIN DE LA FUNCIÓN