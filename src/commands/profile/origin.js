const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const country = interaction.options.getString('country');

    if (country.length > 50) return client.errNormal({ error: "Votre origine ne peut pas être plus longue que 50 caractères", type: 'editreply' }, interaction);

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Orgin = country;
            data.save();

            client.succNormal({
                text: "Ton origine a été mise",
                fields: [{
                    name: "🌍┆Pays",
                    value: `\`\`\`${country}\`\`\``,
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

 