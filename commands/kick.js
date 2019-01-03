const Discord = require("discord.js");

module.exports.run =  (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let kEmbed = new Discord.RichEmbed()
        .setTitle('Command: $kick')
        .setColor('#111111')
        .setDescription('**Description:** Kick a user\n**Usage:** $kick [@user] [reason]\n**Example:** $kick [@qLau] reason-optional')
        if(!kUser) return message.channel.send({embed:kEmbed})
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have enough permission.");
        if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send(":heavy_multiplication_x: You can't do that to administrators.");
        let kReason = args.join(" ").slice(22);
        if(!kReason) kReason = "no reason"

        let kickEmbed = new Discord.RichEmbed()
        .setFooter(`${kUser.id}`)
        .setDescription(`Kick - Case | ${kUser}`)
        .setColor("#111111")
        .setTimestamp(new Date())
        .addField("User", kUser, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", kReason, true);


        let kickChannel = message.guild.channels.find(`name`, "logs");
        if(!kickChannel){
          message.guild.member(kUser).kick(kReason)
          return
        } else {
        kickChannel.send({embed:kickEmbed});
      }
    }

module.exports.help = {
    name: "kick"
}
