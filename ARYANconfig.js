
const fs = require('fs')
const chalk = require('chalk')
// setting bot



global.owner = "255746194130"
global.ownername = "King ARYAN"
global.botname = "ARYAN-XMD"
global.author = "255637518095"
global.xprefix = '.'
global.autostatus = true 
global.Public = true 
global.api = 'https://api.giftedtech.co.ke/'

global.mess = {
    owner: '`command reserved for owner only<\>`',
 prem: '`command reserved for premium only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}




let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})