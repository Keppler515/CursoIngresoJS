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
	
		nota = Math.random();
		nota = nota * 10;
		nota = parseInt(nota);
		nota = nota + 1;

	if (nota == 9 || nota == 10){
		alert(nota + ': EXCELENTE');
	}

	else if (nota >= 4 || nota <= 8){
		alert(nota + ': APROBÓ');
	}

	else {
		alert(nota + ': Vamos, la próxima se puede.');
	} 


}//FIN DE LA FUNCIÓN