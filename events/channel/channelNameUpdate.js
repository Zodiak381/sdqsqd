const discord = require('discord.js');

module.exports = async (client, channel, oldName, newName) => {
    let types = {
        0: "Salon Textuel",
        2: "Salon vocal",
        4: "Catégorie",
        5: "Salon d\'Annonces",
        10: "Nouveau Fil",
        11: "Fil Publique",
        12: "Fil Privé",
        13: "Salon Stage",
        14: "Catégorie",
    }

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🔧・Nom de Salon Changé`,
        desc: `Un nom de salon a été modifié`,
        fields: [
            {
                name: `> Ancien nom`,
                value: `- ${oldName}`
            },
            {
                name: `> Nouveau Nom`,
                value: `- ${newName}`
            },
            {
                name: `> ID`,
                value: `- ${channel.id}`
            },
            {
                name: `> Categorie`,
                value: `- ${channel.parent}`
            },
            {
                name: `> Salon`,
                value: `- <#${channel.id}>`
            },
            {
                name: `> Type`,
                value: `- ${types[channel.type]}`
            }
        ]
    }, logsChannel).catch(() => { })
};