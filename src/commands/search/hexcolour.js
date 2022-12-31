const Discord = require('discord.js');
const axios = require('axios');

module.exports = async (client, interaction, args) => {

    const color = interaction.options.getString('color');

    const { data } = await axios.get(
        `https://some-random-api.ml/canvas/rgb?hex=${color}`
    ).catch(e => {
        return client.errNormal({ 
            error: "Couleur non trouvée!",
            type: 'editreply'
        }, interaction)
    });

    client.embed({
        title: `🎨・Info de la couleur`,
        image: `https://some-random-api.ml/canvas/colorviewer?hex=${color}`,
        color: `#${color}`,
        fields: [
            {
                name: "Hex",
                value: `#${color}`,
                inline: true,
            },
            {
                name: "RGB",
                value: `${data.r}, ${data.g}, ${data.b}`,
                inline: true,
            }
        ],
        type: 'editreply'
    }, interaction)
}

 