var trat = parseInt(prompt("Ingrese el tipo de tratamiento", ""));
var dias = parseInt(prompt("Ingrese los dias del tartamiento", ""));
var edad = parseInt(prompt("Ingrese su edad", ""));

switch(trat){
	case 1:
		if(edad > 60){
			document.write("<h1>El costo de internación es de $" + (2800 * dias) * 0.75 + "</h1>")
		}
		else if(edad < 25){
			document.write("<h1>El costo de internación es de $" + (2800 * dias) * 0.85 + "</h1>")
		}
		else{
			document.write("<h1>El costo de internación es de $" + (2800 * dias) + "</h1>")
		}
		break;
	case 2:
		if(edad > 60){
			document.write("<h1>El costo de internación es de $" + (1950 * dias) * 0.75 + "</h1>")
		}
		else if(edad < 25){
			document.write("<h1>El costo de internación es de $" + (1950 * dias) * 0.85 + "</h1>")
		}
		else{
			document.write("<h1>El costo de internación es de $" + (1950 * dias) + "</h1>")
		}
		break;
	case 3:
		if(edad > 60){
			document.write("<h1>El costo de internación es de $" + (2500 * dias) * 0.75 + "</h1>")
		}
		else if(edad < 25){
			document.write("<h1>El costo de internación es de $" + (2500 * dias) * 0.85 + "</h1>")
		}
		else{
			document.write("<h1>El costo de internación es de $" + (2500 * dias) + "</h1>")
		}
		break;
	case 4:
		if(edad > 60){
			document.write("<h1>El costo de internación es de $" + (1150 * dias) * 0.75 + "</h1>")
		}
		else if(edad < 25){
			document.write("<h1>El costo de internación es de $" + (1150 * dias) * 0.85 + "</h1>")
		}
		else{
			document.write("<h1>El costo de internación es de $" + (1150 * dias) + "</h1>")
		}
		break;
	default:
		document.write("<h1>Datos Incorrectos</h1>");
		break;
}