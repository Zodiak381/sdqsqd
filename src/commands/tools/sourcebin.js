const Discord = require('discord.js');
const sourcebin = require('sourcebin');

module.exports = async (client, interaction, args) => {

    const language = interaction.options.getString('language');
    const code = interaction.options.getString('code');

    const bin = await sourcebin.create(
        [
            {
                content: `${code}`,
                language: `${language}`,
            },
        ],
        {
            title: '💻・Code Random',
            description: 'Ce code a été upload avec un bot',
        },
    ).then(value => {
        client.succNormal({
            text: `Ton code a été envoyé!`,
            fields: [
                {
                    name: `🔗┇Lien`,
                    value: `[Clique ici pour voir le code](${value.url})`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction);
    })

}

 