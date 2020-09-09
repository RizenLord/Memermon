const discord = require("discord.js");
const client = new discord.Client();

// Bot configuration.
const config = require("./data/config.json");

// Bot save data.
const fs = require("fs");
var save = JSON.parse(fs.readFileSync("./data/save.json"));

// Tools.
const tools = require("./code/tools.js");

// Commands.
commands = [];

commands.push(require("./code/ping.js"));
commands.push(require("./code/save.js"));
commands.push(require("./code/join.js"));
commands.push(require("./code/memes.js"));
commands.push(require("./code/catch.js"));

// On ready.
client.once('ready', () =>
{
	console.log('Memermon is ready!');
});

// On message.
client.on('message', message =>
{
	if (message.content.startsWith(config.prefix))
	{
        var args = message.content.toLowerCase().substring(config.prefix.length).split(" ");
        commands.forEach(command =>
        {
            if (args[0] === command.name)
            {
                if (command.requiresjoin && !tools.getplayer(message, save))
                {
                    message.reply("you must join Memermon on this server to be able to use that command!");
                }
                else
                {
                    command.execute(message, args, client, save);
                }
            }
        });
	}
});

// Login.
client.login(config.token);
