const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor('#111111')
    .setTitle("Here is your image!")
    .setImage(body.message)
    message.channel.send({embed})
    

}
