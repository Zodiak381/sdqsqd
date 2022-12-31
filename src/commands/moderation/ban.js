const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms({
    flags: [Discord.PermissionsBitField.Flags.BanMembers],
    perms: [Discord.PermissionsBitField.Flags.BanMembers]
  }, interaction)

  if (perms == false) return;

  const member = await interaction.guild.members.fetch(interaction.options.getUser('user').id);
  const reason = interaction.options.getString('reason') || 'Non précisée';

  if (member.permissions.has(Discord.PermissionsBitField.Flags.BanMembers) || member.permissions.has(Discord.PermissionsBitField.Flags.BanMembers)) return client.errNormal({
    error: "Tu ne peux pas bannir un modérateur",
    type: 'editreply'
  }, interaction);

  client.embed({
    title: `🔨・Ban`,
    desc: `Tu as été banni de **${interaction.guild.name}**`,
    fields: [
      {
        name: "👤┆Banni par",
        value: interaction.user.tag,
        inline: true
      },
      {
        name: "💬┆Raison",
        value: reason,
        inline: true
      }
    ]
  }, member).then(function () {
    member.ban({ reason: reason })
    client.succNormal({
      text: "Le membre a été banni et a reçu un message de bannissement!",
      fields: [
        {
          name: "👤┆Membre Banni",
          value: member.user.tag,
          inline: true
        },
        {
          name: "💬┆Raison",
          value: reason,
          inline: true
        }
      ],
      type: 'editreply'
    }, interaction);
  }).catch(function () {
    member.ban({ reason: reason })
    client.succNormal({
      text: "Le membre a été banni mais n'a pas reçu de message de bannissement!",
      type: 'editreply'
    }, interaction);
  });
}

 