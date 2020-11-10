const Discord = require('discord.js');
const db = require('../db.js')

module.exports = {
	name: 'top',
	description: 'Top something!',
	cooldown: 60, //cooldown before next issue
	guildOnly: false, //no private
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Check top with !top cas1|case2|case3!`);
		} else if (args[0] === 'case1' || args[0] === 'c1') {
			db.getConnection(function(err, connection) {
				if (err) throw err;
				connection.query("SELECT something FROM `somewhere` ORDER BY `something` DESC LIMIT 5", function (error, rows) {
					const exampleEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Top 5 something by something');
					for (var i = 0; i < rows.length; i++) {
						exampleEmbed.addField(rows[i]['something'], new Date(rows[i]['something2'] * 1000).toISOString().substr(11, 8));
					}
					message.channel.send(exampleEmbed);
					  connection.release();
					  if (error) throw error;
				});
			});
		} else if (args[0] === 'case2' || args[0] === 'c2') {
			db.getConnection(function(err, connection) {
				if (err) throw err;
				connection.query("SELECT something, something2 FROM `somewhere` ORDER BY `something`.`something2` DESC LIMIT 5", function (error, rows) {
					const exampleEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Top 5 something by something2');
					for (var i = 0; i < rows.length; i++) {
						exampleEmbed.addField(rows[i]['something'], "something something: " + rows[i]['something2']);
					}
					message.channel.send(exampleEmbed);
					  connection.release();
					  if (error) throw error;
				});
			});
		}
		else if (args[0] === 'case3' || args[0] === 'c3') {
			db.getConnection(function(err, connection) {
				if (err) throw err;
				connection.query("SELECT something, something2 FROM `somewhere` ORDER BY `something`.`something2` DESC LIMIT 5", function (error, rows) {
					const exampleEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Top 5 players by something');
					for (var i = 0; i < rows.length; i++) {
						exampleEmbed.addField(rows[i]['something'], "something something: " + rows[i]['something2']);
					}
					message.channel.send(exampleEmbed);
					  connection.release();
					  if (error) throw error;
				});
			});
		}
	},
};