/*var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

//Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

//length
var nombres = ['Matias','Maria','Diego','Rosa'].length;
console.log(nombres);*/

//console.log(listaDeCompras.length);
//var elementoDelArray = listaDeCompras[3];
//console.log(elementoDelArray);


// PUSH Y UNSHIFT
var colores = ['Amarilo','Azul'];
// PUSH añade un nuevo elemento al final del array
colores.push('Rojo');
// UNSHIFT añade un elemento al inicio del array 
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
// SHIFT elimina el primer elemento del array
colores.shift();
// POP elimina el ultimo elemento del array
colores.pop();
console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
// INCLUDES devuelve true si existe el valor y false si no existe el elemento
var existeDali = pintores.includes('Dali');

console.log(existeDali);

// EVERY
var numeros = [1, 6, 8, 9, 43];
// EVERY si cumple la condicion retorna true y si no retorna false
var cumplenCondicion = numeros.every((num) => {num > 5});

console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
// SPLIT nos ayuda a separar el string en un array
var palabraSeparada = palabra.split('');
// aqui eliminamos el ultimo elemento
palabraSeparada.pop();
// una vez eliminado el elemento se añadio un elemento en la ultima posicion
palabraSeparada.push('y');
// JOIN nos ayuda a volver a unir el array y convertirlo en un string
var palabraArreglada = palabraSeparada.join(' ');
// se muestra la conversion a string arreglado
console.log(palabraArreglada);
// se muestra por separado lo que se arreglo
console.log(palabraSeparada);


// FOREACH
var numeros = [1, 2, 3, 4];
// Se muestra por separado a todos los numeros del array
numeros.forEach((num) => {console.log(num)});


// MAP 
var numeros = [1, 2, 3, 4];
// Se adiciona en 1 a todos los valores dentro del array 
var masUno = numeros.map( (num) => {return num +1});

console.log(masUno);


// FOR 
var arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


// WHILE
var arr = [];
while (arr.length < 5){
    arr.push('Camilo');
}

console.log(arr);