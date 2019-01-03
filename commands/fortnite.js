const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client('ca78a152-9d7d-4dcf-8c46-b3092f3c13cd');

module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[1];

    if(!username) return message.channel.send("Please mention a player! (Fortnite)")
    if(!platform) return message.channel.send('Usage: **!fortnite <username> <platform>**')

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;

        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        let embed = new Discord.RichEmbed()
        .setTitle("Fortnite Stats")
        .setAuthor(data.username)
        .setColor("#111111")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("Winrate %", winper, true)
        .addField("K/D", kd, true)
        .setThumbnail('https://i.ytimg.com/vi/XawDu3kJ6Pg/maxresdefault.jpg')
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)

        message.channel.send(embed);
    }).catch((err) => {
      message.channel.send('I coudn\'t find the user!'); return;
      console.error(err);
    });
}

exports.help = {
    name: "fortnite"
}
