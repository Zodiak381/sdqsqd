const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, interaction, args) => {
    var channelName = await client.getTemplate(interaction.guild);
    channelName = channelName.replace(`{emoji}`, "🔧")
    channelName = channelName.replace(`{name}`, `Salons: ${interaction.guild.channels.cache.size.toLocaleString()}`)

    await interaction.guild.channels.create({
        name: channelName,
        type:  Discord.ChannelType.GuildVoice, permissionOverwrites: [
            {
                deny: [Discord.PermissionsBitField.Flags.Connect],
                id: interaction.guild.id
            },
        ],
    }).then(async (channel) => {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.Channels = channel.id;
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    Channels: channel.id
                }).save();
            }
        })

        client.succNormal({
            text: `Compteur de salon créé!`,
            fields: [
                {
                    name: `📘┆Salon`,
                    value: `${channel}`
                }
            ],
            type: 'editreply'
        }, interaction);
    })

}

 