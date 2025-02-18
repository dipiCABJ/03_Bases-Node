const argv = require('./Config/yargs.js');
const {createTextFile} = require('./Helpers/multiplicar');

console.clear();
console.log(argv);
//const [, , arg3 = 'base=9'] = process.argv;
//const [, base=5] = arg3.split('=');
//console.log(argv.base);


/*Hacer de tarea:
1- Agregar opcion  "--hasta => -h numerico, default 10 alias h"
2 - Usar este parametro para la tabla de multiplicar indicando hasta donde se va a multiplicar
*/
createTextFile(argv)
      .then(fileName => console.log(`Archivo: ${fileName} creado`))
      .catch(err => console.log(err))