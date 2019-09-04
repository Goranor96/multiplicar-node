// requireds
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
/*
    Tipos de required
    const fs = require('fs');        //Require de un paquete propio de Node.js
    const fs = require('express');   //Paquetes que no son nativos de Node.js
    const fs = require('./fs');      //Archivos que nosotros mismos escribimos
*/

let comando = argv._[0];

switch( comando ){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado:`, colors.green(`${ archivo }`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let parametro = argv[2];
/*
if (!parametro) {
    throw new Error('Debe ingresar un parámetro para las tablas de multiplicar');
}
let base = parametro.split('=')[1];
*/


