const discord = require('discord.js');

module.exports = async (client, role) => {
    const logsChannel = await client.getLogs(role.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🧻・Role créé`,
        desc: `Un rôle a été créé`,
        fields: [
            {
                name: `> Role`,
                value: `- ${role}`
            },
            {
                name: `> Nom`,
                value: `- ${role.name}`
            },
            {
                name: `> ID`,
                value: `- ${role.id}`
            },
            {
                name: `> Coleur`,
                value: `${role.hexColor}`
            },
            {
                name: `> Position`,
                value: `${role.position}`
            }
        ]
    }, logsChannel).catch(() => { })

};