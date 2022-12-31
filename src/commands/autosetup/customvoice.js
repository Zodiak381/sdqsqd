const Discord = require('discord.js');

const voiceSchema = require("../../database/models/voice");

module.exports = async (client, interaction, args) => {
    interaction.guild.channels.create({
        name: "➕ Vocaux Personnalisés",
        type: Discord.ChannelType.GuildCategory,
    }).then((cat) => {
        interaction.guild.channels.create({
            name: "➕ Créé un salon",
            type:  Discord.ChannelType.GuildVoice,
            parent: cat.id,
            permissionOverwrites: [
                {
                    deny: [Discord.PermissionsBitField.Flags.Speak],
                    id: interaction.guild.id
                },
            ],
        }).then((ch) => {
            voiceSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
                if (data) {
                    data.Category = cat.id;
                    data.Channel = ch.id
                    data.ChannelName = "{emoji} {channel name}"
                    data.save();
                }
                else {
                    new voiceSchema({
                        Guild: interaction.guild.id,
                        Channel: ch.id,
                        ChannelName: "{emoji} {channel name}",
                        Category: cat.id
                    }).save();
                }
            });

            client.succNormal({
                text: `Les salons vocaux custom ont été setup!`,
                fields: [
                    {
                        name: `📘┆Salon`,
                        value: `${ch} (${ch.name})`
                    }
                ],
                type: 'editreply'
            }, interaction);
        })
    })
}

