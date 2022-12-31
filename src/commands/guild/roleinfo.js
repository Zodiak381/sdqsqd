const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const role = interaction.options.getRole('role');
  const perms = role.permissions.toArray();

  client.embed({
    title: `ℹ️・Information du Rôle`,
    thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
    desc: `Information à propos du rôle ${role}`,
    fields: [
      {
        name: 'ID du Rôle:',
        value: `${role.id}`,
        inline: true
      },
      {
        name: 'Nom du Role:',
        value: `${role.name}`,
        inline: true
      },
      {
        name: 'Mentionable:',
        value: `${role.mentionable ? 'Oui' : 'Non'}`,
        inline: true
      },
      {
        name: 'Permissions du Rôle:',
        value: `${perms.join(', ')}`
      }
    ],
    type: 'editreply'
  }, interaction)
}

   