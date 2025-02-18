const argv = require('yargs')
             .options({
                base: {
                   alias: 'b',
                   type: 'number',
                   demandOption: true,
                   describe: 'Base de la tabla de multiplicar'
                }, 
                listar: {
                   alias: 'l',
                   type: 'boolean',
                   default: false,
                   describe: 'Lista la tabla por consola'
                },
                hasta: {
                  alias: 'h',
                  type: 'number',
                  default: 10,
                  describe: 'Hasta donde se va a multiplicar'
               }})
             .check((argv, options) => {
                //console.log('Yargs', argv)
                if (isNaN(argv.base)) // o argv.b
                    throw 'La base tiene que ser numerica!'
                return true
             })
             .argv;

module.exports = argv;