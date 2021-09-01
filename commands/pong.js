module.exports = {
    name: 'pong',
    description: 'test command in reverse',
    execute(message, args){

        message.channel.send('ping');

    }
}