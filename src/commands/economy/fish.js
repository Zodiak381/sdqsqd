const Discord = require('discord.js');
const ms = require("ms");

const Schema = require("../../database/models/economy");
const Schema2 = require("../../database/models/economyTimeout");
const itemSchema = require("../../database/models/economyItems");

module.exports = async (client, interaction, args) => {

    const rand = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    let user = interaction.user;

    let timeout = 60000;
    let fish =
        ["Poisson Jaune :tropical_fish:",
            "Gros Poisson :blowfish:",
            "Poisson Bleu :fish:",
            "Noix de Coco :coconut:",
            "Dauphin :dolphin:",
            "Requin :shark:",
            "Crabe :crab:",
            "Squid :squid:",
            "Whale :whale2:",
            "Shrimp :shrimp:",
            "Poulpe :octopus:",
            "Diamand :gem:"];

    let randn = rand(0, parseInt(fish.length));
    let randrod = rand(15, 30);

    let fishToWin = fish[randn];

    const userItems = await itemSchema.findOne({ Guild: interaction.guild.id, User: user.id });

    if (!userItems || userItems.FishingRod == false) return client.errNormal({ error: "Tu dois acheter une canne à pêche!", type: 'editreply' }, interaction);

    if (userItems) {
        if (userItems.FishingRodUsage >= randrod) {
            userItems.FishingRod = false;
            userItems.save();

            return client.errNormal({ error: "Ta canne a pêche est cassée, il faut en acheter une autre!", type: 'editreply' }, interaction);
        }
    }

    Schema2.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, dataTime) => {
        if (dataTime && dataTime.Fish !== null && timeout - (Date.now() - dataTime.Fish) > 0) {
            let time = (dataTime.Fish / 1000 + timeout / 1000).toFixed(0);

            return client.errWait({ time: time, type: 'editreply' }, interaction);
        }
        else {
            client.succNormal({ text: `Tu as péché ${fishToWin}`, type: 'editreply' }, interaction);

            if (userItems) {
                userItems.FishingRodUsage += 1;
                userItems.save();
            }

            if (dataTime) {
                dataTime.Fish = Date.now();
                dataTime.save();
            }
            else {
                new Schema2({
                    Guild: message.guild.id,
                    User: user.id,
                    Fish: Date.now()
                }).save();
            }
        }
    })

}

 