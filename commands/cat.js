const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Here is your image!")
  .setImage(body.file);

  message.channel.send({embed:catembed});
}

exports.help = {
  name: "cat"
}
