const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
let channel = args[1];
let name = args[2];
let channelname = message.guild.channels.find("name", channel).setName(`${name}`)

message.channel.send(`Numele canalului {channel} a fost schimbat in ${name}!`)

}
module.exports.help = {
  name: "rename"
}
