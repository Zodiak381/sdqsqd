const Discord = require('discord.js');

const inviteMessages = require("../../database/models/inviteMessages");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const message = interaction.options.getString('message');

    if (message.toUpperCase() == "HELP") {
        return client.embed({
            title: `ℹ️・Opitons du message d'au revoir`,
            desc: `Options du message d'au revoir: \n
            \`{user:username}\` - Pseudo de l'utilisateur
            \`{user:discriminator}\` - Tag de l'utilisateur
            \`{user:tag}\` - Pseudo et Tag de l'utilisateur
            \`{user:mention}\` - Mentionne l'utilisateur

            \`{inviter:username}\` - Celui qui a inviter l'utilisateur
            \`{inviter:discriminator}\` - Le tag de celui qui a inviter
            \`{inviter:tag}\` - Le pseudo et le tag de celui qui a inviter
            \`{inviter:mention}\` - Mentionns l'inviteur
            \`{inviter:invites}\` - Nombre d'invitations de l'inviteur
            \`{inviter:invites:left}\` - Nombre d'invitations quittés de l'inviteur
            
            \`{guild:name}\` - Nom du serveur
            \`{guild:members}\` - Nombre de membres`,
            type: 'editreply'
        }, interaction)
    }

    if (message.toUpperCase() == "DEFAULT") {
        inviteMessages.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.inviteLeave = null;
                data.save();

                client.succNormal({
                    text: `Message d'au revoir supprimé!`,
                    type: 'editreply'
                }, interaction);
            }
        })
    }
    else {
        inviteMessages.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.inviteLeave = message;
                data.save();
            }
            else {
                new inviteMessages({
                    Guild: interaction.guild.id,
                    inviteLeave: message
                }).save();
            }

            client.succNormal({
                text: `Le message d'au revoir a été setup`,
                fields: [
                    {
                        name: `💬┆Message`,
                        value: `${message}`,
                        inline: true
                    },
                ],
                type: 'editreply'
            }, interaction)
        })
    }
}

 