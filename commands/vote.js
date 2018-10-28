const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

 if (!message.member.hasPermissions ('ADMINISTRATOR')) return
let voteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Voteaza!")
.setDescription(`**${args.join(" ")}**`)
.setFooter("Funny.Minecraft-Romania.Ro | qLau ©");

const msg = await message.channel.send({embed:voteembed})
await msg.react("✅");
await msg.react("❎");

};
module.exports.help = {
    name: "vote"
};
