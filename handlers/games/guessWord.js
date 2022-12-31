const Discord = require('discord.js');

const Schema = require("../../database/models/guessWord");

module.exports = async (client) => {
  client.on(Discord.Events.MessageCreate, async (message) => {
    if (message.author.bot || message.channel.type === Discord.ChannelType.DM) return;

    let wordList = client.config.wordList;
    wordList = wordList.split("\n");

    const data = await Schema.findOne({ Guild: message.guild.id, Channel: message.channel.id });

    if (data) {
      if (message.content.toLowerCase() == data.Word.toLowerCase()) {
        message.react(client.emotes.normal.check);
        var word = wordList[Math.floor(Math.random() * wordList.length)];
        var shuffled = word.split('').sort(function () { return 0.5 - Math.random() }).join('');

        let amount = Math.floor(Math.random() * 100) + 1;
        client.addMoney(message, message.author, amount);

        client.embed({
          title: `💬・Trouve le mot`,
          desc: `Le mot a été trouvé et à reçu $${amount}`,
          fields: [
            {
              name: `👤┇Trouvé par`,
              value: `${message.author} (${message.author.tag})`,
              inline: true
            },
            {
              name: `💬┇Mot correct`,
              value: `${data.Word}`,
              inline: true
            }
          ]
        }, message.channel);

        data.Word = word;
        data.save();

        return client.embed({
          title: `💬・Trouve le Mot`,
          desc: `Met les lettres dans le bon ordre!`,
          fields: [
            {
              name: `🔀┆Mot`,
              value: `${shuffled.toLowerCase()}`
            }
          ]
        }, message.channel)
      }
      else {
        return message.react(client.emotes.normal.error);
      }
    }
  }).setMaxListeners(0);
}