const discord = require('discord.js');

module.exports = async (client, user, mod) => {
    const logsChannel = await client.getLogs(user.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🔨・Membre averti`,
        desc: `Un membre a été avrti`,
        fields: [
            {
                name: `> Membre`,
                value: `- ${user}`
            },
            {
                name: `> Tag`,
                value: `- ${user.user.username}#${user.user.discriminator}`
            },
            {
                name: `> ID`,
                value: `${user.id}`
            },
            {
                name: `> Modérateur`,
                value: `${mod} (${mod.id})`
            }
        ]
    }, logsChannel).catch(() => { })
};