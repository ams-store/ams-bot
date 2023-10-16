/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['62895410106096']
global.ownerName = 'Ams'
global.packname = 'Ams Bot'
global.author = 'Whatsapp Bot'
global.prefa = ['!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'Kamu bukan admin cok!',
botAdmin: 'Bot bukan Admin!',
botOwner: 'Kamu sapa?',
group: 'Hanya di grup!',
private: 'Hanya di Private Chat',
wait: 'Loading...',
done: 'Done.'
}


//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
