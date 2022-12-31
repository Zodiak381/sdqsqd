const Discord = require('discord.js');

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {

    let amount = interaction.options.getNumber('amount');
    let user = interaction.user;

    if (!amount) return client.errUsage({ usage: "withdraw [amount]", type: 'editreply' }, interaction);

    if (isNaN(amount)) return client.errNormal({ error: "Entre un nombre valide!", type: 'editreply' }, interaction);

    if (amount < 0) return client.errNormal({ error: `Tu ne peux pas retirer un nombre négatif!`, type: 'editreply' }, interaction);

    Schema.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, data) => {
        if (data) {
            if (data.Bank === 0) return client.errNormal({ error: `Tu n'as rien à retirer de ta banque!`, type: 'editreply' }, interaction);

            let money = parseInt(amount);

            data.Money += money;
            data.Bank -= money;
            data.save();

            client.succNormal({
                text: `Tu as retirer de l'argent de ta banque!`,
                fields: [
                    {
                        name: `${client.emotes.economy.coins}┆Montant`,
                        value: `$${amount}`,
                        inline: true
                    }
                ],
                type: 'editreply'
            }, interaction);
        }
        else {
            client.errNormal({ text: `Tu n'as pas d'argent à retirer!`, type: 'editreply' }, interaction);
        }
    })
}
 