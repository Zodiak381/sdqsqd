const Discord = require('discord.js');

module.exports = (client, giveaway, member, reaction) => {
    client.errNormal({
        error: `Ce giveaway est terminé, tu ne peux plus y participer`
    }, member).catch(() => { });
};