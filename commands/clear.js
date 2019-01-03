const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
 //!clear 15
 let mspEmbed = new Discord.RichEmbed()
 .setDescription("❌ You don't have permission.")
 .setColor("#bc2731")
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed:mspEmbed});
 if(!args[0]) return message.channel.send("Please specify a number of messages that you want to delete.")
 message.channel.bulkDelete(args[0]).then(() => {
     message.channel.send.then(msg => msg.delete(10000));
 });
}
module.exports.help = {
    name: "clear"
}
