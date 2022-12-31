const { CommandInteraction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");
const { ChannelType } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Génère un embed")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("Le salon où l'embed sera")
        .setRequired(true)
        .addChannelTypes(ChannelType.GuildText)
    ),
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    await interaction.deferReply({ fetchReply: true });
    const perms = await client.checkPerms(
      {
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages],
      },
      interaction
    );

    if (perms == false) return;

    let row = new Discord.ActionRowBuilder().addComponents(
      new Discord.StringSelectMenuBuilder()
        .setCustomId("embedSelect")
        .setPlaceholder("Rien de séléctionner")
        .addOptions([
          {
            emoji: "✏️",
            label: "Titre",
            description: "Créé le titre de l'embed",
            value: "title_embed",
          },
          {
            emoji: "💬",
            label: "Description",
            description: "Créé la description de l'embed",
            value: "description_embed",
          },
          {
            emoji: "🕵️",
            label: "Auteur",
            description: "Créé l'auteur de l'embed",
            value: "author_embed",
          },
          {
            emoji: "🔻",
            label: "Footer",
            description: "Créé le footer de l'embed",
            value: "footer_embed",
          },
          {
            emoji: "🔳",
            label: "Thumbnail",
            description: "Ajoute une miniature à l'embed",
            value: "thumbnail_embed",
          },
          {
            emoji: "🕙",
            label: "Timestamp",
            description: "Créé la timestamp de l'embed",
            value: "timestamp_embed",
          },
          {
            emoji: "🖼️",
            label: "Image",
            description: "Ajoute une image à l'embed",
            value: "image_embed",
          },
          {
            emoji: "🌐",
            label: "URL",
            description: "Ajoute un URL a l'embed",
            value: "url_embed",
          },
          {
            emoji: "🔵",
            label: "Color",
            description: "Change la couleur de l'embed",
            value: "color_embed",
          },
        ])
    );

    let row2 = new Discord.ActionRowBuilder().addComponents(
      new Discord.ButtonBuilder()
        .setCustomId("send_embed")
        .setEmoji("✅")
        .setLabel("Envoyer l'Embed")
        .setStyle(Discord.ButtonStyle.Success)
    );

    let embed = new Discord.EmbedBuilder().setDescription(
      `Choisis des options`
    );

    interaction.editReply({ embeds: [embed], components: [row, row2] });

    const filter = (i) => i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({
      filter,
    });

    collector.on("collect", async (i) => {
      if (i.customId === "embedSelect") {
        i.deferUpdate();
        const embedData = i.message.embeds[0];
        if (embedData.description == "Choisis des options") {
          embed.setDescription(``);
        }

        if (i.values == "title_embed") {
          interaction.channel
            .send({ content: "Entre un titre" })
            .then((message) => {
              const filterMessage = (m) =>
                m.author.id === interaction.user.id && !m.author.bot;
              interaction.channel
                .awaitMessages({
                  filterMessage,
                  max: 1,
                  time: 300000,
                  errors: ["time"],
                })
                .then(async (collected) => {
                  message.delete({ timeout: 1000 });
                  collected.first().delete({ timeout: 1000 });

                  embed.setTitle(`${collected.first().content}`);
                  await interaction.editReply({ embeds: [embed] });
                });
            });
        }

        if (i.values == "description_embed") {
          interaction.channel
            .send({ content: "Entre une description" })
            .then((message) => {
              const filterMessage = (m) =>
                m.author.id === interaction.user.id && !m.author.bot;
              interaction.channel
                .awaitMessages({
                  filterMessage,
                  max: 1,
                  time: 300000,
                  errors: ["time"],
                })
                .then(async (collected) => {
                  message.delete({ timeout: 1000 });
                  collected.first().delete({ timeout: 1000 });

                  embed.setDescription(`${collected.first().content}`);
                  await interaction.editReply({ embeds: [embed] });
                });
            });
        }

        if (i.values == "author_embed") {
          interaction.channel
            .send({ content: "Entre un auteur" })
            .then((message) => {
              const filterMessage = (m) =>
                m.author.id === interaction.user.id && !m.author.bot;
              interaction.channel
                .awaitMessages({
                  filterMessage,
                  max: 1,
                  time: 300000,
                  errors: ["time"],
                })
                .then(async (collected) => {
                  message.delete({ timeout: 1000 });
                  collected.first().delete({ timeout: 1000 });

                  embed.setAuthor({
                    name: `${collected.first().content}`,
                    iconURL: interaction.guild.iconURL({ size: 1024 }),
                  });
                  await interaction.editReply({ embeds: [embed] });
                });
            });
        }

        if (i.values == "footer_embed") {
          interaction.channel
            .send({ content: "Envoie un footer" })
            .then((message) => {
              const filterMessage = (m) =>
                m.author.id === interaction.user.id && !m.author.bot;
              interaction.channel
                .awaitMessages({
                  filterMessage,
                  max: 1,
                  time: 300000,
                  errors: ["time"],
                })
                .then(async (collected) => {
                  message.delete({ timeout: 1000 });
                  collected.first().delete({ timeout: 1000 });

                  embed.setFooter({
                    text: `${collected.first().content}`,
                  });
                  await interaction.editReply({ embeds: [embed] });
                });
            });
        }

        if (i.values == "thumbnail_embed") {
          interaction.channel
            .send({ content: "Envoie une miniature" })
            .then((message) => {
              const filterMessage = (m) =>
                m.author.id === interaction.user.id && !m.author.bot;
              interaction.channel
                .awaitMessages({
                  filterMessage,
                  max: 1,
                  time: 300000,
                  errors: ["time"],
                })
                .then(async (collected) => {
                  message.delete({ timeout: 1000 });
                  collected.first().delete({ timeout: 1000 });

                  if (
                    !collected.first().content.includes("http://") &&
                    !collected.first().content.includes("https://")
                  )
                    return interaction.channel.send({
                      content: "Lien de la miniature incorrecte!",
                    });
                  embed.setThumbnail(`${collected.first().content}`);
                  await interaction.editReply({ embeds: [embed] });
                });
            });
        }

        if (i.values == "thumbnail_embed") {
          embed.setTimestamp();
          interaction.editReply({ embeds: [embed] });
        }

        if (i.values == "image_embed") {
          interaction.channel
            .send({ content: "Envoie une image" })
            .then((message) => {
              const filterMessage = (m) =>
                m.author.id === interaction.user.id && !m.author.bot;
              interaction.channel
                .awaitMessages({
                  filterMessage,
                  max: 1,
                  time: 300000,
                  errors: ["time"],
                })
                .then(async (collected) => {
                  message.delete({ timeout: 1000 });
                  collected.first().delete({ timeout: 1000 });

                  if (
                    !collected.first().content.includes("http://") &&
                    !collected.first().content.includes("https://")
                  )
                    return interaction.channel.send({
                      content: "Lien de l'image incorrecte!",
                    });
                  embed.setImage(`${collected.first().content}`);
                  await interaction.editReply({ embeds: [embed] });
                });
            });
        }

        if (i.values == "url_embed") {
          interaction.channel
            .send({ content: "Envoie un URL" })
            .then((message) => {
              const filterMessage = (m) =>
                m.author.id === interaction.user.id && !m.author.bot;
              interaction.channel
                .awaitMessages({
                  filterMessage,
                  max: 1,
                  time: 300000,
                  errors: ["time"],
                })
                .then(async (collected) => {
                  message.delete({ timeout: 1000 });
                  collected.first().delete({ timeout: 1000 });

                  if (
                    !collected.first().content.includes("http://") &&
                    !collected.first().content.includes("https://")
                  )
                    return interaction.channel.send({
                      content: "URL incorrecte!",
                    });
                  embed.setURL(`${collected.first().content}`);
                  await interaction.editReply({ embeds: [embed] });
                });
            });
        }

        if (i.values == "color_embed") {
          interaction.channel
            .send({ content: "Envoie une couleur" })
            .then((message) => {
              const filterMessage = (m) =>
                m.author.id === interaction.user.id && !m.author.bot;
              interaction.channel
                .awaitMessages({
                  filterMessage,
                  max: 1,
                  time: 300000,
                  errors: ["time"],
                })
                .then(async (collected) => {
                  message.delete({ timeout: 1000 });
                  collected.first().delete({ timeout: 1000 });

                  embed.setColor(`${collected.first().content}`);
                  await interaction.editReply({ embeds: [embed] });
                });
            });
        }
      }
      if (i.customId == "send_embed") {
        const channel = interaction.options.getChannel("channel");
        if (!channel)
          return client.errNormal(
            { error: `Salon non trouvé` },
            collected.first().channel
          );

        channel
          .createWebhook(interaction.guild.name, {
            avatar: interaction.guild.iconURL(),
          })
          .then(async (_webhook) => {
            await _webhook.send({ embeds: [embed] });

            client.succNormal(
              {
                text: `Embed envoyé dans ${channel}`,
                components: [],
                type: "editreply",
              },
              interaction
            );
            collector.stop();

            setTimeout(() => {
              _webhook.delete();
              i.message.delete();
            }, 5000);
          });
      }
    });
  },
};

 
