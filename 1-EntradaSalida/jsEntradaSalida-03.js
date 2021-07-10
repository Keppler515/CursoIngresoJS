/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

		nombreIngresado = document.getElementById('txtIdNombre').value; //En el archivo HTML el input que captura el nombre tiene el ID 'txtIdNombre'
		
		// Podemos asignarle un valor al value del ID.
		//nombreIngresado = document.getElementById('txtIdNombre').value = ' Hola';

	alert(nombreIngresado);

}


