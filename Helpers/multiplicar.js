const fso = require('fs');


const createTextFile = async(param) =>{
    
    try{
        let base = param.base;
        let hasta = param.hasta;
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
           (i < hasta)
            ? salida += `${base.toString()} x ${i.toString()} es: ${base*i}\n`
            : salida += `${base.toString()} x ${i.toString()} es: ${base*i}`
        }
        if (param.listar){
            console.log('==========================');
            console.log(`    Tabla del    ${base}  `);
            console.log('==========================');
            console.log(salida);
        }
        fso.writeFileSync(`./Tablas/tabla del ${base}.txt`, salida);
        return(`tabla del ${base}.txt`);
    }
    catch (err){
        throw err;
    }
}


module.exports = {
    createTextFile
}