module.exports.name = "ping";
module.exports.description = "Recieve a ping!";
module.exports.requiresjoin = false;

module.exports.execute = function(message, args, client, save)
{
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
}
