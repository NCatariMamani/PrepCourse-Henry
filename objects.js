var deportes = {
    conBalon: ['Football', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR 
persona.nombre = 'Martin';
console.log(persona.nombre);

// CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);


//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
console.log(atuendos);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// DIFERENCIA ENTRE DOT NOTATION Y BRACKET NOTATION

var comidas = {};
var diferenciDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
}

diferenciDeNotaciones('saludable', 'noSaludable');
console.log(comidas);


// NOS AYUDA A DEVOLVER TRUE SI EXISTE UNA PROPIEDAD Y FALSE SI NO EXISTE
var libro = { autor: 'Borgues', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');
console.log(tienePropiedad);


// DEVUELVE TODAS LAS PROPIEDADES DEL OBJETO
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

var mundo = { continentes: 7, paises: 195, oceanos: 5 };
for (var prop in mundo) {
    console.log("Esta es la propiedad: " + prop);
    console.log("Este es el valor: " + mundo[prop]);
}

var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Aleman',
    amistoso: true,
    dueña: 'Maria Lopez',
    info: function () {
        console.log('Mi perro es un ' + this.raza);
    }
};

mascota.info();


var objeto11 = {};
objeto11['piernas'] = ['Bermudas', 'Pantalones'];
objeto11.calculo = function hola12() {
    console.log("hola");
}

objeto11.calculo();
console.log(objeto11);

