/*
AUTOR: Maximiliano Sosa

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	

	switch (destinoIngresado) {
		case 'Bariloche':
			alert('Está al Oeste.');
			break;
		case 'Cataratas':
			alert('Está al Norte.');
			break;
		case 'Mar del plata':
			alert('Está al Este.');
			break;
		case 'Ushuaia':
			alert('Está al Sur.');
			break;			
		default:
			// statements_def
			break;
	}


}//FIN DE LA FUNCIÓN