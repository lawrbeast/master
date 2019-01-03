exports.run = (bot, message, args) => {
    if (!message.member.voiceChannel) return message.channel.send('Connect to a voice channel!')

    if (!message.guild.me.voiceChannel) return message.channel.send('I\'m not in a voice channel.')

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('You aren\'t connected on the same channel as me.')

    message.react("👍")

    message.guild.me.voiceChannel.leave();


}

exports.help = {
    name: "disconnect"
}
