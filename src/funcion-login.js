//Declaración de variables para loggearse en la cuenta
var usuario, contraseña;
usuario = "vale123";
contraseña = 12345;

//Función para validar que el usuario ingrese bien las credenciales
function validarLogin(){

    usuarioIngresado = document.getElementById("user").value;
    contraseñaIngresada = document.getElementById("password").value;

    if (usuario==usuarioIngresado && contraseña==contraseñaIngresada){
        alert("¡Bienvenido a tu cuenta!")
        // return false; //Para que no se recargue la página y me muestre lo que ingresó el usuario
    }
    else{
        alert("Tu usuario y clave no coinciden")
        // return false;
    }
}