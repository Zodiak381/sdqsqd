const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {

    const question = interaction.options.getString('question');

    var antwoorden = [
        "Oui !",
        "Malheureusement non",
        "Vous avez absolument raison !",
        "Non, désolé.",
        "Je suis d'accord",
        "Aucune idée !",
        "Je ne suis pas si malin...",
        "Mes sources disent que non !",
        "C'est certain",
        "Vous pouvez vous y fier",
        "Probablement pas",
        "Tout indique que c'est non",
        "Aucun doute",
        "Absolument",
        "Je ne sais pas"
    ];
    var resultaat = Math.floor((Math.random() * antwoorden.length));

    client.embed({
        title: `${client.emotes.normal.ball}・8ball`,
        desc: `Regarde la réponse à ta question!`,
        fields: [
            {
                name: `💬┆Ta question`,
                value: `\`\`\`${question}\`\`\``,
                inline: false
            },
            {
                name: `🤖┆Réponse du bot`,
                value: `\`\`\`${antwoorden[resultaat]}\`\`\``,
                inline: false
            }
        ],
        type: 'editreply'
    }, interaction);
}

 