const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('casino')
        .setDescription('Joue aux jeux casino')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes casino')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('blackjack')
                .setDescription('Joue au jeu du BlackJack pour gagner de l\'argent')
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('crash')
                .setDescription('Plus de risque, plus de récompenses')
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('roulette')
                .setDescription('Joue à la roulette')
                .addStringOption(option => option.setName('color').setDescription('Entre une couleur hex').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('slots')
                .setDescription('Joue aux slots')
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant').setRequired(true))
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

 