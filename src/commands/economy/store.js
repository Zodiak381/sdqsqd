const Discord = require('discord.js');

const store = require("../../database/models/economyStore");

module.exports = async (client, interaction, args, message) => {
    store.find({ Guild: interaction.guild.id }, async (err, storeData) => {
        if (storeData && storeData.length > 0) {
            const lb = storeData.map(e => `**<@&${e.Role}>** - ${client.emotes.economy.coins} $${e.Amount} \n**Pour acheter:** \`buy ${e.Role}\``);

            await client.createLeaderboard(`🛒・Magasin de ${interaction.guild.name}`, lb, interaction);
            client.embed({ 
                title: `🛒・Bot's Store`, 
                desc: `**Canne à pêche** - ${client.emotes.economy.coins} $100 \n**Pour acheter:** \`buy fishingrod\``, 
            }, interaction.channel);
        }
        else {
            client.errNormal({ 
                error: `Aucun magasin trouver sur ce serveur!`, 
                type: 'editreply' 
            }, interaction);
        }
    })

}

 