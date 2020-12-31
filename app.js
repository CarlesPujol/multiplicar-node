const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch(comando){
	case 'listar':
		listarTabla(argv.base, argv.limite)
			
	break;
	
	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Arxiu creat: ${archivo.green}`))
			.catch(e => console.log(e));
	break;
	
	default:
		console.log('Comando no reconocido');
	
}



//let base = '5';
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log('Limite', argv.limite);


