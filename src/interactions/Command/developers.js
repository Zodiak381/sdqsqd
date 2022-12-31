const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const model = require('../../database/models/badge');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('developers')
        .setDescription('Commands for the Bot developers')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes du développeur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('eval')
                .setDescription('Avoir le résultat d\'un code')
                .addStringOption(option => option.setName('code').setDescription('Ton code').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('badge')
                .setDescription('Gere les badges du bot')
                .addBooleanOption(option => option.setName('new').setDescription('Choisis un boolean').setRequired(true))
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addStringOption(option => option.setName('badge').setDescription('Choisis le badge').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setDescription('Gère les bans du bot')
                .addBooleanOption(option => option.setName('new').setDescription('Choisis un boolean').setRequired(true))
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('credits')
                .setDescription('Gère les crédits du bot')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('Le type de crédit')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Ajouter', value: 'add' },
                            { name: 'Retirer', value: 'remove' }
                        )
                )
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Le montant de crédit').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('args')
                .setDescription('Envoie un message pré fais')
                .addStringOption(option =>
                    option.setName('message')
                        .setDescription('Choisis le message')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Information', value: 'information' },
                            { name: 'Rules', value: 'rules' },
                            { name: 'Applications', value: 'applications' },
                            { name: 'Booster perks', value: 'boosterperks' },
                            { name: 'Links', value: 'links' },
                            { name: 'Rewards', value: 'rewards' },
                            { name: 'Our bots', value: 'ourbots' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('servers')
                .setDescription('Regarde tous les serveurs de ce shard')
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        model.findOne({ User: interaction.user.id }, async (err, data) => {
            if (data && data.FLAGS.includes("DEVELOPER")) {
                await interaction.deferReply({ fetchReply: true });
                client.loadSubcommands(client, interaction, args);
            } else {
                return client.errNormal({
                    error: 'Seul les développeurs du bots sont autorisés à utiliser cette commande',
                    type: 'ephemeral'
                }, interaction)
            }
        })
    },
};

 