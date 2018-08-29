const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
    client.user.setActivity("You",{type: 'WATCHING'})

});


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});

 client.on('message', message => {
  if (message.content === '-') {   
      if (message.author.id !== '447179855898083338')
 return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

 client.on('message', message => {
  if (message.content === '--') {   
      if (message.author.id !== '447179855898083338')
 return message.react('🤦🏻‍♂️')
    const channel = message.member.voiceChannel;

    channel.leave()
  }
});




client.login(process.env.BOT_TOKEN);
