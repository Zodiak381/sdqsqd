
module.exports = async (client, interaction, args) => {

    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `💡・Taux d'intelligence`,
        desc: `Tu es intelligent à ${result}%!`,
        type: 'editreply'
    }, interaction)
}

 