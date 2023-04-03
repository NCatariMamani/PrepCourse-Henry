function cuidadoConELConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion(){
    return (
        "El nombre retornado por la funcion 'cuidadoConElCosoleLog es:'" + 
        cuidadoConELConsoleLog('Camilo')
    );
}

function cuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre);
}