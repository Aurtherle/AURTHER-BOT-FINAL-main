
let handler = async (m, { conn, args, groupMetadata}) => {
       let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       if (!(who in global.db.data.users)) throw `المستخدم غير موجود ف قاعدة بياناتي`
       let warn = global.db.data.users[who].warn
       let name = conn.getName(who)
      m.reply(`
*❃ ──────⊰ ❀ ⊱────── ❃*
          *عدد الإنذارات*
*❃ ──────⊰ ❀ ⊱────── ❃*
◍ *الأسم :* ${name} 
◍ *الإنذارات :* ${warn}
*❃ ──────⊰ ❀ ⊱────── ❃*`)
}

handler.help = ['warns']
handler.tags = ['group']
handler.command = ['انذارات'] 
handler.group = true

export default handler
