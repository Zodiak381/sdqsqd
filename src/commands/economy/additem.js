const Discord = require('discord.js');

const store = require("../../database/models/economyStore");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const role = interaction.options.getRole('role');
    let amount = interaction.options.getNumber('amount');

    if (!role || !amount) return client.errUsage({ usage: "additem [role] [amount]", type: 'editreply' }, interaction);

    if (isNaN(amount)) return client.errNormal({ error: "Entre un nombre valide!", type: 'editreply' }, interaction);

    if(role == interaction.guild.roles.everyone) return client.errNormal({ error: "Tu ne peux pas ajouter le rôle everyone au magasin!", type: 'editreply' }, interaction);

    store.findOne({ Guild: interaction.guild.id, Role: role.id }, async (err, storeData) => {
        if (storeData) {
            client.errNormal({ error: `Ce rôle est déjà dans la boutique!`, type: 'editreply' }, interaction);
        }
        else {

            new store({
                Guild: interaction.guild.id,
                Role: role.id,
                Amount: amount
            }).save();

            client.succNormal({
                text: `Le rôle a été ajouté à la boutique!`,
                fields: [
                    {
                        name: `🛒┆Role`,
                        value: `<@&${role.id}>`,
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
    })
}

 