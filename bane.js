const discord = require('discord.js');
//For running locally
//const config = require('./config.json');
const chalk = require('chalk');
const quotes = require('./quotes.json');

const client = new discord.Client();

client.once('ready', () => {
    console.log(chalk.bgCyan.black('Ready!'));
});

client.on('message', (message) => {
    let a = message.content;
    let channel = message.channel;
    let quote = quotes[Math.floor(Math.random() * 10)];

    if(a === '!bane') {
        channel.send(quote);
    }
});

const token = process.env.BANE_TOKEN;
//For running locally
//const token = config.token;

client.login(token);