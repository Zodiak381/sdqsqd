const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('levels')
        .setDescription('Voir le système de niveau')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes de niveaux')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setlevel')
                .setDescription('Change le niveau d\'un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis le membre').setRequired(true))
                .addNumberOption(option => option.setName('level').setDescription('Entre un niveau').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deletereward')
                .setDescription('Supprime une récompense de niveau')
                .addNumberOption(option => option.setName('level').setDescription('Entre un niveau').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('createreward')
                .setDescription('Créé une récompenses de niveau')
                .addNumberOption(option => option.setName('level').setDescription('Entre un niveau').setRequired(true))
                .addRoleOption(option => option.setName('role').setDescription('Le rôle de ce niveau').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setxp')
                .setDescription('Change l\'XP d\'un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis le membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Entre le niveau d\'XP').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rank')
                .setDescription('Regarde le niveau')
                .addUserOption(option => option.setName('user').setDescription('Choisis le membre'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rewards')
                .setDescription('Regarde toutes les récompenses de niveau')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('leaderboard')
                .setDescription('Regarde le classement')
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

 