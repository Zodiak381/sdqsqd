const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const pet = interaction.options.getString('pet');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Pets) {
                if (data.Pets.includes(pet)) {
                    return client.errNormal({ error: `Cet anime existe déjà dans la DataBase!`, type: 'editreply' }, interaction);
                }
                data.Pets.push(pet);
                data.save();
            }
            else {
                data.Pets = pet;
                data.save();
            }
            client.succNormal({
                text: "Animal ajouté",
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

 