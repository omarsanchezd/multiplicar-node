const argv = require('./config/yargs').argv;

const { crearArchivo } = require(`./multiplicar/multiplicar`);
const { listarTabla } = require(`./multiplicar/multiplicar`);

//let argv2 = process.argv;
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido.');
}

//console.log('Limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));