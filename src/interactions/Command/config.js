const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('config')
        .setDescription('Ajuste le bot à votre goût')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Avoir les informations des commandes configs')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('levels')
                .setDescription('Active/désactive les niveaux')
                .addBooleanOption(option => option.setName('boolean').setDescription('Choisis un boolean').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setcolor')
                .setDescription('Change la couleur de l\'embed')
                .addStringOption(option => option.setName("color").setDescription("Entre une couleur hex").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setverify')
                .setDescription('Setup le pannel de vérification')
                .addBooleanOption(option => option.setName('enable').setDescription('Choisis un boolean').setRequired(true))
                .addChannelOption(option => option.setName('channel').setDescription('Choisis un salon').setRequired(true).addChannelTypes(ChannelType.GuildText))
                .addRoleOption(option => option.setName('role').setDescription('Séléctionne un rôle role').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setchannelname')
                .setDescription('Choisis un nom de salon custom pour les stats')
                .addStringOption(option => option.setName("name").setDescription("choisis un nom de salon ou écrit HELP pour voir les args").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('levelmessage')
                .setDescription('Choisis les messages de niveaux')
                .addStringOption(option => option.setName("message").setDescription("Entre un message de niveau ou marque HELP pour voir les args").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('welcomemessage')
                .setDescription('Choisis le message de Bienvenue')
                .addStringOption(option => option.setName("message").setDescription("Entre un message de bienvenue ou marque HELP pour voir les args").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('leavemessage')
                .setDescription('Choisis un message d\'au revoir')
                .addStringOption(option => option.setName("message").setDescription("Entre un message de leave ou marque HELP pour voir les args").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ticketmessage')
                .setDescription('Choisis le message de ticket du bot')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('Type du message de ticket')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Ouveert', value: 'open' },
                            { name: 'Fermé (DM', value: 'close' }
                        )
                )
                .addStringOption(option => option.setName("message").setDescription("Entre un message de ticket").setRequired(true))
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

 