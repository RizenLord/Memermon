const Discord = require("discord.js");
const tools = require("./tools.js");
const memes = require("../data/memes.json");
const join = require("./join.js")
const discord = require("discord.js");

module.exports.name = "help";
module.exports.description = "Display all the Commands";
module.exports.requiresjoin = false;

module.exports.execute = function(message, args, client, save)
{
  const embed = new Discord.RichEmbed()
  .setTitle("Memermon Commands")
  .setColor(0x00AE86)
  embed.addFields(
		{ name: 'Help', value: '*Displays The Bots Commands*' },
    { name: 'Ping', value: '*Displays The Ping of The Bot*'},
    { name: 'Join', value: '*Starter Command*'},
    { name: 'Memes', value: '*Shows You all the Memermon You Have Collected*'},
    { name: 'Inv', value: '*Shows You the Items You Have Collected*'},
    { name: 'Catch', value: '*Attempts to Catch a Memermon*'},
    { name: 'Save', value: '*Saves The Progress of Everyone on the Server*'})
  .setFooter("Developed By Rizen")
  .setTimestamp()
  message.channel.send({embed})
}
