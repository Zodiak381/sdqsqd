const discord = require('discord.js');

module.exports = async (client, role, oldColor, newColor) => {
    const logsChannel = await client.getLogs(role.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🧻・Couleurs de Rôles Changé`,
        desc: `Un rôle a été modifié`,
        fields: [
            {
                name: `> Role`,
                value: `- ${role}`
            },
            {
                name: `> Avant`,
                value: `- #${oldColor.toString(16)}`
            },
            {
                name: `> Après`,
                value: `- #${newColor.toString(16)}`
            },
            {
                name: `> ID`,
                value: `${role.id}`
            }
        ]
    }, logsChannel).catch(() => { })
};