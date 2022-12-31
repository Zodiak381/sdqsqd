const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "community-linkspanel") {
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
                            .setLabel("Serveur Communautaire")
                            .setURL("https://discord.gg/Xp4tHw5WRV")
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `🌍・Serveur Communautaire`,
                    desc: `Parle de tout avec de nouvelles personnes dans notre serveur communautaire!`,
                    url: client.config.discord.botInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 