const model = require('../../database/models/badge');
const Schema = require('../../database/models/profile');
const CreditsSchema = require("../../database/models/votecredits");

module.exports = async (client, interaction, args) => {

    const badgeFlags = {
        DEVELOPER: client.emotes.badges.developer,
        EVENT: client.emotes.badges.event,
        BOOSTER: client.emotes.badges.booster,
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
        MARKETING: client.emotes.badges.marketing,
        ACTIVE: client.emotes.badges.active,
        VIP: client.emotes.badges.vip
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

    const user = interaction.options.getUser('user') || interaction.user;

    Schema.findOne({ User: user.id }, async (err, data) => {
        if (data) {
            let Badges = await model.findOne({ User: user.id });

            let credits = 0;
            const creditData = await CreditsSchema.findOne({ User: user.id });

            if (Badges && Badges.FLAGS.includes("DEVELOPER")) {
                credits = "∞";
            }
            else if (creditData) {
                credits = creditData.Credits;
            }

            if (!Badges) Badges = { User: user.id };

            const userFlags = user.flags ? user.flags.toArray() : [];

            client.embed({
                title: `${client.user.username}・Profile`,
                desc: '_____',
                thumbnail: user.avatarURL({ dynamic: true }),
                fields: [{
                    name: "👤┆Membre",
                    value: user.username,
                    inline: true
                },
                {
                    name: "📘┆Hashtag",
                    value: user.discriminator,
                    inline: true
                },
                {
                    name: "🆔┆ID",
                    value: user.id,
                    inline: true
                },
                {
                    name: "👨‍👩‍👦┆Genre",
                    value: `${data.Gender || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🔢┆Age",
                    value: `${data.Age || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🎂┆Anniversaire",
                    value: `${data.Birthday || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🎨┆Couleur favorite",
                    value: `${data.Color || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🐶┆Animal favoris",
                    value: `${data.Pets.join(', ') || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🍕┆Aliment favoris",
                    value: `${data.Food.join(', ') || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🎶┆Chanson favorite",
                    value: `${data.Songs.join(', ') || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🎤┆Artiste favoris/te",
                    value: `${data.Artists.join(', ') || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🎬┆Film favoris",
                    value: `${data.Movies.join(', ') || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "👨‍🎤┆Act(eu/rice) favori(s/te)",
                    value: `${data.Actors.join(', ') || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🏴┆Origine",
                    value: `${data.Orgin || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "🎮┆Hobby's",
                    value: `${data.Hobbys.join(', ') || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "😛┆Status",
                    value: `${data.Status || 'Non défini'}`,
                    inline: true
                },
                {
                    name: "📛┆Badges du Bot",
                    value: `${Badges.FLAGS ? Badges.FLAGS.map(flag => badgeFlags[flag]).join(' ') : 'None'}`,
                    inline: true
                },
                {
                    name: "🏷️┆Badges Discord",
                    value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None' || 'None'}`,
                    inline: true
                },
                {
                    name: "💳┆Dcredits",
                    value: `${credits || 'None'}`,
                    inline: true
                },
                {
                    name: "ℹ️┆A propos de moi",
                    value: `${data.Aboutme || 'Non défini'}`,
                    inline: false
                },], type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ error: "Aucun profile de trouver! Créé en un avec createprofile", type:'editreply' }, interaction);
        }
    })
}

 