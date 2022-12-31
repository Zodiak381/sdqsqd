const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const hobby = interaction.options.getString('hobby');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Hobbys) {
                if (data.Hobbys.includes(hobby)) {
                    return client.errNormal({ error: `Ce hobby existe déjà dans la DataBase!`, type: 'editreply' }, interaction);
                }
                data.Hobbys.push(hobby);
                data.save();
            }
            else {
                data.Hobbys = hobby;
                data.save();
            }
            client.succNormal({
                text: "hobby ajouté",
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

 