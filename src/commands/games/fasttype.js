const Discord = require('discord.js');
const ms = require('ms');

let timeLength = 50000;
module.exports = async (client, interaction, args) => {

    let list = `Comme on était perdus, on a dû faire demi-tour.
    Il est dans un boys band, ce qui n'est pas très logique pour un serpent.
    Un canard mort ne vole pas en arrière.
    Ne pissez pas dans mon jardin en me disant que vous essayez d'aider mes plantes à pousser.
    Son cri a fait taire les adolescents turbulents.
    Les membres de l'équipe sont difficiles à distinguer car ils portent tous leurs cheveux en queue de cheval.
    J'ai entendu dire que Nancy est très jolie.
    Les colonies nudistes fuient la couture des feuilles de figuier.
    Une chanson peut faire ou défaire la journée d'une personne si elle la laisse faire.
    Elle ne voyait pas d'ironie à me demander de changer mais voulait que je l'accepte telle qu'elle est.
    Le passe-temps favori de mon oncle était de construire des voitures avec des nouilles.
    À la fin, il a réalisé qu'il pouvait voir les sons et entendre les mots.
    S'il te plaît, cherche une recette de soupe au poulet sur internet.
    Il n'a pas fallu longtemps à Gary pour détecter que les voleurs étaient des amateurs.
    Comment t'es-tu blessé ?
    Il était évident qu'elle avait chaud, qu'elle transpirait et qu'elle était fatiguée.
    Il semblait être confus et perplexe.
    L'amour n'est pas comme la pizza.
    C'était toujours dangereux de conduire avec lui car il insistait pour que les cônes de sécurité soient un parcours de slalom.
    Alors qu'il attendait que la douche chauffe, il remarqua qu'il pouvait entendre l'eau changer de température.
    Salutations de la galaxie MACS0647-JD, ou de ce que nous appelons notre maison.
    Le monde a beaucoup changé au cours des dix dernières années.
    En entrant dans l'église, il a pu entendre la voix douce de quelqu'un qui chuchotait dans un téléphone portable.
    Maintenant, je dois réfléchir à mon existence et me demander si je suis vraiment réel.
    Hier, le temps était propice à l'escalade.
    Les gaufres sont toujours meilleures sans les fourmis de feu et les puces.
    Nancy était fière d'avoir couru un naufrage serré.
    Il était tellement préoccupé par le fait de savoir s'il pouvait ou non le faire qu'il ne s'est pas arrêté pour se demander s'il devait le faire.
    Si manger des omelettes aux trois œufs fait prendre du poids, les œufs de perruche sont un bon substitut.
    Je ne respecte pas les personnes qui ne savent pas faire la différence entre le Pepsi et le Coca.
    Il a trouvé le bout de l'arc-en-ciel et a été surpris de ce qu'il y a trouvé.
    Il se demandait pourquoi, à 18 ans, il était assez vieux pour aller à la guerre, mais pas assez pour acheter des cigarettes.
    Elle vivait sur Monkey Jungle Road et cela semblait expliquer toute son étrangeté.
    Julie veut un mari parfait.
    Je peux vous offrir quelque chose à boire ?
    Veuillez attendre à l'extérieur de la maison.
    Son fils a dit que les barres énergétiques n'étaient rien d'autre que des barres chocolatées pour adultes.
    Ma grande soeur ressemble à ma mère.
    Le feuillage épais et les vignes entrelacées ont rendu la randonnée presque impossible.
    Un bijou scintillant ne suffit pas.
    Trente ans plus tard, elle pensait toujours que c'était bien de mettre le rouleau de papier toilette en dessous plutôt qu'au-dessus.
    Chaque personne qui vous connaît a une perception différente de qui vous êtes.
    Descendez les escaliers avec précaution.
    Affrontant sa plus grande peur, il mangea son premier marshmallow.
    Elle a pleuré des diamants.
    Demain apportera quelque chose de nouveau, alors laisse aujourd'hui comme un souvenir.
    Erin a accidentellement créé un nouvel univers.
    David souscrit à la stratégie consistant à "fourrer sa tente dans le sac" plutôt que de la plier joliment.
    La serveuse n'était pas amusée quand il a commandé des oeufs verts et du jambon.
    Tout ce que vous avez à faire, c'est de prendre le stylo et de commencer`;

    async function start() {
        const inGame = new Set();
        const filter = m => m.author.id === interaction.user.id;
        if (inGame.has(interaction.user.id)) return;
        inGame.add(interaction.user.id);
        var i;
        for (i = 0; i < 25; i++) {
            const time = Date.now();

            list = list.split("\n");
            let sentenceList = list[Math.floor(Math.random() * list.length)];

            let sentence = '';
            let ogSentence = sentenceList.toLowerCase().replace("    ", "");

            ogSentence.split(' ').forEach(argument => {
                sentence += '`' + argument.split('').join(' ') + '` '
            });

            await client.embed({
                title: `💬・FastType`,
                desc: `Ecrit en moins de ${ms(timeLength, { long: true })}! \n${sentence}`,
                type: 'editreply'
            }, interaction)

            try {
                var msg = await interaction.channel.awaitMessages({
                    filter,
                    max: 1,
                    time: timeLength,
                    errors: ['time']
                });
            } catch (ex) {
                client.errNormal({
                    error: "Temps écoulé!",
                    type: 'editreply'
                }, interaction)
                inGame.delete(interaction.user.id)
                break;
            }

            if (['cancel', 'end'].includes(msg.first().content.toLowerCase().trim())) {
                msg.first().delete();
                client.succNormal({
                    text: "Fini!",
                    type: 'editreply'
                }, interaction)
                inGame.delete(interaction.user.id)
                break
            } else if (msg.first().content.toLowerCase().trim() === ogSentence.toLowerCase()) {
                msg.first().delete();
                client.succNormal({
                    text: `Tu l'as fait en ${ms(Date.now() - time, { long: true })}!`,
                    type: 'editreply'
                }, interaction)
                break;
            } else {
                client.errNormal({
                    error: "Malheureusement tu n'as pas réussi!",
                    type: 'editreply'
                }, interaction)
                inGame.delete(interaction.user.id)
                break;
            }

            if (i === 25) {
                client.succNormal({ text: `You did it!`, type: 'editreply' }, interaction)
                inGame.delete(interaction.user.id)
                break
            }
        }
    }

    start()
}

 