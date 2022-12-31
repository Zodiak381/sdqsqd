const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('economy')
        .setDescription('Voir les commandes economies')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes economies')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('additem')
                .setDescription('Ajoute un rôle dans le shop')
                .addRoleOption(option => option.setName('role').setDescription('Choisis un role').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Choisis un montant').setRequired(true))

        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('addmoney')
                .setDescription('Ajoute de l\'argent à un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis le membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Choisis le montant').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('balance')
                .setDescription('Regarde la balance')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(false))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('beg')
                .setDescription('Beg pour de l\'argent')
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('buy')
                .setDescription('Achete un item dans le magasin du bot')

        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clear')
                .setDescription('Reinitialise l\'economie')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('crime')
                .setDescription('Commet un crime')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('daily')
                .setDescription('Prend tes récompenses quotidiennes')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deleteitem')
                .setDescription('Supprime un rôle du magasin')
                .addRoleOption(option => option.setName('role').setDescription('Choisis un role').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deposit')
                .setDescription('Dépose de l\'argent à la banque')
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('fish')
                .setDescription('Pêche un poisson')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hourly')
                .setDescription('Prend tes récompenses chaques heures')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hunt')
                .setDescription('Chasse des animaux')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('monthly')
                .setDescription('Prend tes récompenses mensuel')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pay')
                .setDescription('Paye un membre')
                .addUserOption(option => option.setName('user').setDescription('Séléctionne un membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Choisis un montant').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('present')
                .setDescription('Récupère un cadeau de la semaine')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('removemoney')
                .setDescription('Retire l\'argent d\'un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rob')
                .setDescription('Vole un membre')
                .addUserOption(option => option.setName('user').setDescription('Choisis un membre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('store')
                .setDescription('Affiche le magasin du serveur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('weekly')
                .setDescription('Prend tes récompenses de la semaine')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('withdraw')
                .setDescription('Retire ton argent')
                .addNumberOption(option => option.setName('amount').setDescription('Entre un montant').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('work')
                .setDescription('Va travailler')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('yearly')
                .setDescription('Récupère tes récompenses chaques années')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('leaderboard')
                .setDescription('Regarde le classement du serveur')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('Le classement que tu veux voir')
                        .setRequired(true)
                        .addChoices(
                            {name: 'Argent', value: 'money'},
                            {name: 'Banque', value: 'bank'}
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
        client.loadSubcommands(client, interaction, args);
    },
};

 