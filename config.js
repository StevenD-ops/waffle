/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/18299416234
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '3716302A4B',
}

// Other
global.owner = ['18299416234','18299416234']
global.premium = ['18299416234']
global.packname = 'botsteve'
global.author = 'bender'
global.sessionName = 'steve'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
  success: '✓ Exito',
       admin: '¡Característica especial de administrador de grupo!',
       botAdmin: '¡El bot debe ser administrador primero!',
       owner: 'Características especiales del propietario del bot',
       group: '¡Característica utilizada solo para el grupo!',
       private: '¡Función utilizada solo para chat privado!',
       bot: 'Característica de solo usuario de número de bot',
       wait: 'Cargando...',
       endLimit: 'Su límite diario ha expirado, el límite se reiniciará cada 12 horas'
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
