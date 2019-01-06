const Discord = require("discord.js");
const gifSearch = require('gif-search');

exports.run = (bot, message, args, tools) => {
  if(!args[0]) return message.channel.send('Usage: $gif [gifname]')
  gifSearch.random(args[0]).then(
        gifUrl => {
        
        const embed = new Discord.RichEmbed()
            .setColor(`#0a9678`)
            .setImage(gifUrl)
        message.channel.send({embed});
    });
  }
exports.help = {
  name: "gif" 
}
