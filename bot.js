const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require("ms");
let cooldown = new Set();
let cdseconds = 5;
const fs = require("fs");
const moment = require('moment');
require("moment-duration-format");
bot.commands = new Discord.Collection();
fs.readdir("./commands", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Nu ai creat folder-ul commands!");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});
//Bot
bot.on("ready", async () => {
    console.log(`Legion Guard este online`);
    bot.user.setPresence({ game: { name: `Mastering ${bot.users.size} users`, url: 'https://twitch.tv/qlau234', type: 1 } });
  });

bot.on("message", (message) => {
//
  const prefix = "$";
        if(!message.content.startsWith(prefix)) return;
    if(cooldown.has(message.author.id)){
      return message.channel.send('Asteapta 5 secunde pentru a folosii din nou acea comanda.')
    }
  //  if(!message.member.hasPermission("ADMINISTRATOR")){
      cooldown.add(message.author.id)
  //  }
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let sender = message.author;
      let args = messageArray.slice(1);

      if(!message.content.startsWith(prefix)) return;
      let commandfile = bot.commands.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(bot, message, args);
      if(!message.content.startsWith(`${prefix}`)) return
        setTimeout(() => {
      cooldown.delete(message.author.id)
    }, cdseconds * 1000)
//
if(cmd === `${prefix}serverinfo`){
   let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
   let day = message.guild.createdAt.getDate()
   let month = 1 + message.guild.createdAt.getMonth()
   let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let guild = message.guild
   let embed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Creat pe • ${day}.${month}.${year}`)
   .setColor("#111111")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Name", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Region", message.guild.region, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Members", message.guild.memberCount, true)
   .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField(`Roles [${message.guild.roles.size}]`, `To see a list with all server roles use o!roles`)
   message.channel.send({embed});
return;
}
if(cmd === `${prefix}userinfo`){
let user;
// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
      user = message.author;
  }
// Define the member of a guild.
  const member = message.guild.member(user);

//Discord rich embed
  const userembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(user.avatarURL)
  .setTitle(`${user.username}#${user.discriminator}`)
  .addField("ID:", `${user.id}`, true)
  .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
  .addField("Created at:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
  .addField("Joined at:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
  .addField("Bot:", `${user.bot}`, true)
  .addField("Status:", `${user.presence.status}`, true)
  .addField("Playing:", `${user.presence.game ? user.presence.game.name : 'nothing'}`, true)
  .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
  .setFooter(`Master`);
   message.channel.send({embed:userembed});
  return;
  }
    if(cmd === `${prefix}avatar`){
    let user = message.mentions.users.first() || message.author;
    const avatarembed = new Discord.RichEmbed()
        .setColor(0xffffff) // This will set the embed sidebar color
        .setImage(user.avatarURL) // This will set the embed image     
    message.channel.send({embed:avatarembed});
        return;
    }
});
bot.login(process.env.BOT_TOKEN);
