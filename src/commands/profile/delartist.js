const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const artist = interaction.options.getString('artist');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Artists) {
                if (!data.Artists.includes(artist)) {
                    return client.errNormal({ error: `Cet artiste n'existe pas dans la DataBase!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Artists.filter((target) => target !== artist);

                await Schema.findOneAndUpdate(user, {
                    Artists: filtered
                });
            }
            client.succNormal({
                text: "Artiste retiré",
                fields: [{
                    name: "🎤┆Artiste",
                    value: `\`\`\`${artist}\`\`\``,
                    inline: true,
                }],
                type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ error: "Aucun profile de trouver! Créé en un avec createprofile", type:'editreply' }, interaction);
        }
    })

}

 