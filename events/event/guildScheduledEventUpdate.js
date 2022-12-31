const discord = require('discord.js');

module.exports = async (client, oldEvent, newEvent) => {
    const logsChannel = await client.getLogs(newEvent.guildId);
    if (!logsChannel) return;

    client.embed({
        title: `🎡・Event modifié`,
        desc: `Un event a été modifié`,
        fields: [
            {
                name: `> Ancien Nom`,
                value: `- ${oldEvent.name}`
            },
            {
                name: `> Nouveau Nom`,
                value: `- ${newEvent.name}`
            },
            {
                name: `> Ancienne Description`,
                value: `- ${oldEvent.description || 'Aucune Description'}`
            },
            {
                name: `> Nouvelle Description`,
                value: `- ${newEvent.description || 'Aucune Description'}`
            },
            {
                name: `> Ancien Temps`,
                value: `- <t:${(oldEvent.scheduledStartTimestamp / 1000).toFixed(0)}>`
            },
            {
                name: `> Nouveau Temps`,
                value: `- <t:${(newEvent.scheduledStartTimestamp / 1000).toFixed(0)}>`
            },
            {
                name: `> Créateur`,
                value: `- <@!${newEvent.creatorId}> (${newEvent.creatorId})`
            },
        ]
    }, logsChannel).catch(() => { })
};