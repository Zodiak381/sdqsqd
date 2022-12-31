const Discord = require('discord.js');

const Schema = require("../../database/models/blacklist");
const { blacklistedWords } = require("../../Collection");

module.exports = async (client, interaction, args) => {
    Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data && data.Words.length > 0) {
            client.embed({
                title: "🤬・Mots Blacklist",
                desc: data.Words.join(", "),
                type: 'editreply'
            }, interaction)
        }
        else {
            client.errNormal({
                error: `Ce serveur n'a aucune donnée!`,
                type: 'editreply'
            }, interaction);
        }
    })
}

 