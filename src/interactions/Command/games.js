const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('games')
        .setDescription('Joue à un jeu dans le bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help') 
                .setDescription('Avoir les informations des commandes jeux')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('8ball')
                .setDescription('Demande au bot une question')
                .addStringOption(option => option.setName('question').setDescription('La question que tu veux demander').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('fasttype')
                .setDescription('Apprend à écrire rapidement'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('music-trivia')
                .setDescription('Joue une musique-trivia')
                .addNumberOption(option => option.setName('number').setDescription('Le nombre de musique').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('roll')
                .setDescription('Lance un dé'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rps')
                .setDescription('Pierre papier ciseaux')
                .addStringOption(option =>
                    option.setName('option')
                        .setDescription('Choisis ce que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: '🪨 Pierre', value: 'rock' },
                            { name: '📃 Papier', value: 'paper' },
                            { name: '✂️ Ciseaux', value: 'scissors' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('skipword')
                .setDescription('Change le mot actuel'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('snake')
                .setDescription('Joue au jeu du serpent'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('trivia')
                .setDescription('Joue à trivia'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('willyoupressthebutton')
                .setDescription('Vas tu appuyer sur le bouton (anglais)'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('wouldyourather')
                .setDescription('Jouez au jeu "Préférez-Vous" (anglais)'),
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

 