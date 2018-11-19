const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let sender = message.author;
    let dick = [1, 27, 12, 7, 10, 67, 40, 23, 5, 68, 54, 43, 89, 2, 4, 65, 34, 66, 0, -1, -23, -68]
    let dickres = Math.floor(Math.random() * dick.length);
    if (sender.id = '513433681835065364') dick[dickres] = 'sal sefu meu drag ai 69'

    let dickembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("🔞 Verifica-ti marimea sulei!")
        .addField("Tu ai o sula de", `${dick[dickres]} cm`)
        .setFooter("Funny.Minecraft-Romania.Ro | qLau ©")

    message.channel.send({ embed: dickembed });
}
module.exports.help = {
    name: "sula"
}
