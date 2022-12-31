const Discord = require('discord.js');
const ms = require('ms');

module.exports = async (client, interaction, args) => {
    const gchannel = interaction.options.getChannel('channel');
    const duration = interaction.options.getString('duration');
    const winnerCount = interaction.options.getNumber('winners');
    const prize = interaction.options.getString('prize');

    client.giveawaysManager.start(gchannel, {
        duration: ms(duration),
        prize: `${client.emotes.normal.gift} - ${prize}`,
        lastChance: {
            enabled: true,
            content: `${client.emotes.normal.error} **DERNIERE CHANCE POUR PARTICIPER !** ${client.emotes.normal.error}`,
            threshold: 5000,
            embedColor: '#FF0000'
        },
        pauseOptions: {
            isPaused: false,
            content: '⚠️ **CE GIVEAWAY EST EN PAUSE !** ⚠️',
            unPauseAfter: null,
            embedColor: '#FFFF00'
        },
        winnerCount: parseInt(winnerCount),
        hostedBy: interaction.user,
        thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
        messages: {
            giveaway: `${client.emotes.normal.party} **GIVEAWAY** ${client.emotes.normal.party}`,
            giveawayEnded: `${client.emotes.normal.party} **GIVEAWAY FINI** ${client.emotes.normal.party}`,
            drawing: `${client.emotes.normal.clock} - Fini: **{timestamp}**!`,
            inviteToParticipate: "Appuie sur 🎉 pour participer au giveaway! \n",
            winMessage: "Félicitation {winners}! Tu viens de gagner **{this.prize}** !",
            embedFooter: "Giveaway!",
            embedColor: client.config.colors.normal,
            noWinner: "Giveaway annulé car il n'y a pas de participant. \n",
            hostedBy: `${client.emotes.normal.party} - Lancé par: {this.hostedBy}`,
            winners: `🏆 - Gagnants(s)`,
            endedAt: "Fini:",
            units: {
                seconds: "secondes",
                minutes: "minutes",
                hours: "heures",
                days: "jours",
                pluralS: false
            },
        },

    }).then((gData) => {
        client.succNormal({ 
            text: `Giveaway lancé dans ${gchannel}`,
            type: 'ephemeraledit'
        }, interaction);
    });
}

 