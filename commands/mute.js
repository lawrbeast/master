const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have enough permission.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mmEmbed = new Discord.RichEmbed()
    .setTitle("Command: $mute")
    .setColor('#111111')
    .setDescription('**Description:** Mute a user\n**Usage:** $mute [@User] [time 1s,1m,1h,1d] [reason]\n**Example:** $mute [@qLau] [15m] reason-optional')
    if (!tomute) return message.channel.send({embed:mmEmbed});
    if (tomute.hasPermission("ADMINISTRATOR")) return message.channel.send(":heavy_multiplication_x: You can't do that to administrators.");
    let reason = args.slice(2).join(" ");
    if (!reason) reason = "no reason"

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("You didn't specified the time.");

    message.delete().catch(O_o => {});

    let muteEmbed = new Discord.RichEmbed()
    .setAuthor('Action: Mute', 'https://www.pngrepo.com/download/240070/mute.png')
    .setColor("#111111")
    .addField("User", tomute, true)
    .addField("Moderator", message.author, true)
    .addField("Duration", mutetime, true)
    .setTimestamp(new Date());

    let incidentschannel = message.guild.channels.find(`name`, "logs");
      let mutedEmbed = new Discord.RichEmbed()
    .setColor('#111111')
    .addField(`You are now muted on: ${message.guild.name}`, `**Duration:** ${mutetime}\n**Reason:** ${reason}\n**Muted by:** ${message.author}`)
    tomute.send({embed:mutedEmbed})
    if (!incidentschannel){
      await (tomute.addRole(muterole.id));
       tomute.send(`You are now muted on: ${message.guild.name}\nDuration: ${mutetime}\nReason: ${reason}`)
    } else {
     await (tomute.addRole(muterole.id));    
    incidentschannel.send({embed:muteEmbed});
  }

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        let unmutedEmbed = new Discord.RichEmbed()
        .setColor('#111111')
        .setDescription(`You are now unmuted on guild: ${message.guild.name}`)
        tomute.send({embed:unmutedEmbed})
    }, ms(mutetime));
}
exports.help = {
  name: "mute"
}
