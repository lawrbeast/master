const Discord = require("discord.js")
const weather = require("weather-js")


exports.run = (bot, message, args) => {

    weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {
        if (err) message.channel.send(err);
        if (result.length === 0) {
            message.channel.send('Acel oras nu exista, sau nu l-ai scris in **ENGLEZA**!\nExemplu: Nu Spania ci Spain\nDaca numele tarii/orasului nu are traducere il scrii normal')
            return;
        }
        var current = result[0].current;
        var location = result[0].location;
        //Ceruri
        if (current.skytext === 'Light Rain') current.skytext = 'Ploaie Ușoară'
        if (current.skytext === 'Partly Cloudy') current.skytext = ':white_sun_small_cloud: Parțial Înnorat'
        if (current.skytext === 'Cloudy') current.skytext = ':cloud: Noros'
        if (current.skytext === 'Snow') current.skytext = ':cloud_snow: Ninsoare'
        if (current.skytext === 'Mostly Cloudy') current.skytext = ':white_sun_cloud: Predominant înnorat'
        if (current.skytext === 'Mostly Sunny') current.skytext = ':partly_sunny: Predominant însorit'
        if (current.skytext === 'Light Snow') current.skytext = ':cloud_snow: Ninsoare ușoară'
        if (current.skytext === 'Haze') current.skytext = ':white_circle: Ceață'

        //Zilele saptamanii
        if (current.day === 'Monday') current.day = 'Luni'
        if (current.day === 'Tuesday') current.day = 'Marți'
        if (current.day === 'Wednesday') current.day = 'Miercuri'
        if (current.day === 'Thursday') current.day = 'Joi'
        if (current.day === 'Friday') current.day = 'Vineri'
        if (current.day === 'Saturday') current.day = 'Sâmbătă'
        if (current.day === 'Sunday') current.day = 'Duminică'

        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Vremea pentru ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor('#cc0000')
            .addField('Fus Orar', `UTC${location.timezone}`, true)
            .addField("Ziua", current.day, true)
            .addField('Temperatura', `${current.temperature}°C`, true)
            .addField('Ora', `${current.observationtime}`, true)
            .addField(`Vânturi`, current.winddisplay, true)
            .addField('Umiditate', `${current.humidity}%`, true)

        message.channel.send({embed:embed})


    });
}

    exports.help = {
        name:"weather"
    }
