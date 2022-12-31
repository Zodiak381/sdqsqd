const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggestions')
        .setDescription('Gère les suggestions')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes suggestions')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('accept')
                .setDescription('Accepte une suggestion')
                .addStringOption(option => option.setName('id').setDescription('ID de la suggestion').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deny')
                .setDescription('Refuse une suggestion')
                .addStringOption(option => option.setName('id').setDescription('ID de la suggestion').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('send')
                .setDescription('Envoie une suggestion')
                .addStringOption(option => option.setName('suggestion').setDescription('Ta suggestion').setRequired(true))
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

 