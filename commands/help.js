const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setColor("#990000")
.setTitle("Funny.Minecraft-Romania.Ro")
.setDescription("funny-avatar - iti arata avatarul tau sau al unui membru\nfunny-serverinfo - iti arata informatiile despre server\nfunny-userinfo <@user> - iti arata informatiile unui user")
.setFooter("Funny.Minecraft-Romania.Ro | qLau ©")
message.channel.send({embed:helpembed})
}

module.exports.help = {
  name: "help"
}
