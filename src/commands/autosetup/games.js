const Discord = require('discord.js');

const Counting = require("../../database/models/countChannel");
const GTN = require("../../database/models/guessNumber");
const GTW = require("../../database/models/guessWord");
const WordSnake = require("../../database/models/wordsnake");

module.exports = async (client, interaction, args) => {
    const choice = interaction.options.getString('setup');

    if (choice == "counting") {
        interaction.guild.channels.create({
            name: "🔢・Comptons",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.embed({
                title: `🔢・Comptons`,
                desc: `Voici le début du jeu ! le premier chiffre est **1**`
            }, ch)

            client.createChannelSetup(Counting, ch, interaction)
        })
    }

    if (choice == "gtn") {
        interaction.guild.channels.create({
            name:"❓・Devine-Le-Nombre",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.embed({
                title: `🔢・Guess the number`,
                desc: `Trouve le nombre entre **1** et **10.000**!`
            }, ch)

            client.createChannelSetup(GTN, ch, interaction)
        })
    }

    if (choice == "gtw") {
        interaction.guild.channels.create({
            name: "💬・Trouve-Le-Mot",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            var word = "start";
            var shuffled = word.split('').sort(function () { return 0.5 - Math.random() }).join('');

            client.embed({
                title: `💬・Trouve Le Mot`,
                desc: `Met les lettres dans le bon ordre!`,
                fields: [
                    {
                        name: `🔀┆Mot`,
                        value: `${shuffled.toLowerCase()}`
                    }
                ],
            }, ch)

            client.createChannelSetup(GTW, ch, interaction)
        })
    }

    if (choice == "wordsnake") {
        interaction.guild.channels.create({
            name: "word-snake",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(WordSnake, ch, interaction)
        })
    }
}

