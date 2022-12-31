const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('messages')
        .setDescription('Regarde le système de message')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes messages')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Ajoute un message à un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant de messages').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deletereward')
                .setDescription('Retire une récompense de messages')
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant de messages').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('createreward')
                .setDescription('Créé une récompense de messages')
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant de message').setRequired(true))
                .addRoleOption(option => option.setName('role').setDescription('Entre un rôle à ajouter').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Retire des messages à un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Entre un nombre de messages').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('show')
                .setDescription('See your messages')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rewards')
                .setDescription('Regarde la liste des récompenses de messages')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('leaderboard')
                .setDescription('Regarde le classement des messages')
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

 