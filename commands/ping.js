module.exports = {
    name: 'ping',
    description: 'test command',
    execute(message, args){

        message.channel.send('pong');

    }
}