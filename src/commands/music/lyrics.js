const Discord = require('discord.js');
const lyricsFinder = require("lyrics-finder");

module.exports = async (client, interaction, args) => {
    let search = "";

        const player = client.player.players.get(interaction.guild.id);

        const channel = interaction.member.voice.channel;
        if (!channel) return client.errNormal({
            error: `Tu n'es pas dans un salon vocal!`,
            type: 'editreply'
        }, interaction);

        if (player && (channel.id !== player?.voiceChannel)) return client.errNormal({
            error: `Tu n'es pas dans le même salon vocal que moi!`,
            type: 'editreply'
        }, interaction);

        if (!player || !player.queue.current) return client.errNormal({
            error: "Il n'y a pas de chanson en cours sur le serveur",
            type: 'editreply'
        }, interaction);

        if (!interaction.options.getString('song')) {
            search = player.queue.current.title;
        }
        else {
            search = interaction.options.getString('song');
        }

        let lyrics = "";

        try {
            lyrics = await lyricsFinder(search, "");
            if (!lyrics) lyrics = `Aucune parole trouvée pour ${search} :x:`;
        } catch (error) {
            lyrics = `Aucune parole trouvée pour ${search} :x:`;
        }

        client.embed({
            title: `${client.emotes.normal.music}・Paroles pour ${search}`,
            desc: lyrics,
            type: 'editreply'
        }, interaction)
}

 