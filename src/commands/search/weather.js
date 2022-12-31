const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = async (client, interaction, args) => {
    const country = interaction.options.getString('location');

    weather.find({ search: country, degreeType: 'C' }, function (error, result) {
        if (result === undefined || result.length === 0) return client.errNormal({
            error: "Localisation **invalide**",
            type: 'editreply'
        }, interaction);

        var current = result[0].current;
        var location = result[0].location;

        client.embed({
            title: `☀️・Météo - ${current.skytext}`,
            desc: `Météo pour ${current.observationpoint}`,
            thumbnail: current.imageUrl,
            fields: [
                {
                    name: "Timezone",
                    value: `UTC${location.timezone}`,
                    inline: true,
                },
                {
                    name: "Type de degrès",
                    value: `Celsius`,
                    inline: true,
                },
                {
                    name: "Temperature",
                    value: `${current.temperature}°`,
                    inline: true,
                },
                {
                    name: "Vent",
                    value: `${current.winddisplay}`,
                    inline: true,
                },
                {
                    name: "On dirait que",
                    value: `${current.feelslike}°`,
                    inline: true,
                },
                {
                    name: "Humidité",
                    value: `${current.humidity}%`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction)
    })
}

 