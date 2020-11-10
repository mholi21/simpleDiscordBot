var net = require('net');
const config = require("../config.json");

var client = new net.Socket();
client.connect(config.serverPort, config.serverIP, function() {
	console.log('Connected');
	client.write('RCON_COMMAND_TO_LOGIN');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

module.exports = {
	name: 'rcon',
	description: 'send stuff to rcon',
	guildOnly: false, //no private if true
	execute(message, args) {
        if(message.member.roles.cache.some(role => role.name === 'Admin')){
            var client = new net.Socket();
            client.connect(config.serverPort, config.serverIP, function() {
                console.log('Connected');
                client.write('RCON_COMMAND_TO_LOGIN');
            });

            client.on('data', function(data) {
                console.log('Received: ' + data);
                client.write(args[0]);
                client.destroy();
            });

            client.on('close', function() {
                console.log('Connection closed');
            });
        }else{
            message.channel.send("Nope!");
        }
    },
};