class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log('Hola mi nombre es '+this.nombre +'. Tengo '+this.edad);
    }
}

var martin = new Persona('Martin',20);
martin.saludar();


class Programador extends Persona{
    constructor(nombre,edad,anioDeExperiencia){
        super(nombre,edad);
        this.anioDeExperiencia;
    }

    codear(){
        console.log('Soy'+ this.nombre + 'Codeo desde hace'+ this.anioDeExperiencia+ 'años');
    }
}

var martin = new Persona('Martin', 26);
var programador = new Programador('Martin',37,4);

martin.saludar();
programador.codear();

programador.saludar();