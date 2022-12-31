const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Créé un profile pour le serveur')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes profile')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('create')
                .setDescription('Créé un profile')
        ).addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Supprime ton profile')
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('profile')
                .setDescription('Regarde un profile')
                .addUserOption((option) =>
                    option.setName('user').setDescription('Choisis un membre').setRequired(false),
                )
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('aboutme')
                .setDescription('Modifie ton à propos de moi')
                .addStringOption(option => option.setName('text').setDescription('Entre un à propos de moi').setRequired(true))
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('age')
                .setDescription('Change ton âge')
                .addNumberOption(option => option.setName('number').setDescription('Entre un nombre').setRequired(true))
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('bday')
                .setDescription('Modifie ton anniversairre')
                .addStringOption(option => option.setName('bday').setDescription('Entre une date').setRequired(true))
        )

        .addSubcommandGroup((group) =>
            group
                .setName('actor')
                .setDescription('Modifie ton acteur préféré')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addactor')
                        .setDescription('Ajouter un acteur')
                        .addStringOption(option => option.setName('actor').setDescription('L\'acteur que tu veux ajouter').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delactor')
                        .setDescription("Retirer un acteur")
                        .addStringOption(option => option.setName('actor').setDescription('L\'acteur que tu veux enlever').setRequired(true)),
                )
        ).
        addSubcommandGroup((group) =>
            group
                .setName('artist')
                .setDescription('Modifie ton artiste préféré')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addartist')
                        .setDescription('L\'artiste à ajouter')
                        .addStringOption(option => option.setName('artist').setDescription('L\'artiste que tu veux ajouter').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delartist')
                        .setDescription("Retirer un artiste")
                        .addStringOption(option => option.setName('artist').setDescription('L\'artiste que tu veux enlever').setRequired(true)),
                )
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('color')
                .setDescription('Change ta couleur préférée')
                .addStringOption(option => option.setName('color').setDescription('La couleur que tu veux mettre').setRequired(true)),

        ).addSubcommandGroup((group) =>
            group
                .setName('food')
                .setDescription('Modifie ton aliment')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addfood')
                        .setDescription('Ajoute un aliment')
                        .addStringOption(option => option.setName('food').setDescription('L\'aliment que tu veux ajouter').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delfood')
                        .setDescription("Retirer un aliment")
                        .addStringOption(option => option.setName('food').setDescription('L\'aliment que tu veux retirer').setRequired(true)),
                )
        ).addSubcommandGroup((group) =>
            group
                .setName('movie')
                .setDescription('Modifie un film')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addmovie')
                        .setDescription('Ajoute un film')
                        .addStringOption(option => option.setName('movie').setDescription('Le film que tu veux ajouter').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delmovie')
                        .setDescription("Retire un film")
                        .addStringOption(option => option.setName('movie').setDescription('Le film que tu veux retirer').setRequired(true)),
                )
        ).addSubcommandGroup((group) =>
            group
                .setName('pet')
                .setDescription('Modifie ton animal')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addpet')
                        .setDescription('Ajouter un animal')
                        .addStringOption(option => option.setName('pet').setDescription('L\'animal que tu veux ajouter').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delpet')
                        .setDescription("Retirer un animal")
                        .addStringOption(option => option.setName('pet').setDescription('L\'animal que tu veux retirer').setRequired(true)),
                )
        ).addSubcommandGroup((group) =>
            group
                .setName('song')
                .setDescription('Modifie ta chanson préférée')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addsong')
                        .setDescription('Ajoute une musique')
                        .addStringOption(option => option.setName('song').setDescription('La musique que tu veux ajouter').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delsong')
                        .setDescription("Retirer une musique")
                        .addStringOption(option => option.setName('song').setDescription('La musique que tu veux retirer').setRequired(true)),
                )
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('gender')
                .setDescription('Modifie ton genre')

        ).addSubcommandGroup((group) =>
            group
                .setName('hobbies')
                .setDescription('Modifie ton hobby')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addhobby')
                        .setDescription('Ajouter un hobby')
                        .addStringOption(option => option.setName('hobby').setDescription('Le hobby que tu veux ajouter').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delhobby')
                        .setDescription("Retirer un hobby")
                        .addStringOption(option => option.setName('hobby').setDescription('Le hobby que tu veux retirer').setRequired(true)),
                )
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('origin')
                .setDescription('Change ton origine')
                .addStringOption(option => option.setName('country').setDescription('Entre un pays').setRequired(true))
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('status')
                .setDescription('Change ton status')
                .addStringOption(option => option.setName('text').setDescription('Entre un status').setRequired(true))
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

 