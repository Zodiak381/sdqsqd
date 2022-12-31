const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const food = interaction.options.getString('food');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Food) {
                if (data.Food.includes(food)) {
                    return client.errNormal({ error: `Cet aliment existe déjà dans la DataBase!`, type: 'editreply' }, interaction);
                }
                data.Food.push(food);
                data.save();
            }
            else {
                data.Food = food;
                data.save();
            }
            client.succNormal({
                text: "Aliment ajouté",
                fields: [{
                    name: "🥐┆Aliment",
                    value: `\`\`\`${food}\`\`\``,
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

 