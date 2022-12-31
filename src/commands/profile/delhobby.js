const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const hobby = interaction.options.getString('hobby');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Hobbys) {
                if (!data.Hobbys.includes(hobby)) {
                    return client.errNormal({ error: `Ce hobby n'existe pas dans la DataBase!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Hobbys.filter((target) => target !== hobby);

                await Schema.findOneAndUpdate(user, {
                    Hobbys: filtered
                });
            }
            client.succNormal({
                text: "hobby retiré",
                fields: [{
                    name: "⚽┆Hobby",
                    value: `\`\`\`${hobby}\`\`\``,
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

 