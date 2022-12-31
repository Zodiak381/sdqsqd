const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {

    let name = encodeURIComponent(interaction.options.getString('name'));
    let link = `https://www.bing.com/search?q=${name}`;

    client.succNormal({
        text: `J'ai une recherche pour: \`${name}\``,
        fields: [
            {
                name: `🔗┇Lien`,
                value: `[Clique ici pour voir le lien](${link})`,
                inline: true,
            }
        ], type: 'editreply'
    }, interaction);

}

 