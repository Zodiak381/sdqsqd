const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fun')
        .setDescription('Lance les commandes funs du bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes funs')
        )

        // Meme Commands

        .addSubcommandGroup((group) =>
            group
                .setName('meme')
                .setDescription('Voir toutes les commandes memes funs du bot')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('confused')
                        .setDescription('Réagi avec un emoji confu')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('cleverrate')
                        .setDescription('Regarde a quel point tu es intelligent')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('dinochrome')
                        .setDescription('Dino de chrome')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('epicgamerrate')
                        .setDescription('Regarde a quel point tu es un gamer epic')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('howgay')
                        .setDescription('Regarde a quel point tu es gay')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('roast')
                        .setDescription('Clash un membre')
                        .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('simprate')
                        .setDescription('A quel point tu es débile')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('stankrate')
                        .setDescription('Regarde à quel point tu es stank')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('rickroll')
                        .setDescription('Avoir un rickroll')
                )
        )

        // User Commands

        .addSubcommandGroup((group) =>
            group
                .setName('user')
                .setDescription('Regarde toutes les commandes fun sur les membres')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('hack')
                        .setDescription('Pirate ton ami/enemi!')
                        .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('hug')
                        .setDescription('Envoie un calin à quelqu\'un')
                        .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('kill')
                        .setDescription('Tue quelqu\'un')
                        .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('lovemeter')
                        .setDescription('Regarde à quel point tu es fais pour être avec quelqu\'un')
                        .addUserOption(option => option.setName('user1').setDescription('Séléctionne un membre').setRequired(true))
                        .addUserOption(option => option.setName('user2').setDescription('Séléctionne un membre').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('sudo')
                        .setDescription('Dit quelque chose a quelqu\'un d\'autre')
                        .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true))
                        .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))
                )
        )

        // Text Commands

        .addSubcommandGroup((group) =>
            group
                .setName('text')
                .setDescription('Regarde toutes les commandes funs du bot')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('ascii')
                        .setDescription('Fait un ASCII')
                        .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('gif')
                        .setDescription('Recherche un gif')
                        .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('reverse')
                        .setDescription('Retourne ton texte')
                        .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('say')
                        .setDescription('Fait parler le bot')
                        .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))
                )
        )

        // Extra Commands

        .addSubcommandGroup((group) =>
            group
                .setName('extra')
                .setDescription('Regarde toutes les commandes extra fun du bot')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('birdfact')
                        .setDescription('Voir un oiseau random')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('catfact')
                        .setDescription('Voir un chat random')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('dogfact')
                        .setDescription('Voir un chien random')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('fact')
                        .setDescription('Voir un fact random')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('koalafact')
                        .setDescription('Voir un koala random')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('pandafact')
                        .setDescription('Voir un panda random')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('token')
                        .setDescription('Avoir mon token')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('worldclock')
                        .setDescription('Regarde l\'horloge mondiale')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('xmas')
                        .setDescription('Regarde le nombre de jour avant noël')
                )
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

 