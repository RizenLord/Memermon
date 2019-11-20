const memes = require("../data/memes.json");

module.exports.getplayer = function(message, save)
{
    if (!save.servers)
    {
        save.servers = {};
    }
    if (!save.servers[message.guild.id.toString()])
    {
        save.servers[message.guild.id.toString()] = {};
    }
    if (!save.servers[message.guild.id.toString()].players)
    {
        save.servers[message.guild.id.toString()].players = {};
    }

    return save.servers[message.guild.id.toString()].players[message.author.id.toString()];
}

module.exports.getmeme = function(name)
{
    var thememe = {};
    memes.memes.forEach(meme =>
    {
        if (meme.name === name)
        {
            thememe = Object.assign({}, meme);
        }
    });
    return thememe;
}
