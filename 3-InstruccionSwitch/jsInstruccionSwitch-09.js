/*
AUTOR: Maximiliano Sosa

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20%, cataratas y Cordoba tiene un descuento del 10% y Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%, cataratas y Cordoba tiene un aumento del 10% y Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%, cataratas tiene un aumento del 10%, Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var costo;
	var diferencia;	 	
	
		estacionIngresada = txtIdEstacion.value;
		destinoIngresado = txtIdDestino.value;
		costo = 15000;


	switch (estacionIngresada) {
			case 'Invierno':
				switch (destinoIngresado) {
					case 'Bariloche':
						alert('$' + costo * 1.20);
						break;

					case 'Cataratas':
						diferencia = costo * 10 / 100;
						alert('$' + (costo - diferencia))
						break;
					
					case 'Mar del plata':
						diferencia = costo * 20 / 100;
						alert('$' + (costo - diferencia));
						break;

					case 'Cordoba':
						diferencia = costo * 10 / 100;
						alert('$' + (costo - diferencia));
						break;

					default:
						break;	
				}
				break;
//--------------------------------------------------
			case 'Verano':
				switch (destinoIngresado) {
					case 'Bariloche':
						diferencia = costo * 20 / 100;
						alert('$' + (costo - diferencia));
						break;

					case 'Cataratas':
						alert('$' + costo * 1.10);
						break;
					
					case 'Mar del plata':
						alert('$' + costo * 1.20);
						break;

					case 'Cordoba':
						alert('$' + costo * 1.10);
						break;

					default:
						break;	
				}
				break;
//--------------------------------------------------					
			default:
				switch (destinoIngresado) {
					case 'Bariloche':
						alert('$' + costo * 1.10);
						break;

					case 'Cataratas':
						alert('$' + costo * 1.10);
						break;
					
					case 'Mar del plata':
						alert('$' + costo * 1.10);
						break;

					case 'Cordoba':
						alert('$' + costo);
						break;

					default:
						break;	
				}
				break;
		}	


	
}//FIN DE LA FUNCIÓN

