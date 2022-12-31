const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {
    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            return client.errNormal({ error: "Tu as déjà un profile", type: "editreply" }, interaction);
        }
        else {
            new Schema({
                User: interaction.user.id
            }).save();

            client.succNormal({ text: "Profile créé! Regarde ton profile avec \`profile\`", type: "editreply" }, interaction);
        }
    })
}

 