function validar(){
    var nombre, correo, usuario, contraseña, expresion;
    nombre = document.getElementById("name").value;
    correo = document.getElementById("email").value;
    usuario = document.getElementById("user").value;
    contraseña = document.getElementById("password").value;
    celular = document.getElementById("celphone").value;

//Expresión para validar el formato del email
//La w indica que debe ser un texto + un @, luego debe haber un punto sumado a letras que sería .com 
expresion = /\w+@\w+\.+[a-z]/; 

  if(nombre === "" || correo === "" || usuario === "" || contraseña === ""){
    alert("Todos los campos son obligatorios");
    return false;
  }
  if(nombre.length<5){
    alert("El nombre es muy corto");
    return false;
  }
  if(celular.length>10){
    alert("El número de celular es muy largo");
    return false;
  }
  if(isNaN(celular)){ //isNaN Not a number, es una expresión que valida si no es un número 
    alert("Ingresa un número de celular válido");
    return false;
  }
  if(!expresion.test(correo)){ //El método test me ayuda a validar que correo cumpla con la expresión regular o sea el formato que definí 
    alert("Ingresa un correo válido");
    return false;
  }
  if(usuario.length>10){
    alert("El usuario debe tener máximo 10 caracteres")
    return false;
  }
}
