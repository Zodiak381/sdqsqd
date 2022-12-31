const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const age = interaction.options.getNumber('number');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            if (isNaN(age)) return client.errNormal({ error: "Nombre invalide", type: 'editreply' }, interaction)

            data.Age = age;
            data.save();

            client.succNormal({
                text: "Ton âge a été ajoutée",
                fields: [{
                    name: "📆┆Age",
                    value: `\`\`\`${age}\`\`\``,
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

 