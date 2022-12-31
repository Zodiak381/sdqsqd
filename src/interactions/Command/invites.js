const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invites')
        .setDescription('Voir le système d\'invitations')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes invitations')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Ajoute des invitations à un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Entre le nombre d\'invitations').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Retire des invitations d\'un membres')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Entre un nombre d\'invitations').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('show')
                .setDescription('Regarde le nombre d\'invitations')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre'))
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

 