const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('Lance un giveaway sur votre serveur')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes giveaways')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('start')
                .setDescription('Lance un giveaway')
                .addChannelOption(option => option.setName('channel').setDescription('Le salon ou le giveaway sera lancé').setRequired(true).addChannelTypes(ChannelType.GuildText))
                .addStringOption(option => option.setName('duration').setDescription('La durée du giveaway').setRequired(true))
                .addNumberOption(option => option.setName('winners').setDescription('Le nombre de gagnants').setRequired(true))
                .addStringOption(option => option.setName('prize').setDescription('Le prix du giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('drop')
                .setDescription('Lance un drop')
                .addChannelOption(option => option.setName('channel').setDescription('Le salon ou le drop sera lancé').setRequired(true).addChannelTypes(ChannelType.GuildText))
                .addStringOption(option => option.setName('duration').setDescription('La durée du giveaway').setRequired(true))
                .addNumberOption(option => option.setName('winners').setDescription('Le nombre de gagnants').setRequired(true))
                .addStringOption(option => option.setName('prize').setDescription('Le prix du giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('reroll')
                .setDescription('Reroll un giveaway')
                .addStringOption(option => option.setName('message').setDescription('ID du message du giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('end')
                .setDescription('Termine un giveaway')
                .addStringOption(option => option.setName('message').setDescription('ID du message du giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('edit')
                .setDescription('Chanhe le temps d\'un giveaway')
                .addStringOption(option => option.setName('message').setDescription('ID du message du giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Supprime un giveaway')
                .addStringOption(option => option.setName('message').setDescription('ID du message du giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pause')
                .setDescription('Met en pause un giveaway')
                .addStringOption(option => option.setName('message').setDescription('ID du message du giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unpause')
                .setDescription('Reprend un giveaway')
                .addStringOption(option => option.setName('message').setDescription('ID du message du giveaway').setRequired(true)),
        ),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const perms = await client.checkUserPerms({
            flags: [Discord.PermissionsBitField.Flags.ManageMessages],
            perms: [Discord.PermissionsBitField.Flags.ManageMessages]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 