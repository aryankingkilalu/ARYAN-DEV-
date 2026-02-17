const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

class SQLiteAdapter {
    constructor(dbPath = './Database/database.sqlite') {
        this.dbPath = dbPath;
        this.db = null;
        this.data = null;
        this.READ = false;
        this.init();
    }

    init() {
        // Ensure Database directory exists
        const dir = path.dirname(this.dbPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        this.db = new Database(this.dbPath);
        this.createTables();
        this.loadData();
    }

    createTables() {
        // Main data table
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS bot_data (
                key TEXT PRIMARY KEY,
                value TEXT
            )
        `);

        // Users table
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                jid TEXT PRIMARY KEY,
                data TEXT
            )
        `);

        // Chats table
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS chats (
                jid TEXT PRIMARY KEY,
                data TEXT
            )
        `);

        // Settings table
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS settings (
                key TEXT PRIMARY KEY,
                value TEXT
            )
        `);

        // Game table
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS game (
                key TEXT PRIMARY KEY,
                value TEXT
            )
        `);

        // Others table
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS others (
                key TEXT PRIMARY KEY,
                value TEXT
            )
        `);

        // Sticker table
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS sticker (
                key TEXT PRIMARY KEY,
                value TEXT
            )
        `);
    }

    loadData() {
        try {
            const stmt = this.db.prepare('SELECT value FROM bot_data WHERE key = ?');
            const result = stmt.get('main_data');
            
            if (result) {
                this.data = JSON.parse(result.value);
            } else {
                // Initialize with default structure
                this.data = {
                    users: {},
                    chats: {},
                    database: {},
                    game: {},
                    settings: {},
                    others: {},
                    sticker: {}
                };
                this.saveData();
            }
        } catch (error) {
            console.error('Error loading data:', error);
            this.data = {
                users: {},
                chats: {},
                database: {},
                game: {},
                settings: {},
                others: {},
                sticker: {}
            };
        }
    }

    saveData() {
        try {
            const stmt = this.db.prepare(`
                INSERT OR REPLACE INTO bot_data (key, value) 
                VALUES (?, ?)
            `);
            stmt.run('main_data', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    async read() {
        if (this.READ) {
            return new Promise((resolve) => {
                const interval = setInterval(() => {
                    if (!this.READ) {
                        clearInterval(interval);
                        resolve(this.data);
                    }
                }, 100);
            });
        }

        this.READ = true;
        this.loadData(); // Reload data from database
        this.READ = false;
        return this.data;
    }

    async write() {
        this.saveData();
        return true;
    }

    // Helper methods for specific data types
    async getUser(jid) {
        const stmt = this.db.prepare('SELECT data FROM users WHERE jid = ?');
        const result = stmt.get(jid);
        return result ? JSON.parse(result.data) : null;
    }

    async setUser(jid, userData) {
        const stmt = this.db.prepare(`
            INSERT OR REPLACE INTO users (jid, data) 
            VALUES (?, ?)
        `);
        stmt.run(jid, JSON.stringify(userData));
    }

    async getChat(jid) {
        const stmt = this.db.prepare('SELECT data FROM chats WHERE jid = ?');
        const result = stmt.get(jid);
        return result ? JSON.parse(result.data) : null;
    }

    async setChat(jid, chatData) {
        const stmt = this.db.prepare(`
            INSERT OR REPLACE INTO chats (jid, data) 
            VALUES (?, ?)
        `);
        stmt.run(jid, JSON.stringify(chatData));
    }

    async getSetting(key) {
        const stmt = this.db.prepare('SELECT value FROM settings WHERE key = ?');
        const result = stmt.get(key);
        return result ? JSON.parse(result.value) : null;
    }

    async setSetting(key, value) {
        const stmt = this.db.prepare(`
            INSERT OR REPLACE INTO settings (key, value) 
            VALUES (?, ?)
        `);
        stmt.run(key, JSON.stringify(value));
    }

    // Chain method for backward compatibility (minimal implementation)
    chain() {
        return {
            get: (table) => ({
                find: (query) => ({
                    value: () => {
                        const jid = query.jid;
                        return this.data[table]?.[jid] || null;
                    },
                    assign: (data) => {
                        const jid = query.jid;
                        if (!this.data[table]) this.data[table] = {};
                        this.data[table][jid] = { ...this.data[table][jid], ...data };
                        this.saveData();
                        return this.data[table][jid];
                    }
                })
            })
        };
    }
}

module.exports = SQLiteAdapter;