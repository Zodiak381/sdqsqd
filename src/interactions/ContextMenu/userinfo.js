const { CommandInteraction, Client } = require('discord.js');
const { ContextMenuCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const axios = require("axios");

const model = require('../../database/models/badge');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Userinfo')
        .setType(2),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ ephemeral: false });
        const member = await interaction.guild.members.fetch(interaction.options.getUser('user').id);
        if (!member) return client.errNormal({
            error: "Cet utilisateur n'est pas sur le serveur!",
            type: 'editreply'
        }, interaction);
        const badgeFlags = {
            DEVELOPER: client.emotes.badges.developer,
            BUGS: client.emotes.badges.bug,
            MANAGEMENT: client.emotes.badges.management,
            PREMIUM: client.emotes.badges.premium,
            SUPPORTER: client.emotes.badges.supporter,
            TEAM: client.emotes.badges.team,
            BOOSTER: client.emotes.badges.booster,
            PARTNER: client.emotes.badges.partner,
            VOTER: client.emotes.badges.voter,
            SUPPORT: client.emotes.badges.support,
            MODERATOR: client.emotes.badges.moderator,
            DESIGNER: client.emotes.badges.designer,
            MARKETING: client.emotes.badges.marketing
        }

        const flags = {
            ActiveDeveloper: "👨‍💻・Active Developer",
            BugHunterLevel1: "🐛・Discord Bug Hunter",
            BugHunterLevel2: "🐛・Discord Bug Hunter",
            CertifiedModerator: "👮‍♂️・Modérateur Certifié",
            HypeSquadOnlineHouse1: "🏠・Hypesquad Bravery",
            HypeSquadOnlineHouse2: "🏠・Hypesquad Brillance",
            HypeSquadOnlineHouse3: "🏠・Hypesquad Ballance",
            HypeSquadEvents: "🏠・HypeSquad Events",
            PremiumEarlySupporter: "👑・Early Supporter",
            Partner: "👑・Partner",
            Quarantined: "🔒・Quarantaine", // Pas s$ur que ça marche encore
            Spammer: "🔒・Spammer", // Pas sûr que ça marche
            Staff: "👨‍💼・Discord Staff",
            TeamPseudoUser: "👨‍💼・Discord Team",
            VerifiedBot: "🤖・Bot Certifié",
            VerifiedDeveloper: "👨‍💻・Développeur Certifié",
          }

        let Badges = await model.findOne({ User: member.user.id });
        if (!Badges) Badges = { User: member.user.id }
        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);
        const userFlags = member.user.flags ? member.user.flags.toArray() : [];

        return client.embed({
            title: `👤・Informations sur le Membre`,
            desc: `Informations sur ${member.user.username}`,
            thumbnail: member.user.displayAvatarURL({ dynamic: true, size: 1024 }),
            image: member.user.bannerURL({ dynamic: true, size: 1024 }),
            fields: [
                {
                    name: "Pseudo",
                    value: `${member.user.username}`,
                    inline: true,
                },
                {
                    name: "Hashtag",
                    value: `${member.user.discriminator}`,
                    inline: true,
                },
                {
                    name: "Pseudo du Serveur",
                    value: `${member.nickname || 'Pas de pseudo'}`,
                    inline: true,
                },
                {
                    name: "Id",
                    value: `${member.user.id}`,
                    inline: true,
                },
                {
                    name: "Badges Discord",
                    value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Aucun'}`,
                    inline: true,
                },
                {
                    name: "Badges Bot",
                    value: `${Badges.FLAGS ? Badges.FLAGS.map(flag => badgeFlags[flag]).join(' ') : 'Aucun'}`,
                    inline: true,
                },
                {
                    name: "A Rejoint Le",
                    value: `<t:${Math.round(member.user.createdTimestamp / 1000)}>`,
                    inline: true,
                },
                {
                    name: "A Rejoint le Serveur le",
                    value: `<t:${Math.round(member.joinedAt / 1000)}>`,
                    inline: true,
                },
                {
                    name: `Roles [${roles.length}]`,
                    value: `${roles.length ? roles.join(', ') : 'Aucun'}`,
                    inline: false,
                }
            ],
            type: 'editreply'
        }, interaction)
    },
};

 