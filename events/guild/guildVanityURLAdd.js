const Discord = require('discord.js');

module.exports = async (client, guild, url) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🔗・Nouvelle Vanity du Serveur`,
        desc: `L'URL custom du serveur a été modifié`,
        fields: [
            {
                name: `> URL`,
                value: `- ${url}`
            },
        ]
    }, logsChannel).catch(() => { })
};