const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  let verifLevels = {
    "NONE": "None",
    "LOW": "Low",
    "MEDIUM": "Medium",
    "HIGH": "(╯°□°）╯︵  ┻━┻",
    "VERY_HIGH": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"
  }

  let region = {
    "brazil": `:flag_br: `,
    "eu-central": `:flag_eu: `,
    "singapore": `:flag_sg: `,
    "us-central": `:flag_us: `,
    "sydney": `:flag_au: `,
    "us-east": `:flag_us: `,
    "us-south": `:flag_us: `,
    "us-west": `:flag_us: `,
    "eu-west": `:flag_eu: `,
    "vip-us-east": `:flag_us: `,
    "europe": `:flag_gb:`,
    "amsterdam": `:flag_nl:`,
    "hongkong": `:flag_hk: `,
    "russia": `:flag_ru: `,
    "southafrica": `:flag_za: `
  }

  let tier = {
    "TIER_1": `1`,
    "TIER_2": `2`,
    "TIER_3": `3`,
    "NONE": `0`,
  }

  const members = await interaction.guild.members.fetch();

  client.embed({
    title: `ℹ️・Informations du Serveur`,
    desc: `Informations à propos du ${interaction.guild.name}`,
    thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
    image: interaction.guild.bannerURL({ size: 1024 }),
    fields: [
      {
        name: "Nom du Serveur:",
        value: `${interaction.guild.name}`,
        inline: true,
      },
      {
        name: "ID du Serveur:",
        value: `${interaction.guild.id}`,
        inline: true,
      },
      {
        name: "Créateur: ",
        value: `<@!${interaction.guild.ownerId}>`,
        inline: true
      },
      {
        name: "Niveau de Vérification: ",
        value: `${verifLevels[interaction.guild.verificationLevel]}`,
        inline: true
      },
      {
        name: "Niveau de Boost: ",
        value: `Tier ${tier[interaction.guild.premiumTier] || 'None'}`,
        inline: true
      },
      {
        name: "Nombre de Boosts:",
        value: `${interaction.guild.premiumSubscriptionCount || '0'} boosts`,
        inline: true
      },
      {
        name: "Créé le:",
        value: `<t:${Math.round(interaction.guild.createdTimestamp / 1000)}>`,
        inline: true
      },
      {
        name: "Nombre de Membres:",
        value: `${interaction.guild.memberCount} membres!`,
        inline: true
      },
      {
        name: "Nombre de Bots:",
        value: `${members.filter(member => member.user.bot).size} bots!`,
        inline: true
      },
      {
        name: "Nombre de Salons: ",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type === Discord.ChannelType.GuildText).size} salons!`,
        inline: true
      },
      {
        name: "Nombre de Vocaux:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type ===  Discord.ChannelType.GuildVoice).size} salons!`,
        inline: true
      },
      {
        name: "Nombre de Stage:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type ===  Discord.ChannelType.GuildStageVoice).size} salons!`,
        inline: true
      },
      {
        name: "Nombre d'Annonces:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type ===  Discord.ChannelType.GuildAnnouncement).size} salons!`,
        inline: true
      },
      {
        name: "Nombre de Fils Publiques:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_PUBLIC_THREAD').size} fils!`,
        inline: true
      },
      {
        name: "Nombre de Fils Privés:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_PRIVATE_THREAD').size} fils!`,
        inline: true
      },
      {
        name: "Roles:",
        value: `${interaction.guild.roles.cache.size} roles!`,
        inline: true
      },
      {
        name: "Nombre d'Emojis:",
        value: `${interaction.guild.emojis.cache.size} emoji's`,
        inline: true
      },
      {
        name: "Nombre de Stickers:",
        value: `${interaction.guild.stickers.cache.size} stickers`,
        inline: true
      }
    ],
    type: 'editreply'
  }, interaction)
}

   