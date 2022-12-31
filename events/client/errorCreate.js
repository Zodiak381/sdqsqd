const Discord = require('discord.js');
const generator = require('generate-password');

module.exports = (client, err, command, interaction) => {
    console.log(err);
    const password = generator.generate({
        length: 10,
        numbers: true
    });

    const errorlog = new Discord.WebhookClient({
        id: client.webhooks.errorLogs.id,
        token: client.webhooks.errorLogs.token,
    });

    let embed = new Discord.EmbedBuilder()
        .setTitle(`🚨・${password}`)
        .addFields(
            { name: "✅┇Serveur", value: `${interaction.guild.name} (${interaction.guild.id})`},
            { name: `💻┇Commande`, value: `${command}`},
            { name: `💬┇Erreur`, value: `\`\`\`${err}\`\`\``},
            { name: `📃┇Stack error`, value: `\`\`\`${err.stack.substr(0, 1018)}\`\`\``},
        )
        .setColor(client.config.colors.normal)
    errorlog.send({
        username: `Bot errors`,
        embeds: [embed],

    }).catch(error => { console.log(error) })

    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Serveur Support")
                .setURL(client.config.discord.serverInvite)
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.emotes.normal.error}・Erreur`,
        desc: `Il y a eu une erreur lors du lancement de la commande`,
        color: client.config.colors.error,
        fields: [
            {
                name: `Code de l'erreur`,
                value: `\`${password}\``,
                inline: true,
            },
            {
                name: `Que dois-je faire?`,
                value: `Tu peux contacter le développeur en rejoignant le serveur support`,
                inline: true,
            }
        ],
        components: [row],
        type: 'editreply'
    }, interaction).catch(() => {
        client.embed({
            title: `${client.emotes.normal.error}・Erreur`,
            desc: `Il y a eu une erreur lors du lancement de la commande`,
            color: client.config.colors.error,
            fields: [
                {
                    name: `Code de l'erreur`,
                    value: `\`${password}\``,
                    inline: true,
                },
                {
                    name: `Que dois-je faire?`,
                    value: `Tu peux contacter le développeur en rejoignant le serveur support`,
                    inline: true,
                }
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    })
};