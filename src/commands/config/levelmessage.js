const Discord = require('discord.js');

const Schema = require("../../database/models/levelMessages");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const message = interaction.options.getString('message');

    if (message.toUpperCase() == "HELP") {
        return client.embed({
            title: `ℹ️・Options du message de niveau`,
            desc: `Voici les différentes options: \n
            \`{user:username}\` - Pseudo de l'auteur
            \`{user:discriminator}\` - Tag de l'auteur
            \`{user:tag}\` - Pseudo et Tag de l'auteur
            \`{user:mention}\` - Mentionne l'auteur

            \`{user:level}\` - Le niveau de l'auteur
            \`{user:xp}\` - L'XP de l'auteur`,
            type: 'editreply'
        }, interaction)
    }

    if (message.toUpperCase() == "DEFAULT") {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                Schema.findOneAndDelete({ Guild: interaction.guild.id }).then(() => {
                    client.succNormal({ 
                        text: `Message de niveau supprimé!`,
                        type: 'editreply'
                    }, interaction);
                })
            }
        })
    }
    else {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.Message = message;
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    Message: message
                }).save();
            }

            client.succNormal({
                text: `Le message de niveau a été setup`,
                fields: [
                    {
                        name: `💬┆Message`,
                        value: `${message}`,
                        inline: true
                    },
                ],
                type: 'editreply'
            }, interaction)
        })
    }
}

 