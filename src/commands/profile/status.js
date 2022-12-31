const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const status = interaction.options.getString('text');

    if (status.length > 30) return client.errNormal({ error: "Ton status ne peut pas dépasser 30 caractères", type: 'editreply' }, interaction);

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Status = status;
            data.save();

            client.succNormal({
                text: "Ton status a été changé",
                fields: [{
                    name: "😎┆Status",
                    value: `\`\`\`${status}\`\`\``,
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

 