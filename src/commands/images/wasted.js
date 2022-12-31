module.exports = async (client, interaction, args) => {

    let link = `https://some-random-api.ml/canvas/wasted/?avatar=${interaction.user.avatarURL({ size: 1024, format: 'png' })}`

    client.embed({
        title: `🖼・image généré`,
        image: link,
        type: 'editreply'
    }, interaction)
}

 