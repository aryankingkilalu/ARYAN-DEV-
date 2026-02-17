async function handleAutoReact(m, bot) {
    try {
        const botNumber = await bot.decodeJid(bot.user.id);
        
        // Get auto-react setting from JSON manager
        const autoreact = global.settingsManager?.getSetting(botNumber, 'autoreact', false);
        
        // Check if auto-react is enabled
        if (!autoreact) {
            return;
        }

        // Don't react to bot's own messages
        const sender = m.key.participant || m.key.remoteJid;
        if (sender === botNumber) return;

        // List of common emoji reactions
        const reactions = ['👍', '❤️', '😂', '😮', '😢', '🔥', '👏', '🎉', '🤩', '🙏', '💯', '👀', '✨', '🥳', '😎'];
        
        // Pick a random reaction
        const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
        
        // Send the reaction
        await bot.sendMessage(m.key.remoteJid, {
            react: {
                text: randomReaction,
                key: m.key
            }
        });
        
        
        
    } catch (error) {
        console.error("❌ Error in auto-react:", error);
    }
}

module.exports = { handleAutoReact };