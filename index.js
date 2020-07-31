const mineflayer = require('mineflayer')
const init = require('./data.json')
const pathfind = require('./pathfind.js')

const bot = mineflayer.createBot({
    host: init.host,
    port: init.port,
    username: init.username,
    password: init.password,
    version: init.version  
})

bot.once('spawn', () => {
    pathfind.find(bot)
})