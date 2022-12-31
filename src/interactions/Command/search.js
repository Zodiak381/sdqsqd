const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('Recherche quelque chose sur internet')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes recherches')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('bing')
                .setDescription('Cherche quelque chose sur bing')
                .addStringOption(option => option.setName('name').setDescription('Trouve quelque chose sur ').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ddg')
                .setDescription('Cherche quelque chose sur DuckDuckGo')
                .addStringOption(option => option.setName('name').setDescription('Votre recherche').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('google')
                .setDescription('Cherche quelque chose sur Google')
                .addStringOption(option => option.setName('name').setDescription('Votre recherche').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('youtube')
                .setDescription('Cherche quelque chose sur YouTube')
                .addStringOption(option => option.setName('name').setDescription('Votre recherche').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('corona')
                .setDescription('Regarde les stats du corona virus')
                .addStringOption(option => option.setName('country').setDescription('Entre un pays').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand 
                .setName('crypto')
                .setDescription('Regarde la valeur d\'un crypto coin')
                .addStringOption(option => option.setName('coin').setDescription('Entre un coin').setRequired(true))
                .addStringOption(option => option.setName('currency').setDescription('Entre la balance').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('docs')
                .setDescription('Regarde la doc discord.js')
                .addStringOption(option => option.setName('name').setDescription('Votre recherche').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('github')
                .setDescription('Voir les informations d\'un github avec un pseudo')
                .addStringOption(option => option.setName('name').setDescription('Entre le pseudo github').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hexcolour')
                .setDescription('Avoir les informations d\'une couleur')
                .addStringOption(option => option.setName('color').setDescription('Entre une couleur hex').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('itunes')
                .setDescription('Recherche sur iTunes une chanson')
                .addStringOption(option => option.setName('song').setDescription('Entre une chanson').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('npm')
                .setDescription('Rechercrhe des informations sur un package NPM')
                .addStringOption(option => option.setName('name').setDescription('Entre le nom du package').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('steam')
                .setDescription('Trouve des infos sur une application Steam')
                .addStringOption(option => option.setName('name').setDescription('Entre le nom d\'une application steam').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('translate')
                .setDescription('Traduis un texte')
                .addStringOption(option => option.setName('language').setDescription('Entre une langue').setRequired(true))
                .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('weather')
                .setDescription('Regarde la météo')
                .addStringOption(option => option.setName('location').setDescription('Entre une localisation').setRequired(true))
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

 