const discord = require("discord.js");
const tools = require("./tools.js");
const memes = require("../data/memes.json");
const join = require("./join.js")

module.exports.name = "help";
module.exports.description = "Display all the Commands";
module.exports.requiresjoin = false;

module.exports.execute = function(message, args, client, save)
{
  message.channel.send("Help is Being Worked On")
}
