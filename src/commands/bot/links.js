const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('❌┆Rien n\'est séléctionner')
                .addOptions([
                    {
                        label: `Serveur Support`,
                        description: `Rejoint le serveur support`,
                        emoji: "❓",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invite le bot`,
                        description: `Invite le bot sur votre serveur`,
                        emoji: "📨",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `Invite le bot 2`,
                        description: `Invite le 2eme bot sur votre serveur`,
                        emoji: "📕",
                        value: "invite2-linkspanel",
                    },
                    {
                        label: `Serveur Communautaire`,
                        description: `Rejoint le serveur communautaire!`,
                        emoji: "🌍",
                        value: "community-linkspanel",
                    },
                    {
                        label: `Top.gg`,
                        description: `Montre le lien top.gg`,
                        emoji: "📃",
                        value: "top.gg-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `🔗・Liens`,
        desc: `Accédez à tous les liens du Bot ! Choisissez le lien dont vous avez besoin dans le menu ci-dessous`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 