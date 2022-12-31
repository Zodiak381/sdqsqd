const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction)

    if (perms == false) return;

    const name = interaction.options.getString('name');

    if (name.toUpperCase() == "HELP") {
        return client.embed({
            title: `ℹ️・Options du Nom de Salon`,
            desc: `Voici les options du nom de salon: \n
            \`{emoji}\` - Emoji du Salon
            \`{name}\` - Nom du Salon`,
            type: 'editreply'
        }, interaction)
    }

    Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            data.ChannelTemplate = name
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                ChannelTemplate: name
            }).save();
        }

        client.succNormal({
            text: `Le nom du salon a été setup`,
            fields: [
                {
                    name: `💬┆Nom`,
                    value: `${name}`,
                    inline: true
                },
            ],
            type: 'editreply'
        }, interaction)
    })
}

 