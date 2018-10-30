const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require("ms");
const fs = require("fs");
const db = require("quick.db");
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
    bot.user.setPresence({ game: { name: `Funny.Minecraft-Romania.Ro (funny-help)`, url: 'https://twitch.tv/qlau234', type: 1 } });
  });

bot.on("guildMemberAdd", member => {
    member.guild.channels.get('506876508808151086').setName(`Membrii Totali: ${member.guild.memberCount}`);
    member.guild.channels.get('506882602808901632').setName(`Membrii: ${member.guild.members.filter(m => !m.user.bot).size}`)
    member.guild.channels.get('506884124779347978').setName(`Boti: ${member.guild.members.filter(m => m.user.bot).size}`);
    member.guild.channels.get('465548001729970196').sendMessage(`:wave: Bun venit pe ${member.guild.name}, ${member}\n:black_small_square: IP Server: Funny.Minecraft-Romania.Ro\n:black_small_square: Forum: https://minecraft-romania.ro/forum/`)
});

bot.on("message", (message) => {
//
  const prefix = "funny-";
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let sender = message.author;
      let args = messageArray.slice(1);

      if(!message.content.startsWith(prefix)) return;
      let commandfile = bot.commands.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(bot, message, args);
      if(!message.content.startsWith(`${prefix}`)) return
//
if(cmd === `${prefix}serverinfo`){
   let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
   let day = message.guild.createdAt.getDate()
   let month = 1 + message.guild.createdAt.getMonth()
   let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let guild = message.guild
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Creat pe • ${day}.${month}.${year}`)
   .setColor("#0a9678")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Nume", message.guild.name, true)
   .addField("Deținător", message.guild.owner.user.tag, true)
   .addField("Regiune", message.guild.region, true)
   .addField("Canale", message.guild.channels.size, true)
   .addField("Membrii", message.guild.memberCount, true)
   .addField("Boți", message.guild.members.filter(m => m.user.bot).size)
   .addField("Online", online.size, true)
   .addField("Roluri", guild.roles.map(roles => `${roles.name}`).join(', '), true)
   message.channel.send({embed:serverembed});
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
  .addField("Creat pe", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
  .addField("A intrat pe:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
  .addField("Bot:", `${user.bot}`, true)
  .addField("Status:", `${user.presence.status}`, true)
  .addField("Se joaca:", `${user.presence.game ? user.presence.game.name : 'Nimic'}`, true)
  .addField("Roluri:", member.roles.map(roles => `${roles.name}`).join(', '), true)
  .setFooter(`Funny.Minecraft-Romania.Ro | qLau`);
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
//PING
if(cmd === `${prefix}ping`){
  message.reply("Pong fraiere.")
} return;
});
bot.login(process.env.BOT_TOKEN);
