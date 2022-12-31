const Discord = require('discord.js');
const Schema = require("../../database/models/music");

module.exports = async (client, interaction, args) => {
    const webhookClientLogs = new Discord.WebhookClient({
        id: client.webhooks.voiceLogs.id,
        token: client.webhooks.voiceLogs.token,
    });

    let channel = interaction.member.voice ? interaction.member.voice.channel : null;
    if (!channel) return client.errNormal({ error: `Le salon n'existe pas!`, type: 'editreply' }, interaction);

    client.radioStop(channel);

    var remove = await Schema.deleteOne({ Guild: interaction.guild.id });

    client.embed({
        title: `📻・Radio arrêtée`,
        desc: `La radio a été arrêtée avec succès \nPour que le bot puisse rejoindre: \`rplay\``,
        fields: [{
            name: "👤┆Arrêtée par",
            value: `${interaction.user} (${interaction.user.tag})`,
            inline: true
        },
        {
            name: "📺┆Salon",
            value: `${channel} (${channel.name})`,
            inline: true
        }
        ],
        type: 'editreply'
    }, interaction)

    let embed = new Discord.EmbedBuilder()
        .setTitle(`📻・Radio arrêtée`)
        .setDescription(`_______________ \n\nLa radio a été arrêtée avec succès`)
        .addFields(
            { name: "👤┆Arrêtée par", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
            { name: "📺┆Salon", value: `${channel} (${channel.name})`, inline: true },
            { name: "⚙️┆Serveur", value: `${interaction.guild.name} (${interaction.guild.id})`, inline: true },
        )
        .setColor(client.config.colors.normal)
        .setTimestamp();
    webhookClientLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    });
}

 