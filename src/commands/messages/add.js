const Discord = require('discord.js');

const Schema = require("../../database/models/messages");

module.exports = async (client, interaction, args) => {
    let user = interaction.options.getUser('user');
    let amount = interaction.options.getNumber('amount');

    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const data = await Schema.findOne({ Guild: interaction.guild.id, User: user.id });
    if (data) {
        data.Messages += amount;
        await data.save();
    }
    else {
        await new Schema({
            Guild: interaction.guild.id,
            User: user.id,
            Messages: amount,
        }).save();
    }

    client.succNormal({
        text: `**${amount}** Messages ajoutés à ${user}`,
        fields: [
            {
                name: "💬┆Messages Totaux",
                value: `${data.Messages}`,
                inline: true,
            }
        ],
        type: 'editreply'
    }, interaction);
}

 