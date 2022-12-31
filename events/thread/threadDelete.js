const discord = require('discord.js');

module.exports = async (client, channel) => {
    let types = {
        10: "Nouveau Fil",
        11: "Fil Publique",
        12: "Fil Privé",
    }

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `📖・Fil supprimé`,
        desc: `Un fil a été supprimé`,
        fields: [
            {
                name: `> Nom`,
                value: `- ${channel.name}`
            },
            {
                name: `> ID`,
                value: `- ${channel.id}`
            },
            {
                name: `> Categorie`,
                value: `${channel.parent}`
            },
            {
                name: `> Type`,
                value: `${types[channel.type]}`
            }
        ]
    }, logsChannel).catch(() => { })
};