const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('music')
        .setDescription('Joue de la musique avec le bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes musiques')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('bassboost')
                .setDescription('Change le niveau de bass')
                .addStringOption(option =>
                    option.setName('level')
                        .setDescription('Niveau de boost bass')
                        .setRequired(true)
                        .addChoices(
                            { name: '0', value: '0' },
                            { name: '1', value: '1' },
                            { name: '2', value: '2' },
                            { name: '3', value: '3' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('play')
                .setDescription('Commence la musique')
                .addStringOption(option => option.setName('song').setDescription('Entre un nom/url').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clear')
                .setDescription('Supprime une musique de la queue')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('loop')
                .setDescription('Joue en boucle une musique')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lyrics')
                .setDescription('Récupère les paroles d\'une musique')
                .addStringOption(option => option.setName('song').setDescription('Entre le nom de la chanson'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('playing')
                .setDescription('Affiche la musique en cours')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pause')
                .setDescription('Met en pause la musique')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('previous')
                .setDescription('Joue la musique précédente')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('queue')
                .setDescription('Regarde la queue')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('resume')
                .setDescription('Reprend la musique')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Retire une musique de la queue')
                .addNumberOption(option => option.setName('number').setDescription('Numéro de la musique').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('seek')
                .setDescription('Change le temps de la musique en cours')
                .addNumberOption(option => option.setName('time').setDescription('Nouveau temps de chanson').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('shuffle')
                .setDescription('Mélange la queue')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('skip')
                .setDescription('Saute la musique en cours')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('skipto')
                .setDescription('Saute jusqu\'à une musique')
                .addNumberOption(option => option.setName('number').setDescription('Numéro de la musique').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stop')
                .setDescription('Stop la musique')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('volume')
                .setDescription('Change le volume de la musique')
                .addNumberOption(option => option.setName('amount').setDescription('Nouveau volume'))
        ),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.checkBotPerms({
            flags: [Discord.PermissionsBitField.Flags.Connect, Discord.PermissionsBitField.Flags.Speak],
            perms: [Discord.PermissionsBitField.Flags.Connect, Discord.PermissionsBitField.Flags.Speak]
        }, interaction)

        client.loadSubcommands(client, interaction, args);
    },
};


 