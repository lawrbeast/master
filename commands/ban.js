const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let bEmbed = new Discord.RichEmbed()
  .setTitle('Command: $ban')
  .setColor('#111111')
  .setDescription('**Description:** Ban a user\n**Usage:** $ban [@user] [reason]\n**Example:** $ban [@qLau] reason-optional')
  if(!bUser) return message.channel.send({embed:bEmbed})
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have enough permission.");
  if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send(":heavy_multiplication_x: You can't do that to administrators.");
  let bReason = args.join(" ").slice(22);
  if(!bReason) bReason = "no reason"

  let banEmbed = new Discord.RichEmbed()
  .setAuthor('Action: Ban', 'http://pltc.sbu.ac.ir/wp-content/uploads/2016/11/lawsandrules.png')
  .setColor("#111111")
  .addField("User", bUser, true)
  .addField("Moderator", message.author.username, true)
  .addField("Reason", bReason, true)
  .setTimestamp(new Date());

  let banchannel = message.guild.channels.find(`name`, "logs");
  if(!banchannel){
  message.guild.member(bUser).ban(bReason);
} else {
  message.guild.member(bUser).ban(bReason);
  banchannel.send({embed:banEmbed});
}
}

module.exports.help = {
  name: "ban"
}
