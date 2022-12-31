const Discord = require('discord.js');

const Schema = require('../../database/models/channelList');

module.exports = async (client, interaction, args) => {
    const type = interaction.options.getString('type');
    const channel = interaction.options.getChannel('channel');

    if (type == "add") {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                if (data.Channels.includes(channel.id)) {
                    return client.errNormal({
                        error: `Le salon ${channel} est déjà dans la database!`,
                        type: 'editreply'
                    }, interaction);
                }

                data.Channels.push(channel.id);
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
            text: `Le salon a été ajouté à la whitelist!`,
            fields: [
                {
                    name: `📘┆Salon`,
                    value: `${channel} (${channel.name})`
                }
            ],
            type: 'editreply'
        }, interaction);
    }
    else if (type == "remove") {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                if (!data.Channels.includes(channel.id)) {
                    return client.errNormal({
                        error: `Le salon ${channel} n'est pas dans la database!`,
                        type: 'editreply'
                    }, interaction);
                }

                const filtered = data.Channels.filter((target) => target !== channel.id);

                await Schema.findOneAndUpdate({ Guild: interaction.guild.id }, {
                    Guild: interaction.guild.id,
                    Channels: filtered
                });


                client.succNormal({
                    text: `Le salon a été retiré de la whitelist!`,
                    fields: [
                        {
                            name: `📘┆Salon`,
                            value: `${channel} (${channel.name})`
                        }
                    ],
                    type: 'editreply'
                }, interaction);
            }
            else {
                return client.errNormal({
                    error: `Ce serveur n'a aucune donnée!`,
                    type: 'editreply'
                }, interaction);
            }
        })
    }
}

 