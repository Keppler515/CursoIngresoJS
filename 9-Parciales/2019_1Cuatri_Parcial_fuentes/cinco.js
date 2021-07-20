/*
AUTOR: Maximiliano Sosa


Enunciado:
Bienvenidos (SOLO SWITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
Curso de ingreso UTN FRA
*/


function mostrar()
{


var costoDia;
var cantidadDias;
var neto;
var continente;
var formaDePago;
var precioFinal;


costoDia = 100;
cantidadDias = prompt('Ingrese la cantidad de días');
continente = document.getElementById('Marca').value;
neto = costoDia * cantidadDias;
formaDePago = prompt('Ingrese forma de pago: "d": débito; "m": mercadoPago; "e": efectivo');


switch (continente) {
	case 'América':
		switch (formaDePago) {
			case 'd':
				precioFinal = neto - neto * 0.60;
				break;
			default:
				precioFinal = neto - neto * 0.50;
				break;
		}
		break;

	case 'África':
		switch (formaDePago) {
			case 'm':
				precioFinal = neto - neto * 0.75;
				break;
			case 'e':
				precioFinal = neto - neto * 0.75;
				break;	
			default:
				precioFinal = neto - neto * 0.60;
				break;
		}
		break;
		
	case 'Europa':
		switch (formaDePago) {
			case 'd':
				precioFinal = neto - neto * 0.35;
				break;
			case 'm':
				precioFinal = neto - neto * 0.30;	
				break;
			default:
				precioFinal = neto - neto * 0.25;
				break;
		}
		break;
					
	default:
		precioFinal = neto + neto * 0.20;
		break;
}

	alert(precioFinal);

}
