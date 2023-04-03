// FUNCION CONSTRUCTORA
function Auto(puertas, color, marca, anio, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.anio = anio;
    this.ruedas = ruedas;
}

let miPrimerAuto = new Auto(2,'Rojo','Ferrari',2018, 4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);


// EXPRESION DE CLASE
class Auto1 {
    constructor(puertas, color, marca, anio, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.anio = anio;
        this.ruedas = ruedas;
    }
}

let miSegundoAuto = new Auto1(4,'Blanco','Fiat',2015,4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);
