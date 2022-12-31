
module.exports = async (client, interaction, args) => {

    if (!interaction.member.voice.channel) return client.errNormal({ error: `Tu n'es pas dans un salon vocal!`, type: 'editreply' }, interaction);

    if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return client.errNormal({ error: `Tu n'es pas dans le même salon vocal que moi!`, type: 'editreply' }, interaction);

    client.soundboard(interaction.guild.id, interaction, "https://www.myinstants.com/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3");

    client.succNormal({ text: "Soundboard started! Playing **we got him**", type: 'editreply' }, interaction);
};