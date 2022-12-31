const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('automod')
        .setDescription('Gere l\'auto modération')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes auto setup')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('antiinvite')
                .setDescription('Active/désactive l\'anti invites')
                .addBooleanOption(option => option.setName('active').setDescription('Choisis un boolean').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('antilinks')
                .setDescription('Active/désactive l\'anti liens')
                .addBooleanOption(option => option.setName('active').setDescription('Choisis un boolean').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('antispam')
                .setDescription('Active/désactive l\'anti spam')
                .addBooleanOption(option => option.setName('active').setDescription('Choisis un boolean').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('linkschannel')
                .setDescription('Ajoute un salon où envoyer des liens est autorisé')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('Que veux tu faire avec ce salon?')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Ajouter', value: 'add' },
                            { name: 'Retirer', value: 'remove' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('Choisis un salon').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommandGroup(group =>
            group
                .setName('blacklist')
                .setDescription('Gere la blacklist')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('display')
                        .setDescription('Affiche la blacklist')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('add')
                        .setDescription('Ajoute un mot dans la blacklist')
                        .addStringOption(option => option.setName('word').setDescription('Le mot blacklist').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('remove')
                        .setDescription('Retire un mot de la blacklist')
                        .addStringOption(option => option.setName('word').setDescription('Le mot blacklist').setRequired(true))
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
            flags: [Discord.PermissionsBitField.Flags.ManageMessages],
            perms: [Discord.PermissionsBitField.Flags.ManageMessages]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 