const Discord = require("discord.js");
const tools = require("./tools.js");
const memes = require("../data/memes.json");
const join = require("./join.js")


//Definitions
var meme2 = tools.getmeme();
meme2.maxhealth = meme2.health;
meme2.level = 1;
meme2.xp = 0;

var randommeme = getRandomInt(1);

if (randommeme == 0) {
  var meme2 = tools.getmeme("SpongeGar");
}
if (randommeme == 1) {
  var meme2 = tools.getmeme("No U");
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports.name = "catch";
module.exports.description = "Try to Catch a Memermon!";
module.exports.requiresjoin = true;

module.exports.execute = function(message, args, client, save)
{
  var player = tools.getplayer(message,save);

  var roll = getRandomInt(20);

  if (roll >= 15) {
      message.channel.send("Congrats! You Caught a " + meme2 + " with a Roll of " + roll);

      player.memes.push(meme2);

    }
    else {
      message.channel.send("You Failed to Catch A Memermon with a Roll of " + roll);
    }
}
