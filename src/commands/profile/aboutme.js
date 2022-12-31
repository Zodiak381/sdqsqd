const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const aboutme = interaction.options.getString('text');

    if (aboutme.length > 1024) return client.errNormal({ error: "Ton à propos de moi ne peut pas dépasser 1024 caractères", type: 'editreply' }, interaction);

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Aboutme = aboutme;
            data.save();

            client.succNormal({
                text: "Ton à propos de moi",
                fields: [{
                    name: "📘┆A propos de moi",
                    value: `\`\`\`${aboutme}\`\`\``,
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

 