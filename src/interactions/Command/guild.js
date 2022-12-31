const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guild')
        .setDescription('Gère un serveur')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes de serveur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('channelinfo')
                .setDescription('Voir les informations d\'un salon')
                .addChannelOption(option => option.setName('channel').setDescription('Choisis un salon').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('members')
                .setDescription('Regarde combien de membres il y a sur le serveur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('oldestmember')
                .setDescription('Regarde qui est le membre le plus ancien du serveur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('roleinfo')
                .setDescription('Voir les informations d\'un rôle')
                .addRoleOption(option => option.setName('role').setDescription('Chosis un rôle').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Voir les informations sur le serveur actuel')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stealemoji')
                .setDescription('Vole un emoji')
                .addStringOption(option => option.setName('emoji').setDescription('Entre l\'emoji à ajouter').setRequired(true))
                .addRoleOption(option => option.setName('role').setDescription('Choisis un rôle').setRequired(false))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('youngestmember')
                .setDescription('Voir qui est le membre le plus jeune sur le servuer')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('userinfo')
                .setDescription('Voir toutes les infos d\'un utilisateur')
                .addUserOption(option => option.setName('user').setDescription('Choisis un utilisateur').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('inviteinfo')
                .setDescription('Voir toutes les informations d\'une invitation')
                .addStringOption(option => option.setName('invite').setDescription('Entre un code d\'invitation').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('emojis')
                .setDescription('Voir les emojis du serveur')
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 