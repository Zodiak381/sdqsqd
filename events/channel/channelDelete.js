const discord = require('discord.js');

const ticketChannels = require("../../database/models/ticketChannels");

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

    client.embed({
        title: `🔧・Salon Supprimé`,
        desc: `Un salon a été supprimé`,
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
                name: `> Type`,
                value: `- ${types[channel.type]}`
            }
        ]
    }, logsChannel).catch(() => { })

    try {
        ticketChannels.findOne({ Guild: channel.guild.id, channelID: channel.id }, async (err, data) => {
            if (data) {
                var remove = await ticketChannels.deleteOne({ Guild: channel.guild.id, channelID: channel.id });
            }
        })
    }
    catch { }
};