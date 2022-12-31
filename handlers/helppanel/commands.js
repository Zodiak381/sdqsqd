const Discord = require('discord.js');

module.exports = async (client) => {
    const fields = [
        {
            name: `📺┆Activitiés`,
            value: `\`/activities\``,
            inline: true
        },
        {
            name: `🚫┆AFK`,
            value: `\`/afk help\``,
            inline: true
        },
        {
            name: `📣┆Annonces`,
            value: `\`/announcement help\``,
            inline: true
        },
        {
            name: `👮‍♂️┆Auto mod`,
            value: `\`/automod help\``,
            inline: true
        },
        {
            name: `⚙️┆Auto setup`,
            value: `\`/autosetup help\``,
            inline: true
        },
        {
            name: `🎂┆Anniversaires`,
            value: `\`/birthdays help\``,
            inline: true
        },
        {
            name: `🤖┆Bot`,
            value: `\`/bot help\``,
            inline: true
        },
        {
            name: `🎰┆Casino`,
            value: `\`/casino help\``,
            inline: true
        },
        {
            name: `⚙┆Configuration`,
            value: `\`/config help\``,
            inline: true
        },
        {
            name: `💻┆Commandes Custom`,
            value: `\`/custom-commands help\``,
            inline: true
        },
        {
            name: `💳┆Dcredits`,
            value: `\`/dcredits help\``,
            inline: true
        },
        {
            name: `💰┆Economies`,
            value: `\`/economy help\``,
            inline: true
        },
        {
            name: `👪┆Famille`,
            value: `\`/family help\``,
            inline: true
        },
        {
            name: `😂┆Fun`,
            value: `\`/fun help\``,
            inline: true
        },
        {
            name: `🎮┆Jeux`,
            value: `\`/games help\``,
            inline: true
        },
        {
            name: `🎉┆Giveaway`,
            value: `\`/giveaway help\``,
            inline: true
        },
        {
            name: `⚙️┆Paramètres du Serveur`,
            value: `\`/guild help\``,
            inline: true
        },
        {
            name: `🖼┆Images`,
            value: `\`/images help\``,
            inline: true
        },
        {
            name: `📨┆Invites`,
            value: `\`/invites help\``,
            inline: true
        },
        {
            name: `🆙┆Niveaux`,
            value: `\`/levels help\``,
            inline: true
        },
        {
            name: `💬┆Messages`,
            value: `\`/messages help\``,
            inline: true
        },
        {
            name: `👔┆Moderation`,
            value: `\`/moderation help\``,
            inline: true
        },
        {
            name: `🎶┆Musique`,
            value: `\`/music help\``,
            inline: true
        },
        {
            name: `📓┆Bloc Note`,
            value: `\`/notepad help\``,
            inline: true
        },
        {
            name: `👤┆Profile`,
            value: `\`/profile help\``,
            inline: true
        },
        {
            name: `📻┆Radio`,
            value: `\`/radio help\``,
            inline: true
        },
        {
            name: `😛┆Reaction roles`,
            value: `\`/reactionroles help\``,
            inline: true
        },
        {
            name: `🔍┆Rrecherches`,
            value: `\`/search help\``,
            inline: true
        },
        {
            name: `📊┆Stats du Serveur`,
            value: `\`/serverstats help\``,
            inline: true
        },
        {
            name: `⚙️┆Setup`,
            value: `\`/setup help\``,
            inline: true
        },
        {
            name: `🎛┆Soundboard`,
            value: `\`/soundboard help\``,
            inline: true
        },
        {
            name: `🗨️┆Messages Epinglés`,
            value: `\`/stickymessages help\``,
            inline: true
        },
        {
            name: `💡┆Suggestions`,
            value: `\`/sugestions help\``,
            inline: true
        },
        {
            name: `🤝┆Remerciments`,
            value: `\`/thanks help\``,
            inline: true
        },
        {
            name: `🎫┆Tickets`,
            value: `\`/tickets help\``,
            inline: true
        },
        {
            name: `⚒️┆Tools`,
            value: `\`/tools help\``,
            inline: true
        },
        {
            name: `🔊┆Vocaux`,
            value: `\`/voice help\``,
            inline: true
        },
    ];

    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "commands-Bothelp") {
                interaction.deferUpdate();
                let page = 1;

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('⬅️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('➡️')
                            .setStyle(Discord.ButtonStyle.Secondary),
                    );

                const row2 = new Discord.ActionRowBuilder()
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
                                    description: `Rejoint le serveur Support`,
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
                    title: `❓・Pannel Help`,
                    desc: `Regarde toutes les catégories de commandes du bot! \n\n[Github](https://github.com/002-sans) | [Invite](${client.config.discord.botInvite})`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    fields: fields.slice(0, 24),
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            if (page == 1) {
                                client.embed({
                                    title: `❓・Pannel Help`,
                                    desc: `Regarde toutes les catégories de commandes du bot! \n\n[Invite](${client.config.discord.botInvite})`,
                                    fields: fields.slice(25, 49),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                client.embed({
                                    title: `❓・Pannel Help`,
                                    desc: `Regarde toutes les catégories de commandes du bot! \n\n[Invite](${client.config.discord.botInvite})`,
                                    fields: fields.slice(0, 24),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 