const Discord = require('discord.js');

module.exports = (client, giveaway, winners) => {
    winners.forEach((member) => {
        client.embed({
            title: `🎉・Giveaway fini`,
            desc: `Félicitation ${member.user.username}! Tu as gagné le giveaway!`,
            fields: [
                {
                    name: `🎁┆Prix`,
                    value: `${giveaway.prize}`,
                    inline: true
                },
                {
                    name: `🎉┆Giveaway`,
                    value: `[Clique ici](https://discordapp.com/channels/${giveaway.message.guildId}/${giveaway.message.channelId}/${giveaway.message.id})`,
                    inline: true
                }
            ]
        
        }, member).catch(() => { });
    });
};