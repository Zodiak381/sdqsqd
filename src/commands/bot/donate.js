const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Donation")
                .setURL("https://discord.gg/pgGZhhYtbz")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donation`,
        desc: '_____ \n\nAppuie sur le bouton en dessous pour me soutenir \n**Fait attention ! Me soutenir n\'est pas obligé**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://discord.gg/pgGZhhYtbz",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 