
const obtenerChiste = require("./library");

// Codigo funcion callback
function callback(result) {
    console.log(result[0].setup);
    console.log(result[0].punchline);
}


// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(callback);
