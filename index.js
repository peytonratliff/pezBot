const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
// this.aborter = new window.AbortController();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

var servers = {}

client.once('ready', () => {
    console.log('pezBot is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'pong'){
        client.commands.get('pong').execute(message, args);
    } else if (command == 'play'){
        if(!args[1]){
            message.channel.send('You must provide a link');
        }
        if(!message.memeber.voiceChannel){
            message.channel.send("You must be in a voice channel")
        }

    }
});





client.login('token here');