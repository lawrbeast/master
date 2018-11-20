const Discord = require("discord.js")

exports.run = (client, message, args) => {

    if (message.author.id !== "257491128671141888") return message.channel.send("⛔ **Acces interzis**");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {

        return message.channel.send(`Am intampinat o eroare la reload: ${args[0]}.js`);
    }

    message.channel.send(`**Reload cu succes:** ${args[0]}.js`);


}

exports.help = {
  name: "reload"
}
