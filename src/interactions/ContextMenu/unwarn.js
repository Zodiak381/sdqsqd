const { CommandInteraction, Client } = require('discord.js');
const { ContextMenuCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const Schema = require("../../database/models/warnings");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Unwarn')
        .setType(2),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const perms = await client.checkPerms({
            flags: [Discord.PermissionsBitField.Flags.ManageMessages],
            perms: [Discord.PermissionsBitField.Flags.ManageMessages]
        }, interaction)

        if (perms == false) return;

        const member = interaction.guild.members.cache.get(interaction.targetId);

        Schema.findOne({ Guild: interaction.guild.id, User: member.id }, async (err, data) => {
            if (data) {
                data.Warns -= 1;
                data.save();
            }
            else {
                client.errNormal({
                    error: "L'utilisateur n'a pas d'avertissements!",
                    type: 'editreply'
                }, interaction);
            }
        })

        client.embed({
            title: `🔨・Unwarn`,
            desc: `Un avertissement t'as été enlevé dans **${interaction.guild.name}**`,
            fields: [
                {
                    name: "👤┆Moderateur",
                    value: interaction.user.tag,
                    inline: true
                },
            ]
        }, member).catch(() => { })

        client.emit('warnRemove', member, interaction.user)
        client.succNormal({
            text: `L'avertissement de l'utilisateur a été enlevé`,
            fields: [
                {
                    name: "👤┆Utilisateur",
                    value: `${member}`,
                    inline: true
                }
            ],
            type: 'editreply'
        }, interaction);
    },
};

 