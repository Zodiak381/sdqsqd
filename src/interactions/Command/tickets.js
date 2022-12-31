const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");
const ticketChannels = require("../../database/models/ticketChannels");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tickets')
        .setDescription('Gère les tickets sur ton serveur')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes de tickets')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Ajoute un membre au ticket')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('claim')
                .setDescription('Claim un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('close')
                .setDescription('Ferme un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Supprime un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('information')
                .setDescription('Informations à propos d\'un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lower')
                .setDescription('Derank un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('create')
                .setDescription('Créé un ticket')
                .addStringOption(option => option.setName('reason').setDescription('Raison du ticket'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('notice')
                .setDescription('Envoie une notification au ticket ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('open')
                .setDescription('Rouvre un ticket ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('raise')
                .setDescription('Raise un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Retire un membre du ticket ticket')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rename')
                .setDescription('Change le nom du ticket')
                .addStringOption(option => option.setName('name').setDescription('New ticket name').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('transcript')
                .setDescription('Transcript un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unclaim')
                .setDescription('Unclaim un ticket')
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

 