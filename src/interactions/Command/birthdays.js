const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('birthdays')
        .setDescription('Regarde ou enregistre un anniversaire')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Récupère des informations sur les commandes d\'anniversaire')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('check')
                .setDescription('Vérifie les anniversaires')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Supprime ton anniversaire')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('list')
                .setDescription('Regarde la liste des anniversaires')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('set')
                .setDescription('Setup ton anniversaire')
                .addNumberOption(option => option.setName('day').setDescription('Le numéro du jour de ton anniversaire').setRequired(true))
                .addNumberOption(option => option.setName('month').setDescription('Le numéro du mois de ton anniversaire').setRequired(true))
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

 