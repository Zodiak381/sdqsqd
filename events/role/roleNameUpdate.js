const discord = require('discord.js');

module.exports = async (client, role, oldName, newName) => {
    const logsChannel = await client.getLogs(role.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🧻・Nom de Rôle Modifié`,
        desc: `Un rôle a été modifié`,
        fields: [
            {
                name: `> Role`,
                value: `- ${role}`
            },
            {
                name: `> Avant`,
                value: `- ${oldName}`
            },
            {
                name: `> Après`,
                value: `- ${newName}`
            },
            {
                name: `> ID`,
                value: `${role.id}`
            }
        ]
    }, logsChannel).catch(() => { })
};