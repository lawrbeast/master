
const Discord = require("discord.js");
const meme = require('memejs');

exports.run = async (bot, message, args, level) => { // eslint-disable-line no-unused-vars
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("#0a9678")
  .setImage(data.url[0])
  message.channel.send({embed});
  })};
  
  exports.help = {
	 name: "meme"
  }
