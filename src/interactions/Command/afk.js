const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const Schema = require("../../database/models/music");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('afk')
        .setDescription('Met toi AFK')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes AFK')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('set')
                .setDescription('Rend toi AFK')
                .addStringOption(option => option.setName('reason').setDescription('La raison de ton AFK'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('list')
                .setDescription('Montre toutes les personnes AFK')
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

 