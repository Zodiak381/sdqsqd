const Discord = require('discord.js');

const logs = require("../../database/models/logChannels");
const boostLogs = require("../../database/models/boostChannels");
const levelLogs = require("../../database/models/levelChannels");

module.exports = async (client, interaction, args) => {
    const choice = interaction.options.getString('setup');

    if (choice == "serverLogs") {
        interaction.guild.channels.create({
            name: "⚙️・Logs-Serveurs",
            permissionOverwrites: [
                {
                    deny: [Discord.PermissionsBitField.Flags.ViewChannel],
                    id: interaction.guild.id
                },
            ],
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(logs, ch, interaction)
        })
    }

    if (choice == "levelLogs") {
        interaction.guild.channels.create({
            name: "🧪・Logs-Niveaux",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(levelLogs, ch, interaction)
        })
    }

    if (choice == "boostLogs") {
        interaction.guild.channels.create({
            name: "🔮・Logs-Boosts",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(boostLogs, ch, interaction)
        })
    }
}

