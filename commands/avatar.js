const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;

    /* Creating the embed */
    let embed = new Discord.RichEmbed()
    	.setTitle(member.tag + '\'s avatar')
    	.setImage(member.avatarURL);

    /* Sending the embed */
    message.channel.send({embed})

}

exports.help = {
  name: "avatar"
}
