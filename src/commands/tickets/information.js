const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");
const ticketChannels = require("../../database/models/ticketChannels");

module.exports = async (client, interaction, args) => {
    ticketChannels.findOne({ Guild: interaction.guild.id, channelID: interaction.channel.id }, async (err, ticketData) => {
        if (ticketData) {
            ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
                if (data) {
                    const ticketCategory = interaction.guild.channels.cache.get(data.Category);

                    if (ticketCategory == undefined) {
                        return client.errNormal({
                            error: "Fait le setup!",
                            type: 'editreply'
                        }, interaction);
                    }

                    if (interaction.channel.parentId == ticketCategory.id) {

                        client.embed({
                            desc: `${client.emotes.animated.loading}・Chargement d'informations...`,
                            type: 'editreply'
                        }, interaction).then((msg) => {

                            client.transcript(interaction, interaction.channel);

                            return client.embed({
                                title: `ℹ・Information`,
                                fields: [
                                    {
                                        name: "Nom du ticket",
                                        value: `\`${interaction.channel.name}\``,
                                        inline: true,
                                    },
                                    {
                                        name: "ID du salon",
                                        value: `\`${interaction.channel.id}\``,
                                        inline: true,
                                    },
                                    {
                                        name: "Createur",
                                        value: `<@!${ticketData.creator}>`,
                                        inline: true,
                                    },
                                    {
                                        name: "Claim par",
                                        value: `<@!${ticketData.claimed}>`,
                                        inline: true,
                                    },
                                    {
                                        name: "ID du ticket",
                                        value: `${ticketData.TicketID}`,
                                        inline: true,
                                    },
                                ],
                                type: 'editreply'
                            }, msg)
                        })

                    }
                    else {
                        client.errNormal({ 
                            error: "Ceci n'est pas un ticket!", 
                            type: 'editreply'
                        }, interaction);
                    }
                }
                else {
                    return client.errNormal({ 
                        error: "Fait le setup!", 
                        type: 'editreply'
                    }, interaction);
                }
            })
        }
    })
}

 