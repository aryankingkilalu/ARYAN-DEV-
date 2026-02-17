// credits by ARYAN-TECH 
// ARYAN

require('./ormanconfig');

const settings = {
  SESSION_ID: process.env.SESSION_ID || global.SESSION_ID || "",
  ownername: global.ownername || "A̸R̸Y̸A̸ N̸T̸E̸C̸H̸",
  botname: global.botname || "𝙾𝚁𝙼𝙰𝙽-𝚇𝙼𝙳",
  prefa: global.xprefix || ['+', '/', ','],
  owner: global.owner ? [global.owner + "@s.whatsapp.net"] : ["255637518095@s.whatsapp.net"]
};

module.exports = settings;

const fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});