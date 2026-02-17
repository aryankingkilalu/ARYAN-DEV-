const path = require('path');
const fs = require('fs');

function extractMessageText(message) {
    if (!message) return "";
    
    if (message.conversation) {
        return message.conversation;
    } else if (message.extendedTextMessage?.text) {
        return message.extendedTextMessage.text;
    } else if (message.imageMessage?.caption) {
        return message.imageMessage.caption;
    } else if (message.videoMessage?.caption) {
        return message.videoMessage.caption;
    } else if (message.documentMessage?.caption) {
        return message.documentMessage.caption;
    } else if (message.protocolMessage?.editedMessage) {
        // Handle edited messages recursively
        return extractMessageText(message.protocolMessage.editedMessage);
    }
    return "";
}



// message storage for antidelete 
function loadStoredMessages() {
    try {
        if (fs.existsSync('.Database/deleted_messages.json')) {
            const data = fs.readFileSync('./Database/deleted_messages.json', 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading stored messages:', error);
    }
    return {};
}

function saveStoredMessages(messages) {
    try {
        const dir = './Database';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync('./Database/deleted_messages.json', JSON.stringify(messages, null, 2));
    } catch (error) {
        console.error('Error saving stored messages:', error);
    }
}

function storeMessage(chatId, messageId, messageData) {
    try {
        const storedMessages = loadStoredMessages();
        
        if (!storedMessages[chatId]) {
            storedMessages[chatId] = {};
        }
        
        let textContent = "";
        let mediaType = "text";
        const msgType = Object.keys(messageData.message || {})[0];
        
        const isStatusMessage = 
            chatId === 'status@broadcast' || 
            (messageData.key && messageData.key.remoteJid === 'status@broadcast');
        
        if (msgType === 'conversation') {
            textContent = messageData.message.conversation;
        } else if (msgType === 'extendedTextMessage') {
            textContent = messageData.message.extendedTextMessage?.text || "";
        } else if (msgType === 'imageMessage') {
            textContent = messageData.message.imageMessage?.caption || "[Image Status]";
            mediaType = "image";
        } else if (msgType === 'videoMessage') {
            textContent = messageData.message.videoMessage?.caption || "[Video Status]";
            mediaType = "video";
        } else if (msgType === 'audioMessage') {
            textContent = "[Audio Status]";
            mediaType = "audio";
        } else if (msgType === 'stickerMessage') {
            textContent = "[Sticker Status]";
            mediaType = "sticker";
        } else {
            textContent = `[${msgType} Status]`;
        }
        
        storedMessages[chatId][messageId] = {
            key: messageData.key,
            message: messageData.message,
            messageTimestamp: messageData.messageTimestamp,
            pushName: messageData.pushName,
            text: textContent,
            mediaType: mediaType,
            storedAt: Date.now(),
            isStatus: isStatusMessage,
            remoteJid: messageData.key?.remoteJid || chatId
        };
        
        const chatMessages = Object.keys(storedMessages[chatId]);
        if (chatMessages.length > 100) {
            const oldestMessageId = chatMessages[0];
            delete storedMessages[chatId][oldestMessageId];
        }
        
        saveStoredMessages(storedMessages);
        
    } catch (error) {
        console.error("Error storing message:", error);
    }
}

module.exports = {
loadStoredMessages,
saveStoredMessages,
storeMessage
};      