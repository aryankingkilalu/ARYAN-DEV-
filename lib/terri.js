
const ascii = `ARYAN-TECH
const chalk = require("chalk")

let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 10;
const RECONNECT_DELAY_MS = 5000;

const Connecting = async ({
  update,
  bot,
  conn,
  Boom,
  DisconnectReason,
  sleep,
  color,
  clientstart,
}) => {   
     const connection_obj = bot || conn;
     const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            console.log(color(lastDisconnect.error, 'deeppink'));

            if (reason === DisconnectReason.connectionReplaced) {
                console.log(chalk.red.bold('connection replaced, another new session opened, please close current session first'));
                try { connection_obj.logout(); } catch(e) {}
                return;
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(chalk.red.bold(`device logged out, please delete session folder and scan again.`));
                const fs = require('fs');
                try { fs.rmSync('./session', { recursive: true, force: true }); } catch(e) {}
                console.log(chalk.yellow.bold('session cleared, restarting...'));
                await sleep(RECONNECT_DELAY_MS);
                await clientstart();
                return;
            } else if (reason === DisconnectReason.badSession) {
                console.log(chalk.red.bold(`bad session file, clearing and restarting...`));
                const fs = require('fs');
                try { fs.rmSync('./session', { recursive: true, force: true }); } catch(e) {}
                await sleep(RECONNECT_DELAY_MS);
                await clientstart();
                return;
            }

            reconnectAttempts++;
            if (reconnectAttempts > MAX_RECONNECT_ATTEMPTS) {
                console.log(chalk.red.bold(`Max reconnect attempts (${MAX_RECONNECT_ATTEMPTS}) reached. Stopping.`));
                process.exit();
                return;
            }

            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
                console.log(chalk.yellow.bold(`stream error, reconnecting in ${RECONNECT_DELAY_MS / 1000}s... (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`));
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log(chalk.yellow.bold(`connection closed, reconnecting in ${RECONNECT_DELAY_MS / 1000}s... (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`));
            } else if (reason === DisconnectReason.connectionLost) {
                console.log(chalk.yellow.bold(`connection lost, reconnecting in ${RECONNECT_DELAY_MS / 1000}s... (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`));
            } else if (reason === DisconnectReason.restartRequired) {
                console.log(chalk.yellow.bold('restart required, restarting...'));
                reconnectAttempts = 0;
            } else if (reason === DisconnectReason.timedOut) {
                console.log(chalk.yellow.bold(`connection timed out, reconnecting in ${RECONNECT_DELAY_MS / 1000}s... (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`));
            } else {
                console.log(chalk.yellow.bold(`unknown disconnect reason (${reason}), reconnecting in ${RECONNECT_DELAY_MS / 1000}s... (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`));
            }

            await sleep(RECONNECT_DELAY_MS);
            await clientstart();

        } else if (connection === "connecting") {
            console.log(chalk.blue.bold('connecting . . .'));
        } else if (connection === "open") {
            reconnectAttempts = 0;
            console.log(`${ascii}`)
            console.log(chalk.blue.bold('bot successfully connected'));
            
        }}
        
 
 module.exports = { Connecting };
