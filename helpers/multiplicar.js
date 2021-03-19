const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    try {

        let salida = '';
        let consola = '';
    
        for (let index = 1; index <= hasta; index++) {
    
            const result = base * index;
            salida += `${base} * ${index} = ${result}\n`;
            consola += `${base} ${'*'.blue} ${index} ${'='.blue} ${result}\n`;
        }

        if(listar){

            console.log('================'.green);
            console.log(`   Tabla del ${base}`.red);
            console.log('================'.green);
            console.log(consola);
        } 

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `archivo de tabla-${base}.txt`;
        
    } catch (error) {

        throw error;
    }
}

module.exports = {
    crearArchivo
}