/*
AUTOR: Maximiliano Sosa

Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch (mesDelAño) {
		
		case 'Julio':
			alert('Abrigate que hace frio.');
			break;
		case 'Agosto':
			alert('Abrigate que hace frio.');
			break;
		case 'Septiembre':
			alert('Ya pasamos el frio, ahora calor!!!.');
			break;
		case 'Octubre':
			alert('Ya pasamos el frio, ahora calor!!!.');
			break;
		case 'Noviembre':
			alert('Ya pasamos el frio, ahora calor!!!.');
			break;
		case 'Diciembre':
			alert('Ya pasamos el frio, ahora calor!!!.');
			break;
			
		default:
			alert('Falta para el invierno');
			break;
	}




}//FIN DE LA FUNCIÓN