const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactionroles')
        .setDescription('Gère les reaction role du serv')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir toutes les commandes reactions roles')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Ajouter un reaction role')
                .addStringOption(option => option.setName('category').setDescription('Le nom de la categorie').setRequired(true))
                .addRoleOption(option => option.setName('role').setDescription('Choisis un rôle').setRequired(true))
                .addStringOption(option => option.setName('emoji').setDescription('Choisis un emoji').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Supprime une catégorie de la reaction role')
                .addStringOption(option => option.setName('category').setDescription('Nom de la catégorie').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('list')
                .setDescription('Affiche toutes les reaction role du serveur')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('button')
                .setDescription('Affiche toutes les reaction role avec bouton')
                .addStringOption(option => option.setName('category').setDescription('Nom de la categorie').setRequired(true))
                .addChannelOption(option => option.setName('channel').setDescription('Salon ou le reaction role se situe').addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('menu')
                .setDescription('Affiche toutes les reaction role en menu')
                .addStringOption(option => option.setName('category').setDescription('Nom de la categorie de la reaction role').setRequired(true))
                .addChannelOption(option => option.setName('channel').setDescription('Salon ou le reaction role se situe').addChannelTypes(ChannelType.GuildText))
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
            flags: [Discord.PermissionsBitField.Flags.ManageRoles],
            perms: [Discord.PermissionsBitField.Flags.ManageRoles]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 