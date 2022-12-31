const Discord = require('discord.js');

const Schema = require("../../database/models/warnings");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction);

    if (perms == false) return;

    var member = interaction.options.getUser('user');

    Schema.findOne({ Guild: interaction.guild.id, User: member.id }, async (err, data) => {
        if (data) {
            data.Warns -= 1;
            data.save();
        }
        else {
            client.errNormal({ 
                error: "Ce membre n'a pas d'avertissement!", 
                type: 'editreply'
            }, interaction);
        }
    })

    client.embed({
        title: `🔨・Unwarn`,
        desc: `Tu as été unwarn **${interaction.guild.name}**`,
        fields: [
            {
                name: "👤┆Moderateur",
                value: interaction.user.tag,
                inline: true
            },
        ]
    }, member).catch(() => {})

    client.emit('warnRemove', member, interaction.user)
    client.succNormal({
        text: `L'avertissement a été enlevé`,
        fields: [
            {
                name: "👤┆User",
                value: `${member}`,
                inline: true
            }
        ],
        type: 'editreply'
    }, interaction);
}

 