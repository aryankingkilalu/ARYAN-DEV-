# ARYAN-TECH WhatsApp Bot

## Overview
ORMAN-XMD is a multi-device WhatsApp bot built with @whiskeysockets/baileys. It provides various commands for group management, downloads, AI, utilities, games, and more.

## Recent Changes
- **2026-02-16**: Added Pterodactyl/Katabump panel deployment support (Dockerfile, Procfile, keep-alive server)
- **2026-02-16**: Fixed reconnect loop and pairing code issues
- **2026-02-16**: Fixed deployment errors (dependency conflicts, terri.js parameter mismatch, db initialization bug, pp variable scope, totalcase path)
- **2026-02-16**: Added `setmenu 1-5` command for toggling between 5 different menu styles
- **2026-02-16**: Fixed settings.js to properly read globals from ormanconfig.js
- **2026-02-16**: Added .npmrc with legacy-peer-deps=true to resolve dependency conflicts

## Project Architecture
- `index.js` - Main entry point, creates WhatsApp socket connection + HTTP keep-alive server
- `Orman.js` - Command handler with all bot commands (switch/case)
- `ormanconfig.js` - Global configuration (owner, prefix, etc.)
- `settings.js` - Settings module using globals from ormanconfig
- `start/menu.js` - Menu system with 5 toggleable styles (setmenu 1-5)
- `lib/` - Utility libraries (func, color, exif, converter, etc.)
- `lib/settingManager.js` - Persistent settings manager (JSON-based)
- `lib/terri.js` - Connection handler for reconnect logic (retry limit, delay)
- `OrmanCmds/` - Modular command handlers (antidelete, autoreact, etc.)
- `Database/` - JSON database files
- `Media/` - Media assets

## Panel Deployment (Pterodactyl / Katabump)
- `Dockerfile` - Docker image with Node 20, ffmpeg, webp
- `Procfile` - Worker process definition
- `.env.example` - Required environment variables
- Startup command: `node index.js`
- Set `SESSION_ID` and `PORT` (default 8000) as environment variables
- Keep-alive HTTP server runs on PORT for panel health checks

## Menu Styles (setmenu command)
1. Image menu with decorated borders (default)
2. Text-only clean menu (no image)
3. Interactive list menu (selectable buttons)
4. Compact inline menu (no image)
5. Hexagonal style menu with image

## Key Dependencies
- @whiskeysockets/baileys (WhatsApp Web API)
- Node.js 20+
- Uses .npmrc with legacy-peer-deps=true due to jimp peer dep conflict

## User Preferences
- Owner command prefix: configurable via ormanconfig.js (default: '.')
- SESSION_ID via environment variable or ormanconfig global
