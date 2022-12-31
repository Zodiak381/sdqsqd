const Discord = require('discord.js');
const ms = require('ms');

module.exports = async (client, interaction, args) => {
    const messageID = interaction.options.getString('message');

    client.giveawaysManager.delete(messageID).then(() => {
        client.succNormal({
            text: `Le giveaway a été retiré`,
            type: 'editreply'
        }, interaction);
    }).catch((err) => {
        client.errNormal({
            error: `Aucun giveaway de trouvé pour ${messageID}!`,
            type: 'editreply'
        }, interaction)
    });
}

 