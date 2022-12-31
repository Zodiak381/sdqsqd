const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms({
    flags: [Discord.PermissionsBitField.Flags.KickMembers],
    perms: [Discord.PermissionsBitField.Flags.KickMembers]
  }, interaction)

  if (perms == false) return;

  const member = await interaction.guild.members.fetch(interaction.options.getUser('user').id);
  const reason = interaction.options.getString('reason') || 'Aucune Raison';

  if (member.permissions.has(Discord.PermissionsBitField.Flags.KickMembers) || member.permissions.has(Discord.PermissionsBitField.Flags.KickMembers)) return client.errNormal({
    error: "Tu ne peux pas expulser un modérateur",
    type: 'editreply'
  }, interaction);

  client.embed({
    title: `🔨・Kick`,
    desc: `Tu as été expulser de **${interaction.guild.name}**`,
    fields: [
      {
        name: "👤┆Kick par",
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
    member.kick(reason)
    client.succNormal({
      text: "Le membre a été expulsé et a reçu un message lors du kick!",
      fields: [
        {
          name: "👤┆Membre Kick",
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
    member.kick(reason)
    client.succNormal({
      text: "Le membre a été expulsé mais n'a pas reçu un message lors du kick!",
      type: 'editreply'
    }, interaction);
  });
}

 