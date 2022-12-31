const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const pet = interaction.options.getString('pet');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Pets) {
                if (!data.Pets.includes(pet)) {
                    return client.errNormal({ error: `Cet animal n'existe pas dans la DataBase!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Pets.filter((target) => target !== pet);

                await Schema.findOneAndUpdate(user, {
                    Pets: filtered
                });
            }
            client.succNormal({
                text: "Animal retiré",
                fields: [{
                    name: "🐶┆Animal",
                    value: `\`\`\`${pet}\`\`\``,
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

 