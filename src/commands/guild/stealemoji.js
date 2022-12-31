const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms({
    flags: [Discord.PermissionsBitField.Flags.ManageEmojisAndStickers],
    perms: [Discord.PermissionsBitField.Flags.ManageEmojisAndStickers]
  }, interaction)

  if (perms == false) return;

  const rawEmoji = interaction.options.getString('emoji');
  const role = interaction.options.getRole('role');
  const parsedEmoji = Discord.parseEmoji(rawEmoji);

  if (parsedEmoji.id) {
    const extension = parsedEmoji.animated ? ".gif" : ".png";
    const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
    if (role) {

      interaction.guild.emojis.create({ attachment: url, name: parsedEmoji.name, roles: [role.id] }).then(emoji => {
        client.succNormal({
          text: `Emoji ajouté sur le serveur`,
          fields: [
            {
              name: "😛┇Emoji",
              value: `${emoji}`,
              inline: true,
            },
            {
              name: "😜┇Nom de l'Emoji",
              value: `${emoji.name}`,
              inline: true,
            },
            {
              name: "😝┇ID de l'Emoji",
              value: `${emoji.id}`,
              inline: true,
            },
          ],
          type: 'editreply'
        }, interaction)
      })
    }else{
      interaction.guild.emojis.create({ attachment: url, name: parsedEmoji.name }).then(emoji => {
        client.succNormal({
          text: `Emoji ajouté sur le serveur`,
          fields: [
            {
              name: "😛┇Emoji",
              value: `${emoji}`,
              inline: true,
            },
            {
              name: "😜┇Nom de l'Emoji",
              value: `${emoji.name}`,
              inline: true,
            },
            {
              name: "😝┇ID de l'Emoji",
              value: `${emoji.id}`,
              inline: true,
            },
          ],
          type: 'editreply'
        }, interaction)
      })
    }
  }
  else {
    client.errNormal({
      error: "Emoji non trouvé!",
      type: 'editreply'
    }, interaction)
  }
}

