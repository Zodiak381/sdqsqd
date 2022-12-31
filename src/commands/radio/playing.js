const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📻・Information de Radio`,
        desc: `Toutes les informations sur la radio dans le serveur`,
        fields: [{
            name: "👤┆Nombre d'Ecout",
            value: `${interaction.member.voice.channel.members.size} membres`,
            inline: true
        },
        {
            name: "📺┆Salon connecté",
            value: `${interaction.member.voice.channel} (${interaction.member.voice.channel.name})`,
            inline: true
        },
        {
            name: "🎶┆Radio",
            value: `[Radio 538](https://www.538.nl/)`,
            inline: true
        },
        ],
       type: 'editreply'
    }, interaction)
}

 