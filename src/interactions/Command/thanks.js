const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('thanks')
        .setDescription('Voir le système de remerciment')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes de remerciments')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('check')
                .setDescription('Regarde tes remerciments')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('thanks')
                .setDescription('Remerci un membre')
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

 