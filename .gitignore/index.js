const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const PREFIX = ".";
const EVERYONE = "@";
const YouTube = require("simple-youtube-api")

var client = new Discord.Client();

const youtube = new YouTube("AIzaSyDE684AY4Th50yKvN7lZ9GroJiFvF5yjy8");

const queue = new Map();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
  bot.user.setGame("Cygma'Bot | .help | " + (bot.users.size - 4) + " Cygma !!", "https://www.twitch.tv/zelkibot")

    
    bot.user.setUsername("Cygma'Bot | V2")
    console.log("*``*___*``*");
    console.log("Zelki'Bot - Connecté");
        console.log("*``*___*``*");
});

bot.login("NDAyODcyNDY1MzMzOTQ0MzIw.DT_LVg.RdaVJ2XkFzztzk6S-3DnfoHYVA0");
var CookizGameRandomMessage = [
    "CookizGame, c'est un bogosse !",
    "CookieGame > PX",
    "CookieGame est tro for",
    "CookieGame cheat",
    "Hier, j'ai ez Cookiz dans la rue :o",
    "Cookiz <3",
];
var wordRandomMessage = [
    " un animal XD",
    " un fruit o_o",
    " Zelkiax MDR",
    " ma mè.. Oups, c'est vrai, je n'ai pas de mère je suis un robot!",
    " un sport",
    " une musique",
    " mes créateurs ! :3"
    ];


var lounaaaRandomMessage = [
    "Lounaaa, la plus grande designeuse",
    "Je suis plus fort en gfx que Lounaa",
    "Lounaaa > Zelkiax",
    "Wallah tu huzuni toi",
    "Lounaaa stop cheat plz",
    "Go duel HikaBrain, j'suis sur que j'te 5-0",
    "Fait moi 24 Renders, 6 Miniatures et 28 Bannières plzz"
];

var randomMusicRadio = [
    "https://www.youtube.com/watch?v=MXzfG_Id0SU",
    "https://www.youtube.com/watch?v=fDBiG9rwRKM",
    "https://www.youtube.com/watch?v=dpmmOZDdUec",
    "https://www.youtube.com/watch?v=ezAPaI-sD8s",
    "https://www.youtube.com/watch?v=rldeeWjsxrE",
    "https://www.youtube.com/watch?v=2C5CjxbFzt4",
    "https://www.youtube.com/watch?v=2048Nr6aLiQ",
    "https://www.youtube.com/watch?v=g4wkOyOMe4Y",
    "https://www.youtube.com/watch?v=dT2owtxkU8k",
    "https://www.youtube.com/watch?v=u2UJSF8Yy6w",
    "https://www.youtube.com/watch?v=3tmd-ClpJxA",
    "https://www.youtube.com/watch?v=ClU3fctbGls",
    "https://www.youtube.com/watch?v=J_ub7Etch2U",
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    "https://www.youtube.com/watch?v=qN4ooNx77u0",
    "https://www.youtube.com/watch?v=PVjiKRfKpPI",
    "https://www.youtube.com/watch?v=7wtfhZwyrcc"
];



bot.on('message', function(message) {

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }
    
        if(message.content === 'cool le bot') {
            message.reply("Merci, c'est ThePCgaming, mon créateur qui m'a développé ! :D")
        }

        if(message.content === 'genial le bot') {
            message.channel.sendMessage("Merci, c'est ThePCgamig, mon créateur qui m'a développé ! :D")
        }

        if(message.content === 'CookizGame') {
            message.channel.sendMessage(CookizGameRandomMessage[Math.floor(Math.random() * CookizGameRandomMessage.length)]);
            message.delete();
        }

        if(message.content === 'ThePCgaming') {
            message.reply("On ne juge pas mon créateur! :o")
        }

        if(message.content === 'Cygma') {
            message.channel.sendMessage("Best serveur FR")
        }
        
        if(message.content === 'sa va') {
            message.channel.sendMessage("Je vais toujours bien, je suis un robot!")
        }

        if(message.content === 'salut') {
            message.channel.sendMessage('Bonjour')
        }
        if(message.content === 'Qui est la') {
            message.channel.sendMessage("MOIII")
        }
        if(message.content === 'Bye') {
            message.channel.sendMessage('À Bientôt ! ^^')
        }
        if(message.content === 'bye') {
            message.channel.sendMessage('À Bientôt ! ^^')
        }
        if(message.content === 'wsh') {
            message.channel.sendMessage('wshh frr')
        }
    
    });
bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + " Bienvenue sur le discord de *CookizGame* ! -  N'hésite pas à faire la commande .help :D");
    member.addRole(member.guild.roles.find("name", "Membres"));
    bot.user.setGame("Cygma'Bot | .help | " + bot.users.size + " Membres !", "https://www.twitch.tv/zelkibot")
}); 

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')


    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "Membres")
    
    var roleMute = member.guild.roles.find("name", " Cygma' Mute")
    
    var modlog = member.guild.channels.find("name", "log")
    
    var botsalon = member.guild.channels.find("name", "discussion-bot")
    
    var user = message.mentions.users.first();
    
    const serverQueue = queue.get(message.guild.id);

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    if(!message.channel.id === botsalon) return message.channel.sendMessage("Cette commande ne peut être utilisé uniquement en " + botsalon.toString() + " :negative_squared_cross_mark:");
    
    switch (args[0].toLowerCase()) {
        case "membres":
            message.reply("Nous sommes " + (bot.users.size - 5) + " membres sur le discord !");
        break
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne j'enleve le unmute?")
        member.removeRole(roleMute)
        message.channel.sendMessage(user.toString() + " a bien été unmute ✅")
        
        var embed = new Discord.RichEmbed()
        .addField("Commande :", "UNMUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#01A9DB")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
        case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'as pas la permission.");
        if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");  
        let time = parseInt(args2[1]) * 60000;
        if(!time) return message.reply("Tu as oublié le temps.")
        if (!reasontimed) return message.reply("Tu as oublié la raison.")
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois Mute.")
        message.channel.sendMessage(member.toString() + " a bien été mute. ")
        member.addRole(roleMute)
        setTimeout(() => { member.removeRole(roleMute); }, time);

        var embed = new Discord.RichEmbed()
        .addField("Action :", "Mute")
        .addField("Utilisateur :", user.toString())
        .addField("Modérateur :", message.author.toString())
        .addField("Raison :", reasontimed)
        .addField("Temps :", args2[1] + " minute(s)")
        .setColor(0x808000)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
            case "help":
            var embed = new Discord.RichEmbed()
            .addField(".ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites .ban @(utilisateur) (raison)")
                .addField(".kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites .kick @(utilisateur) (raison)")
                .addField(".purge", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites .purge (nombredemessages)")
                .addField(".mute", "Cette commande permet de muté un utilisateur pendant un certain temps. Pour l'utiliser, faites .mute @(utilisateur) (temps) (raison)")
                .addField(".unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites .unmute @(utilisateur)")
                .addField(".ping", "Grâce à cette commande, tu pourras savoir ton ping !")
                .addField(".twitter", "Vous donne le twitter de Cookiz et de Cygma!")
                .addField(".ip",
"Vous donne l'ip de Cygma(Faction) et de Cygma(FreeBuild)!)!")               
                .addField(".play", "Jouer une musique ! N'oubliez pas le lien ! .play <url youtube / nom de la musique>")
                .addField(".skip", "Skip une musique !")
                .addField(".stop", "Stop la musique !")
                .addField(".volume", "Changer le volume de la musique ! .volume <1 / 2 / 3 / 4 / 5>, si vous ne mettez pas de chiffre, le bot vous montrera le volume courent.")
                .addField(".np", "Voir la musique en cours !")
                
                .addField(".queue", "Voir les musiques dans la playlist !")
                .addField(".pause", "Mettre la musique en pause !")
                .addField(".unpause", "Relancer la musique !")
                .addField(".userinfo", "Informations sur un utilisateur ! .userinfo @(utilisateur)")
                .addField(".serverinfo", "Informations sur le serveur !")
                .addField(".photo", "Voir la photo de profil d'un utilisateur ! .photo @(utilisateur)")
                .setColor("#01A9DB")
                .setFooter("Idée de commande ? Proposer en MP!")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot !")
                .setTimestamp()
                message.delete()
                message.author.send(embed);
                message.channel.send(message.author.toString() + " je t'ai envoyé les commandes en mp !")
            break;
            case "grade":
            var embed = new Discord.RichEmbed()
                
                .addField("Fondateur", "Grade réservé aux créateur du serveur Cygma")
                .addField("co-Fondateur", "Grade réservé aux créateur du discord")
                .addField("Adjoint", "Grade résérvé a l'adjoint du discord !")
                .addField("Codeur", "Grade réservé aux codeurs du serveur Cygma")
                .addField("Developper", "Grade réservé aux developper de mod ou de plugins ")
                .addField("Staff", "Grade résérvé aux Staff de Cygma !")
                .addField("Youtuber(euse)", "Youtubeur(euse) possédant **200** abonnés ou plus.")
                .addField("Mini Staff", "Grade résérvé aux Mini Staff de Cygma !")
                .addField("Membre", "Grade de base, tout le monde l'a ! Même Cookiz :o !")
                .setColor("##01A9DB")
                .setDescription("Voici les grades disponible sur ce discord **POUR LE MOMENT**.")
                .setColor("#01A9DB")
                message.delete()
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendEmbed(embed);
            break;

        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande. :x:");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu n'as pas mis son pseudo au complet ! :o")
            message.guild.member(user).kick();
            message.channel.send(user.toString() + " a bien été kick ✅")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);381242462053728267
            bot.channels.get('373240336169828353').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
       
            message.delete();
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            
            message.guild.ban(user, 2);
            message.channel.send(user.toString() + " a bien été banni ✅")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
            bot.channels.get('373240336169828353').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
            
            message.delete();
            break;
        case "purge":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            if(!messagecount) return message.channel.send("Tu dois mettre un certain nombre de messages.")
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "PURGE")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            break;;


       
       
       case "twitter":
       message.reply('Voici le compte twitter de Cookiz : https://twitter.com/ImCookieGame?s=09 , et celui de cygma : https://twitter.com/CygmaPE?s=09');
       message.delete();
       break;
       
       case "mod":
       message.reply("Alpha'Mod");
       message.delete();
       break

            
       case "Zelkiax":
       message.channel.sendMessage(zelkiaxRandomMessage[Math.floor(Math.random() * zelkiaxRandomMessage.length)]);
       message.delete();
       break;   
       case "ping":
        message.channel.sendMessage("Pong! Tu as actuellement `" + bot.ping + " ms !` :D");
        message.delete();
        break;
         case "ip":
 message.channel.sendMessage ("IP : Factions :factions.cygma.xyz — 19132     -Créatif :freebuild.cygma.xyz — 19133");
message.delete();
break;
         case "question":
             message.channel.sendMessage("Vrai ou faux: Zelkiax à plus d'abonnés qu'OxO ?");
          break;
            
        case "play":
        const searchString = args.slice(1).join(' ')
                const voiceChannel = message.member.voiceChannel;
                if (!voiceChannel) return message.channel.send("[Zelki'Bot Musique] - Tu dois être dans un channel vocal.");
                const permissions = voiceChannel.permissionsFor(message.client.user)
                if (!permissions.has('CONNECT')) {
                    return message.channel.send("[Zelki'Bot Musique] - Je ne peux pas rejoindre ton channel vocal.")
                }
                if (!permissions.has('SPEAK')) {
                    return message.channel.send("[Zelki'Bot Musique] - Je n'ai pas les permissions pour parler dans ton channel vocal.")
                }

                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 1);
                        var video = await youtube.getVideoByID(videos[0].id);
                    } catch (err) {
                        console.error(err)
                        return message.channel.send("[Cygma'Bot Musique] - Je ne parvient pas à trouver cela.");
                    }
                }
                console.log(video);
                const song = {
                    id: video.id,
                    title: video.title,
                    url: `https://www.youtube.com/watch?v=${video.id}`
                };
                if (!serverQueue) {
                    const queueConstruct = {
                        textChannel: message.channel,
                        voiceChannel: voiceChannel,
                        connection: null,
                        songs: [],
                        volume: 5,
                        playing: true
                    };
                    queue.set(message.guild.id, queueConstruct);

                    queueConstruct.songs.push(song);

                    try {
                        var connection = await voiceChannel.join();
                        queueConstruct.connection = connection;
                        play(message.guild, queueConstruct.songs[0]);
                    } catch (error) {
                        console.error(`[Cygma'Bot Musique] - Je ne peux pas rejoindre le channel vocal : ${error}`)
                        queue.delete(message.guild.id);
                        return message.channel.send(`[Cygma'Bot Musique] - Je ne peux pas rejoindre le channel vocal : ${error}`)
                    }
                } else {
                    serverQueue.songs.push(song);
                    console.log(serverQueue.songs);
                    var embed = new Discord.RichEmbed()
                    .addField("Musique ajouté à la queue :", `[${song.title}](${song.url})`)
                    .setTimestamp()
                    .setColor("0x0000ff")
                    .setFooter(`Suggésté par : ${message.author.username}`)
                    serverQueue.textChannel.send(embed)
                }
        break;
        case "stop":
            if (!message.member.voiceChannel) return message.channel.send("[Cygma'Bot Musique] - Tu dois être dans un channel vocal pour faire cette commande.")
            if (!serverQueue) return message.channel.send("[Cygma'Bot Musique] - Rien n'est entrain d'être jouer alors je ne peux pas stop de son(s) !")
            serverQueue.songs = [];
            message.member.voiceChannel.leave()
        break;
        case "skip":
        if (!message.member.voiceChannel) return message.channel.send("[Cygma'Bot Musique] - Tu dois être dans un channel vocal pour faire cette commande.")
                if (!serverQueue) return message.channel.send("[Cygma'Bot Musique] - Rien n'est entrain d'être jouer alors je ne peux pas skip de son !")
                serverQueue.connection.dispatcher.end()
        break;
        case "np":
        if (!serverQueue) return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être jouer")
        return message.channel.send(`[Zelki'Bot Musique] - Entrain d'être joué : **${serverQueue.songs[0].title}**`);
        break;
        case "volume":
            if (!message.member.voiceChannel) return message.channel.send("[Zelki'Bot Musique] - Tu dois être dans un channel vocal pour faire cette commande.")
            if (!serverQueue) return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être joué.")
            if (!args[1]) return message.channel.send("[Zelki'Bot Musique] - Le volume courent est : **" + serverQueue.volume + "**");
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
            return message.channel.send(`J'ai changer le volume pour : **${args[1]}**`)
        break;
        case "queue":
            if (!serverQueue) return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être joué.");
            var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField("Sons : ", `${serverQueue.songs.map(song => `**-** [${song.title}](${song.url})`).join('\n')}`)
        .addField("Maintenant joué :", `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`)
        .setColor(generateHex())
        message.channel.sendEmbed(embed)
        break;
        case "pause":
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return message.channel.send("[Zelki'Bot Musique] - J'ai mis la musique en pause !")
            }
            return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être jouer.")
        break;
        case "unpause":
            if (serverQueue && !serverQueue.playing) {
                serverQueue.playing = true;
                serverQueue.connection.dispatcher.resume();
                return message.channel.send("[Zelki'Bot Musique] - Musique relancée !")
            }
            return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être jouer.")
        break;
        case "photo":
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser de qui je dois montrer la photo de profil.")
            var embed = new Discord.RichEmbed()
            .addField(`Photo de profil de :`, user.username)
            .setImage(user.avatarURL)
            .setColor(generateHex())
            message.channel.sendEmbed(embed)
            break;
            case "serverinfo":
            var embed = new Discord.RichEmbed()
            .setAuthor("informations sur le serveur " + message.guild.name)
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
            .addField("Membres", message.guild.memberCount)
            .addField("Channels", message.guild.channels.filter(chan => chan.type === "voice").size + " channels vocaux " + message.guild.channels.filter(chan => chan.type === "text").size + " channels textuels")
            .addField("Roles", message.guild.roles.map(role => role.name).join(", "))
            message.channel.sendEmbed(embed)
            break;
            case "userinfo":
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser de qui je dois montrer les informations.")
            var embed = new Discord.RichEmbed()
                .addField("Pseudo", user.username)
                .addField("Ashtag", user.discriminator)
                .addField("ID", user.id)
                .addField("Compte créer le", user.createdAt)
                .setThumbnail(user.avatarURL)
                .setColor(0xff80ff)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setFooter("Voilà.", message.author.avatarURL)
                .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
               
            
            
            
            /* ALIAS */
            
            
            
            
            
            
            message.channel.sendMessage("Commande invalide ^^ Fait z!help pour voir toutes les commandes disponibles !")
    }
});

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(YTDL(song.url))
    .on('end', () => {
        console.log("Le son est fini !");
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

var embed = new Discord.RichEmbed()
.addField("Musique jouée :", `[${song.title}](${song.url})`)
.setTimestamp()
.setColor("0x00ff00")
serverQueue.textChannel.send(embed)
}


bot.login(process.env.TOKEN);
