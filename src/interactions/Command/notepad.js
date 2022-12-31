const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('notepad')
        .setDescription('Gère tes notes')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes notes')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Ajoute une note au bloc note')
                .addStringOption(option => option.setName('note').setDescription('Ta note').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Retire une note du bloc note')
                .addStringOption(option => option.setName('id').setDescription('ID de la note').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('edit')
                .setDescription('Modifie une note du bloc note')
                .addStringOption(option => option.setName('id').setDescription('ID de la notte').setRequired(true))
                .addStringOption(option => option.setName('note').setDescription('Nouvelle note').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('notes')
                .setDescription('Voir toutes vos notes')
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

 