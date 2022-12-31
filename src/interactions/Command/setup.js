const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Gère les setup du bots')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes setup')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('tickets')
                .setDescription('Setup les tickets')
                .addChannelOption(option => option.setName('category').setDescription('Choisis une catégorie où les tickets seront ouverts').setRequired(true).addChannelTypes(ChannelType.GuildCategory))
                .addRoleOption(option => option.setName('role').setDescription('Choisis le rôle du support').setRequired(true))
                .addChannelOption(option => option.setName('channel').setDescription('Choisis le salon où sera envoyé le pannel').setRequired(true).addChannelTypes(ChannelType.GuildText))
                .addChannelOption(option => option.setName('logs').setDescription('Choisis le salon des logs tickets').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('customvoice')
                .setDescription('Setup les vocaux personnalisés')
                .addChannelOption(option => option.setName('category').setDescription('Choisis la catégorie où seront créés les vocaux').setRequired(true).addChannelTypes(ChannelType.GuildCategory))
                .addStringOption(option => option.setName('channelname').setDescription('Choisis le nom des vocaux').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('logs')
                .setDescription('Setup les logs du serveur')
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
                .addChannelOption(option => option.setName('channel').setDescription('Le salon des logs').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('fun')
                .setDescription('Setup les salons funs du serveur')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La setup que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Anniversaires', value: 'birthdays' },
                            { name: 'Chatbot', value: 'chatbot' },
                            { name: 'Avis', value: 'reviews' },
                            { name: 'Suggestions', value: 'suggestions' },
                            { name: 'Starboard', value: 'starboard' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('Choisis le salon fun').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('games')
                .setDescription('Setup un salon jeu dans le serveur')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La setup que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Comptons', value: 'counting' },
                            { name: 'Trouve le nombre', value: 'gtn' },
                            { name: 'Trouve le mot', value: 'gtw' },
                            { name: 'Snake', value: 'wordsnake' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('Choisis le salon du jeu').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('welcomechannels')
                .setDescription('Setup le salon de bienvenue')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La setup que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Salon de Bienvenue', value: 'welcomechannel' },
                            { name: 'Salut de Leave', value: 'leavechannel' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('Choisis le salon').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('welcomerole')
                .setDescription('Setup le rôle de bienvenue')
                .addRoleOption(option => option.setName('role').setDescription('Choisis le rôle que tu veux').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ticketpanel')
                .setDescription('Setup le pannel de tickets')
                .addStringOption(option => option.setName('name').setDescription('Le nom du pannel').setRequired(true))
                .addStringOption(option => option.setName('description').setDescription('La description du pannel').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deletesetup')
                .setDescription('Supprime un setup')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La setup que tu veux')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Tickets', value: 'tickets' },
                            { name: 'Vocaux Personnalisés', value: 'customvoice' },
                            { name: 'Logs du Serveurs', value: 'serverlogs' },
                            { name: 'Logs des Niveaux', value: 'levellogs' },
                            { name: 'Logs des Boosts', value: 'boostlogs' },
                            { name: 'Anniversaires', value: 'birthdays' },
                            { name: 'Chatbot', value: 'chatbot' },
                            { name: 'Avis', value: 'reviews' },
                            { name: 'Suggestions', value: 'suggestions' },
                            { name: 'Comptons', value: 'counting' },
                            { name: 'Trouve le nombre', value: 'gtn' },
                            { name: 'Trouve le mot', value: 'gtw' },
                            { name: 'Salon de Bienvenue', value: 'welcomechannel' },
                            { name: 'Salon de Leave', value: 'leavechannel' },
                            { name: 'Rôle de Bienvenue', value: 'welcomerole' },
                            { name: 'Snake', value: 'wordsnake' }
                        )
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
        const perms = await client.checkUserPerms({
            flags: [Discord.PermissionsBitField.Flags.Administrator],
            perms: [Discord.PermissionsBitField.Flags.Administrator]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 