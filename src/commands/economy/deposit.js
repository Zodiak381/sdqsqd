const Discord = require('discord.js');

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {

    let amount = interaction.options.getNumber('amount');
    let user = interaction.user;

    if (!amount) return client.errUsage({ usage: "deposit [amount]", type: 'editreply' }, interaction);

    if (isNaN(amount)) return client.errNormal({ error: "Entre un nombre valide!", type: 'editreply' }, interaction);

    if (amount < 0) return client.errNormal({ error: `Tu ne peux pas déposer un chiffre négatif!`, type: 'editreply' }, interaction);

    Schema.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, data) => {
        if (data) {
            if (data.Money < parseInt(amount)) return client.errNormal({ error: `Tu n'as pas autant d'argent!`, type: 'editreply' }, interaction);

            let money = parseInt(amount);

            data.Money -= money;
            data.Bank += money;
            data.save();

            client.succNormal({
                text: `Tu as poser de l'argent dans la banque!`,
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
            client.errNormal({ text: `Tu n'as pas d'argent à déposer!`, type: 'editreply' }, interaction);
        }
    })
}
 