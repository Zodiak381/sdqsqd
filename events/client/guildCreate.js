const Discord = require('discord.js');

const Functions = require("../../database/models/functions");

module.exports = async (client, guild) => {
    const webhookClient = new Discord.WebhookClient({
        id: client.webhooks.serverLogs.id,
        token: client.webhooks.serverLogs.token,
    });

    if (guild == undefined) return;

    new Functions({
        Guild: guild.id,
        Prefix: client.config.discord.prefix
    }).save();

    try {
        const promises = [
            client.shard.broadcastEval(client => client.guilds.cache.size),
            client.shard.broadcastEval(client => client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];
        Promise.all(promises)
            .then(async (results) => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const embed = new Discord.EmbedBuilder()
                    .setTitle("🟢・Nouveau serveur ajouté!")
                    .addFields(
                        { name: "Nombre de serveurs:", value: `${totalGuilds}`, inline: true },
                        { name: "Nom du serveur", value: `${guild.name}`, inline: true },
                        { name: "ID du serveur", value: `${guild.id}`, inline: true },
                        { name: "Membres", value: `${guild.memberCount}`, inline: true },
                        { name: "Créateur du serveur", value: `<@!${guild.ownerId}> (${guild.ownerId})`, inline: true },
                    )
                    .setThumbnail("https://cdn.discordapp.com/attachments/843487478881976381/852419422392156210/BotPartyEmote.png")
                    .setColor(client.config.colors.normal)
                webhookClient.send({
                    username: 'Bot Logs',
                    avatarURL: client.user.avatarURL(),
                    embeds: [embed],
                });
            })

        let defaultChannel = "";
        guild.channels.cache.forEach((channel) => {
            if (channel.type == Discord.ChannelType.GuildText && defaultChannel == "") {
                if (!channel.permissionsFor(guild.me)) channel.permissionsFor(guild.me) = ""
                console.log(channel.permissionsFor(guild.me).has(Discord.PermissionFlagsBits.SendMessages))
                if (channel.permissionsFor(guild.me).has()) {
                    defaultChannel = channel;
                }
            }
        })
    }
    catch (err) {
        console.log(err);
    }


};