const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Informations des créateurs`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Nom du créateur",
            value: `Sans`,
            inline: true,
        },
        {
            name: "🏷┆Tag Discord",
            value: `notsans#4330`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `CapingTeam`,
            inline: true,
        },
        {
            name: "🌐┆Site",
            value: `Aucun`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 