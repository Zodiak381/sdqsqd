const discord = require('discord.js');

module.exports = async (client, invite) => {
    const logsChannel = await client.getLogs(invite.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `📨・Invitation créé`,
        desc: `Une vinitation a été créé`,
        fields: [
            {
                name: `> Code`,
                value: `- ${invite.code}`
            },
            {
                name: `> Inviteur`,
                value: `- ${invite.inviter} (${invite.inviter.tag})`
            }
        ]
    }, logsChannel).catch(() => { })
};