const discord = require("discord.js");
const db = require("quick.db")

module.exports.run = (bot, args, message) => {
db.set('userInfo', { difficulty: 'Easy' })

if(args[0] === "add"){
coins = args[1]
db.add('userInfo.balance', coins)
}
if(args[0] === "stats"){
message.channel.send(db.get('userInfo.balance'));
}
  
}

exports.help = {
  name: "coins"
}
