/*
AUTOR: Maximiliano Sosa

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	alert(horaDelDia);


	switch (horaDelDia) {
		case '7':
			alert('Es de mañana.');
			break;
		case '8':
			alert('Es de mañana.');
			break;
		case '9':
			alert('Es de mañana.');
			break;
		case '10':
			alert('Es de mañana.');
			break;
		case '11':
			alert('Es de mañana.');
			break;				
		default:
			// statements_def
			break;
	}
	
	



}//FIN DE LA FUNCIÓN