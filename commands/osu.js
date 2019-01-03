const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("23c63fd56e589b9af0a0f820fce22e6785e32bb3" , {
    notFoundAsError: true,
    completeScores: false
})

module.exports.run = async (bot, message, args) => {


  let username = args[0]


  if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')

api.getUser({u: username}).then(user => {
  const embed = new Discord.RichEmbed()
  .setAuthor('OSU! Game Tracker', 'https://vignette.wikia.nocookie.net/logopedia/images/d/d3/Osu%21Logo_%282015%29.png/revision/latest?cb=20180326010029')
  .setThumbnail(`https://vignette.wikia.nocookie.net/logopedia/images/d/d3/Osu%21Logo_%282015%29.png/revision/latest?cb=20180326010029`)
  .setColor("#D0436A")
  .addField('Nickname', user.name, true)
  .addField('PP', Math.round(user.pp.raw), true)
  .addField('Rank', user.pp.rank, true)
  .addField('Level', Math.round(user.level), true)
  .addBlankField()
  .addField('Country', user.country, true)
  .addField('Country Rank', user.pp.countryRank, true)
  .addField('Playcount', user.counts.plays, true)
  .addField('Accuracy', `${user.accuracyFormatted}`, true)
  .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed)

})

}

module.exports.help = {
  name: "osu"
}
