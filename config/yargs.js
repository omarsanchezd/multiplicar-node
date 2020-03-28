const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime tabla', opts)
    .command('crear', 'Genera tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}