const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let wEmbed = new Discord.RichEmbed()
        .setTitle('Command: $warn')
        .setDescription('**Description:** Warn a member\n**Usage:** $warn [@User] [reason]\n**Example:** $warn [@qLau] reason-optional')
        if(!wUser) return message.channel.send({embed:wEmbed})
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have enough permission.");
        if(wUser.hasPermission("ADMINISTRATOR")) return message.channel.send(":heavy_multiplication_x: You can't do that to administrators.");
        let wReason = args.join(" ").slice(22)
        if(!wReason) wReason = "fara motiv"

        message.channel.send(`${wUser} has been warned!`);
        wUser.send(`You've been warned in **${message.guild.name}** by **${message.author.tag}** with the reason: ${wReason}`)
}

module.exports.help = {
    name: "warn"
}
