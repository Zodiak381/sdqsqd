const discord = require('discord.js');

module.exports = async (client, oldMessage, newMessage) => {
    try {
        if (!oldMessage.content || !newMessage.content) return;
        if (oldMessage.content === newMessage.content) return;
        if (oldMessage.author.bot) return;

        const logsChannel = await client.getLogs(oldMessage.guild.id);
        if (!logsChannel) return;

        client.embed({
            title: `💬・Message modifié`,
            desc: `Un message a été modifié`,
            fields: [
                {
                    name: `> Auteur`,
                    value: `- ${newMessage.member.user} (${newMessage.member.user.tag})`
                },
                {
                    name: `> Date`,
                    value: `- ${newMessage.createdAt}`
                },
                {
                    name: `> Salon`,
                    value: `- ${newMessage.channel} (${newMessage.channel.name})`
                },
                {
                    name: `> Ancien message`,
                    value: `\`\`\`${oldMessage.content.replace(/`/g, "'")}\`\`\``
                },
                {
                    name: `> Nouveau message`,
                    value: `\`\`\`${newMessage.content.replace(/`/g, "'")}\`\`\``
                }
            ]
        }, logsChannel).catch(() => { })
    }
    catch { }
};