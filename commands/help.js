const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setColor("#cc0000")
.setTitle("Funny.Minecraft-Romania.Ro")
.setDescription("funny-sula - masoara-ti sula pe chat\nfunny-avatar - iti arata avatarul tau sau al unui membru\nfunny-serverinfo - iti arata informatiile despre server\nfunny-userinfo <@user> - iti arata informatiile unui user\n\n**Music**\nfunny-play <link> pune o melodie (trebuie sa te conectezi pe voice channel)\nfunny-disconnect - opreste botul")
.setFooter("Funny.Minecraft-Romania.Ro | qLau ©")
message.channel.send({embed:helpembed})
}

module.exports.help = {
  name: "help"
}
