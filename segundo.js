var nombre = document.getElementById('respuesta')

window.comunicacion.bienvenidoUsuario('bienvenido-usuario',function(event,args){
    console.log(args)
    nombre.innerHTML="Bienvenido " + args
})    

