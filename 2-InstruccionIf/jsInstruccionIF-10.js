/*
AUTOR: Maximiliano Sosa

Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/


function mostrar()
{
	var nota;
	
		nota = (Math.floor(Math.random() * 11));

	if (nota == 9 || nota == 10){
		alert(nota + ': EXCELENTE');
	}

	if (nota >= 4 && nota <= 8){
		alert(nota + ': APROBÓ');
	}

	if (nota == 0 && nota <= 3){
		alert(nota + ': Vamos, la próxima se puede');
	}


}//FIN DE LA FUNCIÓN