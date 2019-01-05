
const Discord = require('discord.js');

exports.run = (bot, message, args) => {

  message.channel.send("Here is the vote link: https://discordbots.org/bot/530424481446101022/vote")

}

exports.help = {
  name: "vote"
}
