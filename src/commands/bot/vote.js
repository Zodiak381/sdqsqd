const Discord = require('discord.js');
const Topgg = require(`@top-gg/sdk`);
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    let dbl = new Topgg.Api(process.env.TOPGG_TOKEN)

    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Vote pour moi")
                .setURL("https://top.gg/bot/1054915353479757835/vote")
                .setStyle(Discord.ButtonStyle.Link),
        );

    dbl.hasVoted(interaction.user.id).then(voted => {
        if (voted) {
            client.embed({
                title: `📨・Vote`,
                desc: `Tu as déjà voté!`,
                image: `https://cdn.discordapp.com/attachments/843487478881976381/874694192755007509/Bot_banner_vote.jpg`,
                color: client.config.colors.succes,
                components: [row],
                type: 'editreply'
            }, interaction)
        }
        if (!voted) {
            client.embed({
                title: `📨・Vote`,
                desc: `Tu n'as pas voter!`,
                image: `https://cdn.discordapp.com/attachments/843487478881976381/874694192755007509/Bot_banner_vote.jpg`,
                color: client.config.colors.error,
                components: [row],
                type: 'editreply'
            }, interaction)
        }
    }).catch(error => { client.errNormal({ text: `Il y a eu une erreur quand j'ai voulu vérifier le vote!`, editreply: true }, interaction) });
}

 