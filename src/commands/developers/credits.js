const Discord = require('discord.js');

const Schema = require('../../database/models/votecredits');

const webhookClientLogs = new Discord.WebhookClient({
    id: "",
    token: "",
});

module.exports = async (client, interaction, args) => {
    const type = interaction.options.getString('type');
    const user = interaction.options.getUser('user');
    const amount = interaction.options.getNumber('amount');

    if (type == "add") {
        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                data.Credits += amount;
                data.save();
            }
            else {
                new Schema({
                    User: user.id,
                    Credits: amount
                }).save();
            }
        })

        client.succNormal({
            text: `**${amount} credits ajoutés** à ${user}`,
            type: 'editreply'
        }, interaction);

        let embedLogs = new Discord.EmbedBuilder()
            .setTitle(`🪙・Credits ajoutés`)
            .setDescription(`Credits ajoutés à ${user} (${user.id})`)
            .addFields(
                { name: "👤┆Ajoutés par", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                { name: "🔢┆Montant", value: `${amount}`, inline: true },
            )
            .setColor(client.config.colors.normal)
            .setTimestamp();
        webhookClientLogs.send({
            username: 'Bot Credits',
            embeds: [embedLogs],
        });
    }
    else if (type == "remove") {
        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                data.Credits -= amount;
                data.save();
            }
        })

        client.succNormal({
            text: `**${amount} credits retirés** de ${user}`,
            type: 'editreply'
        }, interaction);

        let embedLogs = new Discord.EmbedBuilder()
            .setTitle(`🪙・Credits retirés`)
            .setDescription(`Credits retirés de ${user} (${user.id})`)
            .addFields(
                { name: "👤┆Retirés par", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                { name: "🔢┆Montant", value: `${amount}`, inline: true },
            )
            .setColor(client.config.colors.normal)
            .setTimestamp();
        webhookClientLogs.send({
            username: 'Bot Credits',
            embeds: [embedLogs],
        });
    }
}

 