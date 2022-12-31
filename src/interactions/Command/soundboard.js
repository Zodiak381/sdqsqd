const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {

    // Meme Images

    data: new SlashCommandBuilder()
        .setName('soundboard')
        .setDescription('Joue tous les sons du bot')

        .addSubcommand((subcommand) =>
            subcommand
                .setName('help')
                .setDescription('Voir les informations sur les commandes soundboard')
        )
        
        // Windows Sounds
        .addSubcommandGroup((group) =>
            group
                .setName('windows')
                .setDescription('Joue le son windows sur le bot')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('windowserror')
                        .setDescription('Joue le son d\'erreur windows sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('windowsshutdown')
                        .setDescription('Joue le son arrêt de windows sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('windowsstartup')
                        .setDescription('Joue le son lancement de windows sur le bot')
                )
        )

        // Earrape Sounds

        .addSubcommandGroup((group) =>
            group
                .setName('earrape')
                .setDescription('Joue le son earrape sur le bot')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('reee')
                        .setDescription('Joue le son reee sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('defaultdance')
                        .setDescription('Joue le son "defaultdance" sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('startup')
                        .setDescription('Joue le son "startup" sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('thomas')
                        .setDescription('Joue le son de thomas sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('wegothim')
                        .setDescription('Joue le son "wegothim" sur le bot')
                )
        )

        // Song Sounds

        .addSubcommandGroup((group) =>
            group
                .setName('songs')
                .setDescription('Joue des sons sur le bot')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('dancememe')
                        .setDescription('Joue le son dancememe sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('despacito')
                        .setDescription('Joue le son despacito sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('elevator')
                        .setDescription('Joue le son d\'un ascenseur sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('rickastley')
                        .setDescription('Joue le son rick roll sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('running')
                        .setDescription('Joue le son run sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('tobecontinued')
                        .setDescription('Joue le son tobecontinued sur le bot')
                )
        )

        // Discord Sounds

        .addSubcommandGroup((group) =>
            group
                .setName('discord')
                .setDescription('Joue des sons discord sur le bot')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('discordcall')
                        .setDescription('Joue le son d\'appel discord sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('discordjoin')
                        .setDescription('Joue le son d\'arrivant vocal sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('discordleave').setDescription('Joue le son leave vocal discord sur le bot')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('discordnotification')
                        .setDescription('Joue le son denotification discord sur le bot'),
                )
        )

        // Discord Sounds

        .addSubcommandGroup((group) =>
            group
                .setName('memes')
                .setDescription('Joue des sons de memes')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('fbi')
                        .setDescription('Joue le son du fbi sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('jeff')
                        .setDescription('Joue le son jeff sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('lambo')
                        .setDescription('Joue le son lambo sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('missionfailed')
                        .setDescription('Joue le son missionfailed sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('moaning')
                        .setDescription('Joue le son themoaning sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('nani')
                        .setDescription('Joue le son nani sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('nyancat')
                        .setDescription('Joue le son nyancat sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('ohh')
                        .setDescription('Joue le son oooh sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('rimshot')
                        .setDescription('Joue le son rimshot sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('roblox')
                        .setDescription('Joue le son de roblox sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('shotdown')
                        .setDescription('Joue le son arrêt sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('spongebob')
                        .setDescription('Joue le son  de bob l\'éponge sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('wow')
                        .setDescription('Joue le son wow sur le bot'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('yeet')
                        .setDescription('Joue le son yeet sur le bot'),
                )
        ),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};


 