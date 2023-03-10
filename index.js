
var formulario = document.getElementById('form-login')

var nombre = document.getElementById('nombre-login')
var pass = document.getElementById('pass-login')
var email= document.getElementById('email-login')
var fecha = document.getElementById('fecha-login')

var mensajesErrores = document.getElementById('mensajesErrores')

var expNombre = /^[a-zA-Z0-9]{4,20}$/
var expPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,20}$/
var expCorreo = /^\S+@\S+\.\S+$/

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    mensajesErrores.innerHTML = ""
    var error = false;

    // Validacion del nombre, debe ser letras y numeros entre 4 y 20 caracteres
    if(!nombre.value.match(expNombre)){ 
        mensajesErrores.innerHTML += "El nombre debe contener solo letras y numeros entre 4 y 20 caracteres<br><br>"
        error = true;
    }
    
    // Validacion del password, debe contener entre 8 y 20 caracteres, una minuscula, una mayuscula, un numero y un caracter especial
    if(!pass.value.match(expPass)){
        mensajesErrores.innerHTML += "El password debe contener entre 8 y 20 caracteres, una letra minuscula, una letra mayuscula, un numero y un caracter especial<br><br>"
        error = true;
    }

    // Validacion del correo, debe ingresarse un correo correcto correo@correo.com
    if(!email.value.match(expCorreo)){
        mensajesErrores.innerHTML += "Correo no valido, por favor ingresar un formato de correo correcto ejemplo: correo@gmail.com<br><br>"
        error = true;
    }

    // Validacion de la fecha de nacimiento, debe ingresarse en formato mm/dd/yyyy, la fecha debe ser menor a la fecha actual y el usuario debe ser mayor de edad
    var fechaNacimiento = new Date(fecha.value)
    var fechaActual = new Date()
    var fechaNacimientoAjustada = new Date(fechaNacimiento.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())

    if(isNaN(fechaNacimiento)){
        mensajesErrores.innerHTML += "Fecha de nacimiento no valida, por favor ingresar una fecha en formato mm/dd/yyyy<br>"
        error = true;
    } else if(fechaNacimientoAjustada >= fechaActual){
        mensajesErrores.innerHTML += "Fecha de nacimiento no puede ser mayor o igual a la fecha actual<br>"
        error = true;
    } else {
        var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
        var mes = fechaActual.getMonth() - fechaNacimiento.getMonth()

        if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
            edad--
        }

        if(edad < 18){
            mensajesErrores.innerHTML += "Debe ser mayor de edad para registrarse<br>"
            error = true;
        }
    }
    
    if(error==false){
        window.comunicacion.inicioUsuario(nombre.value);  //para enviar los registros al preload
    }
       
})


