const Discord = require('discord.js');

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {

    const user = await interaction.guild.members.fetch(interaction.options.getUser('user'));
    let amount = interaction.options.getNumber('amount');
    
    if (amount < 0) return client.errNormal({ error: `Tu ne peux pas payer un nombre négatif!`, type: 'editreply' }, interaction);

    if (user.id == interaction.user.id) {
        return client.errNormal({
            error: "Tu ne peux pas te payer à toi même!",
            type: 'editreply'
        }, interaction)
    }

    Schema.findOne({ Guild: interaction.guild.id, User: interaction.user.id }, async (err, data) => {
        if (data) {
            if (data.Money < parseInt(amount)) return client.errNormal({ error: `Tu n'as pas autant d'argent!`, type: 'editreply' }, interaction);

            let money = parseInt(amount);

            data.Money -= money;
            data.save();

            client.addMoney(interaction, user, money);

            client.succNormal({
                text: `Tu as payer quelqu'un!`,
                fields: [
                    {
                        name: `👤┆Membre`,
                        value: `$${user}`,
                        inline: true
                    },
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
            client.errNormal({ text: `Tu n'as pas d'argent!`, type: 'editreply' }, interaction);
        }
    })
}

 