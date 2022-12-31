const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");
const ticketChannels = require("../../database/models/ticketChannels");

module.exports = async (client, interaction, args) => {
    const data = await ticketSchema.findOne({ Guild: interaction.guild.id });
    const ticketData = await ticketChannels.findOne({ Guild: interaction.guild.id, channelID: interaction.channel.id })

    let type = 'reply';
    if (interaction.isCommand()) type = 'editreply';
    
    if (ticketData) {
        if (interaction.user.id !== ticketData.creator) {
            const perms = await client.checkUserPerms({
                flags: [Discord.PermissionsBitField.Flags.ManageMessages],
                perms: [Discord.PermissionsBitField.Flags.ManageMessages]
            }, interaction)

            if (perms == false) return;

            if (data) {
                if (ticketData.claimed == "" || ticketData.claimed == undefined || ticketData.claimed == "None") {
                    const ticketCategory = interaction.guild.channels.cache.get(data.Category);

                    if (ticketCategory == undefined) {
                        return client.errNormal({
                            error: "Fait d'abord le ticket setup!",
                            type: type
                        }, interaction)
                    }

                    if (interaction.channel.parentId == ticketCategory.id) {

                        ticketData.claimed = interaction.user.id;
                        ticketData.save();

                        return client.simpleEmbed({
                            desc: `Tu vas être pris en charge par <@!${interaction.user.id}>`,
                            type: type
                        }, interaction)

                    }
                    else {
                        client.errNormal({
                            error: "Ceci n'est pas votre ticket!",
                            type: type
                        }, interaction)
                    }
                }
                else {
                    client.errNormal({
                        error: "Le ticket a déjà été claim!",
                        type: 'ephemeral'
                    }, interaction)
                }
            }
            else {
                return client.errNormal({
                    error: "Fait d'abord le ticket setup!",
                    type: type
                }, interaction)
            }
        }
        else {
            return client.errNormal({
                error: "Tu ne peux pas claim ton propre ticket!",
                type: 'ephemeral'
            }, interaction)
        }
    }
}

 