const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
    client.user.setActivity("You Hahahaha",{type: 'WATCHING'})

});






client.login(process.env.BOT_TOKEN);
