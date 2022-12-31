const Schema = require('../../database/models/profile');
const isHexcolor = require('is-hexcolor');

module.exports = async (client, interaction, args) => {

    const color = interaction.options.getString('color');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            if (!isHexcolor(color)) return client.errNormal({ error: "Tu ne m'as pas donné de couleur hex! Exemple: #ff0000", type: 'editreply' }, interaction);

            data.Color = color;
            data.save();

            client.succNormal({
                text: "Ta couleur favorite a été ajoutée",
                fields: [{
                    name: "🎨┆Color",
                    value: `\`\`\`${color}\`\`\``,
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

 