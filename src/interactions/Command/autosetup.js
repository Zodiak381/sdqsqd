const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autosetup')
        .setDescription('Fait en sorte que le bot se setup automatiquement')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voirles informations sur les commandes auto setup')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('logs')
                .setDescription('Défini des logs du serveur')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La setup que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Logs du Serveur', value: 'serverLogs' },
                            { name: 'Logs des Niveaux', value: 'levelLogs' },
                            { name: 'Logs des Boosts', value: 'boostLogs' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('fun')
                .setDescription('Setup les salons fun sur le serveur')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('Les setup que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Anniversaires', value: 'birthdays' },
                            { name: 'Chatbot', value: 'chatbot' },
                            { name: 'Avis', value: 'reviews' },
                            { name: 'Suggestions', value: 'suggestions' },
                            { name: 'Starboard', value: 'starboard' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('games')
                .setDescription('Setup les salon jeux sur le serveur')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('Les setup que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Comptons', value: 'counting' },
                            { name: 'Trouve le chiffre', value: 'gtn' },
                            { name: 'Trouve le mot', value: 'gtw' },
                            { name: 'Snake', value: 'wordsnake' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('welcome')
                .setDescription('Setup le système de bienvenue')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('Le setup que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Le salon de Bienvenue', value: 'welcomechannel' },
                            { name: 'Le rôle de Bienvenue', value: 'welcomerole' },
                            { name: 'Le salon de Leave', value: 'leavechannel' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('customvoice')
                .setDescription('Met un salon de vocaux personnalisés')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ticketpanel')
                .setDescription('Met un pannel ticket sur le serveur')
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const perms = await client.checkUserPerms({
            flags: [Discord.PermissionsBitField.Flags.Administrator],
            perms: [Discord.PermissionsBitField.Flags.Administrator]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 