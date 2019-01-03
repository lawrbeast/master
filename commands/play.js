const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg-binaries');
const fs = require ('fs');
const search = require('yt-search');
const Discord = require("discord.js");

exports.run = async (bot, message, args, ops) => {
  let validate = ytdl.validateURL(args[0]);
  if (!validate) {
    let commandFile = require('./search.js')
    return commandFile.run(bot, message, args);
  }

    if (!message.member.voiceChannel) return message.channel.send('Connect to a voice channel first.');

    let connection = await message.member.voiceChannel.join();
    let info = await ytdl.getInfo(args[0]);
    let dispatcher = await connection.playStream﻿(ytdl(args[0], { filter: 'audioonly'  }));
  let pembed = new Discord.RichEmbed()
  .setColor('#111111')
  .setDescription(`Now playing: ${info.title}`)
        message.channel.send({embed:playembed});

        dispatcher.on('end', () => {
            message.guild.me.voiceChannel.leave();
        })
    };
exports.help = {
  name:"play"
}
