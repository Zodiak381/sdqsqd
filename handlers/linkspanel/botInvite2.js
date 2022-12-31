const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "invite2-linkspanel") {
                interaction.deferUpdate();

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-linkspanel')
                            .setPlaceholder('❌┆Rien n\'est séléctionner')
                            .addOptions([
                                {
                                    label: `Invite Bot`,
                                    description: `Invite le bot dans tes serveurs`,
                                    emoji: "📨",
                                    value: "invite-linkspanel",
                                },
                                {
                                    label: `Serveur Support`,
                                    description: `Join the suppport server`,
                                    emoji: "❓",
                                    value: "support-linkspanel",
                                },
                                {
                                    label: `Serveur Communautaire`,
                                    description: `Rejoint le serveur communautaire!`,
                                    emoji: "🌍",
                                    value: "community-linkspanel",
                                },
                            ]),
                    );

                let row = new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.ButtonBuilder()
                        .setLabel("Invite le bot")
                        .setURL(client.config.discord.botInvite)
                        .setStyle(Discord.ButtonStyle.Link),
                );

                client.embed({
                    title: `📨・Bot Invite`,
                    desc: `Rend ton serveur meilleur avec moi!`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    url: client.config.discord.serverInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 