const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('Informations du bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes bots')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Voir les informations du bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ping')
                .setDescription('Regarde le ping du bot en ms')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('changelogs')
                .setDescription('Regarde les changements du bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('donate')
                .setDescription('Avoir le lien de donation du bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('links')
                .setDescription('Avoir un message avec tous les liens du bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('owner')
                .setDescription('Avoir les informations du créateur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('socials')
                .setDescription('Avoir les résaux du créateur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('support')
                .setDescription('Avoir une invitation du serveur support')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('uptime')
                .setDescription('Regarde depuis quand le bot est en ligne')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('vote')
                .setDescription('Vérifie si tu as voté')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('feedback')
                .setDescription('Envoie ton avis aux créateurs sur le bot')
                .addStringOption(option => option.setName("feedback").setDescription("Ton avis").setRequired(true))
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

 