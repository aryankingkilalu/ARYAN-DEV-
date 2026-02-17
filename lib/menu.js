// lib/menu.js
module.exports = {
  getMenuText: (bot, db, totalCases, prefix) => {
    return `
┏━━─『 ⌜ *ARYAN-TECH ᵇᵒᵗ* ⌟ 』─━━
┃│▸ Creator :KING ARYAN-TECH 
┃│▸ Version : 2.0
┃│▸ Status : ᴏɴʟɪɴᴇ
┃│▸ Mode : ${bot.public ? 'Public' : 'Self'}
┃│▸ User : ${Object.keys(db.data.users).length}
┃│▸ Prefix : Mᴜʟᴛ
┃│▸ Total commands : ${totalCases}
┗━━━━━━━━━━━━━━━━━━─···

╭─▢
│     *𖤍  [𝐎𝐖𝐍𝐄𝐑]  𖤍*
│ ◦ 𖣔 ${prefix}autotype 
│ ◦ 𖣔 ${prefix}autorecordtype 
│ ◦ 𖣔 ${prefix}setpp
│ ◦ 𖣔 ${prefix}delpp
│ ◦ 𖣔 ${prefix}setbio
│ ◦ 𖣔 ${prefix}self
│ ◦ 𖣔 ${prefix}public 
│ ◦ 𖣔 ${prefix}addprem 
│ ◦ 𖣔 ${prefix}delprem
│ ◦ 𖣔 ${prefix}ping
│ ◦ 𖣔 ${prefix}repo
│ ◦ 𖣔 ${prefix}status
╰─▢

╭─▢
│     *𖤍  [𝐆𝐑𝐎𝐔𝐏]  𖤍*
│ ◦ 𖣔 ${prefix}kick
│ ◦ 𖣔 ${prefix}add
│ ◦ 𖣔 ${prefix}kill 
│ ◦ 𖣔 ${prefix}promote 
│ ◦ 𖣔 ${prefix}demote
│ ◦ 𖣔 ${prefix}open 
│ ◦ 𖣔 ${prefix}close
│ ◦ 𖣔 ${prefix}hidetag
│ ◦ 𖣔 ${prefix}tagall 
│ ◦ 𖣔 ${prefix}approve
│ ◦ 𖣔 ${prefix}reject
╰─▢

╭─▢
│     *𖤍  [𝐃𝐎𝐖𝐋𝐎𝐀𝐃]  𖤍*
│ ◦ 𖣔 ${prefix}play
│ ◦ 𖣔 ${prefix}tt
│ ◦ 𖣔 ${prefix}igdl
│ ◦ 𖣔 ${prefix}fb
│ ◦ 𖣔 ${prefix}yts
│ ◦ 𖣔 ${prefix}lyrics 
│ ◦ 𖣔 ${prefix}xvideos
│ ◦ 𖣔 ${prefix}sfile
│ ◦ 𖣔 ${prefix}meme
│ ◦ 𖣔 ${prefix}ytmp3
│ ◦ 𖣔 ${prefix}play2
│ ◦ 𖣔 ${prefix}mediaFire
│ ◦ 𖣔 ${prefix}ytmp4 
│ ◦ 𖣔 ${prefix}gitclone
│ ◦ 𖣔 ${prefix}apk
│ ◦ 𖣔 ${prefix}tourl
│ ◦ 𖣔 ${prefix}anime
│ ◦ 𖣔 ${prefix}play 3
│ ◦ 𖣔 ${prefix}video
╰─▢

╭─▢
│     *𖤍  [𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐈𝐎𝐍]  𖤍*
│ ◦ 𖣔 ${prefix}toptt
│ ◦ 𖣔 ${prefix}sticker
│ ◦ 𖣔 ${prefix}fancy
│ ◦ 𖣔 ${prefix}toimage
│ ◦ 𖣔 ${prefix}tovideo
│ ◦ 𖣔 ${prefix}toaudio
╰─▢

╭─▢
│     *𖤍 [𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍] 𖤍*
│ ◦ 𖣔 ${prefix}getname
│ ◦ 𖣔 ${prefix}getpp
│ ◦ 𖣔 ${prefix}listblock
│ ◦ 𖣔 ${prefix}listpc  
╰─▢

> 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ARYAN-TECH ™`;
  }
};