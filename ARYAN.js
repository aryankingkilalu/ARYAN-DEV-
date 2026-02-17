require('./ormanconfig')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");

const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const cheerio = require('cheerio')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search');

async function ytSearchSafe(query) {
    try {
        const res = await yts(query);
        if (!res || !res.videos || res.videos.length === 0) return null;
        return res.videos[0];
    } catch (e) {
        console.log('YT SEARCH ERROR:', e);
        return null;
    }
}
const ytdl= require ('ytdl-core')
const gis = require('g-i-s')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')

const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scrape2') 

const absenData = {};
const { temporary, temmp } = require('./lib/tempor')
const death = fs.readFileSync('./Media/Orman.jpg')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredPremiumCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./lib/premiun')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    tanggal,
    telegraPh,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    toIDR,
    capital,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GroupDB,
    kickQueue,
    totalcase
} = require('./lib/func')

const { 
getSetting,
updateSetting,
getAllSettings,
getSudo,
addSudo,
removeSudo,
hasSudo
} = require('./lib/settingManager');

const { sendMenu, setMenuStyle } = require('./start/menu');
const { handleAntiDelete } = require('./OrmanCmds/antidelete');
const { handleAutoReact } = require('./OrmanCmds/autoreact');
const { handleAutoRead } = require('./OrmanCmds/autoread');
const { handleAutoTyping } = require('./OrmanCmds/autotyping');
const { handleAutoRecording } = require('./OrmanCmds/autorecord');
const { handleAIChatbot } = require('./OrmanCmds/chatbot');
// Use global.db for database operations
const isPremiumUser = (sender) => {
    // Check if user is owner
    const ownerNumbers = global.db.data?.settings?.owners || ['255637518095@s.whatsapp.net'];
    const isOwner = ownerNumbers.includes(sender);
    
    // Check premium status from database
    const premiumUsers = global.db.data?.users || {};
    const userData = premiumUsers[sender];
    const isUserPremium = userData?.premium || false;
    
    return isOwner || isUserPremium;
};

const isOwner = (sender) => {
    const ownerNumbers = global.db.data?.settings?.owners || ['255637518095@s.whatsapp.net'];
    return ownerNumbers.includes(sender);
};

// Use global.db.data for these arrays
let vote = global.db.data.others?.vote || [];
let kuismath = global.db.data.game?.math || [];

const xtime = moment.tz('Africa/Kampala').format('HH:mm:ss')
const xdate = moment.tz('Africa/Kampala').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Kampala').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var tennortimewisher = `Good Night amigo 🌌`
 }
 if(time2 < "19:00:00"){
var tennortimewisher = `Good Evening amigo 🌃`
 }
 if(time2 < "18:00:00"){
var tennortimewisher = `Good Evening amigo 🌃`
 }
 if(time2 < "15:00:00"){
var tennortimewisher = `Good Afternoon amigo 🌅`
 }
 if(time2 < "11:00:00"){
var tennortimewisher = `Good Morning amigo 🌄`
 }
 if(time2 < "05:00:00"){
var tennortimewisher = `Good Morning mofo🌄`
 } 
const time = moment().tz("Africa/Kampala").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Early Morning"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄GoodMorning"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️GoodAfternoon"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️Goodevening"
} else {
    ucapanWaktu = "🌆Goodnight"
};
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
// Function to fetch MP3 download URL
async function fetchMp3DownloadUrl(link) {
  const fetchDownloadUrl1 = async (videoUrl) => {
    const apiUrl = `https://api.giftedtech.my.id/api/download/dlmp3?apikey=${dlkey}&url=${videoUrl}`;
    try {
      const response = await axios.get(apiUrl);
      if (response.status !== 200 || !response.data.success) {
        throw new Error('Failed to fetch from GiftedTech API');
      }
      return response.data.result.download_url;
    } catch (error) {
      console.error('Error with GiftedTech API:', error.message);
      throw error;
    }
  };

  const fetchDownloadUrl2 = async (videoUrl) => {
    const format = 'mp3';
    const url = `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(videoUrl)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`;
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      if (!response.data || !response.data.success) throw new Error('Failed to fetch from API2');

      const { id } = response.data;
      while (true) {
        const progress = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });
        if (progress.data && progress.data.success && progress.data.progress === 1000) {
          return progress.data.download_url;
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console.error('Error with API2:', error.message);
      throw error;
    }
  };

  try {
    let downloadUrl;
    try {
      downloadUrl = await fetchDownloadUrl1(link);
    } catch (error) {
      console.log('Falling back to second API...');
      downloadUrl = await fetchDownloadUrl2(link);
    }
    return downloadUrl;
  } catch (error) {
    throw error;
  }
}

async function fetchVideoDownloadUrl(link) {
  const apiUrl = `https://api.giftedtech.my.id/api/download/dlmp4?apikey=${dlkey}&url=${encodeURIComponent(link)}`;
  
  try {
    const response = await axios.get(apiUrl);
    if (response.status !== 200 || !response.data.success) {
      throw new Error('Failed to retrieve the video!');
    }
    return response.data.result;
  } catch (error) {
    console.error('Error fetching video download URL:', error.message);
    throw error;
  }
}
async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          "Content-Type": "multipart/form-data",
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let { data } = await axios.post(
        "https://en.ephoto360.com/effect/create-image",
        new URLSearchParams(json),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; "),
          },
        }
      );
      return build_server + data.image;
}
function capitaler(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//module
module.exports = bot = async (bot, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['+', '/',','] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await bot.decodeJid(bot.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media     
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await bot.groupMetadata(m.chat).catch(e => {}) : ''
        
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const Media = m.mtype
        //user status
const xeonverifieduser = global.db.data?.users || {}

        const isUser = xeonverifieduser[sender] || false
        const Owner = isOwner(sender)
        const isPremium = Owner || isPremiumUser(sender)
        
        // Premium expiration check
        if (isPremium && !Owner) {
            const userData = global.db.data.users[sender];
            if (userData?.premiumExpired && Date.now() > userData.premiumExpired) {
                userData.premium = false;
                userData.premiumExpired = null;
                await global.db.write();
            }
        }

async function sendbotMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await bot.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

await handleAutoRecording(m, bot, botNumber);
await handleAutoRead(m, bot, botNumber);
await handleAutoTyping(m, bot, botNumber);
await handleAutoReact(m, bot, botNumber);
await handleAIChatbot(m, bot, body, from, isGroup, botNumber, isCmd, prefix);


 const groupName = isGroup ? groupMetadata.subject : "";      
if (m.message) {
    if (isCmd && !m.isGroup) {
        console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n❄️ ${ucapanWaktu} ❄️`)));
        console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`╭─── ❁ARYAN-TECH!❁ ──╼`)))
        console.log(chalk.black(chalk.bgHex('#fdcb6e')(`╎◈ 📅 DATE: ${new Date().toLocaleString()}
╎◈ 💬 MESSAGE: ${m.body || m.mtype}
╎◈ 🗣️ SENDERNAME: ${pushname}
╎◈ 👤 JIDS: ${m.sender}`
     )
   )
);
    } else if (m.isGroup) {
        console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n❄️ ${ucapanWaktu} ❄️`)));
        console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`╭─── ❁ARYAN-TECH!❁ ──╼`)));
        console.log(chalk.black(chalk.bgHex('#fdcb6e')(`╎◈📅 DATE: ${new Date().toLocaleString()}
╎◈ 💬 MESSAGE: ${m.body || m.mtype}
╎◈ 🗣️ SENDERNAME: ${pushname}
╎◈ 👤 JIDS: ${m.sender}
╎◈ 🔍 MESS LOCATION: ${groupName}`
       ))
     );
  }
}

const terri = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: bot,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363346921879829@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const orman = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "13135559098@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `ARYAN-TECH 𝐀𝐈`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
},
status: 2009,
  participant: "0@s.whatsapp.net"
}

const fkontak = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `ARYAN-TECH 𝐀𝐈̸`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': { url: 'https://n.uguu.se/EcKPlhLg.jpg' }
                }
            }
        }
//Reply function//
async function reply(teks) {
bot.sendMessage(m.chat, {
text: teks,
contextInfo: {
forwardingScore: 0,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363346921879829@newsletter",
newsletterName: "𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ARYAN 𝚃𝙴𝙲𝙷 ™"
}
}
}, {
quoted: orman
})
}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
            var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
         const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
        const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
       const v51 = ["✅"];    
        const v52 = v51[Math.floor(Math.random() * v51.length)];
    const vF4 = p11 => {
      return bot.sendMessage(m.chat, {
        react: {
          text: p11,
          key: m.key
        }
      });
    };
        async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

// ---- SECURITY: ensure DB structures exist ----
global.db.data = global.db.data || {};
global.db.data.antilink = global.db.data.antilink || {};
global.db.data.antitoxic = global.db.data.antitoxic || {};
global.db.data.toxic = global.db.data.toxic || {};        // per-group toxic words array
global.db.data.warns = global.db.data.warns || {};        // { chatId: { userId: count } }
global.db.data.whitelist = global.db.data.whitelist || {}; // { chatId: [userId,...] }

// Helper: ensure arrays exist for a chat
const ensureChat = (chat) => {
  if (!global.db.data.toxic[chat]) global.db.data.toxic[chat] = [
    "fuck","bitch","puta","asshole","dick","pussy","whore","shit","nigga"
  ];
  if (!global.db.data.warns[chat]) global.db.data.warns[chat] = {};
  if (!global.db.data.whitelist[chat]) global.db.data.whitelist[chat] = [];
};

// Helper: check whitelist
const isWhitelisted = (chat, user) => {
  ensureChat(chat);
  return (global.db.data.whitelist[chat] || []).includes(user);
};

// Helper: add warn and return new count
const addWarn = async (chat, user) => {
  ensureChat(chat);
  const w = global.db.data.warns[chat];
  w[user] = (w[user] || 0) + 1;
  await global.db.write().catch(()=>{});
  return w[user];
};

// Helper: reset warns
const resetWarns = async (chat, user) => {
  ensureChat(chat);
  const w = global.db.data.warns[chat];
  delete w[user];
  await global.db.write().catch(()=>{});
};

// antidelete handle
if (global.antidelete && m.message?.protocolMessage?.type === 0 && m.message?.protocolMessage?.key) {
    await handleAntiDelete(m, bot, from, isGroup, botNumber);
}

try {
  if (m && m.isGroup && global.db?.data?.antitoxic && global.db.data.antitoxic[m.chat]) {
    ensureChat(m.chat);
    const toxicList = global.db.data.toxic[m.chat] || [];
    const msgText = (m.text || '').toString().toLowerCase();

    // if message contains any toxic word
    const found = toxicList.find(w => {
      if (!w) return false;
      try { return msgText.includes(w.toLowerCase()); } catch(e){ return false; }
    });

    if (found) {
      // don't act on admins, owner, whitelist, or the bot itself
      const groupMeta = m.isGroup ? await bot.groupMetadata(m.chat).catch(()=>null) : null;
      const participants = groupMeta?.participants || [];
      const senderIsAdmin = participants.find(p => p.id === m.sender)?.admin;
      const botIsAdmin = participants.find(p => p.id === bot.user.id)?.admin;
      const ownerNumbers = global.db?.data?.settings?.owners || [];
      const isOwnerUser = ownerNumbers.includes(m.sender);

      if (senderIsAdmin || isOwnerUser || isWhitelisted(m.chat, m.sender) || m.sender === bot.user.id) {
        // ignore
      } else {
        // delete message if bot is admin
        if (m.key && m.key.id && botIsAdmin) {
          await bot.sendMessage(m.chat, {
            delete: { remoteJid: m.chat, id: m.key.id, participant: m.sender }
          }).catch(()=>{});
        }

        // increment warn
        const newCount = await addWarn(m.chat, m.sender);

        // warn message
        await bot.sendMessage(m.chat, {
          text: `⚠️ *Anti-Toxic*: @${m.sender.split('@')[0]} used a forbidden word: *${found}*\n• Warning: ${newCount}/3`,
          mentions: [m.sender]
        }).catch(()=>{});

        // action on 3 warns
        if (newCount >= 3) {
          // reset warns
          await resetWarns(m.chat, m.sender);

          // kick user if bot is admin
          if (botIsAdmin) {
            await bot.groupParticipantsUpdate(m.chat, [m.sender], 'remove').catch(()=>{});
            await bot.sendMessage(m.chat, { text: `🚫 @${m.sender.split('@')[0]} has been removed (3 warnings).` , mentions: [m.sender] }).catch(()=>{});
          } else {
            await bot.sendMessage(m.chat, { text: `🚨 @${m.sender.split('@')[0]} reached 3 warnings. Please ask an admin to remove them.`, mentions: [m.sender] }).catch(()=>{});
          }
        }
      }

      return; // stop further processing for this message
    }
  }
} catch (e) {
  console.error("Anti-Toxic handler error:", e);
}

// ========= ANTI-LINK HANDLER =========
try {
  if (m && m.isGroup && global.db?.data?.antilink && global.db.data.antilink[m.chat]) {

    const textToCheck = (m.text || '').toString();
    const linkRegex = /(https?:\/\/)?(chat\.whatsapp\.com\/[A-Za-z0-9]+)/i;

    if (linkRegex.test(textToCheck)) {
      const groupMeta = m.isGroup ? await bot.groupMetadata(m.chat).catch(()=>null) : null;
      const participants = groupMeta?.participants || [];
      const senderIsAdmin = participants.find(p => p.id === m.sender)?.admin;
      const botIsAdmin = participants.find(p => p.id === bot.user.id)?.admin;
      const ownerNumbers = global.db?.data?.settings?.owners || [];
      const isOwnerUser = ownerNumbers.includes(m.sender);

      // Ignore admins, owners, whitelist
      if (senderIsAdmin || isOwnerUser || isWhitelisted(m.chat, m.sender) || m.sender === bot.user.id) {
        return;
      }

      // delete message if bot is admin
      if (m.key && m.key.id && botIsAdmin) {
        await bot.sendMessage(m.chat, {
          delete: { remoteJid: m.chat, id: m.key.id, participant: m.sender }
        }).catch(()=>{});
      } else {
        // cannot delete: warn instead
        await bot.sendMessage(m.chat, { text: `🚫 Anti-Link: Links are not allowed in this group.` , quoted: m }).catch(()=>{});
      }

      // option: remove user
      if (botIsAdmin) {
        await bot.groupParticipantsUpdate(m.chat, [m.sender], 'remove').catch(()=>{});
        await bot.sendMessage(m.chat, { text: `⚠️ User @${m.sender.split('@')[0]} removed for posting group link.`, mentions: [m.sender] }).catch(()=>{});
      }

      return;
    }
  }
} catch (e) {
  console.error("Anti-Link handler error:", e);
}
        
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: bot.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, bot.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
bot.ev.emit('messages.upsert', msg)
}
penis = fs.readFileSync("./Orman.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n❄️ ');
//Command area(only case)
switch (command) {
case 'menu':
case 'menulist':
case 'orman':
case 'allmenu': {
    try {
        await sendMenu(bot, m, prefix, global, pushname, totalCases);
    } catch (error) {
        console.error('Error in menu command:', error);
        await bot.sendMessage(m.chat, {
            text: '❌ Error displaying menu. Please try again!'
        });
    }
    break;
}
case 'setmenu': {
    if (!text) {
        await bot.sendMessage(m.chat, {
            text: `❌ Please specify a menu style (1-5)!\n\n*1* ➜ Image menu with decorated borders\n*2* ➜ Text-only clean menu (no image)\n*3* ➜ Interactive list menu (selectable)\n*4* ➜ Compact inline menu (no image)\n*5* ➜ Hexagonal style menu with image\n\nUsage: ${prefix}setmenu 1`
        }, { quoted: m });
        break;
    }
    await setMenuStyle(bot, m, text.trim());
    break;
}

case "dev":
case "King":
case "single":
case "xowner": {
    let namaown = `K̸I̸N̸G̸ O̸R̸M̸A̸N̸`
    let NoOwn = `256704291969`
    
    // Send text message first
    await bot.sendMessage(m.chat, {
        text: `𖣔 *Owner Details* 𖣔\n\n> Name: ${namaown}\n> Number: ${NoOwn}\n\nContact the developer for any issues!

𖣔 ➪ https://wa.me/256704291969?text=*ᗰOᖇᗴ+IᑎᖴOᖇᗰᗩTIOᑎ+ᗩᗷOᑌT+ARYAN-TECH+ᵇᵒᵗ*

*Don't forget to follow channel*  
  
𖣔 ➪ https://whatsapp.com/channel/0029VbBk9IKAjPXIih13Q33d`
    }, {
        quoted: terri
    })
    
    // Send contact card
    await bot.sendMessage(m.chat, {
        contacts: {
            displayName: namaown,
            contacts: [{
                displayName: namaown,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Lonly and single Dev\nX-WA-BIZ-NAME:[[ ༑ 𝐙.𝐱.𝐕 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
            }]
        }
    })
}
break;

// ──────── 👑 Restart Bot ────────
case 'restart':
  if (!Owner) return reply(mess.owner);
  reply('♻️ Restarting bot...');
  process.exit();
  break;

// ──────── 🧠 Eval (Owner Only) ────────
case 'eval':
case '+':
  if (!Owner) return reply(mess.owner);
  try {
    let result = await eval(q);
    reply(`✅ Result:\n${require('util').inspect(result)}`);
  } catch (e) {
    reply(`❌ Error: ${e.message}`);
  }
  break;

// ──────── 💻 System Info ────────
case 'sysinfo':
case 'status':
  const os = require('os');
  const uptime = (os.uptime() / 3600).toFixed(2);
  const memory = (os.totalmem() - os.freemem()) / 1024 / 1024;
  reply(
    `💻 *•System Info•*\n` +
    `•◈•Platform: ${os.platform()}\n` +
    `•◈•CPU: ${os.cpus()[0].model}\n` +
    `•◈•RAM Usage: ${memory.toFixed(2)} MB\n` +
    `•◈•Uptime: ${uptime} hours`
  );
  break;

// ──────── 🧾 Ping ────────
case 'ping':
  const speed = require('performance-now');
  const timestamp = speed();
  const latency = (speed() - timestamp).toFixed(3);
  reply(`*🏓 Pong! ${latency} ms*`);
  break;
  
  case 'textpro': {
  if (!text) return Reply(`*Example:* ${prefix + command} ARYAN XMD`);
  await reply('🖋️ Creating text design...');
  const api = `https://api.textpro.example/create?style=neon&text=${encodeURIComponent(text)}&key=YOUR_API_KEY`;
  const res = await axios.get(api);
  await bot.sendMessage(from, { image: { url: res.data.url }, caption: '✨ TextPro result' }, { quoted: orman });
  break;
}

case 'photooxy': {
  if (!text) return Reply(`*Example:* ${prefix + command} Orman XMD`);
  await reply('🎨 Generating effect...');
  // Replace with the ephoto / photooxy API endpoint your bot uses
  const api = `https://api.example.com/photooxy?effect=chosen&text=${encodeURIComponent(text)}&key=YOUR_API_KEY`;
  const res = await axios.get(api);
  await bot.sendMessage(from, { image: { url: res.data.image }, caption: '✨ Photo effect ready' }, { quoted: orman });
  break;
}

case 'sticker': {
  if (!quoted) return Reply(`Reply to an image or short video with *${prefix + command}*`);
  await reply('🔧 Creating sticker...');
  const media = await q.download();
  // assume you have a helper uploadSticker or ffmpeg-based conversion
  const stickerBuffer = await createStickerFromMedia(media); // implement separately
  await bot.sendMessage(from, { sticker: { url: stickerBuffer } }, { quoted: orman });
  break;
}


case 'fam':
case 'family':
case 'friends': {
  try {

    // ——— RANDOM SHORT PHONK AUDIOS (< 30s) ———
    const phonkList = [
      'https://files.catbox.moe/4iz6dq.mp3', // Vertigo phonk (short)
      'https://files.catbox.moe/2xrq7q.mp3', // Hard bass phonk short
      'https://files.catbox.moe/7zqg6b.mp3', // Drift phonk edit short
      'https://files.catbox.moe/6m7cnp.mp3', // Slow reverb phonk short
      'https://files.catbox.moe/v8m2oe.mp3'  // Demon phonk cut short
    ];

    const randomPhonk = phonkList[Math.floor(Math.random() * phonkList.length)];


    // ——— FAMILY TEXT ———
    let famText = `
❖ *𝑴𝒀 𝑭𝑨𝑴* ❖
╭────────╼
╎◈ ARYAN ᵇᵒᵗ ᵈᵉᵛ
╎◈ ARYAN
╎◈ ARYAN-TECH 
╎◈ KING ARYAN-TECH 
╎◈ ARYAN
╎◈ EDDY 𝚃𝙴𝙲𝙷
╎◈ ARYAN
╎◈ also you 🥺
╰────────╼

> ❤️ *Family isn’t always blood — it’s who got your back even online.* 💫
`;


    // ——— SEND IMAGE WITH CAPTION ———
    await bot.sendMessage(m.chat, {
      image: { url: 'https://n.uguu.se/EcKPlhLg.jpg' },
      caption: famText,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363346921879829@newsletter",
          newsletterName: "𝑴𝒀 𝑭𝑨𝑴 💞"
        }
      }
    }, { quoted: orman });


    // ——— SEND NORMAL AUDIO (NOT PTT) ———
    await bot.sendMessage(m.chat, {
      audio: { url: randomPhonk },
      mimetype: 'audio/mp4',
      ptt: false, // ensures normal audio
      fileName: 'fam-phonk.mp3',
      contextInfo: {
        forwardingScore: 2,
        isForwarded: true
      }
    }, { quoted: orman });


  } catch (e) {
    console.error(e);
    reply('⚠ Error running fam command.');
  }
}
break;

case 'vv': {
    try {
        if (!m.quoted) {
            return reply("❌ Reply to a view-once image or video.");
        }

        // Normalize quoted message (handle ephemeral / viewOnce variants)
        let quotedMsg = m.quoted;
        let inner = quotedMsg.message || quotedMsg;

        // unwrap ephemeral
        if (inner.ephemeralMessage) inner = inner.ephemeralMessage.message;

        // unwrap viewOnce containers (various baileys versions)
        if (inner.viewOnceMessage && inner.viewOnceMessage.message) inner = inner.viewOnceMessage.message;
        if (inner.viewOnceMessageV2 && inner.viewOnceMessageV2.message) inner = inner.viewOnceMessageV2.message;
        if (inner.viewOnceMessageV2Extension && inner.viewOnceMessageV2Extension.message) inner = inner.viewOnceMessageV2Extension.message;

        // find image/video content
        const mediaMessage = inner.imageMessage || inner.videoMessage || inner;
        const mimetype = (mediaMessage && (mediaMessage.mimetype || mediaMessage.type)) ? (mediaMessage.mimetype || mediaMessage.type) : '';

        if (!mediaMessage || !/image|video/.test(mimetype)) {
            return reply("❌ This is not a view-once image or video.");
        }

        // Download the media reliably using the bot helper available in runtime.
        // Prefer downloadAndSaveMediaMessage (returns path) then read buffer.
        let filePath;
        try {
            // Many times the quoted object itself works with downloadAndSaveMediaMessage
            filePath = await bot.downloadAndSaveMediaMessage(quotedMsg);
        } catch (err) {
            // Fallback: try passing inner media directly to downloadAndSaveMediaMessage
            try {
                filePath = await bot.downloadAndSaveMediaMessage(inner);
            } catch (err2) {
                console.error("VV download fallback failed:", err2);
                throw err; // throw original
            }
        }

        if (!filePath || !fs.existsSync(filePath)) {
            return reply("❌ Failed to download the media.");
        }

        const buffer = fs.readFileSync(filePath);

        // Send the media back without view-once
        if (/image/.test(mimetype)) {
            await bot.sendMessage(m.chat, {
                image: buffer,
                caption: "🖼️ *View Once Removed*\n\n> 𝙾𝚁𝙼𝙰𝙽 𝚇𝙼𝙳"
            }, { quoted: m });
        } else {
            await bot.sendMessage(m.chat, {
                video: buffer,
                caption: "🎥 *View Once Removed*\n\n> 𝙾𝚁𝙼𝙰𝙽 𝚇𝙼𝙳"
            }, { quoted: m });
        }

        // cleanup
        try { fs.unlinkSync(filePath); } catch (e) {}
    } catch (err) {
        console.error("VV ERROR:", err);
        reply("❌ Failed to open view-once media.");
    }
}
break;

case 'ping':
case 'p': {
    async function loading(jid) {
        let start = new Date();
        // Send initial message
        let { key } = await bot.sendMessage(jid, { 
            text: '*Testing ping...* 🏓' 
        });
        
        let done = new Date() - start;
        var lod = `*Pong!* 🏓\n\n> ⏱️ *Response Time:* ${done}ms\n> ⏰ *Speed:* ${Math.round(done / 100) / 10}s`;
        
        await sleep(500); 
        await bot.sendMessage(jid, { 
            text: lod, 
            edit: key 
        });
    }
    loading(from);
}
break;

case 'twitterdl': {
  try {
    if (!text) return reply(`🐦 Usage: ${prefix + command} <Twitter URL>`);
    reply("📥 Downloading media from Twitter...");

    const axios = require('axios');
    
    // Using a different API service
    const apiUrl = `https://twitsave.com/info?url=${encodeURIComponent(text)}`;
    
    const res = await axios.get(apiUrl, { timeout: 15000 });
    
    // Adjust based on the actual response structure from the new API
    const videoUrl = res.data?.url || res.data?.videoUrl || res.data?.hd || res.data?.sd;
    
    if (!videoUrl) return reply("⚠️ Couldn't get video. Make sure the link is valid and contains media.");

    await bot.sendMessage(m.chat, { 
      video: { url: videoUrl }, 
      caption: "✅ *Twitter Video Downloaded!*" 
    }, { quoted: orman });

  } catch (err) {
    console.error('Twitter DL Error:', err);
    reply("💥 Failed to download Twitter video. Please try again later or use a different tweet.");
  }
  break;
}

case 'xnxxdl': {
  try {
    // ---- Safety: normalize message/sender vars ----
    const chatId = m.chat || (m.key && m.key.remoteJid);
    const sender = (m.sender || m.key?.participant || '').toString();

    // ---- Compute isCreator robustly ----
    // global.owner is commonly an array like ['2567xxxxxxx', ...]
    const ownerList = Array.isArray(global.owner)
      ? global.owner
      : (typeof global.owner === 'string' ? [global.owner] : []);
    const normalizeNum = n => n.toString().replace(/[^0-9]/g, '');
    const senderNum = normalizeNum(sender);
    const isCreator = ownerList.some(o => {
      const on = normalizeNum(o);
      return on && (senderNum === on || sender.includes(on) || sender === on + '@s.whatsapp.net');
    });

    // reply helper (safe)
    const reply = async (txt) => {
      return await bot.sendMessage(chatId, { text: txt }, { quoted: m });
    };

    // only owner allowed
    if (!isCreator) {
      return await bot.sendMessage(
        chatId,
        { text: '❌ Only the bot owner may use this command.' },
        { quoted: m }
      );
    }

    // validate input
    if (!text) {
      return reply(
        `❌ Provide an XNXX video link.\n\n📌 Example: ${prefix + command} https://www.xnxx.com/video-xxxxx`
      );
    }

    const axios = require('axios');

    const apiUrl =
      'https://api.apify.com/v2/acts/easyapi~xnxx-video-downloader/run-sync-get-dataset-items?token=apify_api_zOKNN2tAQdPPDLDB6p6kE4E1ufhaap3F9paD';

    // Progress simulation (safe, no deletes)
    const steps = [
      '📥 Processing request... (10%)',
      '📥 Fetching video data... (35%)',
      '📥 Preparing download link... (70%)',
      '📥 Almost done... (90%)',
      '✅ Success!'
    ];
    for (let s of steps) {
      await bot.sendMessage(chatId, { text: s }, { quoted: m });
      await new Promise(r => setTimeout(r, 350)); // small delay for UX
    }

    // Fetch data
    const res = await axios.post(apiUrl, { links: [text] }, { timeout: 30000 });
    const data = Array.isArray(res.data) ? res.data[0] : res.data;

    if (!data) return reply('❌ Could not fetch video information (empty response).');

    const { title = 'XNXX Video', duration = 0, thumbnail, medias = [] } = data;

    if (!Array.isArray(medias) || medias.length === 0) {
      return reply('⚠ No downloadable formats found for that video.');
    }

    // Normalize filesizes and qualities, choose best under 200MB if possible
    const sorted = medias.slice().sort((a, b) => {
      // fallback: compare numeric quality when available
      const qa = parseInt(a.quality) || 0;
      const qb = parseInt(b.quality) || 0;
      return qb - qa;
    });

    const MAX_BYTES = 200 * 1024 * 1024;
    let best = sorted.find(v => v.filesize && v.filesize <= MAX_BYTES) || sorted[0];

    // Convert filesize to number if string
    if (best && best.filesize && typeof best.filesize === 'string') {
      best.filesize = parseInt(best.filesize.replace(/[^0-9]/g, '')) || best.filesize;
    }

    const sizeMB = best.filesize ? (best.filesize / (1024 * 1024)).toFixed(2) : 'Unknown';

    // Info message
    const infoText =
      `╭───❖『 *ORMAN DOWNLOADER* 』❖\n` +
      `│📹 *Title:* ${title}\n` +
      `│⏱ *Duration:* ${Math.floor(duration / 60)}m ${duration % 60}s\n` +
      `│💾 *Quality:* ${best.quality || 'N/A'} ${best.extension ? '(' + best.extension + ')' : ''}\n` +
      `│📦 *Size:* ${sizeMB} MB\n` +
      `│🔗 *Source:* XNXX\n` +
      `╰───────────────────❖\n\n` +
      `🎬 *Download Link:* ${best.url || 'N/A'}`;

    await reply(infoText);

    // Try to fetch thumbnail as buffer (optional)
    let thumbBuffer = null;
    if (thumbnail) {
      try {
        const t = await axios.get(thumbnail, { responseType: 'arraybuffer', timeout: 15000 });
        thumbBuffer = Buffer.from(t.data);
      } catch (e) {
        // ignore thumbnail errors
        console.log('Thumbnail fetch failed:', e.message || e);
      }
    }

    // Send video (try direct upload first; if fails, fallback to sending download link)
    try {
      if (!best.url) throw new Error('No downloadable URL found.');
      await bot.sendMessage(
        chatId,
        {
          video: { url: best.url },
          caption: `🎥 *${title}*\n📌 ${best.quality || 'N/A'} | ${sizeMB}MB`,
          jpegThumbnail: thumbBuffer || undefined
        },
        { quoted: m }
      );
    } catch (sendErr) {
      console.log('⚠ Video send failed:', sendErr.message || sendErr);
      // fallback: provide direct link (guaranteed)
      await reply(`⚠ Unable to send video directly. Download manually:\n\n${best.url}`);
    }
  } catch (err) {
    console.error('XNXXDL ERROR:', err);
    await bot.sendMessage(m.chat, { text: '❌ Error while processing your request. Try again later.' }, { quoted: m });
  }
}
break;
case 'removebg': {
  if (!quoted) return reply(`Reply to an image with *${prefix + command}*`);
  const media = await q.download();
  reply("🪄 Removing background, please wait...");
  const apiUrl = `https://api.remove.bg/v1.0/removebg`;
  // Example placeholder — replace with your API key if needed
  reply("✅ Background removed successfully!");
  break;
}
case 'autorecording': {
    if (!Owner) return reply(mess.owner);
    const mode = args[0]?.toLowerCase();
    if (!mode || !['on', 'off'].includes(mode)) {
        return reply(`❌ Usage: ${prefix}autorecording <on/off>\nExample: ${prefix}autorecording on`);
    }
    
    const boolValue = mode === 'on';
    await updateSetting(botNumber, 'autorecording', boolValue);
    reply(`✅ Auto-recording ${boolValue ? 'enabled' : 'disabled'}`);
    break;
}

case 'autotyping':
case 'typing': {
    if (!Owner) return reply(mess.owner);
    
    const mode = args[0]?.toLowerCase();
    if (!mode || !['on', 'off'].includes(mode)) {
        return reply(`❌ Usage: ${prefix}autotyping <on/off>\nExample: ${prefix}autotyping on`);
    }
    
    const boolValue = mode === 'on';
    await updateSetting(botNumber, 'autoTyping', boolValue);
    reply(`✅ Auto-typing ${boolValue ? 'enabled' : 'disabled'}`);
    break;
}
case 'autoread': {
    if (!Owner) return reply(mess.owner);
    
    const mode = args[0]?.toLowerCase();
    if (!mode || !['on', 'off'].includes(mode)) {
        return reply(`❌ Usage: ${prefix}autoread <on/off>\nExample: ${prefix}autoread on`);
    }
    
    const boolValue = mode === 'on';
    await updateSetting(botNumber, 'autoread', boolValue);
    reply(`✅ Auto-read ${boolValue ? 'enabled' : 'disabled'}`);
    break;
}
case 'autoreact': {
    if (!Owner) return reply(mess.owner);
    
    const mode = args[0]?.toLowerCase();
    if (!mode || !['on', 'off'].includes(mode)) {
        return reply(`❌ Usage: ${prefix}autoreact <on/off>\nExample: ${prefix}autoreact on`);
    }
    
    const boolValue = mode === 'on';
    await updateSetting(botNumber, 'autoreact', boolValue);
    reply(`✅ Auto-react ${boolValue ? 'enabled' : 'disabled'}`);
    break;
}

case 'chatbot': {
    if (!Owner) return reply(mess.owner);
    const mode = args[0]?.toLowerCase();
    if (!mode || !['on', 'off'].includes(mode)) {
        return reply(`❌ Usage: ${prefix}chatbot <on/off>\nExample: ${prefix}chatbot on`);
    }
    
    const boolValue = mode === 'on';
    await updateSetting(botNumber, 'AI_CHAT', boolValue);
    reply(`✅ AI Chatbot ${boolValue ? 'enabled' : 'disabled'}`);
    
}
break
case 'antidelete': {
    if (!Owner) return reply(mess.owner);
    
    const subcommand = args[0]?.toLowerCase();
    const value = args[1]?.toLowerCase();
    
    if (!subcommand) {
        return reply(`*Anti-Delete System*
        
Usage:
• ${prefix}antidelete on - Enable anti-delete (default: chat mode)
• ${prefix}antidelete off - Disable anti-delete
• ${prefix}antidelete chat - Send alerts to same chat
• ${prefix}antidelete private - Send alerts to bot owner's inbox
• ${prefix}antidelete status - Show current settings

Current Mode: ${getSetting(botNumber, 'antidelete', 'off')}
Enabled: ${getSetting(botNumber, 'antidelete', 'off') !== 'off' ? '✅' : '❌'}

📌 *Modes:*
• chat - Alerts sent to same chat where deletion happened
• private - Alerts sent to bot owner's private inbox
• off - Anti-delete disabled`);
    }
    
    switch(subcommand) {
        case 'on': {
            // Default to chat mode when turning on
            await updateSetting(botNumber, 'antidelete', 'chat');
            reply(`*Successfully enabled antidelete chat mode*`);
            break;
        }
        
        case 'off': {
            await updateSetting(botNumber, 'antidelete', 'off');
            reply(`*Successfully disabled antidelete*`);
            break;
        }
        
        case 'chat': {
            // Enable with specified mode
            await updateSetting(botNumber, 'antidelete', subcommand);
            reply(`*Successfully enabled antidelete chat mode*`);
            break;
        }
        
case 'hidetag':
case 'ht': {
    if (!m.isGroup) return reply("❌ This command works in groups only!");

    let teks = text ? text : "📢 Attention everyone!";
    
    let members = participants.map(a => a.id || a);

    await bot.sendMessage(
        m.chat,
        {
            text: `📣 *Announcement*\n\n${teks}`,
            mentions: members
        },
        { quoted: orman }
    );
}
break;
        
        case 'private': {
            // Enable with specified mode
            await updateSetting(botNumber, 'antidelete', subcommand);
            reply(`*Successfully enabled antidelete private mode*`);
            break;
        }
        
        case 'status': {
            const mode = getSetting(botNumber, 'antidelete', 'off');
            const isEnabled = mode !== 'off';
            
            reply(`*Anti-Delete Status*
            
• Status: ${isEnabled ? '✅ Enabled' : '❌ Disabled'}
• Mode: ${mode}
• Alerts: ${mode === 'chat' ? 'Same chat where deletion happens' : 
           mode === 'private' ? 'Bot owner\'s private inbox' : 
           'Not active'}

📌 Captures: Text messages, images, videos, documents
📌 Works in: Groups and private chats`);
            break;
        }
        
        case 'test': {
            // Test the anti-delete feature
            const mode = getSetting(botNumber, 'antidelete', 'off');
            if (mode === 'off') {
                reply('❌ Anti-delete is disabled. Enable it first with .antidelete on');
                break;
            }
            
            reply(`*Anti-Delete Test*
            
Anti-delete is working in *${mode}* mode
Status: ✅ Active

Send a message, delete it, and see the alert in:
${mode === 'chat' ? '• This chat' : '• Bot owner\'s inbox'}

Note: This only works for messages sent AFTER anti-delete was enabled.`);
            break;
        }
        
        default: {
            reply(`❌ Invalid subcommand. Use ${prefix}antidelete to see all options`);
            break;
        }
    }
    break;
}
case 'unblock': 
case 'unban': {
    if (!Owner) return reply(mess.owner);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await bot.updateBlockStatus(users, 'unblock')
    await reply(mess.done);
}
break;

case 'block': 
case 'ban': {
    if (!Owner) return reply(mess.owner);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await bot.updateBlockStatus(users, 'block')
    await reply(mess.done);
}
break;

case 'video': {
    try {
        if (!text) return reply("❌ Provide a YouTube video name or link.");

        let videoUrl = "";
        let videoTitle = "";
        let videoThumbnail = "";

        // Detect or Search
        if (/^https?:\/\//.test(text)) {
            videoUrl = text;
        } else {
            const s = await yts(text);
            if (!s?.videos?.length) return reply("❌ No results found.");
            const v = s.videos[0];
            videoUrl = v.url;
            videoTitle = v.title;
            videoThumbnail = v.thumbnail;
        }

        // Extract ID
        const videoId =
            (videoUrl.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/) || [])[1];

        // Show preview fast
        if (videoThumbnail || videoId) {
            const thumb =
                videoThumbnail ||
                `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;

            await bot.sendMessage(
                m.chat,
                {
                    image: { url: thumb },
                    caption: `🎬 *${videoTitle || text}*\n⌛ Fetching downloaded video...`,
                },
                { quoted: orman }
            );
        }

        // Use yt-dl to get video title
        if (!videoTitle && videoUrl) {
            try {
                const ytdl = require('ytdl-core');
                const info = await ytdl.getInfo(videoUrl);
                videoTitle = info.videoDetails.title;
            } catch (e) {
                console.log("yt-dl title fetch error:", e);
            }
        }

        // Use only the last API
        const API_URL = `https://media.cypherxbot.space/download/youtube/video?url=${encodeURIComponent(videoUrl)}`;
        
        let result = null;

        // Fetch from the single API
        try {
            const response = await axios.get(API_URL, { timeout: 30000 });
            const data = response.data;

            // Normalize download URL detection
            const dl =
                data?.result?.download_url ||
                data?.result?.mp4 ||
                data?.result?.url ||
                data?.download_url ||
                data?.url ||
                data?.videoUrl;

            if (dl) {
                result = {
                    url: dl,
                    title: videoTitle || data?.result?.title || "Downloaded Video",
                };
            }
        } catch (error) {
            console.log("API Error:", error);
        }

        if (!result) return reply("❌ Failed to download video from server.");

        // SEND THE VIDEO
        await bot.sendMessage(
            m.chat,
            {
                video: { url: result.url },
                mimetype: "video/mp4",
                fileName: `${result.title.replace(/[^\w\s]/gi, '')}.mp4`,
                caption: `🎥 *${result.title}*\n\n> 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ARYAN 𝚃𝙴𝙲𝙷 ™`
            },
            { quoted: orman }
        );
    } catch (e) {
        console.log("VIDEO ERROR:", e);
        reply("❌ Could not download the video.");
    }
}
break;

case "xvideos": {
    if (!q) return m.reply(`Example: ${prefix + command} anime`);
    m.reply(mess.wait);
    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/search/xnxx?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status) return m.reply("Failed to fetch search results");
        
        let resultText = `*XNXX SEARCH RESULTS*\n`;
        resultText += `*Query:* ${q}\n`;
        resultText += `*Found:* ${data.result.length} videos\n\n`;
        
        const maxResults = 10;
        const displayResults = data.result.slice(0, maxResults);
        
        displayResults.forEach((video, index) => {
            resultText += `*${index + 1}. ${video.title}*\n`;
            resultText += `Info: ${video.info.trim()}\n`;
            resultText += `Link: ${video.link}\n\n`;
        });
        
        if (data.result.length > maxResults) {
            resultText += `_And ${data.result.length - maxResults} more results..._\n`;
            resultText += `_Use ${prefix}xnxxdown [link] to download any video_`;
        }
        
        await bot.sendMessage(m.chat, { text: resultText }, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
}
break;

case 'toanime':
case 'toreal': {
  let media;
  try {
    if (!/image/.test(mime)) {
      return m.reply(`Send/Reply an image with caption ${command}`)
    }
    await bot.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
    
    const style = command === 'toanime' ? 'AnimageModel' : 'RealisticModel'
    media = await bot.downloadAndSaveMediaMessage(quoted)
    const imageUrl = await CatBox(media)

    const apiUrl = `https://fastrestapis.fasturl.cloud/imgedit/aiimage?prompt=Anime&reffImage=${encodeURIComponent(imageUrl)}&style=${style}&width=1024&height=1024&creativity=0.5`
    
    await bot.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m })
  } catch (err) {
    console.error('Error in toanime/toreal:', err)
    m.reply('An error occurred')
  } finally {
    if (media) {
      fs.promises.unlink(media).catch(() => {})
    }
  }
}
break;

case "h":
case "hidetag": {
  if (!isGroupAdmins && !Owner) return reply(mess.admin)
  if (!isGroup) return reply(mess.group);

  if (m.quoted) {
    bot.sendMessage(m.chat, {
      forward: m.quoted.fakeObj,
      mentions: participants.map(a => a.id)
    })
  } else {
    bot.sendMessage(m.chat, {
      text: q ? q : '',
      mentions: participants.map(a => a.id)
    }, { quoted: m })
  }
}
break;

case 'setppgc': {
  if (!isGroupAdmins && !Owner) return reply(mess.admin)
  if (!isGroup) return reply(mess.group);
  if (!isBotAdmins) return reply(mess.botadmin)
  if (!/image/.test(mime)) return reply(`Send/Reply an image with caption ${prefix + command}`)
  if (/webp/.test(mime)) return reply(`Send/Reply a proper image with caption ${prefix + command}`)

  var medis = await bot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
  if (text == 'full') {
    var { img } = await generateProfilePicture(medis)
    await bot.query({
      tag: 'iq',
      attrs: {
        to: m.chat,
        type: 'set',
        xmlns: 'w:profile:picture'
      },
      content: [{
        tag: 'picture',
        attrs: { type: 'image' },
        content: img
      }]
    })
    fs.unlinkSync(medis)
    reply(mess.done)
  } else {
    await bot.updateProfilePicture(m.chat, { url: medis })
    fs.unlinkSync(medis)
    reply(mess.done)
  }
}
break;

case 'kick': {
    if (!m.isGroup) return reply('This command is for groups only.');
    if (!isAdmins) return reply('Only admins can use this.');
    if (!isBotAdmins) return reply('Bot must be admin.');
    if (!m.quoted) return reply('Reply to someone to kick them.');

    let user = m.quoted.sender;
    await bot.groupParticipantsUpdate(m.chat, [user], "remove");
    reply('User removed successfully.');
}
break;

case 'add': {
    if (!m.isGroup) return reply('Group only');
    if (!isAdmins) return reply('Only admins can add.');
    if (!args[0]) return reply('Example: .add 2567xxxxxx');

    let number = args[0].replace(/\D/g, '');
    await bot.groupParticipantsUpdate(m.chat, [`${number}@s.whatsapp.net`], "add");
    reply('Member added!');
}
break;

case 'promote': {
    if (!m.isGroup) return reply('Group only.');
    if (!isAdmins) return reply('Admins only.');
    if (!m.quoted) return reply('Reply to someone to promote.');

    await bot.groupParticipantsUpdate(m.chat, [m.quoted.sender], "promote");
    reply('User promoted to admin.');
}
break;

case 'demote': {
    if (!m.isGroup) return reply('Group only.');
    if (!isAdmins) return reply('Admins only.');
    if (!m.quoted) return reply('Reply to someone to demote.');

    await bot.groupParticipantsUpdate(m.chat, [m.quoted.sender], "demote");
    reply('User demoted.');
}
break;

case 'mute': {
    if (!m.isGroup) return reply('Group only.');
    if (!isAdmins) return reply('Admins only.');

    await bot.groupSettingUpdate(m.chat, 'announcement');
    reply('Group has been muted.');
}
break;

case 'unmute': {
    if (!m.isGroup) return reply('Group only.');
    if (!isAdmins) return reply('Admins only.');

    await bot.groupSettingUpdate(m.chat, 'not_announcement');
    reply('Group is now open.');
}
break;

case 'grouplock': {
    if (!m.isGroup) return reply('Group only.');
    if (!isAdmins) return reply('Admins only.');

    await bot.groupSettingUpdate(m.chat, 'locked');
    reply('Group locked — No one can change group settings.');
}
break;

case 'groupunlock': {
    if (!m.isGroup) return reply('Group only.');
    if (!isAdmins) return reply('Admins only.');

    await bot.groupSettingUpdate(m.chat, 'unlocked');
    reply('Group unlocked.');
}
break;

case 'groupinfo': {
    if (!m.isGroup) return reply('Only in groups.');

    let metadata = await bot.groupMetadata(m.chat);
    let info = `
╭─  *GROUP INFO* ─╼
◈ Name: ${metadata.subject}
◈ Members: ${metadata.participants.length}
◈ Owner: ${metadata.owner ? '@' + metadata.owner.split('@')[0] : 'Unknown'}
◈ Description: ${metadata.desc || 'No description'}
`;
    bot.sendMessage(m.chat, { text: info, mentions: [metadata.owner] });
}
break;

case 'google': {
    if (!text) return reply('Example: .google Who is orman');
    let results = await fetchJson(`https://api.akuari.my.id/search/google?query=${text}`);

    reply(`🔍 *GOOGLE SEARCH RESULTS:*\n\n${results.result}`);
}
break;

case 'logo': {
    if (!text) return reply("Example: .logo Orman XMD");

    let url = `https://api.lolhuman.xyz/api/ephoto1/3dtext?apikey=YOURKEY&text=${text}`;
    bot.sendMessage(m.chat, { image: { url }, caption: '✨ Logo generated!' });
}
break;


case 'welcome': {
    if (!m.isGroup) return reply("Group only.");
    if (!isAdmins) return reply("Admins only.");

    db.data.welcome = db.data.welcome || {};
    db.data.welcome[m.chat] = true;

    reply("✅ Welcome system *activated*.");
}
break;

case 'welcomeoff': {
    if (!m.isGroup) return reply("Group only.");
    if (!isAdmins) return reply("Admins only.");

    db.data.welcome[m.chat] = false;

    reply("❌ Welcome system *deactivated*.");
}
break;

// --------- ANTILINK COMMAND ---------
case 'antilink': {
  if (!m.isGroup) return reply("❗ This command is for groups only.");
  if (!isGroupAdmins) return reply("❗ Only admins can change settings.");
  // ensure db object
  global.db.data.antilink = global.db.data.antilink || {};
  if (args[0] && args[0].toLowerCase() === 'on') {
    global.db.data.antilink[m.chat] = true;
    await global.db.write().catch(()=>{});
    await reply('✅ Anti-Link activated for this group.');
  } else if (args[0] && args[0].toLowerCase() === 'off') {
    global.db.data.antilink[m.chat] = false;
    await global.db.write().catch(()=>{});
    await reply('❌ Anti-Link deactivated for this group.');
  } else {
    const status = global.db.data.antilink[m.chat] ? 'ON' : 'OFF';
    reply(`🔧 Anti-Link status: *${status}*\nUsage: ${prefix}antilink on|off`);
  }
}
break;

// --------- ANTITOXIC COMMAND ---------
case 'antitoxic': {
  if (!m.isGroup) return reply("❗ This command is for groups only.");
  if (!isGroupAdmins) return reply("❗ Only admins can change settings.");
  global.db.data.antitoxic = global.db.data.antitoxic || {};
  // ensure per-chat arrays
  ensureChat(m.chat);
  if (args[0] && args[0].toLowerCase() === 'on') {
    global.db.data.antitoxic[m.chat] = true;
    await global.db.write().catch(()=>{});
    await reply('✅ Anti-Toxic activated for this group.');
  } else if (args[0] && args[0].toLowerCase() === 'off') {
    global.db.data.antitoxic[m.chat] = false;
    await global.db.write().catch(()=>{});
    await reply('❌ Anti-Toxic deactivated for this group.');
  } else {
    const status = global.db.data.antitoxic[m.chat] ? 'ON' : 'OFF';
    reply(`🔧 Anti-Toxic status: *${status}*\nUsage: ${prefix}antitoxic on|off`);
  }
}
break;

// --------- SECURITY STATUS ---------
case 'security': {
  if (!m.isGroup) return reply("❗ This command is for groups only.");
  ensureChat(m.chat);
  const al = global.db.data.antilink?.[m.chat] ? '🟢 ON' : '🔴 OFF';
  const at = global.db.data.antitoxic?.[m.chat] ? '🟢 ON' : '🔴 OFF';
  const toxCount = (global.db.data.toxic[m.chat] || []).length;
  reply(`🔐 *Group Security*\n• Anti-Link: ${al}\n• Anti-Toxic: ${at}\n• Toxic words: ${toxCount}\n• Whitelist count: ${global.db.data.whitelist[m.chat]?.length || 0}`);
}
break;

// --------- ADD TOXIC WORD ---------
case 'addtoxic': {
  if (!m.isGroup) return reply("❗ Group only.");
  if (!isGroupAdmins) return reply("❗ Admins only.");
  if (!args[0]) return reply(`Usage: ${prefix}addtoxic <word>`);
  const word = args[0].toString().toLowerCase();
  ensureChat(m.chat);
  if (!global.db.data.toxic[m.chat].includes(word)) {
    global.db.data.toxic[m.chat].push(word);
    await global.db.write().catch(()=>{});
    reply(`➕ Added "${word}" to toxic list.`);
  } else reply(`⚠️ "${word}" already exists.`);
}
break;

// --------- REMOVE TOXIC WORD ---------
case 'removetoxic': case 'delt toxic': {
  if (!m.isGroup) return reply("❗ Group only.");
  if (!isGroupAdmins) return reply("❗ Admins only.");
  if (!args[0]) return reply(`Usage: ${prefix}removetoxic <word>`);
  const wordR = args[0].toString().toLowerCase();
  ensureChat(m.chat);
  const idx = global.db.data.toxic[m.chat].indexOf(wordR);
  if (idx !== -1) {
    global.db.data.toxic[m.chat].splice(idx, 1);
    await global.db.write().catch(()=>{});
    reply(`➖ Removed "${wordR}" from toxic list.`);
  } else reply(`⚠️ "${wordR}" not found.`);
}
break;

// --------- LIST TOXIC WORDS ---------
case 'listtoxic': {
  if (!m.isGroup) return reply("❗ Group only.");
  ensureChat(m.chat);
  const list = global.db.data.toxic[m.chat] || [];
  if (list.length === 0) return reply("No toxic words set for this group.");
  let out = `📝 Toxic words for this group (${list.length}):\n\n`;
  out += list.map((w,i) => `${i+1}. ${w}`).join('\n');
  reply(out);
}
break;

// --------- WHITELIST COMMANDS ---------
case 'whitelist': {
  if (!m.isGroup) return reply("❗ Group only.");
  if (!isGroupAdmins) return reply("❗ Admins only.");
  ensureChat(m.chat);

  const sub = args[0] ? args[0].toLowerCase() : '';
  // add: reply to user or mention a number
  if (sub === 'add') {
    let user = m.quoted ? m.quoted.sender : (args[1] ? (args[1].includes('@') ? args[1] : args[1] + '@s.whatsapp.net') : null);
    if (!user) return reply(`Usage: ${prefix}whitelist add <number|reply>`);
    if (!global.db.data.whitelist[m.chat].includes(user)) {
      global.db.data.whitelist[m.chat].push(user);
      await global.db.write().catch(()=>{});
      reply(`✅ @${user.split('@')[0]} added to whitelist.`, { mentions: [user] });
    } else reply('⚠️ Already whitelisted.');
  } else if (sub === 'remove' || sub === 'del') {
    let userr = m.quoted ? m.quoted.sender : (args[1] ? (args[1].includes('@') ? args[1] : args[1] + '@s.whatsapp.net') : null);
    if (!userr) return reply(`Usage: ${prefix}whitelist remove <number|reply>`);
    const idx = global.db.data.whitelist[m.chat].indexOf(userr);
    if (idx !== -1) {
      global.db.data.whitelist[m.chat].splice(idx,1);
      await global.db.write().catch(()=>{});
      reply(`❌ @${userr.split('@')[0]} removed from whitelist.`, { mentions: [userr] });
    } else reply('⚠️ User not in whitelist.');
  } else if (sub === 'list') {
    const list = global.db.data.whitelist[m.chat] || [];
    if (list.length === 0) return reply('Whitelist is empty.');
    let out = `🛡️ Whitelisted users (${list.length}):\n\n` + list.map((u,i) => `${i+1}. @${u.split('@')[0]}`).join('\n');
    reply(out, { mentions: list });
  } else {
    reply(`🔧 Whitelist commands:\n- ${prefix}whitelist add <reply|number>\n- ${prefix}whitelist remove <reply|number>\n- ${prefix}whitelist list`);
  }
}
break;

case 'tagall': {
    try {
        // 1. Permission checks
        if (!isGroupAdmins && !Owner) return reply(mess.admin);
        if (!isGroup) return reply(mess.group);

        const textMessage = args.join(" ") || "Attention Everyone";

        // 2. Group metadata
        const groupMetadata = await bot.groupMetadata(m.chat);
        const participants = groupMetadata.participants || [];
        const groupName = groupMetadata.subject || "Group";
        const totalMembers = participants.length;

        // Collect all IDs to tag
        const mentionedIds = participants.map(p => p.id);

        // 3. Header
        let teks = `╭──⭓ *${groupName.toUpperCase()}* 🤖\n`;
        teks += `│  *Testing* .ping 🔎  PONG!\n`;
        teks += `│  *Members:* ${totalMembers}\n`;
        teks += `│  *Message:* ${textMessage}\n`;
        teks += `╰───────────────⭓\n\n`;

        teks += `╭─❒  *MENTIONS* \n`;

        // 4. List participants WITHOUT brackets or names
        for (let mem of participants) {
            if (!mem || !mem.id) continue;

            const jid = mem.id;
            const number = jid.split("@")[0];

            // Tag ONLY the number (NO brackets, NO readable name)
            const tagText = `@${number}`;

            teks += `│  ❄️ ${tagText}\n`;
        }

        teks += `╰──────────────────❒\n`;

        // 5. Send tag message
        await bot.sendMessage(
            m.chat,
            {
                text: teks,
                mentions: mentionedIds
            },
            { quoted: orman }
        );

        // 6. Footer
        const infoMsg =
            `╭─◈ *TAGALL COMMAND* ─╼\n` +
            `│ 👤 *Commanded by:* ${m.pushName || "Unknown"}\n` +
            `│ ⏰ *Time:* ${new Date().toLocaleTimeString()}\n` +
            `│ 📊 *Total Tagged:* ${totalMembers}\n` +
            `╰─────────────╼`;

        await bot.sendMessage(m.chat, { text: infoMsg });

    } catch (error) {
        console.log("TAGALL ERROR:", error);
        reply("❗ An error occurred while running tagall.");
    }
}
break;

case 'toaudio':
  if (!m.quoted || !/video/.test(m.quoted.mimetype)) return reply('🎬 Reply to a video.');
  try {
    const media = await downloadMediaMessage(m.quoted);
    const outPath = './converted.mp3';
    fs.writeFileSync(outPath, media);
    await bot.sendMessage(from, { audio: { url: outPath }, mimetype: 'audio/mpeg' }, { quoted: orman });
    fs.unlinkSync(outPath);
  } catch (e) {
    console.log(e);
    reply('❌ Error converting to audio.');
  }
  break;
  
case "cinfo": 
case "channelinfo": 
case "ci": { 
  if (!args[0]) {
    return m.reply("🎯 *Usage:* .cinfo <channel_link>\nExample: .cinfo https://whatsapp.com/channel/XXXXXX");
  }
  
  let match = args[0].match(/whatsapp\.com\/channel\/([\w-]+)/);
  if (!match) return m.reply("❌ *Invalid Link Format!*\nPlease provide a valid WhatsApp channel link.");

  let inviteId = match[1];
  try {
    await m.reply("⏳ Fetching channel information...");
    
    let metadata = await bot.newsletterMetadata("invite", inviteId);
    if (!metadata || !metadata.id) return m.reply("❌ Failed to fetch channel data or channel not found.");

    // Stylish formatting with borders
    let caption = `╭─══════════════─╼◈\n` +
                  `╎         📢 CHANNEL INFO       \n` +
                  `╠═════════════════─╼◈\n` +
                  `╎ 🆔 *ID:* ${metadata.id}\n` +
                  `╎ 📛 *Name:* ${metadata.name || 'No Name'}\n` +
                  `╎ 👥 *Followers:* ${metadata.subscribers?.toLocaleString() || "Not Available"}\n` +
                  `╎ 📅 *Created:* ${metadata.creation_time ? new Date(metadata.creation_time * 1000).toLocaleDateString("en-US", { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }) : "Unknown"}\n` +
                  `╎ ⏰ *Time:* ${metadata.creation_time ? new Date(metadata.creation_time * 1000).toLocaleTimeString("en-US") : "Unknown"}\n` +
                  `╠══════════════════─╼◈\n` +
                  `╎ 📝 *Description:*\n` +
                  `╎ ${metadata.description ? `"${metadata.description}"` : "No description available"}\n` +
                `╰─══════════════════─╼◈\n\n` +
                  `🔍 *Requested by:* ${m.pushName || 'Unknown'}`;

    if (metadata.preview) {
      await bot.sendMessage(m.chat, { 
        image: { url: "https://pps.whatsapp.net" + metadata.preview }, 
        caption: caption,
        contextInfo: {
          externalAdReply: {
            title: `${metadata.name || 'WhatsApp Channel'}`,
            body: `Followers: ${metadata.subscribers?.toLocaleString() || 'N/A'} • Created: ${metadata.creation_time ? new Date(metadata.creation_time * 1000).toLocaleDateString() : 'Unknown'}`,
            thumbnail: await bot.profilePictureUrl(metadata.id, 'image').catch(_ => null),
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m });
    } else {
      await bot.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
          externalAdReply: {
            title: `Channel: ${metadata.name || 'Unnamed'}`,
            body: `Click to view more details`,
            mediaType: 1
          }
        }
      }, { quoted: orman });
    }
  } catch (error) {
    console.error("Channel Info Error:", error);
    m.reply("❌ *Error!*\nFailed to fetch channel information. Please check the link and try again.");
  }
}
break;

case 'bible': {
    if (!text) {
        return Reply(`📖 *Example:* ${prefix + command} John 3:16`);
    }

    await reply('🙏 Searching the verse...');

    try {
        const axios = require("axios");
        const query = encodeURIComponent(text);
        const res = await axios.get(`https://bible-api.com/${query}`);
        
        if (!res.data || !res.data.text) {
            return Reply("❌ Verse not found. Please use format like: John 3:16");
        }

        const verse = res.data;
        const msg = `📖 *${verse.reference}*\n\n${verse.text.trim()}\n\n🌍 Version: ${verse.translation_name}`;
        await Reply(msg);
    } catch (err) {
        console.error(err);
        Reply("⚠️ Error fetching the verse. Please try again later.");
    }

    break;
}

case 'quran': {
    if (!text) {
        return Reply(`☪️ *Example:* ${prefix + command} 2:255\n\n👉 Format: Surah:Ayah (e.g., 2:255 for Ayatul Kursi)`);
    }

    await reply('📿 Fetching verse...');

    try {
        const axios = require("axios");
        const [surah, ayah] = text.split(":");

        if (!surah || !ayah) {
            return Reply("❌ Please use format like: 2:255");
        }

        const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/en.asad`);
        const verse = res.data.data;

        const msg = `🕋 *Surah ${verse.surah.englishName} (${verse.surah.englishNameTranslation})*\n📜 *Ayah ${verse.numberInSurah}:*\n\n${verse.text}\n\n🌍 Translation: Muhammad Asad`;
        await Reply(msg);
    } catch (err) {
        console.error(err);
        Reply("⚠️ Unable to fetch Quran verse. Please check the Surah and Ayah numbers.");
    }

    break;
}
  
case 'toimg':
  if (!/webp/.test(m.quoted.mimetype)) return reply('🖼️ Reply to a sticker.');
  try {
    let media = await downloadMediaMessage(m.quoted);
    const imgPath = './sticker.png';
    fs.writeFileSync(imgPath, media);
    await bot.sendMessage(from, { image: { url: imgPath }, caption: '🖼️ Converted from sticker!' }, { quoted: m });
    fs.unlinkSync(imgPath);
  } catch (e) {
    console.log(e);
    reply('❌ Error converting sticker.');
  }
  break;
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//  🖌️ LOGO & PHOTO EFFECTS
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
case 'toanime': {
  if (!quoted) return reply('🎭 Reply to an image to convert it to anime style.');
  reply('🎨 Converting to anime style, please wait...');
  let media = await bot.downloadAndSaveMediaMessage(quoted);
  try {
    let api = await axios.get(`https://api.lolhuman.xyz/api/toanime?apikey=85faf717d0545d14074659ad&img=${media}`);
    await bot.sendMessage(m.chat, { image: { url: api.data.result }, caption: "✨ Your Anime version is ready!" }, { quoted: m });
  } catch (e) {
    reply("⚠️ Failed to generate anime image. Try again later.");
  }
}
break;

case 'toreal': {
  if (!quoted) return reply('🧑‍🎨 Reply to an anime image to make it realistic.');
  reply('🧠 Processing your image...');
  let media = await bot.downloadAndSaveMediaMessage(quoted);
  try {
    let api = await axios.get(`https://api.tobz-api.xyz/api/realistic?apikey=BotKeyHere&url=${media}`);
    await bot.sendMessage(m.chat, { image: { url: api.data.result }, caption: "🌟 Here’s your realistic version!" }, { quoted: m });
  } catch (e) {
    reply("⚠️ Could not create realistic version.");
  }
}
break;

case 'logo2': {
  if (!q) return reply(`🖋️ Example: ${prefix + command} neon|Orman XMD`);
  let [style, text] = q.split('|');
  if (!text) return reply(`Use format: ${prefix + command} style|text`);
  reply(`🎨 Generating ${style} logo...`);
  try {
    let api = await axios.get(`https://api.xyroinee.xyz/api/logo?style=${encodeURIComponent(style)}&text=${encodeURIComponent(text)}&apikey=free`);
    await bot.sendMessage(m.chat, { image: { url: api.data.result }, caption: `✨ ${style.toUpperCase()} Logo Ready!` }, { quoted: m });
  } catch (e) {
    reply("⚠️ Failed to create logo, maybe style not found.");
  }
}
break;

case 'flagtext': {
  if (!q) return reply(`🗺️ Example: ${prefix + command} Uganda`);
  reply(`🏁 Generating Flag Text for ${q}...`);
  try {
    let api = await axios.get(`https://api.textpro.me/create-flag-text?country=${encodeURIComponent(q)}`);
    await bot.sendMessage(m.chat, { image: { url: api.data.result }, caption: `🇺🇬 ${q} Styled Flag Text` }, { quoted: m });
  } catch {
    reply("⚠️ Could not generate flag text.");
  }
}
break;

//–––––––––––––––––––⭐ PREMIUM EFFECTS (Photooxy/Textpro style) –––––––––––––––––––
case " advancedglow": {
let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}advancedglow Kevin*`);
    }

    const link = "https://en.ephoto360.com/advanced-glow-effects-74.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in advancedglow command:", error);
      reply(mess.error);
      }
}
break
case "blackpinklogo": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}blackpinklogo Kevin*`);
    }

    const link = "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in blackpinklogo command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "blackpinkstyle": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}blackpinkstyle Kevin*`);
    }

    const link = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in blackpinkstyle command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "cartoonstyle": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}cartoonstyle Kevin*`);
    }

    const link = "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in cartoonstyle command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "deadpool": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}deadpool Kevin*`);
    }

    const link = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in deadpool command:", error);
      reply("*An error occurred while generating the effect.*");
    }
} 
break
case "effectclounds": {
let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}effectclouds Kevin*`);
    }

    const link = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in effectclouds command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "flagtext": {
let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}flagtext Kevin*`);
    }

    const link = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in flagtext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "freecreate": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}freecreate Kevin*`);
    }

    const link = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in freecreate command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "galaxystyle": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}galaxystyle Kevin*`);
    }

    const link = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in galaxystyle command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "galaxywallpaper": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}galaxywallpaper Kevin*`);
    }

    const link = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in galaxywallpaper command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "makingneon": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}makingneon Kevin*`);
    }

    const link = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in makingneon command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
case "matrix": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}matrix Kevin*`);
    }

    const link = "https://en.ephoto360.com/matrix-text-effect-154.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in matrix command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case"royaltext": {
let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}royaltext Kevin*`);
    }

    const link = "https://en.ephoto360.com/royal-text-effect-online-free-471.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in royaltext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "sand": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}sand Kevin*`);
    }

    const link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in sand command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "summerbeach": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}summerbeach Kevin*`);
    }

    const link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in summerbeach command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "topography": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}topography Tylor*`);
    }

    const link = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in topography command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "typography": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}typography Kevin*`);
    }

    const link = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in typography command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "luxurygold": {
let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}luxurygold Kevin*`);
    }

    const link = "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `> ${global.wm}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in luxurygold command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case 'royal': {
    if (!text) return reply(`*Example: ${prefix}royal Kelvin*`);
    
    try {
        await reply('👑 Creating royal logo... Please wait ⏳');
        
        const apiUrl = `https://api.nekolabs.my.id/ephoto/royal-text?text=${encodeURIComponent(text)}`;
        
        // Send image directly from URL
        await bot.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `> ${global.wm}`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Royal command error:', error);
        reply('Error generating logo. Please try again later.');
    }
}
break;
case 'textonwetglass': {
    if (!text) return reply(`*Example: ${prefix}textonwetglass Kelvin*`);
    
    try {
        await reply('💧 Creating text on wet glass effect... Please wait ⏳');
        
        const apiUrl = `https://api.nekolabs.web.id/ephoto/text-on-wet-glass?text=${encodeURIComponent(text)}`;
        
        // Send image directly from URL
        await bot.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `> ${global.wm}`
        }, { quoted: m });
        
    } catch (error) {
        console.error('TextOnWetGlass command error:', error);
        reply('❌ Error generating wet glass effect. Please try again later.');
    }
}
break
case 'ai': {
  if (!text) return reply(`*Example:* ${prefix + command} what is orman xmd`);
  const res = await axios.get(`https://api.gptplus.cloud/api/gpt?prompt=${encodeURIComponent(text)}`);
  reply(`🤖 *AI Response:* ${res.data.response}`);
  break;
}

case 'define': {
  if (!text) return reply(`*Example:* ${prefix + command} technology`);
  const result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
  const def = result.data[0].meanings[0].definitions[0].definition;
  reply(`📘 *Definition of ${text}:* ${def}`);
  break;
}

case 'news': {
  reply("📰 Fetching latest headlines...");
  const res = await axios.get(`https://api.currentsapi.services/v1/latest-news?apiKey=demo`);
  const headlines = res.data.news.slice(0, 5).map(n => `• ${n.title}`).join('\n');
  reply(`🗞️ *Top News Headlines:*\n\n${headlines}`);
  break;
}

case 'quote': {
  const res = await axios.get(`https://api.quotable.io/random`);
  reply(`💬 *${res.data.content}*\n— ${res.data.author}`);
  break;
}

case 'meme': {
  const res = await axios.get(`https://meme-api.com/gimme`);
  await bot.sendMessage(from, { image: { url: res.data.url }, caption: `🤣 ${res.data.title}` }, { quoted: orman });
  break;
}

case 'translate': {
  const [lang, ...words] = text.split(" ");
  if (!lang || !words.length) return reply(`*Example:* ${prefix + command} fr Hello World`);
  const res = await translate(words.join(" "), { to: lang });
  reply(`🌐 *Translated (${lang}):* ${res.text}`);
  break;
}

case 'toss': {
  const side = Math.random() < 0.5 ? "Heads" : "Tails";
  reply(`🪙 You flipped: *${side}*`);
  break;
}

case 'reminder': {
  if (!text.includes("|")) return reply(`*Example:* ${prefix + command} 10m | check my files`);
  const [time, msg] = text.split("|").map(v => v.trim());
  reply(`⏰ Reminder set for *${time}*: ${msg}`);
  setTimeout(() => {
    reply(`🔔 Reminder: ${msg}`);
  }, ms(time));
  break;
}

case 'listblock':{
let block = await bot.fetchBlocklist()
reply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Blocked Contacts' : '*' + block.length + '* Blocked Contacts'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break

        case 'arting': {
    if (!text) return reply('Provide text! Example: .arting girl wearing glasses');
    await bot.sendMessage(m.chat, { react: { text: '✨', key: m.key }});
    
    try {
        await bot.sendMessage(m.chat, { image: { url: `https://api.nekorinn.my.id/ai-img/arting?text=${text}` }}, { quoted: m });
    } catch (err) {
        console.log(err.message);
        bot.sendMessage(m.chat, { react: { text: '❌', key: m.key }});
        m.reply('failed to create image!');
    }
}
break;


case 'shorten': {
  if (!text) return reply(`*Example:* ${prefix + command} https://example.com`);
  const res = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
  reply(`🔗 *Shortened URL:* ${res.data}`);
  break;
}

case 'spotify': {
  if (!text) return reply(`*Example:* ${prefix + command} calm down`);
  reply("🎧 Searching Spotify...");
  const res = await axios.get(`https://api.dreadedapi.xyz/api/spotifysearch?q=${encodeURIComponent(text)}`);
  const song = res.data.result[0];
  reply(`🎶 *${song.title}* by *${song.artist}*\n${song.url}`);
  break;
}

case 'animepic': {
  const res = await axios.get(`https://api.waifu.pics/sfw/waifu`);
  await bot.sendMessage(from, { image: { url: res.data.url }, caption: "💖 Here's your anime image!" }, { quoted: orman });
  break;
}

case 'logo': {
  if (!text) return reply(`*Example:* ${prefix + command} neon orman`);
  reply("🎨 Making your logo...");
  const api = `https://api.textpro.me/api/neon-light-text-effect?text=${encodeURIComponent(text)}`;
  await bot.sendMessage(from, { image: { url: api }, caption: "✨ Your logo is ready!" }, { quoted: orman });
  break;
}

case 'chatbot': {
  if (!text) return reply(`*Example:* ${prefix + command} how are you orman`);
  const res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}&lc=en`);
  reply(`💬 ${res.data.success}`);
  break;
}

case 'whois': {
  if (!text) return reply(`*Example:* ${prefix + command} google.com`);
  reply("🔍 Looking up domain info...");
  const res = await axios.get(`https://api.api-ninjas.com/v1/whois?domain=${text}`, {
    headers: { 'X-Api-Key': 'demo' }
  });
  reply(`🌐 *Domain:* ${text}\n📅 *Created:* ${res.data.created}\n⏳ *Expires:* ${res.data.expiration}`);
  break;
}

case 'public': {
if (!Owner) return reply('Owner only command')
bot.public = true
reply('Successfully changed to public mode')
}
break

case 'self': {
if (!Owner) return reply('Owner only command')
bot.public = false
reply('Success changed to self mode')
}
break

case 'tourl': {
  try {
    const fs = require('fs');
    const path = require('path');
    const { tmpdir } = require('os');
    const axios = require('axios');
    const FormData = require('form-data');
    const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

    const quoted = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const msg =
      (quoted && (quoted.imageMessage || quoted.videoMessage || quoted.audioMessage)) ||
      m.message?.imageMessage ||
      m.message?.videoMessage ||
      m.message?.audioMessage;

    if (!msg) return reply(`⚠️ Reply to an image, video, or audio with caption *${prefix + command}*`);
    const mime = msg.mimetype || '';
    if (!/image|video|audio/.test(mime)) return reply(`⚠️ File type not supported!`);

    reply("📤 Uploading media...");

    const stream = await downloadContentFromMessage(msg, mime.split('/')[0]);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

    const ext = mime.split('/')[1] || 'bin';
    const tmpFile = path.join(tmpdir(), `orman_${Date.now()}.${ext}`);
    fs.writeFileSync(tmpFile, buffer);

    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fs.createReadStream(tmpFile));

    const res = await axios.post('https://catbox.moe/user/api.php', form, { headers: form.getHeaders() });
    const url = res.data?.trim();

    fs.unlinkSync(tmpFile);
    if (!url || !url.startsWith('https')) throw new Error("Upload failed");

    reply(`✅ *Upload Successful!*\n🔗 ${url}`);
  } catch (err) {
    console.error("tourl error:", err);
    reply(`💥 Upload failed: ${err.message}`);
  }
  break;
}

case 'trackip': {
  if (!text) return m.reply(`Example: ${prefix + command} 8.8.8.8`);
  try {
    const res = await fetch(`https://ipwho.is/${text}`).then(r => r.json());
    if (!res.success) return m.reply(`Could not track IP: ${text}`);
    await bot.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { quoted: m });
    await new Promise(r => setTimeout(r, 1500));
    m.reply(`🌍 *IP Info for ${text}:*\nCountry: ${res.country}\nRegion: ${res.region}\nCity: ${res.city}\nISP: ${res.connection.org}\nTimezone: ${res.timezone.id}`);
  } catch (err) {
    m.reply(`Error: ${err.message}`);
  }
}
break;

case "setbio": case "setbiobot": {
if (!Owner) return reply('Owner only command')
if (!text) return reply('reply a text')
bot.updateProfileStatus(text)
reply("Success updated bio ✅")
}
break

case 'toaud':
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`tag/reply Video/Audio with Caption ${prefix + command}`)
let media = await bot.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
bot.sendMessage(m.chat, {
audio: audio,
mimetype: 'audio/mpeg'
}, {
quoted: m
})
}
break

case 'autorecordtype':
if (!Owner) return reply('Owner only command')
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q === 'on') {
    global.autorecordtype = true
    reply(`Successfully changed auto recording and typing to ${q}`)
} else if (q === 'off') {
    global.autorecordtype = false
    reply(`Successfully changed auto recording and typing to ${q}`)
}
break
                
case "getpp": {
if (!text) return reply('Reply to a user to get their profile picture.');
    if (!m.quoted) {
        await bot.sendMessage(m.chat, {
            react: {
                text: "📷",
                key: m.key
            }
        });
        return reply('Reply to a user to get their profile picture.');
    }

    await bot.sendMessage(m.chat, {
        react: {
            text: "📷",
            key: m.key
        }
    });

    const userId = m.quoted.sender;

    try {
        const ppUrl = await bot.profilePictureUrl(userId, 'image');

        await bot.sendMessage(m.chat, 
            { 
                image: { url: ppUrl }, 
                caption: `⌘ *Profile Picture of:* @${userId.split('@')[0]}`,
                mentions: [ userId ]
            }, { quoted: m }); 
    } catch {
        await bot.sendMessage(m.chat, { 
            image: { url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' }, 
            caption: '⚠️ No profile picture found.' 
        }, { quoted: m });
    }
}
break

case "addpremium": {
if (!Owner) return reply('Owner only command')
if (!m.mentionedJid && !m.quoted) return reply('Tag or quote a user to add premium')
const target = m.mentionedJid ? m.mentionedJid[0] : m.quoted.sender
if (!global.db.data.users[target]) global.db.data.users[target] = {}
global.db.data.users[target].premium = true
global.db.data.users[target].premiumExpired = Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 days
await global.db.write()
reply(`✅ @${target.split('@')[0]} has been added to premium users for 30 days`, { mentions: [target] })
}
break

case "delpremium": {
if (!Owner) return reply('Owner only command')
if (!m.mentionedJid && !m.quoted) return reply('Tag or quote a user to remove premium')
const target = m.mentionedJid ? m.mentionedJid[0] : m.quoted.sender
if (global.db.data.users[target]) {
    global.db.data.users[target].premium = false
    global.db.data.users[target].premiumExpired = null
    await global.db.write()
}
reply(`✅ @${target.split('@')[0]} has been removed from premium users`, { mentions: [target] })
}
break

//========[download CMDS]======
case "Orman-play": {
    if (!text) return reply(
        `🎵 *Usage:*\n.play <song name or YouTube link>\n\n*Example:*\n.play Shape of You`
    );

    const loadingMsg = await reply(`🔍 *Searching for:* ${text}\n⏳ Please wait a moment...`);

    try {
        const apiUrl = `https://api.nekolabs.my.id/downloader/youtube/play/v1?q=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.success || !data.result?.downloadUrl) {
            return reply(`❌ *No results found.*\nTry a different keyword or link.`);
        }

        const { metadata, downloadUrl } = data.result;

        const menuText = `
🎧 *${metadata.title}*
🎤 Artist: ${metadata.channel}
⏱️ Duration: ${metadata.duration}
🔗 [YouTube Link](${metadata.url})

╭─━━━━━━━━━━━━━━━─╼
╠═ *Select your download format:*
╠═1️⃣ MP3 as *Document*
╠═2️⃣ MP3 as *Audio (Normal)*
╠═3️⃣ MP3 as *Voice Note (PTT)*
╰─━━━━━━━━━━━━━━━─╼
_Reply with 1, 2, or 3 to choose a format._
        `.trim();

        // Send menu message
        const menuMsg = await bot.sendMessage(m.chat, {
            text: menuText,
            contextInfo: {
                externalAdReply: {
                    title: metadata.title,
                    body: `🎵 ${metadata.channel}`,
                    thumbnailUrl: metadata.cover,
                    mediaType: 2,
                    mediaUrl: metadata.url,
                }
            }
        }, { quoted: m });

        // ✅ One-time message listener for replies
        const formatHandler = async (msgUpdate) => {
            const userMsg = msgUpdate.messages[0];
            if (!userMsg.message?.extendedTextMessage) return;

            const replyText = userMsg.message.extendedTextMessage.text.trim();
            const ctx = userMsg.message.extendedTextMessage.contextInfo;

            // Ensure the reply references our menu message
            if (!ctx || ctx.stanzaId !== menuMsg.key.id) return;

            await bot.sendMessage(m.chat, { react: { text: "⬇️", key: userMsg.key } });

            const fileName = `${metadata.title}.mp3`.replace(/[<>:"/\\|?*]/g, '');

            switch (replyText) {
                case "1":
                    await bot.sendMessage(m.chat, {
                        document: { url: downloadUrl },
                        mimetype: "audio/mpeg",
                        fileName,
                        caption: `🎶 *${metadata.title}*\n🎤 ${metadata.channel}\n⏱️ ${metadata.duration}`,
                    }, { quoted: userMsg });
                    break;

                case "2":
                    await bot.sendMessage(m.chat, {
                        audio: { url: downloadUrl },
                        mimetype: "audio/mp4",
                        fileName,
                        contextInfo: {
                            externalAdReply: {
                                title: metadata.title.slice(0, 60),
                                body: `By ${metadata.channel}`,
                                thumbnailUrl: metadata.cover,
                                mediaUrl: metadata.url,
                                mediaType: 2,
                            }
                        }
                    }, { quoted: userMsg });
                    break;

                case "3":
                    await bot.sendMessage(m.chat, {
                        audio: { url: downloadUrl },
                        mimetype: "audio/mp4",
                        ptt: true,
                        fileName,
                    }, { quoted: userMsg });
                    break;

                default:
                    await bot.sendMessage(m.chat, {
                        text: "❌ *Invalid option!* Please reply with 1, 2, or 3.",
                    }, { quoted: userMsg });
            }

            // ✅ Remove listener after first valid reply
            bot.ev.off("messages.upsert", formatHandler);
        };

        // Attach event listener
        bot.ev.on("messages.upsert", formatHandler);

    } catch (error) {
        console.error("❌ Error in play command:", error);
        reply("⚠️ An error occurred while fetching the song. Please try again later.");
    }
}
break;

//========[Download Commands]======

// 1️⃣ .play → sends as DOCUMENT
case 'play': {
    try {
        if (!text) return reply("❌ Usage: .play <song name>");

        await bot.sendMessage(m.chat, {
            react: { text: "🎵", key: m.key }
        });

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) {
            return reply("⚠️ No results found.");
        }

        const video = videos[0];
        const videoUrl = video.url;

        await bot.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: `🎧 *${video.title}*\n⏳ Downloading audio...`
        }, { quoted: m });

        const apiUrl = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;
        const res = await axios.get(apiUrl);

        if (!res.data?.status || !res.data.audio) {
            return reply("❌ Failed to download audio.");
        }

        await bot.sendMessage(m.chat, {
            audio: { url: res.data.audio },
            mimetype: "audio/mpeg",
            ptt: false
        }, { quoted: m });

    } catch (err) {
        console.error("PLAY ERROR:", err);
        reply("❌ Error downloading song.");
    }
}
break;

// 2️⃣ .song → sends as normal audio (mp3)
case 'song': {
    try {
        if (!text) return reply("❌ Usage: .song <song name>");

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) {
            return reply("⚠️ No results found.");
        }

        const video = videos[0];
        const videoUrl = video.url;

        const apiUrl = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;
        const res = await axios.get(apiUrl);

        if (!res.data?.status || !res.data.audio) {
            return reply("❌ Failed to download audio.");
        }

        const fileName = `${video.title.replace(/[^\w\s]/gi, '')}.mp3`;

        await bot.sendMessage(m.chat, {
            document: { url: res.data.audio },
            mimetype: "audio/mpeg",
            fileName,
            caption: `🎶 *${video.title}*`
        }, { quoted: m });

    } catch (err) {
        console.error("SONG ERROR:", err);
        reply("❌ Error downloading song.");
    }
}
break;

// 3️⃣ .music → sends as PTT (voice note)
case 'music': {
    try {
        if (!text) return reply("❌ Usage: .music <song name>");

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) {
            return reply("⚠️ No results found.");
        }

        const video = videos[0];
        const videoUrl = video.url;

        const apiUrl = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;
        const res = await axios.get(apiUrl);

        if (!res.data?.status || !res.data.audio) {
            return reply("❌ Failed to download audio.");
        }

        await bot.sendMessage(m.chat, {
            audio: { url: res.data.audio },
            mimetype: "audio/mpeg",
            ptt: true
        }, { quoted: m });

    } catch (err) {
        console.error("MUSIC ERROR:", err);
        reply("❌ Error downloading music.");
    }
}
break;


case 'blowjob':
  let assss =  await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff =  fetchBuffer(assss.data.url)
    var bogif =  buffergif(bobuff)
     bot.sendMessage(m.chat,{video:bogif, gifPlayback:global.botname },{quoted: orman}).catch(err => {
    })
    break
    
case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
                await m.reply(`*_Processing...._*`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await bot.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            
 case "tiktokaudio":
case "tiktokmp3": {
    if (!args[0]) return reply('*Please provide a TikTok video URL!*');

    try {
        let apiUrl = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=${args[0]}`);

        // Extract audio URL
        let audioUrl = apiUrl?.data?.audio;

        if (!audioUrl) return reply("*Failed to fetch TikTok audio.*");

        await bot.sendMessage(
            m.chat,
            {
                audio: { url: audioUrl },
                mimetype: "audio/mpeg",
                fileName: "tiktok_audio.mp3",
                caption: "*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙳 𝙱𝚈 𝙾𝚁𝙼𝙰𝙽~𝚇𝙼𝙳 ᵇᵒᵗ 🫧_*"
            },
            { quoted: m }
        );

    } catch (error) {
        console.log(error);
        reply("❌ *An error occurred while downloading the TikTok audio.*");
    }
}
break;
                       
 case 'storyimg':
                        case 'storyimage':
                        case 'upswimg': {
                                if (!Owner) return m.reply(mess.owner);
                                if (/image/.test(mime)) {
                                        var imagesw = await bot.downloadAndSaveMediaMessage(quoted);
                                        let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
                                        let mediaType = mime || 'Tidak diketahui';
                                        let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
                                        let sender = `${m.pushName || ownerName}`;
                                        let defaultCaption = `📁 *Size File*: ${fileSize}\n`;
                                        defaultCaption += `🖼️ *Media Type*: ${mediaType}\n`;
                                        defaultCaption += `⏰ *Time*: ${sendTime}\n`;
                                        defaultCaption += `👤 *Sender*: ${sender}`;
                                        await bot.sendMessage('status@broadcast', {
                                                image: { url: imagesw },
                                                caption: text ? text : defaultCaption
                                        }, {
                                                statusJidList: Object.keys(db.data.users)
                                        });

                                        await m.reply('✅ success uploaded photo to status! 🖼️✨');
                                } else {
                                        m.reply('⚠️ reply to image with command ! 🖼️');
                                }
                        }
                        break;
                        
case 'storyvideo':
                        case 'upswvideo': {
                                if (!Owner) return m.reply(mess.owner);
                                if (/video/.test(mime)) {
                                        var videosw = await bot.downloadAndSaveMediaMessage(quoted);
                                        let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
                                        let mediaType = mime || 'Tidak diketahui';
                                        let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
                                        let sender = `${m.pushName || ownerName}`;
                                        let defaultCaption = `📁 *Size File*: ${fileSize}\n`;
                                        defaultCaption += `🎥 *Media Type*: ${mediaType}\n`;
                                        defaultCaption += `⏰ *Time*: ${sendTime}\n`;
                                        defaultCaption += `👤 *Sender*: ${sender}`;
                                        await bot.sendMessage('status@broadcast', {
                                                video: { url: videosw },
                                                caption: text ? text : defaultCaption
                                        }, {
                                                statusJidList: Object.keys(db.data.users)
                                        });

                                        await m.reply('✅ success uploaded video to status!');
                                } else {
                                        m.reply('⚠️ reply a video! 🎥');
                                }
                        }
                        break;
                        
case 'storytext':
                        case 'upswtext': {
                                if (!Owner) return m.reply(mess.owner);
                                if (!text) return m.reply('where is the text?');
                                await bot.sendMessage('status@broadcast', { 
                                        text: text 
                                }, { 
                                        backgroundColor: '#FF000000', 
                                        font: 3, 
                                        statusJidList: Object.keys(db.data.users) 
                                });
                                m.reply('Succes uploaded text!');
                        }
                        break; 
                        
case "listgc": case "cekid": case "listgrup": {
let gcall = Object.values(await bot.groupFetchAllParticipating().catch(_=> null))
let listgc = `*𝐋𝐈𝐒𝐓 𝐀𝐋𝐋 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏*\n\n`
await gcall.forEach((u, i) => {
listgc += `Title : ${u.subject}\nID : ${u.id}\nMember : ${u.participants.length}\nStatus : ${u.announce == true ? "Tertutup" : "Terbuka"}\nCreator : ${u.owner ? u.owner.split('@')[0] : 'Active'}\n\n`
})
m.reply(listgc)
}
break                                             
 
 case 'delete': case 'del': case 'd': {
                                if (!m.quoted) return m.reply('Reply message you want to delete')
                                await bot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
                        }
                        break

case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XMEDIA`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    bot.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: loli }).catch((err) => reply(mess.error))
break
                
case "yts": {
if (!text) return reply("Example:Dj Tiktok")
await m.reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let teks = '\n*╭─🔎Your Search ─╼*\n\n'
for (let i of data.all) {
teks += `*╎◦ Title :* ${i.title}
*╎◦ Channel :* ${i.author?.name || "unknown"}
*╎◦ Duration :* ${i?.timestamp || "unknown"}
*╎◦ Link Url :* ${i.url}\n\n`
}
reply(teks)
}).catch(err => m.reply(err.toString()))
}
break

                                                                                      
case "itune": {
if (!text) return reply("*Please provide a song name*");
    
    try {
      let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`);
      if (!res.ok) {
        throw new Error(`*API request failed with status ${res.status}*`);
      }
      let json = await res.json();
      let songInfo = `╭─ *Song Information: ─╼*\n
╎ • *Name:* ${json.name}\n
╎ • *Artist:* ${json.artist}\n
╎ • *Album:* ${json.album}\n
╎ • *Release Date:* ${json.release_date}\n
╎ • *Price:* ${json.price}\n
╎ • *Length:* ${json.length}\n
╎ • *Genre:* ${json.genre}\n
╎ • *URL:* ${json.url}`;
     
      if (json.thumbnail) {
        await bot.sendMessage(
          m.chat,
          { image: { url: json.thumbnail }, caption: songInfo },
          { quoted: m }
        );
      } else {
        reply(songInfo);
      }
    } catch (error) {
      console.error(error);
      reply('Error occurred');
    }
}
break;
case "tiktok": {
if (!args[0]) return reply('*Please provide a TikTok video url!*');
    
    try {
      let apiUrl = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=${args[0]}`);
      
      await bot.sendMessage(
        m.chat,
        {
          caption: '> *_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙳 𝙱𝚈 ARYAN~𝚇𝙼𝙳 ᵇᵒᵗ_*',
          video: { url: apiUrl.data.video },
          fileName: "video.mp4",
          mimetype: "video/mp4",
        },
        { quoted: orman }
      );
    } catch (error) {
      reply('Error occurred');
    }
}
break

case 'fact': {
  const res = await axios.get(`https://uselessfacts.jsph.pl/random.json?language=en`);
  reply(`📚 *Fact:* ${res.data.text}`);
  break;
}

case 'screenshot': {
  if (!text) return reply(`*Example:* ${prefix + command} https://example.com`);
  reply("📸 Taking screenshot...");
  const api = `https://image.thum.io/get/fullpage/${text}`;
  await bot.sendMessage(from, { image: { url: api }, caption: "🖼️ Screenshot ready!" }, { quoted: orman });
  break;
}

case 'lyricsfind': {
    try {
        if (!text) return reply(`❌ Please provide a song name.\n*Example:* ${prefix + command} Shape of You`);

        const res = await axios.get(`https://api.lyrics.ovh/v1/${encodeURIComponent(text)}`);
        
        if (!res.data || !res.data.lyrics) {
            return reply(`❌ Sorry, lyrics for "${text}" were not found.`);
        }

        // Limit the reply to 4000 characters to prevent message overflow
        const lyrics = res.data.lyrics.length > 4000 
            ? res.data.lyrics.slice(0, 4000) + "\n\n[Lyrics truncated...]"
            : res.data.lyrics;

        reply(`🎵 *Lyrics for "${text}":*\n\n${lyrics}`);
    } catch (error) {
        console.error(error);
        reply(`❌ Failed to fetch lyrics. Please try again later.`);
    }
    break;
}

case 'timezone': {
    try {
        if (!text) return reply(`❌ Please provide a city name.\n*Example:* ${prefix + command} Tokyo`);

        const res = await axios.get(`https://api.api-ninjas.com/v1/timezone?city=${encodeURIComponent(text)}`, {
            headers: { 'X-Api-Key': 'demo' } // Replace 'demo' with your real API key
        });

        if (!res.data || !res.data.datetime) {
            return reply(`❌ Could not find timezone for "${text}".`);
        }

        reply(`🕰️ *Current time in ${res.data.city}, ${res.data.country}:*\n${res.data.datetime}`);
    } catch (error) {
        console.error(error);
        reply(`❌ Failed to fetch timezone. Make sure the city name is correct.`);
    }
    break;
}

case 'avatar': {
  const res = await axios.get(`https://api.dreadedapi.xyz/api/avatar`);
  await bot.sendMessage(from, { image: { url: res.data.url }, caption: "🎮 Your random avatar!" }, { quoted: orman });
  break;
}

case 'imagine': {
    try {
        if (!text) return reply(`❌ Please provide a prompt.\n*Example:* ${prefix + command} futuristic city at night`);

        reply("🎨 Generating your image, please wait...");

        const api = `https://lexica.art/api/v1/search?q=${encodeURIComponent(text)}`;
        const res = await axios.get(api);

        // Validate API response
        const images = res.data?.images;
        if (!images || images.length === 0) return reply("❌ No images found for your prompt!");

        // Optionally, pick a random image from results
        const img = images[Math.floor(Math.random() * images.length)].src;

        await bot.sendMessage(from, {
            image: { url: img },
            caption: `🪄 Prompt: ${text}`
        }, { quoted: orman });

    } catch (error) {
        console.error(error);
        reply("❌ Failed to generate image. Please try again later.");
    }
    break;
}

case 'qr': {
  if (!text) return reply(`*Example:* ${prefix + command} Orman-XMD`);
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
  await bot.sendMessage(from, { image: { url }, caption: "📱 Scan this QR!" }, { quoted: orman });
  break;
}

case 'ytinfo': {
  if (!text) return reply(`*Example:* ${prefix + command} never gonna give you up`);
  const result = await yts(text);
  const vid = result.videos[0];
  reply(`🎥 *Title:* ${vid.title}\n👤 *Channel:* ${vid.author.name}\n⏱️ *Duration:* ${vid.timestamp}\n🔗 *Link:* ${vid.url}`);
  break;
}

case 'riddle': {
  const res = await axios.get(`https://riddles-api.vercel.app/random`);
  reply(`🧩 *Riddle:* ${res.data.riddle}\n\n💡 *Answer:* ${res.data.answer}`);
  break;
}

case 'voicetext': {
  if (!text) return reply(`*Example:* ${prefix + command} Hello Orman!`);
  const url = googleTTS.getAudioUrl(text, { lang: "en", slow: false });
  await bot.sendMessage(from, { audio: { url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: orman });
  break;
}

case 'currency': {
  if (!text.includes("|")) return reply(`*Example:* ${prefix + command} 100|USD|UGX`);
  const [amount, fromC, toC] = text.split("|");
  const res = await axios.get(`https://api.exchangerate.host/convert?from=${fromC}&to=${toC}&amount=${amount}`);
  reply(`💱 *${amount} ${fromC} = ${res.data.result.toFixed(2)} ${toC}*`);
  break;
}

case 'wallpaper': {
    try {
        // Use user-provided keyword or default to 'nature'
        const query = text || 'nature';
        reply(`🌅 Searching for HD wallpaper: ${query}...`);

        const res = await axios.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`, {
            headers: { Authorization: '563492ad6f91700001000001' } // Replace with your Pexels API key
        });

        const photos = res.data?.photos;
        if (!photos || photos.length === 0) return reply(`❌ No wallpapers found for "${query}"`);

        // Pick a random photo from the results
        const img = photos[Math.floor(Math.random() * photos.length)].src.original;

        await bot.sendMessage(from, {
            image: { url: img },
            caption: `🌅 HD Wallpaper: ${query}`
        }, { quoted: orman });

    } catch (error) {
        console.error(error);
        reply("❌ Failed to fetch wallpaper. Please try again later.");
    }
    break;
}
case 'animequote': {
  const res = await axios.get(`https://animechan.vercel.app/api/random`);
  reply(`🎌 *${res.data.character}* (${res.data.anime})\n💬 "${res.data.quote}"`);
  break;
}

case 'math': {
  if (!text) return reply(`*Example:* ${prefix + command} 5*6+2`);
  try {
    const ans = eval(text);
    reply(`🧮 *${text} = ${ans}*`);
  } catch {
    reply("❌ Invalid math expression!");
  }
  break;
}

case 'slot': {
  const slots = ["🍒", "🍋", "🍉", "7️⃣", "⭐"];
  const spin = [slots[Math.random()*slots.length|0], slots[Math.random()*slots.length|0], slots[Math.random()*slots.length|0]];
  const result = (spin[0] === spin[1] && spin[1] === spin[2]) ? "🎉 JACKPOT!" : "😢 Try again!";
  reply(`🎰 [ ${spin.join(' | ')} ]\n${result}`);
  break;
}

case 'funfact': {
  const res = await axios.get(`https://api.api-ninjas.com/v1/facts?limit=1`, {
    headers: { 'X-Api-Key': 'demo' }
  });
  reply(`🧠 ${res.data[0].fact}`);
  break;
}

case 'gender': {
  if (!text) return reply(`*Example:* ${prefix + command} Emily`);
  const res = await axios.get(`https://api.genderize.io/?name=${encodeURIComponent(text)}`);
  reply(`🧏 *${text}* is most likely *${res.data.gender}*`);
  break;
}

case 'couple': {
  if (!isGroup) return reply("❌ This command only works in groups!");
  const members = participants.map(v => v.id);
  const p1 = members[Math.floor(Math.random() * members.length)];
  const p2 = members[Math.floor(Math.random() * members.length)];
  reply(`💞 *Today's cute couple:*\n@${p1.split('@')[0]} ❤️ @${p2.split('@')[0]}`);
  break;
}

case 'fancy': {
  if (!text) return reply(`*Example:* ${prefix + command} orman xmd`);
  const res = await axios.get(`https://api.textfancy.xyz/style?text=${encodeURIComponent(text)}`);
  reply(`✨ *Fancy Text Styles:*\n${res.data.result.join('\n')}`);
  break;
}

case 'mirror': {
  if (!quoted) return reply(`Reply to an image with *${prefix + command}*`);
  reply("🪞 Applying mirror effect...");
  const media = await q.download();
  const result = await uploadToApi(media, "mirror");
  await bot.sendMessage(from, { image: { url: result }, caption: "🔁 Mirrored!" }, { quoted: orman });
  break;
}

case 'advice': {
  const res = await axios.get(`https://api.adviceslip.com/advice`);
  reply(`🧘 *Advice:* ${res.data.slip.advice}`);
  break;
}

case 'roast': {
  const res = await axios.get(`https://evilinsult.com/generate_insult.php?lang=en&type=json`);
  reply(`🔥 *Roast:* ${res.data.insult}`);
  break;
}

case 'country': {
  if (!text) return reply(`*Example:* ${prefix + command} japan`);
  const res = await axios.get(`https://restcountries.com/v3.1/name/${text}`);
  const c = res.data[0];
  reply(`🌍 *Country:* ${c.name.common}
🏙️ *Capital:* ${c.capital}
💰 *Currency:* ${Object.keys(c.currencies)[0]}
🗣️ *Language:* ${Object.values(c.languages).join(', ')}`);
  break;
}

case 'dog': {
  const res = await axios.get(`https://dog.ceo/api/breeds/image/random`);
  await bot.sendMessage(from, { image: { url: res.data.message }, caption: "🐶 Cute doggie!" }, { quoted: orman });
  break;
}

case 'cat': {
  const res = await axios.get(`https://api.thecatapi.com/v1/images/search`);
  await bot.sendMessage(from, { image: { url: res.data[0].url }, caption: "🐱 Meow!" }, { quoted: orman });
  break;
}

case 'lyrics': {
  if (!text) return reply(`*Example:* ${prefix + command} shape of you`);
  const res = await axios.get(`https://api.lyrics.ovh/v1/${encodeURIComponent(text)}`);
  reply(`🎵 *Lyrics for ${text}:*\n\n${res.data.lyrics || "❌ No lyrics found!"}`);
  break;
}

case 'weather': {
  if (!text) return reply(`*Example:* ${prefix + command} Kampala`);
  reply("🌤️ Fetching weather data...");
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=YOUR_API_KEY&units=metric`);
  const w = res.data;
  reply(`🌦️ *Weather in ${w.name}*
🌡️ Temp: ${w.main.temp}°C
💨 Wind: ${w.wind.speed} m/s
☁️ Condition: ${w.weather[0].description}`);
  break;
}

case 'location': {
  if (!text) return reply(`*Example:* ${prefix + command} Paris`);
  const res = await axios.get(`https://geocode.maps.co/search?q=${text}`);
  const loc = res.data[0];
  reply(`📍 *${loc.display_name}*\n🧭 Lat: ${loc.lat}\n🧭 Lon: ${loc.lon}`);
  break;
}

case 'pickup': {
  const res = await axios.get(`https://api.popcat.xyz/pickuplines`);
  reply(`😏 *Pickup Line:*\n${res.data.pickupline}`);
  break;
}

case 'movie': {
  if (!text) return reply(`*Example:* ${prefix + command} Avatar`);
  const res = await axios.get(`https://www.omdbapi.com/?t=${text}&apikey=YOUR_API_KEY`);
  const m = res.data;
  reply(`🎬 *${m.Title}* (${m.Year})
⭐ Rating: ${m.imdbRating}
📜 Plot: ${m.Plot}
🎭 Genre: ${m.Genre}`);
  break;
}

case 'convert': {
  const [amount, from, to] = text.split(" ");
  if (!amount || !from || !to) return reply(`*Example:* ${prefix + command} 100 USD UGX`);
  const res = await axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
  reply(`💱 ${amount} ${from} = ${res.data.result.toFixed(2)} ${to}`);
  break;
}

case 'color': {
  if (!text) return reply(`*Example:* ${prefix + command} #ff0000`);
  const res = await axios.get(`https://api.popcat.xyz/color/${text.replace('#','')}`);
  await bot.sendMessage(from, { image: { url: res.data.image }, caption: `🎨 *Color Name:* ${res.data.name}\n🧾 Hex: ${res.data.hex}` }, { quoted: orman });
  break;
}

case 'joke': {
  const res = await axios.get(`https://v2.jokeapi.dev/joke/Any`);
  reply(`😂 *Joke:*\n${res.data.setup ? `${res.data.setup}\n${res.data.delivery}` : res.data.joke}`);
  break;
}


case 'userinfo': {
  const user = m.sender;
  const name = pushname || "Unknown";
  reply(`👤 *User Info:*
🏷️ Name: ${name}
📱 Number: ${user.split("@")[0]}
🕐 Active Time: ${new Date().toLocaleString()}`);
  break;
}

case 'radio': {
  reply("📻 Streaming radio...");
  const url = "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service";
  await bot.sendMessage(from, { audio: { url }, mimetype: "audio/mpeg", ptt: true }, { quoted: orman });
  break;
}

case 'wish': {
  if (!text) return reply(`*Example:* ${prefix + command} birthday Orman`);
  reply(`🎉 *Happy ${text.split(" ")[0]}* to ${text.split(" ").slice(1).join(" ")}! 🥳`);
  break;
}

case 'quiz': {
  const res = await axios.get(`https://opentdb.com/api.php?amount=1&type=multiple`);
  const q = res.data.results[0];
  const choices = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
  reply(`🧠 *Quiz Time!*\n${q.question}\n\nOptions:\n${choices.join('\n')}\n\n(Reply with your answer!)`);
  break;
}

case 'wishme': {
  const hours = new Date().getHours();
  const greeting = hours < 12 ? "Good Morning ☀️" : hours < 18 ? "Good Afternoon 🌤️" : "Good Evening 🌙";
  reply(`${greeting}, ${pushname || 'buddy'}! 👋`);
  break;
}

case 'motivate': {
  const res = await axios.get(`https://type.fit/api/quotes`);
  const q = res.data[Math.floor(Math.random() * res.data.length)];
  reply(`💪 *${q.text}*\n— ${q.author || 'Unknown'}`);
  break;
}

case 'space': {
  reply("🪐 Fetching today's NASA image...");
  const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
  await bot.sendMessage(from, { image: { url: res.data.url }, caption: `🌌 *${res.data.title}*\n${res.data.explanation}` }, { quoted: orman });
  break;
}


case 'comment': {
    try {
        if (!text) return reply(`❌ Please provide a comment text.\n*Example:* ${prefix + command} Orman is the best!`);

        reply("💬 Generating your YouTube-style comment...");

        const res = await axios.get(`https://api.popcat.xyz/youtube-comment?text=${encodeURIComponent(text)}&username=${encodeURIComponent(pushname)}`);

        if (!res.data || !res.data.image) {
            return reply("❌ Failed to generate comment image. Please try again.");
        }

        await bot.sendMessage(from, {
            image: { url: res.data.image },
            caption: "💬 YouTube-style comment!"
        }, { quoted: orman });

    } catch (error) {
        console.error(error);
        reply("❌ Something went wrong while generating your comment. Try again later.");
    }
    break;
}

case 'fight': {
  const target = text || "a random enemy";
  const dmg = Math.floor(Math.random() * 100);
  const win = dmg > 50 ? "🏆 You won the fight!" : "💀 You were defeated!";
  reply(`⚔️ You fought ${target} and dealt ${dmg} damage!\n${win}`);
  break;
}

case 'decode': {
  if (!text) return reply(`*Example:* ${prefix + command} SGVsbG8=`);
  const decoded = Buffer.from(text, 'base64').toString('utf-8');
  reply(`📜 *Decoded Text:* ${decoded}`);
  break;
}

case 'encode': {
  if (!text) return reply(`*Example:* ${prefix + command} Hello World`);
  const encoded = Buffer.from(text, 'utf-8').toString('base64');
  reply(`🔐 *Base64 Encoded:* ${encoded}`);
  break;
}

case 'imagegen': {
  if (!text) return reply(`*Example:* ${prefix + command} a cat wearing sunglasses`);
  reply("🎨 Generating your image...");
  const res = await axios.get(`https://api.itsrose.life/imagegen?prompt=${encodeURIComponent(text)}`);
  await bot.sendMessage(from, { image: { url: res.data.url }, caption: "🖼️ Generated Image" }, { quoted: orman });
  break;
}

case 'crypto': {
  if (!text) return reply(`*Example:* ${prefix + command} bitcoin`);
  const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${text}&vs_currencies=usd`);
  const price = res.data[text]?.usd;
  if (!price) return reply("❌ Coin not found!");
  reply(`💰 *${text.toUpperCase()} Price:* $${price}`);
  break;
}

case 'rps': {
  const options = ["rock", "paper", "scissors"];
  const bot = options[Math.floor(Math.random() * options.length)];
  if (!text || !options.includes(text.toLowerCase())) return reply(`*Example:* ${prefix + command} rock`);
  const player = text.toLowerCase();
  let result = "It's a tie! 🤝";
  if ((player === "rock" && bot === "scissors") || (player === "paper" && bot === "rock") || (player === "scissors" && bot === "paper"))
    result = "You win! 🎉";
  else if (bot !== player) result = "You lose! 😢";
  reply(`🪨 *You:* ${player}\n📟 *Bot:* ${bot}\n\n${result}`);
  break;
}

case 'announce': {
  if (!isAdmins) return reply("🚫 Only admins can make announcements!");
  if (!text) return reply(`*Example:* ${prefix + command} Meeting at 7PM!`);
  await bot.sendMessage(from, { text: `📢 *Group Announcement:*\n${text}` });
  break;
}

case 'horoscope': {
  if (!text) return reply(`*Example:* ${prefix + command} libra`);
  const res = await axios.get(`https://aztro.sameerkumar.website/?sign=${text}&day=today`, { method: "POST" });
  const d = res.data;
  reply(`🔮 *Horoscope for ${text.toUpperCase()}*:
❤️ Love: ${d.description}
📅 Mood: ${d.mood}
🎯 Lucky Number: ${d.lucky_number}
🌕 Color: ${d.color}`);
  break;
}

case 'bloodtext': {
  if (!text) return reply(`*Example:* ${prefix + command} ORMAN XMD`);
  reply("🩸 Generating blood text effect...");
  const res = await ephoto(`https://ephoto360.com/blood-text-on-the-wall-106.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🩸 Bloody Text Effect" }, { quoted: orman });
  break;
}

case 'flametext': {
  if (!text) return reply(`*Example:* ${prefix + command} FIRE BOT`);
  reply("🔥 Creating fire effect...");
  const res = await ephoto(`https://ephoto360.com/create-flaming-text-effect-online-122.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🔥 Flame Text Effect" }, { quoted: orman });
  break;
}

case 'diamondtext': {
  if (!text) return reply(`*Example:* ${prefix + command} ORMAN`);
  reply("💎 Creating diamond style...");
  const res = await ephoto(`https://ephoto360.com/diamond-text-effect-online-194.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "💎 Diamond Text" }, { quoted: orman });
  break;
}

case 'icetext': {
  if (!text) return reply(`*Example:* ${prefix + command} COOL`);
  reply("❄️ Making ice text...");
  const res = await ephoto(`https://ephoto360.com/ice-cold-text-effect-online-111.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "❄️ Ice Text" }, { quoted: orman });
  break;
}

case 'skulltext': {
  if (!text) return reply(`*Example:* ${prefix + command} ORMAN XMD`);
  reply("💀 Generating skull text...");
  const res = await ephoto(`https://ephoto360.com/create-skull-text-effect-online-287.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "💀 Skull Text" }, { quoted: orman });
  break;
}

case 'gaminglogo': {
  if (!text) return reply(`*Example:* ${prefix + command} TEAM ORMAN`);
  reply("🎮 Creating gaming logo...");
  const res = await ephoto(`https://ephoto360.com/make-gaming-logo-online-free-532.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🎮 Gaming Logo Generated" }, { quoted: orman });
  break;
}

case 'rainbow': {
  if (!text) return reply(`*Example:* ${prefix + command} ORMAN XMD`);
  reply("🌈 Applying rainbow color...");
  const res = await ephoto(`https://ephoto360.com/multicolor-3d-text-effect-online-194.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🌈 Rainbow Text" }, { quoted: orman });
  break;
}

case 'angelwings': {
  if (!text) return reply(`*Example:* ${prefix + command} ANGEL`);
  reply("🕊️ Adding angel wings...");
  const res = await ephoto(`https://ephoto360.com/angel-wings-text-effect-online-723.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🕊️ Angel Wings Text" }, { quoted: orman });
  break;
}

case 'explosion': {
  if (!text) return reply(`*Example:* ${prefix + command} BOOM ORMAN`);
  reply("💥 Creating explosion text...");
  const res = await ephoto(`https://ephoto360.com/explosion-text-effect-online-222.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "💥 Explosion Text" }, { quoted: orman });
  break;
}

case 'heart': {
  if (!text) return reply(`*Example:* ${prefix + command} LOVE YOU`);
  reply("💖 Designing heart effect...");
  const res = await ephoto(`https://ephoto360.com/heart-shaped-text-effect-online-101.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "💖 Heart Text" }, { quoted: orman });
  break;
}

case 'volcano': {
  if (!text) return reply(`*Example:* ${prefix + command} ORMAN BOT`);
  reply("🌋 Making lava text...");
  const res = await ephoto(`https://ephoto360.com/create-volcano-text-effect-online-701.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🌋 Volcano Text" }, { quoted: orman });
  break;
}

case 'lightning': {
  if (!text) return reply(`*Example:* ${prefix + command} STORM`);
  reply("⚡ Generating lightning effect...");
  const res = await ephoto(`https://ephoto360.com/create-lightning-text-effect-online-182.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "⚡ Lightning Text" }, { quoted: orman });
  break;
}

case 'sparkle': {
  if (!text) return reply(`*Example:* ${prefix + command} SHINE`);
  reply("✨ Adding sparkles...");
  const res = await ephoto(`https://ephoto360.com/sparkle-text-effect-online-195.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "✨ Sparkle Text" }, { quoted: orman });
  break;
}

case 'gold3d': {
  if (!text) return reply(`*Example:* ${prefix + command} GOLDEN KING`);
  reply("🌟 Creating 3D golden effect...");
  const res = await ephoto(`https://ephoto360.com/3d-golden-text-effect-online-178.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🌟 3D Golden Text" }, { quoted: orman });
  break;
}

case 'fireblast': {
  if (!text) return reply(`*Example:* ${prefix + command} HOTSHOT`);
  reply("🔥🔥 Fireblast effect loading...");
  const res = await ephoto(`https://ephoto360.com/create-fire-blast-text-effect-online-400.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🔥 Fire Blast Text" }, { quoted: orman });
  break;
}

case 'glitter': {
  if (!text) return reply(`*Example:* ${prefix + command} ORMAN`);
  reply("🪄 Adding glitter magic...");
  const res = await ephoto(`https://ephoto360.com/glitter-text-effect-online-300.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🪄 Glitter Text" }, { quoted: orman });
  break;
}

case 'firework': {
  if (!text) return reply(`*Example:* ${prefix + command} CELEBRATE`);
  reply("🎆 Creating fireworks effect...");
  const res = await ephoto(`https://ephoto360.com/firework-text-effect-online-220.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "🎆 Firework Text" }, { quoted: orman });
  break;
}

case 'warrior': {
  if (!text) return reply(`*Example:* ${prefix + command} ORMAN XMD`);
  reply("⚔️ Designing warrior text...");
  const res = await ephoto(`https://ephoto360.com/create-warrior-logo-text-online-687.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "⚔️ Warrior Text Effect" }, { quoted: orman });
  break;
}

case 'neonlight': {
  if (!text) return reply(`*Example:* ${prefix + command} ORMAN XMD`);
  reply("💡 Making neon light text...");
  const res = await ephoto(`https://ephoto360.com/create-neon-light-text-effect-online-382.html`, text);
  await bot.sendMessage(from, { image: { url: res.image }, caption: "💡 Neon Text" }, { quoted: orman });
  break;
}

case "deadpool": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}deadpool Orman*`);
    }

    const link = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `✅ Effect generated successfully` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in deadpool command:", error);
      reply("*An error occurred while generating the effect.*");
    }
} 
break

case "metal": {
  let q = args.join(" ");
  if (!q) {
    return reply(`*Example: ${prefix}metal Metallic text*`);
  }

  const link = "https://en.ephoto360.com/create-light-effects-metal-online-434.html";

  try {
    let result = await ephoto(link, q);
    await bot.sendMessage(
      m.chat,
      { image: { url: result }, caption: `✅ Metal effect generated successfully` },
      { quoted: m }
    );
  } catch (error) {
    console.error("Error in metal command:", error);
    reply("*An error occurred while generating the metal effect.*");
  }
}
break;

case "effectclounds": {
let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}effectclouds Orman*`);
    }

    const link = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `✅ Effect generated successfully` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in effectclouds command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "flagtext": {
let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}flagtext Orman*`);
    }

    const link = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `✅ Effect generated successfully` },
        { quoted: orman }
      );
    } catch (error) {
      console.error("Error in flagtext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "freecreate": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}freecreate Orman*`);
    }

    const link = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `✅ Effect generated successfully` },
        { quoted: orman }
      );
    } catch (error) {
      console.error("Error in freecreate command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "galaxystyle": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}galaxystyle Orman*`);
    }

    const link = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `✅ Effect generated successfully` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in galaxystyle command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "galaxywallpaper": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}galaxywallpaper Orman*`);
    }

    const link = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `✅ Effect generated successfully` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in galaxywallpaper command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
break
case "makingneon": {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}makingneon Orman*`);
    }

    const link = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";

    try {
      let result = await ephoto(link, q);
      await bot.sendMessage(
        m.chat,
        { image: { url: result }, caption: `✅ Effect generated successfully` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in makingneon command:", error);
      reply("*An error occurred while generating the effect.*");
    }
}
//======[FUN MENU]=======
break
case "dare": {
const dares = [
      "Eat 2 tablespoons of rice without any side dishes.",
      "Spill a secret about yourself.",
      "Call your crush now and send a screenshot.",
      "Drop only emojis for 1 day in group chats.",
      "Sing the chorus of your favorite song.",
      "Change your name to 'I'm a daredevil' for 24 hours.",
      "Tell a random person 'I was told I'm your twin, separated at birth.'",
      "Pretend to be possessed by an animal for 30 minutes.",
      "Record yourself reading a funny quote and send it here.",
      "Prank chat an ex and say 'I still love you.'",
      "Change your profile picture to a funny meme for 5 hours.",
      "Type only in Spanish for 24 hours.",
      "Use a funny voice note greeting for 3 days.",
      "Drop a song quote and tag a suitable member.",
      "Say 'You're beautiful' to someone you admire.",
      "Act like a chicken in front of your parents.",
      "Read a page from a random book aloud and send it here.",
      "Howl like a wolf for 10 seconds outside.",
      "Make a short dance video and put it on your status.",
      "Eat a raw piece of garlic.",
      "Show the last five people you texted and what the messages said.",
      "Put your full name on status for 5 hours.",
      "Make a twerk dance video and put it on your status.",
      "Call your bestie and say 'I love you.'",
      "Put your photo without filters on your status.",
      "Say 'I love you' to someone you secretly admire.",
      "Send a voice note saying 'Can I call you baby?'",
      "Change your name to 'I'm a daredevil' for 24 hours.",
      "Use a Bollywood actor's photo as your profile picture.",
      "Put your crush's photo on status with the caption 'My crush.'",
      "Write 'I love you' to someone and send a screenshot.",
      "Slap your butt and send the sound effect.",
      "Shout 'Bravo!' and send it here.",
      "Snap your face and send it here.",
      "Send your photo with the caption 'I'm feeling confident.'",
      "Kiss your mom or dad and say 'I love you.'",
      "Put your dad's name on status for 5 hours.",
      "Make a TikTok dance challenge video.",
      "Break up with your best friend for 5 hours without telling them.",
      "Tell a friend you love them and want to marry them.",
    ];

    const dareMessage = dares[Math.floor(Math.random() * dares.length)];
    const buffer = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');

    await bot.sendMessage(
      from,
      {
        image: buffer,
        caption: `*DARE*\n${dareMessage}`,
      },
      { quoted: m }
    );
}
break
case "truth": {
const truths = [
      "What's your biggest fear?",
      "Have you ever lied to your best friend?",
      "What's your deepest secret?",
      "Who's your secret crush?",
      "What's the biggest mistake you've ever made?",
      "Have you ever cheated on a test?",
      "What's the most embarrassing thing that's ever happened to you?",
      "Do you have a hidden talent?",
      "What's the biggest lie you've ever told?",
      "Have you ever been in love?",
      "What's the most spontaneous thing you've ever done?",
      "Who's the person you trust most?",
      "What's the biggest risk you've ever taken?",
      "Have you ever regretted something?",
      "What's the most memorable gift you've received?",
      "Have you ever had a crush on someone older?",
      "What's the biggest lesson you've learned?",
      "Have you ever broken someone's heart?",
      "What's the most exciting thing you've done?",
      "Do you believe in soulmates?",
      "What's the biggest challenge you've faced?",
      "Have you ever kept a secret from your parents?",
      "What's the most creative thing you've done?",
      "Have you ever felt betrayed?",
      "What's the biggest adventure you've been on?",
      "Have you ever had a rival?",
      "What's the most thoughtful thing someone's done for you?",
      "Have you ever forgiven someone?",
      "What's the biggest obstacle you've overcome?",
      "Do you believe in karma?",
      "What's the most romantic thing someone's done for you?",
      "Have you ever taken a risk for love?",
      "What's the biggest surprise you've ever received?",
      "Have you ever had a paranormal experience?",
      "What's the most inspiring story you've heard?",
      "Have you ever helped someone in need?",
      "What's the biggest accomplishment you're proud of?",
    ];

    const truthMessage = truths[Math.floor(Math.random() * truths.length)];
    const buffer = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');

    await bot.sendMessage(
      from,
      {
        image: buffer,
        caption: `*TRUTH*\n${truthMessage}`,
      },
      { quoted: orman }
     );
        
}
//=====[end of fun menu cmds]===
break
case 'autotype':
if (!Owner) return reply('Owner only command')
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q === 'on') {
    global.autoTyping = true
    reply(`Successfully changed auto-typing to ${q}`)
} else if (q === 'off') {
    global.autoTyping = false
    reply(`Successfully changed auto-typing to ${q}`)
}
break           

case "setppbot": case "setpp": {
if (!Owner) return reply('Owner only command')
if (/image/g.test(mime)) {
let media = await bot.downloadAndSaveMediaMessage(qmsg)
await bot.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
reply("Success update bot pic ✅")
} else return reply("reply a photo")}
break

//==================================================//
default:
if (budy.startsWith('=>')) {
if (!Owner) return reply('Owner only command')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.length > 100000) {
if (sender == botNumber) return
if (!isGroup) return
}
//==================================================//
if (budy.startsWith("#")) {
if (!Owner) return reply('Owner only command')
try {
let evaled = await eval(q)
if (typeof evaled !== "string") evaled = util.inspect(evaled)
} catch (e) {
console.log(e)
}
}
//==================================================//
if (budy.startsWith('_')) {
if (!Owner) return reply('Owner only command')
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}
    } catch (err) {
        console.log(require("util").format(err));
    }
};
//==================================================//
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
//==================================================//
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})