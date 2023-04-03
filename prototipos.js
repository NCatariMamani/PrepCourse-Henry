// AQUI SE TIENE LA PARTE DE DE CAMBIO EN UN ARRAY LOS VALORES
Array.prototype.mayorQueTres = function (){
    var arregloModificado = [];
    for(let i=0;i < this.length; i++){
        if(this[i] > 3){
            arregloModificado.push(false);
        }else{
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo);


// ESTA PARTE SE TIENE COMO CLASE A LATINOAMERICA 


class LatinoAmerica {
    constructor(){
        this.paises = [];
    };
};

LatinoAmerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
}

let continente = new LatinoAmerica();
continente.agregarPais('Mexico');
console.log(continente.paises);