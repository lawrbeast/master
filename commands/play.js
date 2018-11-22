const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg-binaries');
const fs = require ('fs');
const search = require('yt-search');
const Discord = require("discord.js");

exports.run = async (bot, message, args, ops) => {
  if (message.author.id !== "257491128671141888") return message.channel.send("Nu te pot lasa bosule, inca comenzile astea sunt in lucru.");
  let validate = ytdl.validateURL(args[0]);
  if (!validate) {
    let commandFile = require('./search.js')
    return commandFile.run(bot, message, args);
  }

    if (!message.member.voiceChannel) return message.channel.send('Te rog sa te conectezi la un canal vocal.');

    let connection = await message.member.voiceChannel.join();
    let info = await ytdl.getInfo(args[0]);
    let dispatcher = await connection.playStream﻿(ytdl(args[0], {
            filter: 'audioonly'
        }));
        message.channel.send(`🎵 Now playing: ${info.title}`);
    };
exports.help = {
  name:"play"
}
