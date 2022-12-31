const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const actor = interaction.options.getString('actor');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Actors) {
                if (!data.Actors.includes(actor)) {
                    return client.errNormal({ error: `Cet acteur n'existe pas dans la DataBase!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Actors.filter((target) => target !== actor);

                await Schema.findOneAndUpdate(user, {
                    Actors: filtered
                });
            }
            client.succNormal({
                text: "Acteur retiré",
                fields: [{
                    name: "👨‍🎤┆Acteur",
                    value: `\`\`\`${actor}\`\`\``,
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

 