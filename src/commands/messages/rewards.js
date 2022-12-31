const Discord = require('discord.js');

const Schema = require("../../database/models/messageRewards");

module.exports = async (client, interaction, args) => {
    const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id });

    if (rawLeaderboard.length < 1) return client.errNormal({
        error: `Aucune récompenses de trouvés!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**${e.Messages} messages** - <@&${e.Role}>`);

    await client.createLeaderboard(`💬・Récompenses de niveaux - ${interaction.guild.name}`, lb, interaction);
}

 