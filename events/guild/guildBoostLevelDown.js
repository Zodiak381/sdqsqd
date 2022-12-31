const Discord = require('discord.js');

module.exports = async (client, guild, oldLevel, newLevel) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🆙・Nouveau Niveau de Boosts`,
        desc: `Ce serveur a un nouveau niveau de boost`,
        fields: [
            {
                name: `> Ancien Niveau`,
                value: `- ${oldLevel}`
            },
            {
                name: `> Nouveau Niveau`,
                value: `- ${newLevel}`
            }
        ]
    }, logsChannel).catch(() => { })
};