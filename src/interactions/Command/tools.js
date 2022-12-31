const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tools')
        .setDescription('Utiliser quelques outils cool')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations des commandes outils')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('anagram')
                .setDescription('Form un mot avec des lettres')
                .addStringOption(option => option.setName('word').setDescription('Le mot que tu veux former').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('button')
                .setDescription('Créé un boutton')
                .addStringOption(option => option.setName('url').setDescription('L\'url du bouton').setRequired(true))
                .addStringOption(option => option.setName('text').setDescription('Le texte du bouton').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('calculator')
                .setDescription('Fait un calcule')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('decode')
                .setDescription('Decone binnairement à un texte')
                .addStringOption(option => option.setName('code').setDescription('Le code binaire que tu veux décoder').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('emojify')
                .setDescription('Convertis un texte en emoji')
                .addStringOption(option => option.setName('text').setDescription('Le texte que tu veux convertir').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('encode')
                .setDescription('Code un texte en code binaire')
                .addStringOption(option => option.setName('text').setDescription('Le texte que tu veux coder').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('enlarge')
                .setDescription('Rend un emoji plus large')
                .addStringOption(option => option.setName('emoji').setDescription('L\'emoji que tu veux élargir').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('mcskin')
                .setDescription('Regarde le skin minecraft d\'un utilisateur')
                .addStringOption(option => option.setName('name').setDescription('Le nom du joueur').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('mcstatus')
                .setDescription('Regarde le status d\'un serveur minecraft')
                .addStringOption(option => option.setName('ip').setDescription('L\'ip du serveur').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pwdgen')
                .setDescription('Génère un mot de passe')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('qrcode')
                .setDescription('Envoie un QR Code du texte envoyé')
                .addStringOption(option => option.setName('text').setDescription('Le texte à convertir').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remind')
                .setDescription('Met un rappel')
                .addStringOption(option => option.setName('time').setDescription('Le temps').setRequired(true))
                .addStringOption(option => option.setName('message').setDescription('Le message à rappeler').setRequired(true))

        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('sourcebin')
                .setDescription('Envoyer un code à un source bin')
                .addStringOption(option => option.setName('language').setDescription('La langue du code').setRequired(true))
                .addStringOption(option => option.setName('code').setDescription('Ton code').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('url')
                .setDescription('Raccourci un url')
                .addStringOption(option => option.setName('site').setDescription('Lien du site').setRequired(true))
                .addStringOption(option => option.setName('code').setDescription('Le code pour l\'url').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('review')
                .setDescription('Ecrire un avis')
                .addNumberOption(option => option.setName('stars').setDescription('Le nombre d\'étoiles (max 5)').setRequired(true))
                .addStringOption(option => option.setName('message').setDescription('Une petite description de l\'avis'))
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

 