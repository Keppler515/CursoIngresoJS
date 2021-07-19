/*
AUTOR: Maximiliano Sosa


4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
 {

    var lampara;
    var cantidad;
    var marca;
    var bruto;
    var precioFinal;
    var impuesto;

    lampara = 35;
    cantidad = document.getElementById('txtIdCantidad').value;
    cantidad = parseInt(cantidad);
    marca = document.getElementById('Marca').value;
    bruto = lampara * cantidad;
    precioFinal = document.getElementById('txtIdprecioDescuento');
    impuesto = 0.10;


//SWITCH IF
/*
   switch (cantidad) {
        case 5:
           if (marca == 'ArgentinaLuz') {precioFinal.value = bruto - bruto * 0.40}
            else {precioFinal.value = bruto - bruto * 0.30};
        break;

        case 4:
            if (marca == 'ArgentinaLuz' || marca == 'FelipeLamparas') {precioFinal.value = bruto - bruto * 0.25} 
            else {precioFinal.value = bruto - bruto * 0.20};
        break;

        case 3:
            if (marca == 'ArgentinaLuz') {precioFinal.value = bruto - bruto * 0.15}
            else if (marca == 'FelipeLamparas') {precioFinal.value = bruto - bruto * 0.10}
            else {precioFinal.value = bruto - bruto * 0.05};
        break;    

        case 2:
            precioFinal.value = bruto;
        break;
        
        case 1:
            precioFinal.value = bruto;
        break;    
                 
        default:
           precioFinal.value = bruto / 2;
        break;
   }
*/

//SWITCH SWITCH
/*
    switch (cantidad) {
      
        case 5:
            switch (marca) {
                case 'ArgentinaLuz':
                    precioFinal.value = bruto - bruto * 0.40;
                    break;
                default:
                    precioFinal.value = bruto - bruto * 0.30;
                    break;
            }
            break;

        case 4:
            switch (marca) {
                case 'ArgentinaLuz':
                    precioFinal.value = bruto - bruto * 0.25;
                    break;
                case 'FelipeLamparas':
                    precioFinal.value = bruto - bruto * 0.25;
                    break;  
                default:
                    precioFinal.value = bruto - bruto * 0.20;
                    break;
            }
            break;

        case 3:
            switch (marca) {
                case 'ArgentinaLuz':
                    precioFinal.value = bruto - bruto * 0.15;
                    break;
                case 'FelipeLamparas':
                    precioFinal.value = bruto - bruto * 0.10;
                    break;    
                default:
                    precioFinal.value = bruto - bruto * 0.05;
                    break;
            }
            break;

        case 2:
            precioFinal.value = bruto;
            break;

        case 1:
            precioFinal.value = bruto;
            break;  

        default:
            precioFinal.value = bruto / 2;
            break;
    }
*/

//IF SWITCH
/*    
    if (cantidad > 5) {
        precioFinal.value = bruto / 2;
    } else {
        precioFinal.value = bruto;
    }

    if (cantidad == 5) {
        switch (marca) {
            case 'ArgentinaLuz':
                precioFinal.value = bruto - bruto * 0.40;
                break;
            default:
                precioFinal.value = bruto - bruto * 0.30;
                break;
        }

    } else if (cantidad == 4) {
        switch (marca) {
            case 'ArgentinaLuz':
                precioFinal.value = bruto - bruto * 0.25;
                break;
            case 'FelipeLamparas':
                precioFinal.value = bruto - bruto * 0.25;
                break;    
            default:
                precioFinal.value = bruto - bruto * 0.20;
                break;
        }

    } else if (cantidad == 3) {
        switch (marca) {
            case 'ArgentinaLuz':
                precioFinal.value = bruto - bruto * 0.15;
                break;
            case 'FelipeLamparas':
                precioFinal.value = bruto - bruto * 0.10;
                break;    
            default:
                precioFinal.value = bruto - bruto * 0.05;
                break;
        }    
    
    }
*/

//IF IF
/*
        if (cantidad > 5) {
            precioFinal.value = bruto / 2;
        } else {
            precioFinal.value = bruto;
        };


        if (cantidad == 5) {
            if (marca == 'ArgentinaLuz') {
                precioFinal.value = bruto - bruto * 0.40;
            } else {
                precioFinal.value = bruto - bruto * 0.30;
            } 

        } else if (cantidad == 4) {
            if (marca == 'ArgentinaLuz' || marca == 'FelipeLamparas') {
                precioFinal.value = bruto - bruto * 0.25;
            } else {
                precioFinal.value = bruto - bruto * 0.20;
            }

        } else if (cantidad == 3) {
            if (marca == 'ArgentinaLuz') {
                precioFinal.value = bruto - bruto * 0.15;
            } else if (marca == 'FelipeLamparas') {
                precioFinal.value = bruto - bruto * 0.10;
            } else {
                precioFinal.value = bruto - bruto * 0.05;
            }

        };
*/    

    if (precioFinal.value > 120) {
        precioFinal.value = (bruto / 2) + (bruto / 2 * impuesto);

        alert('Estás pagando $' + bruto / 2 + ' + $' + (bruto / 2 * impuesto) +' de IIBB');
    }

}// FINAL FUNCION