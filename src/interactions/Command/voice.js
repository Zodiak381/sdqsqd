const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('voice')
        .setDescription('Gère les vocaux personnalisés')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes de vocal personnalisés')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('limit')
                .setDescription('Limite ton vocal')
                .addNumberOption(option => option.setName('limit').setDescription('Entre une limite').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lock')
                .setDescription('Vérouille ton salon vocal')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rename')
                .setDescription('Change le nom de ton salon')
                .addStringOption(option => option.setName('name').setDescription('Nouveau nom').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unlock')
                .setDescription('Déverouille ton salon vocal')
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

 