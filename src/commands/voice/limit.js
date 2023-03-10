const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkBotPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction)

    if (perms == false) return;

    let limit = interaction.options.getNumber('limit');

    const channel = interaction.member.voice.channel;
    if (!channel) return client.errNormal({
        error: `Tu n'es pas dans un salon vocal!`,
        type: 'editreply'
    }, interaction);
    var checkVoice = await client.checkVoice(interaction.guild, channel);
    if (!checkVoice) {
        return client.errNormal({
            error: `Tu ne peux pas modifier ce salon!`,
            type: 'editreply'
        }, interaction);
    } else {
        channel.setUserLimit(limit);

        client.succNormal({
            text: `La limite a été mise à \`${limit}\`!`,
            fields: [
                {
                    name: `📘┆Salon`,
                    value: `${channel} (${channel.name})`
                }
            ],
            type: 'editreply'
        }, interaction);
    }
}

