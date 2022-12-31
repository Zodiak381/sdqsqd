const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverstats')
        .setDescription('Gère les stats du servuer')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes stats')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('boosts')
                .setDescription('Affiche le nombre de boost')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('tier')
                .setDescription('Affiche le niveau du serveur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('channels')
                .setDescription('Affiche le nombre de salons')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stage-channels')
                .setDescription('Affiche le nombre de salons stage')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('text-channels')
                .setDescription('Affiche le nombre de salons textuels')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('voice-channels')
                .setDescription('Affiche le nombre de salons vocaux')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('news-channels')
                .setDescription('Affiche le nombre de salons annonces')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('members')
                .setDescription('Affiche le nombre de membres')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('bots')
                .setDescription('Affiche le nombre de bots')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('roles')
                .setDescription('Affiche le nombre de rôles')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('emoji')
                .setDescription('Affiche le nombre d\'emojis')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('static-emoji')
                .setDescription('Affiche le nombre d\'emojis static')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('animated-emoji')
                .setDescription('Affiche le nombre d\'emoji animé')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('time')
                .setDescription('Affiche l\'heure d\'une zone')
                .addStringOption(option =>
                    option.setName('timezone')
                        .setDescription('La zone')
                        .setRequired(true)
                )
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const perms = await client.checkPerms({
            flags: [Discord.PermissionsBitField.Flags.ManageChannels],
            perms: [Discord.PermissionsBitField.Flags.ManageChannels]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 