const Discord = require('discord.js');
const figlet = require('figlet');

module.exports = async (client, interaction, args) => {
    const msg = interaction.options.getString('text');

    if (msg.length > 2000) return client.errNormal({ error: "Entre un texte plus petit que 2000 caractères!", type: 'editreply' }, interaction);

    figlet.text(msg, function (err, data) {

        if (err) {
            return client.errNormal({ error: "Quelque chose c'est mal passé!", type: 'editreply' }, interaction);
        }

        client.embed({
            title: '💬・Ascii',
            desc: `\`\`\` ${data} \`\`\``,
            type: 'editreply',
        }, interaction);
    })
}

 