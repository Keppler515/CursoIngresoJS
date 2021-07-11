function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);


	switch (mesDelAño) {
		case 'Enero':
			alert('QUE COMIENCES BIEN EL AÑO!');
			break;
		case 'Marzo':
			alert('A CLASES!');
			break;
		case 'Julio':
			alert('SE VIENEN LAS VACACIONES!');
			break;
		case 'Diciembre':
			alert('FELICES FIESTAS!');
			break;									
		default:
			// statements_def
			break;
	}


}//FIN DE LA FUNCIÓN