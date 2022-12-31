const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');
    const channel = interaction.options.getChannel('channel');

    client.embed({ 
        title: `📢・Announce!`, 
        desc: message 
    }, channel);

    client.succNormal({
        text: `L'annonce a été créé!`,
        fields: [
            {
                name: `📘┆Salon`,
                value: `${channel} (${channel.name})`
            }
        ],
        type: 'editreply'
    }, interaction);
}

 