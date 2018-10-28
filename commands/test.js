const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

let iq = [1, 23, 43 , 159, 200]
let iqres = Math.floor(Math.random() * iq.length);

let iqembed = new Discord.RichEmbed()
.setTitle("Verifica-ti IQ-ul!")
.setColor("RANDOM")
.addField(`IQ-ul tau este`, iq[iqres])
.setFooter("Funny.Minecraft-Romania.Ro | qLau");
message.channel.send(iqembed);
return

}
module.exports.help = {
  name: "iq"
}
