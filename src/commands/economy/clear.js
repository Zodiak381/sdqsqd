const Discord = require('discord.js');

const Schema = require("../../database/models/economy");
const Schema2 = require("../../database/models/economyTimeout");
const store = require("../../database/models/economyStore");

module.exports = async (client, interaction, args) => {

    client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.Administrator],
        perms: [Discord.PermissionsBitField.Flags.Administrator]
    }, interaction)


    const row = new Discord.ActionRowBuilder() 
        .addComponents(
            new Discord.ButtonBuilder()
                .setCustomId('eco_go')
                .setEmoji('✅')
                .setStyle(Discord.ButtonStyle.Success),

            new Discord.ButtonBuilder()
                .setCustomId('eco_stop')
                .setEmoji('❌')
                .setStyle(Discord.ButtonStyle.Danger),
        );

    client.embed({
        title: `⏰・Renitialisation de l'Economie`,
        desc: `Es-tu sur de vouloir tout réinitialiser?`,
        components: [row],
        type: 'editreply',
    }, interaction)

    const filter = i => i.user.id === interaction.user.id;

    interaction.channel.awaitMessageComponent({ filter, componentType: Discord.ComponentType.Button, time: 60000 }).then(async i => {
        if (i.customId == "eco_go") {
            var remove = await Schema.deleteMany({ Guild: interaction.guild.id });
            var remove2 = await Schema2.deleteMany({ Guild: interaction.guild.id });
            var remove3 = await store.deleteMany({ Guild: interaction.guild.id });

            client.succNormal({
                text: `Le système de coin a été reset!`,
                components: [],
                type: 'editreply'
            }, interaction);
        }

        if (i.customId == "eco_stop") {
            client.errNormal({
                error: `Le système de reset a été annulé!`,
                components: [],
                type: 'editreply'
            }, interaction);
        }
    })
        .catch(() => {
            client.errNormal({
                error: "Temps écoulé! Annulation du reset",
                type: 'editreply'
            }, interaction);
        });
}

 