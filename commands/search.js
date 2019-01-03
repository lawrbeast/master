const Discord = require('discord.js');
const search = require('yt-search');

exports.run = (bot, message, args) => {

  search(args.join(' '), function(err, res) {
    if (err) return message.channel.send('Something went wrong.')
    let videos = res.videos.slice(0, 10);
    let resp = '';
    for (var i in videos) {
      resp += `**[${parseInt(i)+1}]:** \`${videos[i].title} - [${videos[i].timestamp}]\`\n`;
    }

    resp += `\n\`\`Choose a number between 1-${videos.length}\`\``;
    let sicon = message.author.avatarURL;
    const respembed = new Discord.RichEmbed()
    .setColor('#cc0000')
    .setTitle(`Results for: ${args.join(' ')}`)
    .setThumbnail('https://fitness-aalsmeer.nl/wp-content/uploads/2016/09/icoon-play-Fitness-Aalsmeer-300x225.png')
    .setAuthor(message.author.username, sicon)
    .setDescription(resp)
    message.channel.send({embed:respembed});

    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > - 0;
    const collector = message.channel.createMessageCollector(filter, {max: 1, time: 5000});

    collector.videos = videos;
    collector.once('collect', function(m) {

      let commandFile = require('./play.js');
      return commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].url])

    });

  });

}

exports.help = {
  name: "search"
}
