const discord = require('discord.js');

module.exports = async (client, event) => {
    let types = {
        GUILD_ONLY: "Serveur Seulement",
        PUBLIC: "Publique",
    }

    let locations = {
        NONE: "Aucune",
        STAGE_INSTANCE: "Salon de Stage",
        VOICE: "Salon Vocal",
        EXTERNAL: `Externe`
    }

    const logsChannel = await client.getLogs(event.guildId);
    if (!logsChannel) return;

    client.embed({
        title: `🎡・Event supprimé`,
        desc: `Un event a été supprimé`,
        fields: [
            {
                name: `> Nom`,
                value: `- ${event.name}`
            },
            {
                name: `> Description`,
                value: `- ${event.description || 'Aucune description'}`
            },
            {
                name: `> Start`,
                value: `- <t:${(event.scheduledStartTimestamp / 1000).toFixed(0)}>`
            },
            {
                name: `> Type`,
                value: `- ${types[event.privacyLevel]}`
            },
            {
                name: `> Créateur`,
                value: `- <@!${event.creatorId}> (${event.creatorId})`
            },
            {
                name: `> Se situe`,
                value: `- ${locations[event.entityType]}`
            }
        ]
    }, logsChannel).catch(() => { })
};