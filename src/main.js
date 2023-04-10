function validar(){
    var nombre, correo, usuario, contraseña, expresion;
    nombre = document.getElementById("name").value;
    console.log(nombre);
    correo = document.getElementById("email").value;
    console.log(correo);
    usuario = document.getElementById("user").value;
    console.log(usuario);
    contraseña = document.getElementById("password").value;
    console.log(contraseña);

//Expresión para validar el formato del email
//La w indica que debe ser un texto + un @, luego debe haber un punto sumado a letras que sería .com 
expresion = /\w+@\w+\.+[a-z]/; 

if(nombre === "" || correo === "" || usuario === "" || contraseña === ""){
alert("Todos los campos son obligatorios");
return false;
}
else if(nombre.length<5){
    alert("El nombre es muy corto");
    return false;
}
else if(!expresion.test(correo)){ //El método test me ayuda a validar que correo cumpla con la expresión regular o sea el formato que definí 
    alert("Ingresa un correo válido");
    return false;
}
else if(usuario.length>10){
    alert("El usuario debe tener máximo 10 caracteres")
    return false;
}
}