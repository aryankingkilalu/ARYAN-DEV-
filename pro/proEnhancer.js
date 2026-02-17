
// ARYAN -XMD PRO ENHANCER
// Adds anti-crash, cooldown system, and performance logging
module.exports = function enablePro(sock) {
    console.log("🚀 ARYAN XMD PRO MODE ACTIVATED");

    // Global cooldown system
    const cooldown = new Map();

    sock.proCooldown = (user, seconds = 3) => {
        const now = Date.now();
        if (cooldown.has(user)) {
            const expire = cooldown.get(user);
            if (now < expire) return true;
        }
        cooldown.set(user, now + seconds * 1000);
        return false;
    };

    // Anti-crash protection
    process.on("uncaughtException", (err) => {
        console.error("❌ Uncaught Exception:", err.message);
    });

    process.on("unhandledRejection", (reason) => {
        console.error("❌ Unhandled Rejection:", reason);
    });

    // Memory monitor
    setInterval(() => {
        const mem = process.memoryUsage().rss / 1024 / 1024;
        console.log(`📊 Memory Usage: ${mem.toFixed(2)} MB`);
    }, 60000);
};
