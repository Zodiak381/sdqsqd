const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Voir les help du bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.StringSelectMenuBuilder()
                    .setCustomId('Bot-helppanel')
                    .setPlaceholder('❌┆Rien de séléctionné')
                    .addOptions([
                        {
                            label: `Commandes`,
                            description: `Affiche les commandes du bot!`,
                            emoji: "💻",
                            value: "commands-Bothelp",
                        },
                        {
                            label: `Invite`,
                            description: `Invite le bot sur votre serveur`,
                            emoji: "📨",
                            value: "invite-Bothelp",
                        },
                        {
                            label: `Serveur Support`,
                            description: `Rejoint le serveur Support du bot`,
                            emoji: "❓",
                            value: "support-Bothelp",
                        },
                        {
                            label: `Changelogs`,
                            description: `Regarde les nouveautées du bot`,
                            emoji: "📃",
                            value: "changelogs-Bothelp",
                        },
                    ]),
            );

        return client.embed({
            title: `❓・Help panel`,
            desc: `Bienvenue sur le pannel du bot! On a fait une petite interface pour te facilité la vue. Choisis une option sur le menu en bas!s`,
            image: "https://i.imgur.com/8yxATWF.gif",
            fields: [
                {
                    name: `❌┆Menu ne marche pas?`,
                    value: `Ressaie la commande! Si il n'y a pas de réaction du bot, signale nous le bug`
                },
                {
                    name: `🪲┆Bug trouvé?`,
                    value: `Report le avec \`/report bug\``
                },
                {
                    name: `🔗┆Linns`,
                    value: `[Github](https://github.com/002-sans/) | [Invite](${client.config.discord.botInvite})`
                },
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 