const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
let sicon = bot.user.displayAvatarURL;
let helpembed = new Discord.RichEmbed()
.setColor("#111111")
.setAuthor('Master Commands', sicon)
.addField('Fun Commands', '$emojify [text] - transform a text into emoji\n$meme - gives you a nice juicy meme\n$cat - gives you a cat image :cat:\n$dog- gives you a dog image :dog:\n$gif [gifname] - search a gif\n$avatar - gives your avatar\n')
.addField('Moderation Commands', '$ban [@user] - ban a user\n$kick [@user] - kick a user\n$mute [@user] [time 1s,1m,1h,1d]- mute a user\n$serverinfo - gives you server information\n$roleinfo [@role] - gives you information about a specified role\n$userinfo - gives you information about a specified user\n$clear [0-100] - clear a number of messages\n')
.addField('Music Commands', '$play [link or name] - play a song\n$disconnect - stop the bot\nMaster can\'t queue songs YET.')
.addField('Game Trackers', '$fortnite [name] [platform] - gives you information about a specified Fortnite player\n$csgo [customURL] - gives you information about a specified CS GO player\n$osu [name] - gives you information about a specified OSU! player')
.addField('Help Master with a vote!', '$vote - gives you the vote link (powered by discordbots.org)')
.setFooter('Support Server: https://discord.gg/zs3RUPw')
message.channel.send({embed:helpembed})
}

module.exports.help = {
  name: "help"
}
