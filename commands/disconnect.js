exports.run = (bot, message, args) => {
    if (message.author.id !== "257491128671141888") return message.channel.send("Nu te pot lasa bosule, inca comenzile astea sunt in lucru.");
    if (!message.member.voiceChannel) return message.channel.send('Conecteaza-te la un voice channel!')

    if (!message.guild.me.voiceChannel) return message.channel.send('Nu sunt in niciun voice channel!')

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Nu esti conectat pe acelasi channel!')

    message.react("👍")

    message.guild.me.voiceChannel.leave();


}

exports.help = {
    name: "disconnect"
}
