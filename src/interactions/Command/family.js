const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const Schema = require("../../database/models/music");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('family')
        .setDescription('Créé une famille dans le bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes famille')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('adopt')
                .setDescription('Adopte un membre')
                .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Supprime ta famille!'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('disown')
                .setDescription('Enlève un enfant ou un parent')
                .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('divorce')
                .setDescription('Divorce ton/ta partenaire')
                .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('family')
                .setDescription(`Regarde qui est dans la famille!`)
                .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(false)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('propose')
                .setDescription('Epouse un membre')
                .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true)),
        ),

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

 