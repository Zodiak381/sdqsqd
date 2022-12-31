const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "changelogs-Bothelp") {
                interaction.deferUpdate();

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Rien n\'est séléctionner')
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
                                    description: `Rejoint le serveur support`,
                                    emoji: "❓",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Affiche la changelog du bot`,
                                    emoji: "📃",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: "📃・Changelogs",
                    desc: `_____`,
                    thumbnail: client.user.avatarURL({ size: 1024 }),
                    fields: [
            	        {
                            name: "📢┆Alerte!",
                            value: 'Voici les changelogs du bot, vous pourrez voir ce qui a été ajouté.',
                            inline: false,
                        },
                        {
                            name: "📃┆Changelogs",
                            value: '10/12/2022 - Mis à jour du bot vers la dernière version de discord.js (v14)',
                            inline: false,
                        }
                    ],
                    components: [row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 