/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	nombreIngresado = document.getElementById('txtIdNombre').value; //Tomo el dato por id


	alert("Su nombre es: " + nombreIngresado); //Muestro el dato por alert

}


/*
Ingresar datos mediante el prompt
ingresar datos mediante id
declarar una variable
mostrar datos/Informacion mediante alert
*/