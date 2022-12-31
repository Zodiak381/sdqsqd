const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    const promises = [
        client.shard.broadcastEval(client => client.guilds.cache.size),
        client.shard.broadcastEval(client => client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        client.shard.broadcastEval(client => client.channels.cache.size),
        client.shard.broadcastEval(client => client.voice.adapters.size)
    ];
    return Promise.all(promises)
        .then(async results => {
            const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
            const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
            const totalChannels = results[2].reduce((acc, channelCount) => acc + channelCount, 0);
            const totalVoice = results[3].reduce((acc, voiceCount) => acc + voiceCount, 0);

            const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");

            client.embed({
                title: `ℹ・Bot information`,
                desc: `____________________________`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                fields: [
               {
                    name: "ℹ️┆Information",
                    value: `Bot est un bot avec lequel vous pouvez gérer votre serveur entier ! Avec pas moins de 350+ commandes, nous avons un grand bot avec de nombreuses options pour améliorer votre serveur!`,
                    inline: false,
                },
                {
                    name: "_____ \n\n│General",
                    value: `_____`,
                    inline: false,
                },
                {
                    name: "🤖┆Nom du bot",
                    value: `${client.user.username}`,
                    inline: true,
                },
                {
                    name: "🆔┆Id du bot",
                    value: `${client.user.id}`,
                    inline: true,
                },
                {
                    name: "💻┆Shards",
                    value: `\`${client.options.shardCount}\` shards`,
                    inline: true,
                },
                {
                    name: "🔧┆Créateur du bot",
                    value: `<@!733266850313404476> `,
                    inline: true,
                },
                {
                    name: "🔧┆Bot developer",
                    value: `<@!733266850313404476>`,
                    inline: true,
                },
                {
                    name: "💻┆Commandes",
                    value: `\`${client.commands.size}\` commandes`,
                    inline: true,
                },
                {
                    name: "🌐┆Serveurs",
                    value: `\`${totalGuilds}\` serveurs`,
                    inline: true,
                },
                {
                    name: "🌐┆Servers dans le shard",
                    value: `\`${client.guilds.cache.size}\` serveurs`,
                    inline: true,
                },
                {
                    name: "👥┆Membres",
                    value: `\`${totalMembers}\` membres`,
                    inline: true,
                },
                {
                    name: "🔊┆Salon connectés",
                    value: `\`${totalVoice}\` salons`,
                    inline: true,
                },
                {
                    name: "📺┆Salons",
                    value: `\`${totalChannels}\` salons`,
                    inline: true,
                },
                {
                    name: "📅┆Créé",
                    value: `<t:${Math.round(client.user.createdTimestamp / 1000)}>`,
                    inline: true,
                },

                {
                    name: "_____ \n\n│System",
                    value: `_____`,
                    inline: false,
                },
                {
                    name: "🆙┆Uptime",
                    value: `${duration}`,
                    inline: true,
                },
                {
                    name: "⌛┆Rapidité de l'API:",
                    value: `\`${client.ws.ping}\`ms`,
                    inline: true,
                },
                {
                    name: "🏷┆Version du bot",
                    value: `\`${require(`${process.cwd()}/package.json`).version}\``,
                    inline: true,
                },
                {
                    name: "🏷┆Node.js Version",
                    value: `\`${process.version}\``,
                    inline: true,
                },
                {
                    name: "📂┆Discord.js Version",
                    value: `\`${Discord.version}\``,
                    inline: true,
                },
                {
                    name: "💾┆Memoire du bot",
                    value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` MB`,
                    inline: true,
                },
                {
                    name: "🔗┆Liens",
                    value: `Ajoute moi: [[ICI]](${client.config.discord.botInvite}) \nServeur Support: [[ICI]](${client.config.discord.serverInvite})`,
                    inline: false,
                }],
                type: 'editreply'
            }, interaction)
        })
}

 
