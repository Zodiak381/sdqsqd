const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const option = interaction.options.getString("option");

    let options = ["cailler", "papier", "ciseaux"];
    const result = options[Math.floor(Math.random() * options.length)];

    switch (option) {
        case "rock":
            if (result == "paper") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `j'ai ${result}, j'ai gagné!`,
                type: 'editreply'
            }, interaction);

            if (result == "scissors") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `j'ai ${result}, tu as gagné!`,
                type: 'editreply'
            }, interaction);

            if (result == "rock") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `j'ai ${result}, c'est égalité!`,
                type: 'editreply'
            }, interaction);
            break;

        case "paper":
            if (result == "paper") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `j'ai ${result}, c'est égalité!`,
                type: 'editreply'
            }, interaction);

            if (result == "scissors") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `j'ai ${result}, j'ai gagné!`,
                type: 'editreply'
            }, interaction);

            if (result == "rock") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `J'ai ${result}, Tu as gagné!`,
                type: 'editreply'
            }, interaction);
            break;

        case "scissors":
            if (result == "paper") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `J'ai ${result}, Tu as gagné!`,
                type: 'editreply'
            }, interaction);

            if (result == "scissors") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `J'ai ${result}, c'est égalité!`,
                type: 'editreply'
            }, interaction);

            if (result == "rock") return client.embed({
                title: `${client.emotes.normal.paper}・Pierre Papier Ciseaux`,
                desc: `J'ai ${result}, J'ai gagné!`,
                type: 'editreply'
            }, interaction);
            break;
    }
}

 