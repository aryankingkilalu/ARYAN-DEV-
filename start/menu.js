const {
    proto,
    generateWAMessageFromContent
} = require("@whiskeysockets/baileys");

const menuImages = [
    "https://files.catbox.moe/rq6li9.jpeg",
    "https://files.catbox.moe/zy6mfa.jpeg",
    "https://files.catbox.moe/us8b3s.jpeg",
    "https://files.catbox.moe/3xfxhw.jpg"
];

const audioList = [
    "https://files.catbox.moe/i50hzx.mp4",
    "https://files.catbox.moe/9lnw8d.mp3",
    "https://files.catbox.moe/6fwjwd.mp4",
    "https://files.catbox.moe/zbs97b.mp4",
    "https://files.catbox.moe/znh3p3.mp3",
    "https://files.catbox.moe/imumlt.mp4",
    "https://files.catbox.moe/zki2qy.mp3"
];

function runtime(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

function getMenuCategories(prefix) {
    return {
        owner: {
            title: "OWNER",
            emoji: "👑",
            commands: ["public", "self", "setppbot", "setbio", "block", "unblock", "addpremium", "delpremium", "restart", "eval", "userinfo", "dev"]
        },
        group: {
            title: "GROUP",
            emoji: "👥",
            commands: ["kick", "add", "couple", "promote", "demote", "tagall", "hidetag", "setppgc", "antitoxic", "linkgc", "antilink", "invite", "pin", "unpin", "groupunlock", "grouplock", "mute", "unmute", "groupinfo"]
        },
        download: {
            title: "DOWNLOADS",
            emoji: "🎧",
            commands: ["ytmp4", "orman-play", "play", "music", "song", "video", "ytmp3", "tiktok", "facebook", "instagram", "spotify", "animepic", "avatar", "dog", "cat", "space", "movie", "imagine", "radio"]
        },
        ai: {
            title: "AI",
            emoji: "🧠",
            commands: ["ai", "horoscope", "define", "chatgpt", "aichat", "resetai", "openai", "gemini", "chatbot"]
        },
        utility: {
            title: "UTILITY",
            emoji: "⚙️",
            commands: ["ping", "crypto", "color", "timezones", "math", "sysinfo", "botstatus", "runtime", "delete", "shortlink", "qr", "tourl", "weather", "location", "advice", "news", "screenshot", "translate", "reminder", "shorten", "whois"]
        },
        convert: {
            title: "CONVERT & TOOLS",
            emoji: "🧰",
            commands: ["sticker", "toimg", "toaudio", "tovideo", "tourl", "tts", "fancy", "removebg", "logo", "convert"]
        },
        fun: {
            title: "FUN & GAMES",
            emoji: "🎮",
            commands: ["guessnum", "answer", "coin", "dice", "quiz", "rps", "wish", "fight", "wishme", "roast", "motivate", "pickup", "love", "joke", "meme", "slot", "funfact", "toss", "quotes", "truth", "dare", "riddle", "animequote"]
        },
        coding: {
            title: "CODING",
            emoji: "💻",
            commands: ["decode", "encode"]
        },
        search: {
            title: "SEARCH",
            emoji: "🔍",
            commands: ["lyrics", "ytinfo", "google", "cinfo", "shazam", "movie", "yts", "itunes"]
        },
        effects: {
            title: "EFFECTS & LOGOS",
            emoji: "🌈",
            commands: ["neonlight", "galaxy", "flagtext", "mirror", "toanime", "toreal", "comment", "smoketext", "gradient", "bloodtext", "frametext", "diamondtext", "icetext", "skulltext", "gaminglogo", "rainbow", "warrior", "logo", "logo2", "arting", "galaxystyle", "galaxywallpaper", "imagegen", "deadpool"]
        },
        religion: {
            title: "RELIGION",
            emoji: "📖",
            commands: ["bible", "quran"]
        }
    };
}

function getHeader(pushname, bot, prefix, totalCases) {
    return {
        owner: "ARYAN-TECH",
        user: pushname || "Unknown",
        mode: bot.public ? "🌍 Public" : "🔒 Self",
        prefix: prefix,
        commands: totalCases,
        runtime: runtime(process.uptime())
    };
}

function buildMenuStyle1(prefix, pushname, bot, totalCases) {
    const more = String.fromCharCode(8206);
    const readmore = more.repeat(4001);
    const cats = getMenuCategories(prefix);
    const h = getHeader(pushname, bot, prefix, totalCases);

    let text = `> ╭━𑁍〔🔥 O𝚁𝙼𝙰𝙽-X𝙼𝙳 v2.0 〕╼
> ┃ ❀ Owner : ${h.owner}
> ┃ ❀ User  : ${h.user}
> ┃ ❀ Mode  : ${h.mode}
> ┃ ❀ Prefix : ${h.prefix}
> ┃ ❀︎ Commands : ${h.commands}+ online
> ┃ ❀ Runtime : ${h.runtime}
> ╰━𑁍━══━═━❁━═━══━𑁍━╯
${readmore}`;

    for (const key in cats) {
        const cat = cats[key];
        text += `\n╭━◈〔 ${cat.emoji} ${cat.title} MENU 〕─╼\n`;
        for (const cmd of cat.commands) {
            text += `┃ ◈ ${prefix}${cmd}\n`;
        }
        text += `╰━◈━━━━━━━━❁━━━━━━◈━╯\n${readmore}`;
    }

    text += `\n> ╭───────────────╼ ✵
> ╎ *_Powered By_* : 𝘽𝙡𝙖𝙘𝙠 𝙏𝙚𝙘𝙝 ™
> ╰───────────────╼ ✵
◈━═━〔 *INFO & CREDITS* 〕━═━◈
◈ *_Sponsored By_* : ՏᑌKO ᗪᗴᐯՏ ᑕᖇᗴᗯ ᵗᵐ
◈ Developer: ARYAN-TECH 
◈ Bot: Aryan-tech ᵇᵒᵗ ᐯ2.0.0
◈━══━══━══━❁━══━══━══━◈`;

    return text;
}

function buildMenuStyle2(prefix, pushname, bot, totalCases) {
    const more = String.fromCharCode(8206);
    const readmore = more.repeat(4001);
    const cats = getMenuCategories(prefix);
    const h = getHeader(pushname, bot, prefix, totalCases);

    let text = `┏━━━━━━━━━━━━━━━━━━
┃  *ARYAN-TECH v2.0*
┃  Owner : ${h.owner}
┃  User : ${h.user}
┃  Mode : ${h.mode}
┃  Prefix : ${h.prefix}
┃  Commands : ${h.commands}+
┃  Runtime : ${h.runtime}
┗━━━━━━━━━━━━━━━━━━
${readmore}`;

    for (const key in cats) {
        const cat = cats[key];
        text += `\n┌──「 ${cat.emoji} *${cat.title}* 」──\n`;
        for (const cmd of cat.commands) {
            text += `│ ➤ ${prefix}${cmd}\n`;
        }
        text += `└──────────────\n${readmore}`;
    }

    text += `\n━━━━━━━━━━━━━━━━━━
*Powered By* : ARTAN 𝙏𝙚𝙘𝙝 ™
*Sponsored By* : ARYAN ᗪᗴᐯ ᑕᖇᗴᗯ ᵗᵐ
━━━━━━━━━━━━━━━━━━`;

    return text;
}

function buildMenuStyle3(prefix, pushname, bot, totalCases) {
    const cats = getMenuCategories(prefix);
    const h = getHeader(pushname, bot, prefix, totalCases);

    let text = `*ARYAN-𝚇𝙼𝙳 ᵇᵒᵗ v2.0*

👤 User: ${h.user}
⚡ Mode: ${h.mode}
🔑 Prefix: ${h.prefix}
📊 Commands: ${h.commands}+
⏱️ Runtime: ${h.runtime}

_Select a category below to view commands:_`;

    return text;
}

function buildMenuStyle4(prefix, pushname, bot, totalCases) {
    const more = String.fromCharCode(8206);
    const readmore = more.repeat(4001);
    const cats = getMenuCategories(prefix);
    const h = getHeader(pushname, bot, prefix, totalCases);

    let text = `╔══════════════════╗
║  *ARYAN-TECH ᵇᵒᵗ*  ║
╠══════════════════╣
║ 👤 ${h.user}
║ 🔧 ${h.mode}
║ 🔑 ${h.prefix}
║ 📊 ${h.commands}+ cmds
║ ⏱️ ${h.runtime}
╚══════════════════╝
${readmore}`;

    let num = 1;
    for (const key in cats) {
        const cat = cats[key];
        text += `\n*${num}. ${cat.emoji} ${cat.title}*\n`;
        const cmdList = cat.commands.map(c => `\`${prefix}${c}\``).join(', ');
        text += `${cmdList}\n${readmore}`;
        num++;
    }

    text += `\n╔══════════════════╗
║ *Powered By ARTAN 𝙏𝙚𝙘𝙝 ™*
║ *ARYAN ᗪᗴᐯ ᑕᖇᗴᗯ ᵗᵐ*
╚══════════════════╝`;

    return text;
}

function buildMenuStyle5(prefix, pushname, bot, totalCases) {
    const more = String.fromCharCode(8206);
    const readmore = more.repeat(4001);
    const cats = getMenuCategories(prefix);
    const h = getHeader(pushname, bot, prefix, totalCases);

    let text = `⬡ ═══════════════ ⬡
    *ARYAN-TECH* ᵇᵒᵗ ᐯ2.0
⬡ ═══════════════ ⬡

☆ Owner ➜ ${h.owner}
☆ User ➜ ${h.user}
☆ Mode ➜ ${h.mode}
☆ Prefix ➜ ${h.prefix}
☆ Cmds ➜ ${h.commands}+
☆ Uptime ➜ ${h.runtime}

⬡ ═══════════════ ⬡
${readmore}`;

    for (const key in cats) {
        const cat = cats[key];
        text += `\n⬡━━〔 ${cat.emoji} *${cat.title}* 〕━━⬡\n`;
        for (const cmd of cat.commands) {
            text += `  ☆ ${prefix}${cmd}\n`;
        }
        text += `⬡━━━━━━━━━━━━━━⬡\n${readmore}`;
    }

    text += `\n⬡ ═══════════════ ⬡
  *Powered By ARYAN 𝙏𝙚𝙘𝙝 ™*
  *ARYAN ᗪᗴᐯ ᑕᖇᗴᗯ ᵗᵐ*
⬡ ═══════════════ ⬡`;

    return text;
}

function getInteractiveListSections(prefix) {
    const cats = getMenuCategories(prefix);
    const sections = [];

    for (const key in cats) {
        const cat = cats[key];
        const rows = cat.commands.map(cmd => ({
            title: `${prefix}${cmd}`,
            description: `Use ${prefix}${cmd}`,
            id: `${prefix}${cmd}`
        }));
        sections.push({
            title: `${cat.emoji} ${cat.title}`,
            rows: rows
        });
    }

    return sections;
}

async function sendMenu(bot, m, prefix, global, pushname, totalCases) {
    try {
        const menuStyle = global.db?.data?.settings?.menuStyle || 1;
        const selectedImage = menuImages[Math.floor(Math.random() * menuImages.length)];
        const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "```120363420172397674@newsletter```",
                newsletterName: "🌟 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 ARYAN-TECH 𝙼𝙴𝙽𝚄 🌟"
            }
        };

        if (menuStyle === 1) {
            const menuText = buildMenuStyle1(prefix, pushname, bot, totalCases);
            await bot.sendMessage(m.chat, {
                image: { url: selectedImage },
                caption: menuText,
                contextInfo
            }, { quoted: m });

        } else if (menuStyle === 2) {
            const menuText = buildMenuStyle2(prefix, pushname, bot, totalCases);
            await bot.sendMessage(m.chat, {
                text: menuText,
                contextInfo
            }, { quoted: m });

        } else if (menuStyle === 3) {
            const menuText = buildMenuStyle3(prefix, pushname, bot, totalCases);
            const sections = getInteractiveListSections(prefix);
            const listBtn = {
                title: "📜 View Commands",
                sections: sections
            };

            try {
                if (typeof bot.sendList === 'function') {
                    await bot.sendList(m.chat, menuText, "𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ARTAN 𝚃𝙴𝙲𝙷 ™", listBtn, m);
                } else {
                    let msg = generateWAMessageFromContent(m.chat, {
                        viewOnceMessage: {
                            message: {
                                "messageContextInfo": {
                                    "deviceListMetadata": {},
                                    "deviceListMetadataVersion": 2
                                },
                                interactiveMessage: proto.Message.InteractiveMessage.create({
                                    body: proto.Message.InteractiveMessage.Body.create({ text: menuText }),
                                    footer: proto.Message.InteractiveMessage.Footer.create({ text: "𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ARYAN 𝚃𝙴𝙲𝙷 ™" }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                        buttons: [{
                                            "name": "single_select",
                                            "buttonParamsJson": JSON.stringify(listBtn)
                                        }]
                                    })
                                })
                            }
                        }
                    }, { quoted: m });
                    await bot.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
                }
            } catch(e) {
                console.error("Interactive menu fallback:", e.message);
                const fallback = buildMenuStyle1(prefix, pushname, bot, totalCases);
                await bot.sendMessage(m.chat, {
                    text: fallback,
                    contextInfo
                }, { quoted: m });
            }

        } else if (menuStyle === 4) {
            const menuText = buildMenuStyle4(prefix, pushname, bot, totalCases);
            await bot.sendMessage(m.chat, {
                text: menuText,
                contextInfo
            }, { quoted: m });

        } else if (menuStyle === 5) {
            const menuText = buildMenuStyle5(prefix, pushname, bot, totalCases);
            await bot.sendMessage(m.chat, {
                image: { url: selectedImage },
                caption: menuText,
                contextInfo
            }, { quoted: m });

        } else {
            const menuText = buildMenuStyle1(prefix, pushname, bot, totalCases);
            await bot.sendMessage(m.chat, {
                image: { url: selectedImage },
                caption: menuText,
                contextInfo
            }, { quoted: m });
        }

        await bot.sendMessage(m.chat, {
            audio: { url: randomAudio },
            mimetype: "audio/mp4",
            ptt: false,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true
            }
        }, { quoted: m });

    } catch (e) {
        console.error("Menu error:", e);
        throw e;
    }
}

async function setMenuStyle(bot, m, style) {
    const validStyles = [1, 2, 3, 4, 5];
    const num = parseInt(style);

    if (!validStyles.includes(num)) {
        await bot.sendMessage(m.chat, {
            text: `❌ Invalid menu style! Choose from 1 to 5:\n\n*1* ➜ Image menu with decorated borders\n*2* ➜ Text-only clean menu (no image)\n*3* ➜ Interactive list menu (selectable)\n*4* ➜ Compact inline menu (no image)\n*5* ➜ Hexagonal style menu with image\n\nUsage: .setmenu 1`
        }, { quoted: m });
        return;
    }

    if (!global.db.data.settings) global.db.data.settings = {};
    global.db.data.settings.menuStyle = num;
    await global.db.write().catch(() => {});

    const styleNames = {
        1: "Image menu with decorated borders",
        2: "Text-only clean menu (no image)",
        3: "Interactive list menu (selectable)",
        4: "Compact inline menu (no image)",
        5: "Hexagonal style menu with image"
    };

    await bot.sendMessage(m.chat, {
        text: `✅ Menu style changed to *Style ${num}*\n\n📋 ${styleNames[num]}\n\nType *.menu* to see the new style!`
    }, { quoted: m });
}

module.exports = { sendMenu, setMenuStyle };
