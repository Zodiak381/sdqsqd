const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const song = interaction.options.getString('song');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Songs) {
                if (data.Songs.includes(song)) {
                    return client.errNormal({ error: `Cette musique existe déjà dans la DataBase!`, type: 'editreply' }, interaction);
                }
                data.Songs.push(song);
                data.save();
            }
            else {
                data.Songs = song;
                data.save();
            }
            client.succNormal({
                text: "Musique ajoutée",
                fields: [{
                    name: "🎶┆Musique",
                    value: `\`\`\`${song}\`\`\``,
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

 