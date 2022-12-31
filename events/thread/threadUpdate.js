const discord = require('discord.js');

module.exports = async (client, oldChannel, newChannel) => {
    let types = {
        10: "Nouveau Fil",
        11: "Fil Publique",
        12: "Fil Privé",
    }

    const logsChannel = await client.getLogs(newChannel.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `📖・Fil modifié`,
        desc: `Un fil a été modifié`,
        fields: [
            {
                name: `> Ancien Nom`,
                value: `- ${oldChannel.name}`
            },
            {
                name: `> Nouveau Nom`,
                value: `- ${newChannel.name}`
            },
            {
                name: `> ID`,
                value: `- ${newChannel.id}`
            },
            {
                name: `> Categorie`,
                value: `${newChannel.parent}`
            },
            {
                name: `> Salon`,
                value: `<#${newChannel.id}>`
            },
            {
                name: `> Type`,
                value: `${types[newChannel.type]}`
            }
        ]
    }, logsChannel).catch(() => { })
};