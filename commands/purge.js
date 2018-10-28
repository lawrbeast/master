const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
 //!clear 15
 let mspEmbed = new Discord.RichEmbed()
 .setDescription("❌ Nu poti face asta deoarece nu ai permisiunile necesare.")
 .setColor("#bc2731")
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed:mspEmbed});
 if(!args[0]) return message.channel.send("Te rog să introduci un numar de mesaje între 0 si 100!")
 message.channel.bulkDelete(args[0]).then(() => {
     message.channel.send.then(msg => msg.delete(10000));
 });
}
module.exports.help = {
    name: "clear"
}
