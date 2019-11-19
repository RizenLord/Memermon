const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./data/config.json");

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message =>
{
	if (message.content === config.prefix + 'help')
	{
		message.channel.send('Test');
	}
});

client.login(config.token);
