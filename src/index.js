const Discord = require('discord.js');
const chalk = require('chalk');
require('dotenv').config('./.env');
const axios = require('axios');
// Check if is up to date
const { version } = require('.././package.json');
axios.get('https://api.github.com/repos/002-sans/Discord-Multitool/releases/latest').then(res => {
    if (res.data.tag_name !== version) {
        console.log(chalk.red.bgYellow(`Votre bot n'est pas à jour ! Veuillez le mettre à jour à la dernière version !`, version + ' -> ' + res.data.tag_name));
    }
}).catch(err => {
    console.log(chalk.red.bgYellow(`Échec de la vérification de la mise à jour du bot!`));
});


const webhook = require("./config/webhooks.json");
const config = require("./config/bot.js");
// Check if .env webhook_id and webhook_token are set
if (process.env.WEBHOOK_ID && process.env.WEBHOOK_TOKEN) {
    webhook.startLogs.id = process.env.WEBHOOK_ID;
    webhook.startLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.shardLogs.id = process.env.WEBHOOK_ID;
    webhook.shardLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.errorLogs.id = process.env.WEBHOOK_ID;
    webhook.errorLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.dmLogs.id = process.env.WEBHOOK_ID;
    webhook.dmLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.voiceLogs.id = process.env.WEBHOOK_ID;
    webhook.voiceLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.serverLogs.id = process.env.WEBHOOK_ID;
    webhook.serverLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.serverLogs2.id = process.env.WEBHOOK_ID;
    webhook.serverLogs2.token = process.env.WEBHOOK_TOKEN;

    webhook.commandLogs.id = process.env.WEBHOOK_ID;
    webhook.commandLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.consoleLogs.id = process.env.WEBHOOK_ID;
    webhook.consoleLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.warnLogs.id = process.env.WEBHOOK_ID;
    webhook.warnLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.voiceErrorLogs.id = process.env.WEBHOOK_ID;
    webhook.voiceErrorLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.creditLogs.id = process.env.WEBHOOK_ID;
    webhook.creditLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.evalLogs.id = process.env.WEBHOOK_ID;
    webhook.evalLogs.token = process.env.WEBHOOK_TOKEN;

    webhook.interactionLogs.id = process.env.WEBHOOK_ID;
    webhook.interactionLogs.token = process.env.WEBHOOK_TOKEN;
}


const startLogs = new Discord.WebhookClient({
    id: webhook.startLogs.id,
    token: webhook.startLogs.token,
});

const shardLogs = new Discord.WebhookClient({
    id: webhook.shardLogs.id,
    token: webhook.shardLogs.token,
});

const manager = new Discord.ShardingManager('./src/bot.js', {
    totalShards: 'auto',
    token: process.env.DISCORD_TOKEN,
    respawn: true
});
if (process.env.TOPGG_TOKEN) {
    const { AutoPoster } = require('topgg-autoposter');
    AutoPoster(process.env.TOPGG_TOKEN, manager);
}
console.clear();
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), (chalk.green(`Starting up`)), (chalk.white(`...`)))
console.log(`\u001b[0m`)
console.log(chalk.red(`© NotSans | 2022 - ${new Date().getFullYear()}`))
console.log(chalk.red(`All rights reserved`))
console.log(`\u001b[0m`)
console.log(`\u001b[0m`)
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.red(`Version ${require(`${process.cwd()}/package.json`).version}`), (chalk.green(`loaded`)))
console.log(`\u001b[0m`);

manager.on('shardCreate', shard => {
    let embed = new Discord.EmbedBuilder()
        .setTitle(`🆙・Lancement du shard`)
        .setDescription(`Un shard a été lancé`)
        .setFields([
            {
                name: "🆔┆ID",
                value: `${shard.id + 1}/${manager.totalShards}`,
                inline: true
            },
            {
                name: `📃┆Status`,
                value: `Lancement...`,
                inline: true
            }
        ])
        .setColor(config.colors.normal)
    startLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    });

    console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), (chalk.green(`Starting`)), chalk.red(`Shard #${shard.id + 1}`), (chalk.white(`...`)))
    console.log(`\u001b[0m`);

    shard.on("death", (process) => {
        const embed = new Discord.EmbedBuilder()
            .setTitle(`🚨・Fermeture du shard ${shard.id + 1}/${manager.totalShards} de façon inattendue`)
            .setFields([
                {
                    name: "🆔┆ID",
                    value: `${shard.id + 1}/${manager.totalShards}`,
                },
            ])
            .setColor(config.colors.normal)
        shardLogs.send({
            username: 'Bot Logs',
            embeds: [embed]
        });

        if (process.exitCode === null) {
            const embed = new Discord.EmbedBuilder()
                .setTitle(`🚨・Shard ${shard.id + 1}/${manager.totalShards} a quitté avec le code d'erreur NULL!`)
                .setFields([
                    {
                        name: "PID",
                        value: `\`${process.pid}\``,
                    },
                    {
                        name: "Code d'erreur",
                        value: `\`${process.exitCode}\``,
                    }
                ])
                .setColor(config.colors.normal)
            shardLogs.send({
                username: 'Bot Logs',
                embeds: [embed]
            });
        }
    });

    shard.on("shardDisconnect", (event) => {
        const embed = new Discord.EmbedBuilder()
            .setTitle(`🚨・Shard ${shard.id + 1}/${manager.totalShards} déconnecté`)
            .setDescription("Dump de l'événement de fermeture du socket...")
            .setColor(config.colors.normal)
        shardLogs.send({
            username: 'Bot Logs',
            embeds: [embed],
        });
    });

    shard.on("shardReconnecting", () => {
        const embed = new Discord.EmbedBuilder()
            .setTitle(`Reconnexion du shard ${shard.id + 1}/${manager.totalShards}`)
            .setColor(config.colors.normal)
        shardLogs.send({
            username: 'Bot Logs',
            embeds: [embed],
        });
    });
});


manager.spawn();

