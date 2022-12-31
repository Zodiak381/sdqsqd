const Discord = require('discord.js');

const Schema = require('../../database/models/userBans');

const webhookClientLogs = new Discord.WebhookClient({
    id: "",
    token: "",
});

module.exports = async (client, interaction, args) => {
    const boolean = interaction.options.getBoolean('new');
    const member = interaction.options.getUser('user');

    if (boolean == true) {
        Schema.findOne({ User: member.id }, async (err, data) => {
            if (data) {
                return client.errNormal({
                    error: `<@!${member.id}> (${member.id}) est déjà ban du bot`,
                    type: `editreply`
                }, interaction);
            }
            else {
                new Schema({
                    User: member.id
                }).save();

                client.succNormal({
                    text: `<@!${member.id}> (${member.id}) banni du bot`,
                    type: 'editreply'
                }, interaction)

                let embedLogs = new Discord.EmbedBuilder()
                    .setTitle(`🔨・Ban ajouté`)
                    .setDescription(`<@!${member.id}> (${member.id}) est banni du bot`)
                    .addFields(
                        { name: "👤┆Banned By", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                    )
                    .setColor(client.config.colors.normal)
                    .setFooter({ text: client.config.discord.footer })
                    .setTimestamp();
                webhookClientLogs.send({
                    username: 'Bot Bans',
                    embeds: [embedLogs],
                });
            }
        })
    }
    else if (boolean == false) {
        Schema.findOne({ User: member.id }, async (err, data) => {
            if (data) {
                Schema.findOneAndDelete({ User: member.id }).then(() => {
                    client.succNormal({
                        text: `<@!${member.id}> (${member.id}) est débanni du bot`,
                        type: 'editreply'
                    }, interaction)

                    let embedLogs = new Discord.EmbedBuilder()
                        .setTitle(`🔨・Ban removed`)
                        .setDescription(`<@!${member.id}> (${member.id}) est débanni du bot`)
                        .addFields(
                            { name: "👤┆Unban par", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                        )
                        .setColor(client.config.colors.normal)
                        .setFooter({ text: client.config.discord.footer })
                        .setTimestamp();
                    webhookClientLogs.send({
                        username: 'Bot Bans',
                        embeds: [embedLogs],
                    });
                })
            }
            else {
                return client.errNormal({
                    error: `<@!${member.id}> (${member.id}) n'a pas été banni du bot`,
                    type: `editreply`
                }, interaction);
            }
        })
    }
}

 