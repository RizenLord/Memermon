const discord = require("discord.js");
const tools = require("./tools.js");

module.exports.name = "memes";
module.exports.description = "List all your memes!";
module.exports.requiresjoin = true;

module.exports.execute = function(message, args, client, save)
{
    var embed = new discord.RichEmbed();
    embed.setAuthor(message.author.username + "'s Memes!", message.author.avatarURL);

    var index = 1;
    tools.getplayer(message, save).memes.forEach(meme =>
    {
        embed.addField("#" + index + " " + meme.name + " (Level " + meme.level + ", " + meme.xp + "/100 xp)", meme.health + "/" + meme.maxhealth + " hp, " + meme.attacc + " attacc, " + meme.protecc + " protecc, " + meme.speed + " speed");
        index++;
    });

    message.channel.send(embed);
}
