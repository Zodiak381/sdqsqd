const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const movie = interaction.options.getString('movie');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Movies) {
                if (!data.Movies.includes(movie)) {
                    return client.errNormal({ error: `Ce film n'existe pas dans la DataBase!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Movies.filter((target) => target !== movie);

                await Schema.findOneAndUpdate(user, {
                    Movies: filtered
                });
            }
            client.succNormal({
                text: "Film retiré",
                fields: [{
                    name: "🎬┆Film",
                    value: `\`\`\`${movie}\`\`\``,
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

 