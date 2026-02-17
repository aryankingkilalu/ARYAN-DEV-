
console.clear();
console.log('starting Orman xmd...');
require('./ormanconfig');
const settings = require('./settings'); // Use settings.js for SESSION_ID, ownername, prefa, owner
process.on("uncaughtException", console.error); 

const {
        default: makeWASocket,
        makeCacheableSignalKeyStore,
        useMultiFileAuthState,
        DisconnectReason,
        fetchLatestBaileysVersion,
        generateForwardMessageContent,
        prepareWAMessageMedia,
        generateWAMessageFromContent,
        generateMessageID,
        downloadContentFromMessage,
        makeInMemoryStore,
        getContentType,
        jidDecode,
    MessageRetryMap,
        getAggregateVotesInPollMessage,
        proto,
        delay
} = require("@whiskeysockets/baileys")

const pino = require('pino');
const axios = require('axios');
const readline = require("readline");
const fs = require('fs');
const chalk = require('chalk')
const _ = require('lodash')
const util = require('util')
const fetch = require('node-fetch')
const { File } = require('megajs');
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const FileType = require('file-type');
const { Boom } = require('@hapi/boom');
const NodeCache = require("node-cache");
const PhoneNumber = require('awesome-phonenumber');
const msgRetryCounterCache = new NodeCache()
const retryCache = new NodeCache({ stdTTL: 30, checkperiod: 20 })
const sendCache  = new NodeCache({ stdTTL: 30, checkperiod: 20 })
const { color } = require('./lib/color');
const {
    smsg,
    sendGmail,
    formatSize, 
    isUrl, 
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    runtime,
    fetchJson,
    sleep 
} = require('./lib/func');

const { 
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid 
} = require('./lib/exif')
// Define constants for session handling
const SESSION_DIR = './session';
const CREDS_PATH = `${SESSION_DIR}/creds.json`;

const usePairingCode = true;
let pairingAttempted = false;

const question = (text) => {
        const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
        });
        return new Promise((resolve) => {
                rl.question(text, (answer) => {
                        resolve(answer);
                        rl.close();
                });
        })
};

const low = require('./lib/lowdb');
const yargs = require('yargs/yargs');
const { Low, JSONFile } = low;

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
    new mongoDB(opts['db']) :
    new JSONFile(`./Database/database.json`)
)

global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
if (global.db.data !== null) return;

global.db.READ = true;
await global.db.read();
global.db.READ = false;

global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
};

global.db.chain = _.chain(global.db.data);
};

global.loadDatabase();
async function downloadSessionData() {
  console.log("[DEBUG] SESSION_ID:", settings.SESSION_ID);
  try {
    if (typeof settings.SESSION_ID === 'undefined') {
      throw new Error("SESSION_ID is undefined in settings");
    }
    if (!settings.SESSION_ID) {
      console.warn("[ ⏳ ] No SESSION_ID provided - Falling back to QR or pairing code");
      return null;
    }
    if (settings.SESSION_ID.startsWith("Orman-xmd~")) {
      console.info("[ ⏳ ] Decoding base64 session");
      const base64Data = settings.SESSION_ID.replace("Orman-xmd~", "");
      if (!/^[A-Za-z0-9+/=]+$/.test(base64Data)) {
        throw new Error("Invalid base64 format in SESSION_ID");
      }
      const decodedData = Buffer.from(base64Data, "base64");
      let sessionData;
      try {
        sessionData = JSON.parse(decodedData.toString("utf-8"));
      } catch (error) {
        throw new Error("Failed to parse decoded base64 session data: " + error.message);
      }
      fs.writeFileSync(CREDS_PATH, JSON.stringify(sessionData, null, 2));
      console.log("[ ✅ ] Base64 session decoded and saved successfully");
      return sessionData;
    } else if (settings.SESSION_ID.startsWith("Kevin~")) {
      console.info("[ 📥 ] Downloading MEGA.nz session");
      const megaFileId = settings.SESSION_ID.replace("Kevin~", "");
      const filer = File.fromURL(`https://mega.nz/file/${megaFileId}`);
      const data = await new Promise((resolve, reject) => {
        filer.download((err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      });
      fs.writeFileSync(CREDS_PATH, data);
      console.log("[ ✅ ] MEGA session downloaded successfully");
      return JSON.parse(data.toString());
    } else {
      throw new Error("Invalid SESSION_ID format. Use 'aryan-xmd~' for base64 or 'aryan~' for MEGA.nz");
    }
  } catch (error) {
    console.error("[ ❌ ] Error loading session", { Error: error.message, Stack: error.stack });
    console.info("[ 😑 ] Will attempt pairing code login");
    return null;
  }
}

async function clientstart() {
  // Ensure session directory exists
  if (!fs.existsSync(SESSION_DIR)) {
    fs.mkdirSync(SESSION_DIR);
  }

  // Check and download session data
  const sessionExists = await downloadSessionData();
  
        const {
                state,
                saveCreds
        } = await useMultiFileAuthState("session")
        const bot = makeWASocket({
                printQRInTerminal: !usePairingCode,
                syncFullHistory: true,
                markOnlineOnConnect: true,
                connectTimeoutMs: 120000,
                defaultQueryTimeoutMs: 0,
                keepAliveIntervalMs: 10000,
                qrTimeout: 120000,
                retryRequestDelayMs: 5000,
                generateHighQualityLinkPreview: true,
                patchMessageBeforeSending: (message) => {
                        const requiresPatch = !!(
                                message.buttonsMessage ||
                                message.templateMessage ||
                                message.listMessage
                        );
                        if (requiresPatch) {
                                message = {
                                        viewOnceMessage: {
                                                message: {
                                                        messageContextInfo: {
                                                                deviceListMetadataVersion: 2,
                                                                deviceListMetadata: {},
                                                        },
                                                        ...message,
                                                },
                                        },
                                };
                        }

                        return message;
                },
                version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
                browser: ["Ubuntu", "Chrome", "20.0.04"],
                logger: pino({
                        level: 'fatal'
                }),
                auth: {
                        creds: state.creds,
                        keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                                level: 'silent',
                                stream: 'store'
                        })),
                }
        });
const { say } = require('cfonts')
const listcolor = ['red', 'blue', 'magenta'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];

        if (!bot.authState.creds.registered && !pairingAttempted) {
    say(`ORMAN-XMD\n`, {
        font: 'block',
        align: 'center',
        gradient: [randomcolor, randomcolor]
    })

say(`Created By ARYAn-tech\nYOUTUBE : aryan\nTelegram : Theking256`, {
  font: 'console',
  align: 'center',
  gradient: [randomcolor, randomcolor]
})
    if (!sessionExists && !bot.authState.creds.registered) {
    pairingAttempted = true;
    try {
    await new Promise(r => setTimeout(r, 3000));
    const phoneNumber = await question(color(`< TYPE YOUR WHATSAPP NUMBER STARTING WITH COUNTRY CODE\n<✓> EXAMPLE : 255646194130*****\n <♡> Number : `, randomcolor));
    const cleanNumber = phoneNumber.trim().replace(/[^0-9]/g, '');
    if (!cleanNumber || cleanNumber.length < 10) {
      console.log(chalk.red.bold('Invalid phone number. Please restart and try again.'));
    } else {
      await new Promise(r => setTimeout(r, 2000));
      const code = await bot.requestPairingCode(cleanNumber);
      console.log(color(`\n[ # ] enter that code into WhatsApp, sucker😎 : ${code}`, `${randomcolor}`));
      console.log(chalk.green.bold(`\n[ ✓ ] Go to WhatsApp > Linked Devices > Link a Device > Link with phone number`));
      console.log(chalk.green.bold(`[ ✓ ] Enter the code above and wait for connection...\n`));
    }
    } catch(e) {
      console.log(chalk.yellow.bold('Pairing code request failed: ' + e.message));
      console.log(chalk.yellow.bold('Please set SESSION_ID environment variable or restart to try again.'));
    }
   }
}


const createToxxicStore = require('./lib/basestore');
const store = createToxxicStore('./store', {
  maxMessagesPerChat: 100,  
  memoryOnly: false 
});
    store.bind(bot.ev);
    
        bot.ev.on('messages.upsert', async chatUpdate => {
                try {
                        let mek = chatUpdate.messages[0]
                        if (!mek.message) return
                        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
                        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
             if (!bot.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
                        let m = smsg(bot, mek, store)
                        require("./Orman")(bot, m, chatUpdate, mek, store)
                } catch (err) {
                        console.log(chalk.yellow.bold("[ ERROR ] Orman.js :\n") + chalk.redBright(util.format(err)))
                }
        })
    

    bot.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    bot.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = bot.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
        }
    });
    
    bot.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
      bot.sendMessage(jid, { 
        text: text,
        contextInfo: {
            mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
              (v) => v[1] + "@s.whatsapp.net",
            ),
          },
          ...options,
        },
        { quoted },
      );
    
    bot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
        ? path
        : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`, `[1], 'base64')
        : /^https?:\/\//.test(path)
        ? await (await getBuffer(path))
        : fs.existsSync(path)
        ? fs.readFileSync(path)
        : Buffer.alloc(0);

    let buffer;
    if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options);
    } else {
        buffer = await imageToWebp(buff);
    }

    await bot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    return buffer;
};
              bot.ev.on('messages.upsert', async chatUpdate => {
                if (global.autostatus){
        try {
            if (!chatUpdate.messages || chatUpdate.messages.length === 0) return;
            const mek = chatUpdate.messages[0];

            if (!mek.message) return;
            mek.message =
                Object.keys(mek.message)[0] === 'ephemeralMessage'
                    ? mek.message.ephemeralMessage.message
                    : mek.message;

            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                let emoji = [ "💙","💜","🇺🇬","💛","🤍","❤️‍🔥" ];
                let sigma = emoji[Math.floor(Math.random() * emoji.length)];
                await bot.readMessages([mek.key]);
                bot.sendMessage(
                    'status@broadcast',
                    { react: { text: sigma, key: mek.key } },
                    { statusJidList: [mek.key.participant] },
                );
            }

        } catch (err) {
            console.error(err);
        }
      }
   }
 )  
bot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
        ? path
        : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`, `[1], 'base64')
        : /^https?:\/\//.test(path)
        ? await (await getBuffer(path))
        : fs.existsSync(path)
        ? fs.readFileSync(path)
        : Buffer.alloc(0);

    let buffer;
    if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
    } else {
        buffer = await videoToWebp(buff);
    }

    await bot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    return buffer;
};

bot.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
        ? message.mtype.replace(/Message/gi, "")
        : mime.split("/")[0];

    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? filename + "." + type.ext : filename;
    await fs.writeFileSync(trueFileName, buffer);

    return trueFileName;
};

    bot.getName = (jid, withoutContact = false) => {
      let id = bot.decodeJid(jid);
      withoutContact = bot.withoutContact || withoutContact;
      let v;
      if (id.endsWith("@g.us"))
        return new Promise(async (resolve) => {
          v = store.contacts[id] || {};
          if (!(v.name || v.subject)) v = bot.groupMetadata(id) || {};
          resolve(
            v.name ||
              v.subject ||
              PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
                "international",
              ),
          );
        });
      else
        v =
          id === "0@s.whatsapp.net"
            ? {
                id,
                name: "WhatsApp",
              }
            : id === bot.decodeJid(bot.user.id)
              ? bot.user
              : store.contacts[id] || {};
      return (
        (withoutContact ? "" : v.name) ||
        v.subject ||
        v.verifiedName ||
        PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
          "international",
        )
      );
    };
    
    bot.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = []
        for (let i of kon) {
            list.push({
                displayName: await bot.getName(i),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await bot.getName(i)}\nFN:${await bot.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:jangan spam bang\nitem2.EMAIL;type=INTERNET: ShinZ\nitem2.X-ABLabel:YouTube\nitem3.URL:ShinZ.Tech\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        bot.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}
    
bot.serializeM = (m) => smsg(bot, m, store);
    
bot.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    let vtype;
    if (options.readViewOnce) {
        message.message = message.message?.ephemeralMessage?.message || message.message;
        vtype = Object.keys(message.message.viewOnceMessage.message)[0];
        delete message.message.viewOnceMessage.message[vtype].viewOnce;
        message.message = { ...message.message.viewOnceMessage.message };
    }

    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};

    if (mtype != "conversation") {
        context = message.message[mtype].contextInfo;
    }

    content[ctype].contextInfo = {
        ...context,
        ...content[ctype].contextInfo,
    };

    const waMessage = await generateWAMessageFromContent(
        jid,
        content,
        options
            ? {
                  ...content[ctype],
                  ...options,
                  ...(options.contextInfo
                      ? {
                            contextInfo: {
                                ...content[ctype].contextInfo,
                                ...options.contextInfo,
                            },
                        }
                      : {}),
              }
            : {}
    );

    await bot.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id });
    return waMessage;
};
    
        
        function getTypeMessage(message) {
        const type = Object.keys(message)
        var restype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(type[0]) && type[0]) ||
                (type.length >= 3 && type[1] !== 'messageContextInfo' && type[1]) ||
                type[type.length - 1] || Object.keys(message)[0]
        return restype
    }

        const uploadFile = {
                upload: bot.waUploadToServer
        };
        bot.prefa = 'hah?'
    bot.public = global.Public;
    bot.serializeM = (m) => smsg(client, m, store)

    bot.ev.on('connection.update', async (update) => {
    let { Connecting } = require("./lib/terri.js");
    Connecting({ update, bot, Boom, DisconnectReason, sleep, color, clientstart });
    
   //======================= WELCOME / GOODBYE =======================
bot.ev.on('group-participants.update', async (update) => {
    const { id, participants, action } = update;

    if (!db.data.welcome) db.data.welcome = {};

    if (!db.data.welcome[id]) return;

    let metadata = await bot.groupMetadata(id);

    for (let user of participants) {
        let pp = 'https://files.catbox.moe/3xfxhw.jpg';
        try {
            pp = await bot.profilePictureUrl(user, 'image');
        } catch {
        }

        if (action === 'add') {
            await bot.sendMessage(id, {
                image: { url: pp },
                caption: `👋 *WELCOME TO ${metadata.subject}*\n\n@${user.split('@')[0]}, we are happy to have you here!`,
                mentions: [user]
            });
        }

        if (action === 'remove') {
            await bot.sendMessage(id, {
                image: { url: pp },
                caption: `👋 *GOODBYE!*\n\n@${user.split('@')[0]} has left the group.`,
                mentions: [user]
            });
        }
    }
});
    
    // Added connection status message
    if (update.connection === 'open') {
        const botNumber = bot.user.id.split(':')[0] + '@s.whatsapp.net';
        const time = new Date().toLocaleString();
        
        await bot.sendMessage(botNumber, { 
            text: `
*_❁ ARYAN-TECH ᵇᵒᵗ 𝙸𝚂 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙴𝙳 ❁_*
${readmore}            
> ┏❐━═ *ARYAN ⁱˢ ˢᵘᵐᵐᵒⁿᵉᵈ* ═╼❐
> ┃❦•❄️ *Bot:*  *ARYAN-TECH ᵇᵒᵗ* 🫧
> ┃❦•❄️ *Time:* ${time}
> ┃❦•❄️ *Status:* *~OᑎᒪIᑎᗴ 🛜~*
> ┃❦•❄️ *User:* ${botNumber}
> ┗❐━═━══━══━══━══━═╼❐
 *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙱𝙻𝙰𝙲𝙺 𝚃𝙴𝙲𝙷 ™*
                  *&*              
 *𝚂𝙿𝙾𝙽𝚂𝙴𝚁𝙴𝙳 𝙱𝚈 ARYA  ᗪᗴᐯ ᑕᖇᗴᗯ ᵗᵐ*`,
            contextInfo: {
                forwardingScore: 99,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '```120363420172397674@newsletter```',
                    newsletterName: '𝐓𝐡𝐚𝐧𝐤𝐬 𝐟𝐨𝐫 𝐜𝐡𝐨𝐨𝐬𝐢𝐧𝐠 ARYAN 𝐗𝐦𝐝 ᵇᵒᵗ',
                    serverMessageId: -1
                }
            }
        });
    }
    })

    
                


    
    bot.sendButtonImg = async (jid, buttons = [], text, image, footer, quoted = '', options = {}) => {
    const buttonMessage = {
        image: { url: image },
        caption: text,
        footer: footer,
        buttons: buttons.map(button => ({
            buttonId: button.id || '',
            buttonText: { displayText: button.text || 'Button' },
            type: button.type || 1
        })),
        headerType: 1,
        viewOnce: options.viewOnce || false,
    }

    bot.sendMessage(jid, buttonMessage, { quoted })
}
    
    bot.sendList = async (jid, title, footer, btn, quoted = '', options = {}) => {
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({ text: title }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "puqi" }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "single_select",
                                    "buttonParamsJson": JSON.stringify(btn)
                                },
                            ]
                        })
                    })
                }
            }
        }, { quoted })
        return await bot.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
    
    bot.sendButtonProto = async (jid, title, footer, buttons = [], quoted = '', options = {}) => {
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({ text: title }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "puqi" }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttons
                        })
                    })
                }
            }
        }, { quoted })
        return await bot.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
 

    bot.ments = (teks = '') => {
                return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
        };
    
    bot.cMod = (jid, copy, text = '', sender = bot.user.id, options = {}) => {
        let mtype = Object.keys(copy.message)[0];
        let isEphemeral = mtype === 'ephemeralMessage';
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
        let content = msg[mtype];
        if (typeof content === 'string') msg[mtype] = text || content;
        else if (content.caption) content.caption = text || content.caption;
        else if (content.text) content.text = text || content.text;
        if (typeof content !== 'string') msg[mtype] = {
            ...content,
            ...options
        };
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
        else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
        if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid;
        else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid;
        copy.key.remoteJid = jid;
        copy.key.fromMe = sender === bot.user.id;
        return proto.WebMessageInfo.fromObject(copy);
        }
    
    bot.sendText = (jid, text, quoted = '', options) => bot.sendMessage(jid, { text: text, ...options }, { quoted });
    
    bot.deleteMessage = async (chatId, key) => {
  try {
    await bot.sendMessage(chatId, { delete: key });
    console.log(`Pesan dihapus: ${key.id}`);
  } catch (error) {
    console.error('Gagal menghapus pesan:', error);
  }
};
    
    bot.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer
    } 
    
    bot.ev.on('creds.update', saveCreds);
    bot.serializeM = (m) => smsg(bot, m, store);
    return bot;
}

clientstart();

let file = require.resolve(__filename)
fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(chalk.redBright(`Update ${__filename}`))
        delete require.cache[file]
        require(file)
})

// Load PRO Enhancer
try {
    const enablePro = require('./pro/proEnhancer');
    enablePro(global.sock || {});
} catch(e) {
    console.log("PRO enhancer not loaded:", e.message);
}

const http = require('http');
const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        status: 'alive',
        bot: 'ARYAN-DEV',
        uptime: process.uptime(),
        memory: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB'
    }));
});
server.listen(PORT, '0.0.0.0', () => {
    console.log(chalk.green.bold(`[ ✓ ] Keep-alive server running on port ${PORT}`));
});
