/*
AUTOR: Maximiliano Sosa

Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	

	switch (destinoIngresado) {
		case 'Bariloche':
			alert('Hace frio.');
			break;
		case 'Cataratas':
			alert('Hace calor.');
			break;
		case 'Mar del plata':
			alert('Hace calor.');
			break;
		case 'Ushuaia':
			alert('Hace frio.');
			break;			
		default:
			// statements_def
			break;
	}

}//FIN DE LA FUNCIÓN