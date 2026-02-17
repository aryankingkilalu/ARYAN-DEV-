async function handleAutoRecording(m, bot) {
    try {
        const botNumber = await bot.decodeJid(bot.user.id);
        
        // Get auto-recording setting from JSON manager
        const autorecording = global.settingsManager?.getSetting(botNumber, 'autorecording', false);
        
        // Check if auto-recording is enabled
        if (!autorecording) {
            return;
        }

        // Don't respond to own messages
        if (m.key.fromMe) return;

        // Check if it's a group and get participant count safely
        if (m.isGroup) {
            try {
                const groupMetadata = await conn.groupMetadata(m.chat);
                const participants = groupMetadata.participants || [];
                
                // Don't auto-record in large groups to avoid spam
                if (participants.length > 50) return;
            } catch (error) {
                console.error("❌ Error getting group metadata:", error);
                return;
            }
        }

        // Send recording indicator (voice message recording)
        await bot.sendPresenceUpdate('recording', m.chat);
        
       
        
        // Stop recording after 3 seconds
        setTimeout(async () => {
            await bot.sendPresenceUpdate('paused', m.chat);
        }, 5000);
        
    } catch (error) {
        console.error("❌ Error in auto-recording:", error);
    }
}

module.exports = { handleAutoRecording };