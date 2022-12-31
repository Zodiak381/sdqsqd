const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const joined = interaction.options.getString('bday');
    const split = joined.trim().split("/");

    let [day, month] = split;

    if (!day || !month) return client.errUsage({ usage: "setbday [day]/[month]", type: 'editreply' }, interaction);

    if (isNaN(day) || isNaN(month)) {
        return client.errNormal({ error: "La date que tu as entrée n'est pas valide", type: 'editreply' }, interaction);
    }

    day = parseInt(day);
    month = parseInt(month);

    if (!day || day > 31) return client.errNormal({ error: "Erreur du format du jour!", type: 'editreply' }, interaction);
    if (!month || month > 12) return client.errNormal({ error: "Erreur du format du mois!", type: 'editreply' }, interaction);

    const bday = `${day}/${month}`;

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Birthday = bday;
            data.save();

            client.succNormal({
                text: "Ton anniversaire a été ajouté",
                fields: [{
                    name: "🎂┆Anniversaire",
                    value: `\`\`\`${bday}\`\`\``,
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

 