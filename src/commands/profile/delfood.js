const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const food = interaction.options.getString('food');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Food) {
                if (!data.Food.includes(food)) {
                    return client.errNormal({ error: `Cet aliment n'existe pas dans la DataBase!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Food.filter((target) => target !== food);

                await Schema.findOneAndUpdate(user, {
                    Food: filtered
                });
            }
            client.succNormal({
                text: "Aliment retiré",
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

 