const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📃┆Changelogs",
                value: '10/12/2022 - Le bot a été passé à la dernière version de discord.js (v14)',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 