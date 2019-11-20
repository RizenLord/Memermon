const fs = require("fs");

module.exports.name = "save";
module.exports.description = "Save the data!";
module.exports.requiresjoin = false;

module.exports.execute = function(message, args, client, save)
{
    message.reply("saving the data...");
    fs.writeFileSync("./data/save.json", JSON.stringify(save));
    message.reply("done!");
}
