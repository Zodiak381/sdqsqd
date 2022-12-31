const Discord = require('discord.js');

const Schema = require("../../database/models/ticketMessage");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const type = interaction.options.getString('type');
    const message = interaction.options.getString('message');

    if (type == "open") {
        if (message.toUpperCase() == "DEFAULT") {
            const data = await Schema.findOne({ Guild: interaction.guild.id })

            if (data) {
                data.openTicket = "Merci d'avoir créé un ticket! \nUn support va venir te prendre en charge rapidement\n\n🔒 - Fermer le ticket \n✋ - Claim le ticket \n📝 - Sauvegarder un transcript \n🔔 - Envoyer une notification";
                data.save();

                client.succNormal({
                    text: `Votre ticket a été créé`,
                    fields: [
                        {
                            name: `📘┆Message type`,
                            value: `${type}`,
                            inline: true
                        },
                        {
                            name: `💬┆Message`,
                            value: `${data.openTicket}`,
                            inline: true
                        },
                    ],
                    type: 'editreply'
                }, interaction)
            }
            else {
                client.errNormal({
                    error: `Aucun ticket de trouvé!`,
                    type: 'editreply'
                }, interaction)
            }

            return;
        }

        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.openTicket = message;
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    openTicket: message
                }).save();
            }
        })

        client.succNormal({
            text: `Le message du ticket a été setup`,
            fields: [
                {
                    name: `📘┆Message type`,
                    value: `${type}`,
                    inline: true
                },
                {
                    name: `💬┆Message`,
                    value: `${message}`,
                    inline: true
                },
            ],
            type: 'editreply'
        }, interaction)
    }
    else if (type == "close") {
        if (message.toUpperCase() == "DEFAULT") {
            const data = await Schema.findOne({ Guild: interaction.guild.id })

            if (data) {
                data.dmMessage = "Voici la transcription de votre billet, veuillez la conserver si vous souhaitez vous y jeter un coup d'oeil un jour.!";
                data.save();

                client.succNormal({
                    text: `Le message du ticket a été setup`,
                    fields: [
                        {
                            name: `📘┆Message type`,
                            value: `${type}`,
                            inline: true
                        },
                        {
                            name: `💬┆Message`,
                            value: `${data.dmMessage}`,
                            inline: true
                        },
                    ],
                    type: 'editreply'
                }, interaction)
            }
            else {
                client.errNormal({
                    error: `Aucune data du ticket!`,
                    type: 'editreply'
                }, interaction)
            }

            return;
        }

        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.dmMessage = message;
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    dmMessage: message
                }).save();
            }
        })

        client.succNormal({
            text: `Le message du ticket a été setup`,
            fields: [
                {
                    name: `📘┆Message type`,
                    value: `${type}`,
                    inline: true
                },
                {
                    name: `💬┆Message`,
                    value: `${message}`,
                    inline: true
                },
            ],
            type: 'editreply'
        }, interaction)
    }
}

 