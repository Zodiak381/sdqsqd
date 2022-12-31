const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stickymessages')
        .setDescription('Gère les messages épinglés')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes messages épinglés')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stick')
                .setDescription('Epingle un message dans le salon')
                .addChannelOption(option => option.setName('channel').setDescription('Choisis un salon').setRequired(true).addChannelTypes(ChannelType.GuildText))
                .addStringOption(option => option.setName('message').setDescription('Ton message').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('messages')
                .setDescription('Regarde tous les messages épinglés du salon')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unstick')
                .setDescription('Désépingle un message du salon')
                .addChannelOption(option => option.setName('channel').setDescription('Choisis un salon').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
    ,

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

 