const discord = require('discord.js');

module.exports = async (client, ban) => {
    const logsChannel = await client.getLogs(ban.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🔧・Membre banni`,
        desc: `Un membre a été banni`,
        thumbnail: ban.user.avatarURL({ size: 4096 }),
        fields: [
            {
                name: `> Membre`,
                value: `- ${ban.user}`
            },
            {
                name: `> Tag`,
                value: `- ${ban.user.tag}`
            },
            {
                name: `> ID`,
                value: `- ${ban.user.id}`
            }
        ]
    }, logsChannel).catch(() => { })
};