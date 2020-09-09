const discord = require("discord.js");
const tools = require("./tools.js");
const memes = require("../data/memes.json");
const join = require("./join.js");
const items = require("../data/items.json");

module.exports.name = "inv";
module.exports.description = "Shows Your Inventory";
module.exports.requiresjoin = true;

module.exports.execute = function(message, args, client, save)
{
  var embed = new discord.RichEmbed();
  embed.setAuthor(message.author.username + "'s Inventory", message.author.avatarURL);

  var index = 1;
  tools.getplayer(message, save).inventory.forEach(item =>
  {
      embed.addField("#" + index + " " + item.name + " (HealthBoost " + item.healthboost + ", ProteccBoost " + item.proteccboost + ", AttaccBoost " + item.attaccboost + ", SpeedBoost " + item.speedboost);
      index++;
  });

  message.channel.send(embed);
}
