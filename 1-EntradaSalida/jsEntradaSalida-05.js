/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre,
		edad;

		nombre = document.getElementById('txtIdNombre').value;
		edad = document.getElementById('txtIdEdad').value;

		alert('Tu nombre es ' + nombre + ' y tu edad es ' + edad + ' años');
}

