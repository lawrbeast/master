exports.run = (bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send('Conecteaza-te la un voice channel!')

    if (!message.guild.me.voiceChannel) return message.channel.send('Nu sunt in niciun voice channel!')

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Nu esti conectat pe acelasi channel!')

    message.react("👍")

    message.guild.me.voiceChannel.leave();


}

exports.help = {
    name: "disconnect"
}
