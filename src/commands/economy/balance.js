const Discord = require('discord.js');

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {

    const user = interaction.options.getUser('user') || interaction.user;

    if (user.bot) return client.errNormal({
        error: "Tu ne peux pas voir la balance d'un bot!",
        type: 'editreply'
    }, interaction);

    Schema.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, data) => {
        if (data) {

            let total = data.Money + data.Bank;

            client.embed({
                title: `${client.emotes.economy.coins}・Balance`,
                fields: [
                    {
                        name: `${client.emotes.economy.pocket}┆Porte feuille`,
                        value: `$${data.Money}`,
                        inline: true
                    },
                    {
                        name: `${client.emotes.economy.bank}┆Banque`,
                        value: `$${data.Bank}`,
                        inline: true
                    },
                    {
                        name: `💰┆Total`,
                        value: `$${total}`,
                        inline: true
                    }
                ],
                desc: `L'argent actuel de \`${user.tag}\``,
                type: 'editreply'
            }, interaction);
        }
        else {
            client.errNormal({
                error: `Cette personne n'a pas d'argent!`, type: 'editreply'
            }, interaction);
        }
    })
}

 