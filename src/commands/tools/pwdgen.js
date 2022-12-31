const Discord = require('discord.js');
const generator = require('generate-password');

module.exports = async (client, interaction, args) => {

    const password = generator.generate({
        length: 12,
        symbols: true,
        numbers: true
    });

    client.succNormal({ text: `J'ai généré un mot de passe que je t'ai envoyé en mp`, type: 'editreply' }, interaction);

    client.succNormal({
        text: `Le mot de passe`,
        fields: [
            {
                name: "🔑┇Mot de passe",
                value: `${password}`,
                inline: true,
            },
            {
                name: "👣┇Caractères",
                value: `12`,
                inline: true,
            }
        ]
    }, interaction.user)

}

 