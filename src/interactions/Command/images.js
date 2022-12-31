const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');

module.exports = {

    // Meme Images

    data: new SlashCommandBuilder()
        .setName('images')
        .setDescription('Voir toutes les images du bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes images')
        )
        .addSubcommandGroup((group) =>
            group
                .setName('memes')
                .setDescription('Voir tous les mêmes du bots')
                .addSubcommand((subcommand) =>
                    subcommand.setName('clyde').setDescription('Créé un message Clyde')
                        .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))

                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('drake').setDescription('Créé un meme drake')
                        .addStringOption(option => option.setName('text1').setDescription('Entre un texte').setRequired(true))
                        .addStringOption(option => option.setName('text2').setDescription('Entre un texte').setRequired(true)),

                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('meme').setDescription('Génère un même random'),
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('pooh').setDescription('Créé un même pooh')
                        .addStringOption(option => option.setName('text1').setDescription('Entre un texte').setRequired(true))
                        .addStringOption(option => option.setName('text2').setDescription('Entre un texte').setRequired(true)),

                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('trumptweet').setDescription('Affiche un tweet de donal trump avec le texte donné')
                        .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('tweet').setDescription('Tweet quelque chose sur tweeter')
                        .addStringOption(option => option.setName('text').setDescription('Entre un texte').setRequired(true))
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('wasted').setDescription('GTA Wasted'),
                )

        )

        // Animal Images

        .addSubcommandGroup((group) =>
            group
                .setName('animals')
                .setDescription('Voir tous les animaux du bot')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('bird')
                        .setDescription('Voir un piseau random'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('cat')
                        .setDescription("Voir un chat random")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('dog')
                        .setDescription("Voir un chien random")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('fox')
                        .setDescription("Voir un renard random")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('koala')
                        .setDescription("Voir un koala random")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('panda')
                        .setDescription("Voir un panda random")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('redpanda')
                        .setDescription("Voir un redpanda random")
                )
        )

        // User Images

        .addSubcommandGroup((group) =>
            group
                .setName('user')
                .setDescription('Voir toutes les commandes images sur les membres')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('ad')
                        .setDescription('Génère une image pub')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('avatar')
                        .setDescription('Voir l\'avatar d\'une personne')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('banner')
                        .setDescription('Voir la bannière d\'un membre')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('bed')
                        .setDescription('Créé un même lit')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('blur')
                        .setDescription('Donne un petit floutage')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('burn')
                        .setDescription('Brule une personne')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('clown')
                        .setDescription('Génère une image de clown')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('colorify')
                        .setDescription('Génère une image colorée')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('darkness')
                        .setDescription('Rend une image sombre')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('facepalm')
                        .setDescription('Génère une image "facepalm"')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('greyscale')
                        .setDescription('Rend une image plus grise')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('invert')
                        .setDescription('Inverse une image')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('kiss')
                        .setDescription('Embrasse quelqu\'un')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('podium')
                        .setDescription('Créé un podium')
                        .addUserOption((option) =>
                            option.setName('user1').setDescription('La première position').setRequired(true),
                        )
                        .addUserOption((option) =>
                            option.setName('user2').setDescription('La seconde position').setRequired(true),
                        )
                        .addUserOption((option) =>
                            option.setName('user3').setDescription('La troisième position').setRequired(true),
                        )

                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('spank')
                        .setDescription('Span quelqu\'un')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('wanted')
                        .setDescription('Met une prime')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('Choisis un membre').setRequired(true),
                        )
                )
        )

        // Extra Images

        .addSubcommandGroup((group) =>
            group
                .setName('extra')
                .setDescription('Regarde toutes les commandes extra images')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('car')
                        .setDescription('Voir une voiture au pif'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('glass')
                        .setDescription('Met une texture de glace sur l\'image'),
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('image').setDescription('Affiche une image dans un embed')
                        .addChannelOption(option => option.setName('channel').setDescription('Le salon où l\'embed sera envoyé').setRequired(true).addChannelTypes(ChannelType.GuildText))
                        .addStringOption(option => option.setName('image-url').setDescription('Entre un URL').setRequired(true))
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('triggered')
                        .setDescription('Trigger toi'),
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('wallpaper').setDescription('Renvoie un fond d\'écran')
                        .addStringOption(option => option.setName('name').setDescription('Entre un nom').setRequired(true))
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


 