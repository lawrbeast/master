const ytdl = require('ytdl-core');
const ffmpeg = require("ffmpeg-binaries")
const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {
    
    if (!message.member.voiceChannel) return message.channel.send('Te rog sa te conectezi la un canal vocal.');
    if (!args[0]) return message.channel.send('Te rog sa introduci un link valid.');
    let connection = await message.member.voiceChannel.join();

    let validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send('Sorry, please input a **valid** url following the command.');

    let info = await ytdl.getInfo(args[0]);
    let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    let dispatcher = await connection.playStream(ytdl(args[0], {
        filter: 'audioonly'
    }));
    message.channel.send(`🎵 Now playing: ${info.title}`);
};

exports.help = {
  name:"play"
}
