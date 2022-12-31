const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('report')
        .setDescription('Report un bug aux développeurs')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Le type de votre bug')
                .setRequired(true)
                .addChoices(
                    { name: 'Bug', value: 'bug' },
                    { name: 'Membre', value: 'user' }
                )
        )
        .addStringOption(option =>
            option.setName('description')
                .setDescription('Description with your report')
                .setRequired(true)
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const webhookClient = new Discord.WebhookClient({
            id: client.webhooks.bugReportLogs.id,
            token: client.webhooks.bugReportLogs.token
        });

        const type = interaction.options.getString('type');
        const desc = interaction.options.getString('description');

        if (type == "bug") {
            const embed = new Discord.EmbedBuilder()
                .setTitle(`📣・Nouveau Report Bug!`)
                .addFields(
                    { name: "Catégorie", value: "Bug", inline: true },
                    { name: "Envoyé par", value: `${interaction.user.tag}`, inline: true },
                )
                .setDescription(`${desc}`)
                .setColor(client.config.colors.normal)
            webhookClient.send({
                username: 'Bot Reports',
                embeds: [embed],
            });

            client.succNormal({
                text: `Bug envoyé aux développeurs!`,
                type: 'ephemeraledit'
            }, interaction);
        }
        else if (type == "user") {
            const embed = new Discord.EmbedBuilder()
                .setTitle(`📣・Nouveau report de membres!`)
                .addFields(
                    { name: "Catégorie", value: "User", inline: true },
                    { name: "Envoyé par", value: `${interaction.user.tag}`, inline: true },
                )
                .setDescription(`${desc}`)
                .setColor(client.config.colors.normal)
            webhookClient.send({
                username: 'Bot Reports',
                embeds: [embed],
            });

            client.succNormal({
                text: `Le report de cette personne a été envoyé aux développeurs!`,
                type: 'ephemeraledit'
            }, interaction);
        }
    },
};

 