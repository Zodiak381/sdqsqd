const discord = require('discord.js');

module.exports = async (client, channel) => {
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

    console.log(channel.type)
    client.embed({
        title: `🔧・Salon créé`,
        desc: `Un salon a été créé`,
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