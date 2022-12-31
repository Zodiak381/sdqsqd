const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1055169681964667003",
    token: "pdJT9VGoLPDiG_tdbSFikKYjnguhcCzlbO_k83AQksBuXxT5ZQznkO-t_zAai1pAFCNK",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback envoyé aux développeurs`,
        type: 'editreply'
    }, interaction);
}

 