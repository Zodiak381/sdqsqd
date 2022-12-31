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
            title: `ℹ️・Options du Message de Bienvenue`,
            desc: `Options de Bienvenues: \n
            \`{user:username}\` - Pseudo du membre
            \`{user:discriminator}\` - Tag du membre
            \`{user:tag}\` - Pseudo et Tag du membre
            \`{user:mention}\` - Mentionne le membre

            \`{inviter:username}\` - Pseudo de l'inviteur
            \`{inviter:discriminator}\` - Tag de l'inviteur
            \`{inviter:tag}\` - Pseudo et Tag  de l'innviteur
            \`{inviter:mention}\` - Mentionne l'inviteur
            \`{inviter:invites}\` - Nombre d'invitations de l'inviteur
            \`{inviter:invites:left}\` - Nombre de personnes qui ont quittés de l'inviteur
                    
            \`{guild:name}\` - Nom du serveur
            \`{guild:members}\` - Nombre de membres`,
            type: 'editreply'
        }, interaction)
    }

    if (message.toUpperCase() == "DEFAULT") {
        inviteMessages.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.inviteJoin = null;
                data.save();

                client.succNormal({
                    text: `Message de bienvenue supprimé!`,
                    type: 'editreply'
                }, interaction);
            }
        })
    }
    else {
        inviteMessages.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.inviteJoin = message;
                data.save();
            }
            else {
                new inviteMessages({
                    Guild: interaction.guild.id,
                    inviteJoin: message
                }).save();
            }

            client.succNormal({
                text: `Le message de bienvenue a été setup`,
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

 