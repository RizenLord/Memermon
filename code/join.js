const tools = require("./tools.js");

module.exports.name = "join";
module.exports.description = "Join Memermon on this server!";
module.exports.requiresjoin = false;

module.exports.execute = function(message, args, client, save)
{
    var player = tools.getplayer(message, save);
    if (!player)
    {
        player = save.servers[message.guild.id.toString()].players[message.author.id.toString()] = {};

        // Default player stats.
        player.memes = [];
        player.inventory = [];

        message.reply("you have joined Memermon on " + message.guild.name + "!");

        // Starter "No U".
        message.reply("I bestow upon you your first meme... ***No U***.");
        var meme = tools.getmeme("No U");
        meme.maxhealth = meme.health;
        meme.level = 1;
        meme.xp = 0;
        player.memes.push(meme);
    }
    else
    {
        message.reply("you have already joined Memermon on this server!");
    }
}
