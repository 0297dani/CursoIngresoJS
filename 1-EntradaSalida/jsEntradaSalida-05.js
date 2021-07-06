/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = document.getElementById("txtIdNombre").value;

	edadIngresada = document.getElementById("txtIdEdad").value;

	alert("Usted se llama : " + nombreIngresado + " y tiene " + edadIngresada +" años");
}

/*Entre texto y variable siempre tiene que haber un + */

/*

  nombre = txtIdNombre.value;
  edad = txtIdEdad.value;

  alert ("Usted se llama "+ nombre + "y tiene "+ edad +"años");

 */

//console.log() tambien sirve para mostrar datos pero no al usuario
//console.log("Usted se llama "+ nombre + "y tiene "+ edad +"años");


/* 
entradas: 
	Declarar una variable
	ingresar datos mediante prompt o 
	ingresar datos mediante id

Salidas:
mostrar datos/ informacion mediante 
	alert
	id
	console.log()
	document.write

*/
