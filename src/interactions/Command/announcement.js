const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder, ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('announcement')
        .setDescription('Gérer les annonces de serveur')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes annonces')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('create')
                .setDescription('Créé une annonce')
                .addChannelOption(option => option.setName('channel').setDescription('Choisis un salon').setRequired(true).addChannelTypes(ChannelType.GuildText).addChannelTypes(ChannelType.GuildNews))
                .addStringOption(option => option.setName('message').setDescription('Ton message à anoncer').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('edit')
                .setDescription('Modifie une annonce')
                .addStringOption(option => option.setName('id').setDescription('ID de l\'annonce que tu veux changer').setRequired(true))
                .addStringOption(option => option.setName('message').setDescription('Ton message à annoncer').setRequired(true)),
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

 