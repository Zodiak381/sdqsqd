const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('moderation')
        .setDescription('Gère la modérations')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes modération')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setDescription('Ban un utilisateur')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('La raison du ban'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clear')
                .setDescription('Clear des messages')
                .addNumberOption(option => option.setName('amount').setDescription('Nombre de messages').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clearuser')
                .setDescription('Supprimer les messages d\'une personne dans le salon')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('demote')
                .setDescription('Derank un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('kick')
                .setDescription('Kick un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('La raison du kick'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lock')
                .setDescription('Vérouille un salon')
                .addChannelOption(option => option.setName('channel').setDescription('Choisis un salon').addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lockdown')
                .setDescription('Vérouille tous les salons')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('nuke')
                .setDescription('Recréé un salon')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('softban')
                .setDescription('Ban puis deban un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('La raison du ban'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('timeout')
                .setDescription('Timeout un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addNumberOption(option => option.setName('time').setDescription('Nombre de minutes').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('Raison du timeout').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('tempban')
                .setDescription('Ban un membre temporairement')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addNumberOption(option => option.setName('time').setDescription('Temps du ban en minutes').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('La raison du ban'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unlock')
                .setDescription('Déverouille un salon')
                .addChannelOption(option => option.setName('channel').setDescription('Choisis un salon').addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unban')
                .setDescription('Débanni un membre')
                .addStringOption(option => option.setName('user').setDescription('Donne moi un id').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('banlist')
                .setDescription('Voir tous les bans du serveur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('warn')
                .setDescription('Averti un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unwarn')
                .setDescription('Enlève un avertissement')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('warnings')
                .setDescription('Regarde tous les avertissements d\'un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
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

 