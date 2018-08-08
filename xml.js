const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
    client.user.setActivity("+1 || +help",{type: 'WATCHING'})

});






client.login(process.env.BOT_TOKEN);
