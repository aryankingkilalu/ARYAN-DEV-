const timezones = global.timezones || "Africa/Kampala";
const moment = require("moment-timezone")
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

const { 
loadStoredMessages,
saveStoredMessages,
storeMessage } = require('../start/Kevin');

async function handleAntiDelete(m, bot) {
    try {
        const botNumber = await bot.decodeJid(bot.user.id);
        
        // Get anti-delete setting from database
        const antideleteSetting = global.settingsManager?.getSetting(botNumber, 'antidelete', 'off');
        
        // Check if anti-delete is enabled
        if (!antideleteSetting || antideleteSetting === 'off') {
            return;
        }

        let messageId = m.message.protocolMessage.key.id;
        let chatId = m.chat;
        let deletedBy = m.sender;
        const isGroup = chatId.endsWith('@g.us');

        let storedMessages = loadStoredMessages();
        let deletedMsg = storedMessages[chatId]?.[messageId];

        if (!deletedMsg) {
            return;
        }

        let sender = deletedMsg.key.participant || deletedMsg.key.remoteJid;

        let chatName;
        if (deletedMsg.key.remoteJid === 'status@broadcast') {
            chatName = "Status Update";
        } else if (isGroup) {
            try {
                const groupInfo = await bot.groupMetadata(chatId);
                chatName = groupInfo.subject || "Group Chat";
            } catch {
                chatName = "Group Chat";
            }
        } else {
            chatName = deletedMsg.pushName || m.pushName || "Private Chat";
        }

        let messageTime = moment(deletedMsg.messageTimestamp * 1000).tz(`${timezones}`).locale('en').format('HH:mm z');
        let messageDate = moment(deletedMsg.messageTimestamp * 1000).tz(`${timezones}`).format("DD/MM/YYYY");
        let deleteTime = moment().tz(timezones).format('HH:mm');
        let deleteDate = moment().tz(timezones).format('DD/MM/YYYY');

        // Determine target chat based on antidelete mode
        let targetChat;
        if (antideleteSetting === 'private') {
            targetChat = bot.user.id; // Bot owner's inbox
        } else if (antideleteSetting === 'chat') {
            targetChat = chatId; // Same chat where deletion happened
        } else {
            return;
        }

        // Handle media messages
        if (!deletedMsg.message.conversation && !deletedMsg.message.extendedTextMessage) {
            try {
                let forwardedMsg = await bot.sendMessage(
                    targetChat,
                    { 
                        forward: deletedMsg,
                        contextInfo: { isForwarded: false }
                    },
                    { quoted: deletedMsg }
                );
                
                let mediaInfo = `🔮 *𝐃𝐄𝐋𝐄𝐓𝐄𝐃 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃* 🔮
${readmore}
🔸 *Chat:* ${chatName}
🔸 *Sender:* @${sender.split('@')[0]}
🔸 *Sent:* ${messageTime} | ${messageDate}
🔸 *Deleted By:* @${deletedBy.split('@')[0]}
🔸 *Deleted At:* ${deleteTime} | ${deleteDate}

🔸 *Type:* Media Message
🔸 *Status:* Media recovered and forwarded`;

                await bot.sendMessage(
                    targetChat, 
                    { text: mediaInfo, mentions: [sender, deletedBy] },
                    { quoted: forwardedMsg }
                );
                
            } catch (mediaErr) {
                console.error("Media recovery failed:", mediaErr);
                let replyText = `🔮 *𝐃𝐄𝐋𝐄𝐓𝐄𝐃 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃* 🔮
${readmore}
🔹 *Chat:* ${chatName}
🔹 *Sender:* @${sender.split('@')[0]}
🔹 *Sent:* ${messageTime} | ${messageDate}
🔹 *Deleted By:* @${deletedBy.split('@')[0]}
🔹 *Deleted At:* ${deleteTime} | ${deleteDate}

🔹 *Type:* Media Message
⚠️ *Status:* Media recovery failed
🔹 *Message:* [Media content could not be recovered]`;

                let quotedMessage = {
                    key: {
                        remoteJid: chatId,
                        fromMe: sender === bot.user.id,
                        id: messageId,
                        participant: sender
                    },
                    message: { conversation: "Media recovery failed" }
                };

                await bot.sendMessage(
                    targetChat,
                    { text: replyText, mentions: [sender, deletedBy] },
                    { quoted: quotedMessage }
                );
            }
        } 
        // Handle text messages
        else {
            let text = deletedMsg.message.conversation || 
                      deletedMsg.message.extendedTextMessage?.text || 
                      "[No text content]";

            // Format text if it's too long
            let displayText = text;
            if (text.length > 500) {
                displayText = text.substring(0, 500) + "... [message truncated]";
            }

            let replyText = `🔮 *𝐃𝐄𝐋𝐄𝐓𝐄𝐃 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃* 🔮
${readmore}
🔹 *Chat:* ${chatName}
🔹 *Sender:* @${sender.split('@')[0]}
🔹 *Sent:* ${messageTime} | ${messageDate}
🔹 *Deleted By:* @${deletedBy.split('@')[0]}
🔹 *Deleted At:* ${deleteTime} | ${deleteDate}

🔹 *Type:* Text Message
🔹 *Original Message:*
────────────────────
${displayText}
────────────────────

🔒 *Anti-Delete Mode:* ${antideleteSetting.charAt(0).toUpperCase() + antideleteSetting.slice(1)}`;

            let quotedMessage = {
                key: {
                    remoteJid: chatId,
                    fromMe: sender === bot.user.id,
                    id: messageId,
                    participant: sender
                },
                message: {
                    conversation: text 
                }
            };

            await bot.sendMessage(
                targetChat,
                { 
                    text: replyText, 
                    mentions: [sender, deletedBy] 
                },
                { quoted: quotedMessage }
            );
        }

    } catch (err) {
        console.error("❌ Error processing deleted message:", err);
    }
}

module.exports = { handleAntiDelete };